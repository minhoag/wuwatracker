import {
  EventsProps,
  GuideCard,
  IntroductoryCard,
  OngoingEventCard,
  StatisticCard,
} from '@/components/index-card';
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  const event: EventsProps[] = [
    {
      name: 'Pioneer Podcast',
      duration: new Date('12 Feb 2025 02:59'),
      description:
        'You can complete tasks in Pioneer Podcast and accumulate Podcast EXP. Level up your Podcast to get rich rewards. Unlock "Insider Channel" or "Connoisseur Channel" and level up your Podcast to win extra rewards including Astrite*680, a 4-star Golden Eternal Series Weapon of Choice, Radiant Tide, and more! Unlocking "Connoisseur Channel" grants an instant advance of Podcast level by 10, with the period-limited Sigil "Sound of Tides", Lustrous Tide*3, and Gilded Ginkgo (can be used to improve the Syntonization Rank of a 4-star Golden Eternal Series Weapon).',
      image: 'https://snipboard.io/V6c1h2.jpg',
    },
    {
      name: 'Pioneer Podcast',
      duration: new Date('12 Feb 2025 02:59'),
      description:
        'You can complete tasks in Pioneer Podcast and accumulate Podcast EXP. Level up your Podcast to get rich rewards. Unlock "Insider Channel" or "Connoisseur Channel" and level up your Podcast to win extra rewards including Astrite*680, a 4-star Golden Eternal Series Weapon of Choice, Radiant Tide, and more! Unlocking "Connoisseur Channel" grants an instant advance of Podcast level by 10, with the period-limited Sigil "Sound of Tides", Lustrous Tide*3, and Gilded Ginkgo (can be used to improve the Syntonization Rank of a 4-star Golden Eternal Series Weapon).',
      image: 'https://snipboard.io/V6c1h2.jpg',
    },
    {
      name: 'Pioneer Podcast',
      duration: new Date('12 Feb 2025 02:59'),
      description:
        'You can complete tasks in Pioneer Podcast and accumulate Podcast EXP. Level up your Podcast to get rich rewards. Unlock "Insider Channel" or "Connoisseur Channel" and level up your Podcast to win extra rewards including Astrite*680, a 4-star Golden Eternal Series Weapon of Choice, Radiant Tide, and more! Unlocking "Connoisseur Channel" grants an instant advance of Podcast level by 10, with the period-limited Sigil "Sound of Tides", Lustrous Tide*3, and Gilded Ginkgo (can be used to improve the Syntonization Rank of a 4-star Golden Eternal Series Weapon).',
      image: 'https://snipboard.io/V6c1h2.jpg',
    },
    {
      name: 'Pioneer Podcast',
      duration: new Date('12 Feb 2025 02:59'),
      description:
        'You can complete tasks in Pioneer Podcast and accumulate Podcast EXP. Level up your Podcast to get rich rewards. Unlock "Insider Channel" or "Connoisseur Channel" and level up your Podcast to win extra rewards including Astrite*680, a 4-star Golden Eternal Series Weapon of Choice, Radiant Tide, and more! Unlocking "Connoisseur Channel" grants an instant advance of Podcast level by 10, with the period-limited Sigil "Sound of Tides", Lustrous Tide*3, and Gilded Ginkgo (can be used to improve the Syntonization Rank of a 4-star Golden Eternal Series Weapon).',
      image: 'https://snipboard.io/V6c1h2.jpg',
    },
    {
      name: 'Pioneer Podcast',
      duration: new Date('12 Feb 2025 02:59'),
      description:
        'You can complete tasks in Pioneer Podcast and accumulate Podcast EXP. Level up your Podcast to get rich rewards. Unlock "Insider Channel" or "Connoisseur Channel" and level up your Podcast to win extra rewards including Astrite*680, a 4-star Golden Eternal Series Weapon of Choice, Radiant Tide, and more! Unlocking "Connoisseur Channel" grants an instant advance of Podcast level by 10, with the period-limited Sigil "Sound of Tides", Lustrous Tide*3, and Gilded Ginkgo (can be used to improve the Syntonization Rank of a 4-star Golden Eternal Series Weapon).',
      image: 'https://snipboard.io/V6c1h2.jpg',
    },
    {
      name: 'Pioneer Podcast',
      duration: new Date('12 Feb 2025 02:59'),
      description:
        'You can complete tasks in Pioneer Podcast and accumulate Podcast EXP. Level up your Podcast to get rich rewards. Unlock "Insider Channel" or "Connoisseur Channel" and level up your Podcast to win extra rewards including Astrite*680, a 4-star Golden Eternal Series Weapon of Choice, Radiant Tide, and more! Unlocking "Connoisseur Channel" grants an instant advance of Podcast level by 10, with the period-limited Sigil "Sound of Tides", Lustrous Tide*3, and Gilded Ginkgo (can be used to improve the Syntonization Rank of a 4-star Golden Eternal Series Weapon).',
      image: 'https://snipboard.io/V6c1h2.jpg',
    },
  ];
  return (
    <div className="max-w-screen-xl w-full flex-1 flex-col px-4 my-4 sm:my-8 sm:mb-16 md:px-6 mx-auto grid grid-cols-1 gap-6 lg:grid-cols-12">
      {/* Introductory Card */}
      <IntroductoryCard />
      {/* Statistic Card */}
      <StatisticCard
        total_pulls={1000000}
        players={100000}
      />
      {/* Event Card */}
      <OngoingEventCard data={event} />
      {/* Guide Card */}
      <GuideCard />
    </div>
  );
}
