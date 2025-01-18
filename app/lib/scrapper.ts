/**
 * THIS FILE IS RESPONSIBLE FOR SCRAPING THE EVENTS FROM THE WEBSITE AND UPLOADING THEM TO THE DATABASE
 * THE SCRAPPER FUNCTION IS CALLED EVERY 24 HOURS TO UPDATE THE EVENTS
 * =======
 * @function eventScrapper: Scrapes the events from the website and returns the data
 * @function conveneScrapper: Scrapes the convene events from the website and returns the data
 * @function updateEvent: Calls eventScrapper and conveneScrapper functions and updates the events to database
 * **/
import axios from 'axios';
import { load } from 'cheerio';
import fs from 'fs';

/**
 * @example
 * {
 *   name: 'Absolute Pulsation',
 *   eventType: 'Weapon',
 *   imgSrc: [
 *   "https://img.game8.co/4075215/b746f5a801a6a978479ae64c44cf3ec9.png/show"
 *   ],
 *   description: 'Traces of Tides is a Photo Collection Event. You must explore Rinascita and take a photo of its mesmerizing sceneries and memorable moments!',
 *   duration: 'January 2, 2025 - February 12, 2025',
 * }
 * **/
type EventProps = {
  name: string;
  eventType: 'Weapon' | 'Character' | 'Event';
  imgSrc: string[];
  description: string;
  duration: string;
};
/**
 * @example
 * event: [1, 10]
 * convene: [2, 8]
 * **/
type IndexData = {
  event: [number, number];
  convene: [number, number];
};

export default async function updateEvent({
  event,
  convene,
}: IndexData): Promise<void> {
  const eventResult = await eventScrapper(event[0], event[1]);
  const conveneResult = await conveneScrapper(convene[0], convene[1]);
  let result = JSON.stringify(eventResult, null, 2);
  result += JSON.stringify(conveneResult, null, 2);

  fs.writeFile('./scrapper.json', result, (err) => {
    if (err) {
      console.log('Error writing file:', err);
    } else {
      console.log('Successfully wrote file');
    }
  });
  return;
}

/**
 * @function eventScrapper(number, number)
 * @warning check the website on every update for the index of the events
 * @example
 * eventScrapper(3, 4);
 * @response https://game8.co/games/Wuthering-Waves/archives/453473
 * **/

export const eventScrapper = async (
  s: number,
  e: number,
): Promise<EventProps[] | undefined> => {
  const response = await axios.get(
    'https://game8.co/games/Wuthering-Waves/archives/453473',
  );
  const html = response.data;
  const $ = load(html);

  const data: EventProps[] = [];
  // extract the data of interest from the product node
  for (let i: number = s; i < e; i++) {
    const name: string = $(`#hm_${i}`).text() || '';
    const imgSrc: string[] = [
      $(`#hm_${i}`)
        .next()
        .find('tbody')
        .find('tr')
        .find('td')
        .find('img')
        .attr('data-src') || '',
    ];
    const description: string =
      $(`#hm_${i}`).next().next().text() || '';
    const duration: string =
      $(`#hm_${i}`)
        .next()
        .find('tbody')
        .find('tr')
        .next()
        .find('td')
        .text() || '';
    data.push({
      name: name.replace(/\s+/g, ' ').trim(),
      eventType: 'Event',
      imgSrc: imgSrc.map((src) => src.replace(/\s+/g, ' ').trim()),
      description: description.replace(/\s+/g, ' ').trim(),
      duration: duration.replace(/\s+/g, ' ').trim(),
    });
  }
  return data;
};

/**
 * @function conveneScrapper(number, number)
 * @warning check the website on every update for the index of the events
 * @example
 * conveneScrapper(3, 4);
 * @response https://game8.co/games/Wuthering-Waves/archives/453303
 * **/

export const conveneScrapper = async (
  s: number,
  e: number,
): Promise<EventProps[] | undefined> => {
  const response = await axios.get(
    'https://game8.co/games/Wuthering-Waves/archives/453303',
  );
  const html = response.data;
  const $ = load(html);

  const data: EventProps[] = [];
  /**
   * #hm_${i} is the id of the tag that has the event
   * Goes in bit by bit using next(), children() and find()
   * **/
  for (let i: number = s; i < e; i++) {
    const value1 =
      $(`#hm_${i}`)
        .next()
        .find('tbody')
        .find('tr')
        .next()
        .find('td')
        .first()
        .find('a')
        .text() || '';

    const value2 =
      $(`#hm_${i}`)
        .next()
        .find('tbody')
        .find('tr')
        .next()
        .find('td')
        .last()
        .find('a')
        .text() || '';

    const name = `${value1} and ${value2}`;
    const imgSrc: string[] = [
      $(`#hm_${i}`)
        .next()
        .find('tbody')
        .find('tr')
        .last()
        .find('td')
        .first()
        .find('a')
        .find('img')
        .attr('data-src') || '',
      $(`#hm_${i}`)
        .next()
        .find('tbody')
        .find('tr')
        .last()
        .find('td')
        .last()
        .find('a')
        .find('img')
        .attr('data-src') || '',
    ];
    const description: string =
      $(`#hm_${i}`).next().next().text() || '';
    const duration: string =
      $(`#hm_${i}`)
        .next()
        .find('tbody')
        .children()
        .last()
        .children()
        .last()
        .text() || '';
    data.push({
      name: name.replace(/\s+/g, ' ').trim(),
      eventType: 'Event',
      imgSrc: imgSrc.map((src) => src.replace(/\s+/g, ' ').trim()),
      description: description.replace(/\s+/g, ' ').trim(),
      duration: extractDate(duration.replace(/\s+/g, ' ').trim()),
    });
  }
  const fine = updateEventType(data);
  return fine;
};

/**
 * @function extractDate(data: string)
 * @example
 * const inputString = "Absolute Pulsation (Ages of Harvest)January 23, 2025";
 * const extractedDate = extractDate(inputString);
 * console.log(extractedDate); // Output: January 23, 2025
 * **/

function extractDate(input: string): string {
  const datePattern =
    /(January|February|March|April|May|June|July|August|September|October|November|December)\s?\d{1,2},\s?\d{4}/;
  const match = input.match(datePattern);
  return match ? match[0] : input;
}

/**
 * @function extractDate(data: string)
 * @example
 * const eventName1 = 'Absolute Pulsation (Ages of Harvest)';
 * const eventName2 = 'Thawborn Renewal';
 *
 * console.log(determineEventType(eventName1)); // Output: Weapon
 * console.log(determineEventType(eventName2)); // Output: Character
 * **/

function updateEventType(events: EventProps[]): EventProps[] {
  return events.map((event) => ({
    ...event,
    eventType: event.name.startsWith('Absolute Pulsation')
      ? 'Weapon'
      : 'Character',
  }));
}

updateEvent({ event: [2, 8], convene: [1, 3] });
