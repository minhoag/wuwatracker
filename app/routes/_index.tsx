import { prisma } from '@/prisma';
import { EventProps, UserProps } from '@/types';
import type { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

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

export async function loader() {
  try {
    const [user, total_pulls, event] = await Promise.all([
      prisma.user.findMany(),
      prisma.user.aggregate({
        _sum: {
          pulls: true,
        },
      }),
      prisma.event.findMany({
        orderBy: {
          duration: 'desc',
        },
      }),
    ]);
    return {
      user,
      total_pulls: total_pulls._sum.pulls as number,
      event,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('An unknown error occurred when loading USER.');
    }
    return { user: [], total_pulls: 0, event: [] };
  }
}
export default function Index() {
  const {
    user,
    total_pulls,
    event,
  }: {
    user: UserProps[];
    total_pulls: number;
    event: EventProps[];
  } = useLoaderData<typeof loader>();
  const character: EventProps[] =
    event.filter((e) => e.eventType === 'Character') ?? [];
  return (
    <div className="max-w-screen-xl w-full flex-1 flex-col px-4 my-4 sm:my-8 sm:mb-16 md:px-6 mx-auto grid grid-cols-1 gap-6 lg:grid-cols-12">
      {/* Introductory Card */}
      <IntroductoryCard />
      {/* Statistic Card */}
      <StatisticCard
        character_up={character}
        total_pulls={total_pulls}
        players={user.length}
      />
      {/* Event Card */}
      <OngoingEventCard data={event} />
      {/* Guide Card */}
      <GuideCard />
      {/* Info Card */}
      <InfoCard />
    </div>
  );
}
