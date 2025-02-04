import { api } from '@/lib/utils';
import type { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { Event, EventProps } from '@/types';
import {
  GuideCard,
  InfoCard,
  IntroductoryCard,
  OngoingEventCard,
  StatisticCard,
} from './index.card';

export const meta: MetaFunction = () => {
  return [
    { title: 'Theo dõi Wuthering Waves' },
    {
      name: 'description',
      content: 'Theo dõi pity của bạn tại WuwaTracker',
    },
  ];
};

export const loader = async () => {
  const statistics = await api<{
    total_players: number;
    total_convenes: number;
  }>('statistic');
  const activeEvent: Event[] = await api<Event[]>(
    'events',
    '?active=true',
  );
  return {
    total_players: statistics.total_players,
    total_convenes: statistics.total_convenes,
    activeEvent: activeEvent,
  };
};

export default function Index() {
  const loader: {
    total_players: number;
    total_convenes: number;
    activeEvent: Event[];
  } = useLoaderData();
  const character_up: EventProps[] = [
    {
      name: 'Kazuha',
      eventType: 'Character',
      imgSrc: 'https://i.imgur.com/5zr6N2I.png',
      description:
        'Kazuha is the character up for the current banner.',
      duration: 'June 29th - July 20th',
      id: '',
      active: false,
      startAt: '',
      endAt: '',
    },
  ];
  return (
    <div className="max-w-screen-xl w-full flex-1 flex-col mx-auto grid grid-cols-1 gap-6 lg:grid-cols-12">
      {/* Introductory Card */}
      <IntroductoryCard />
      {/* Statistic Card */}
      <StatisticCard
        character_up={character_up}
        total_pulls={loader.total_convenes}
        players={loader.total_players}
      />
      {/* Event Card */}
      <OngoingEventCard data={loader.activeEvent} />
      {/* Guide Card */}
      <GuideCard />
      {/* Info Card */}
      <InfoCard />
    </div>
  );
}
