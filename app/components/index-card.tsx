import { ButtonWuwa } from '@/components/ui/button-ww';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CountUp } from '@/components/ui/count-up';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { getRemainingDay } from '@/lib/utils';
import * as React from 'react';

interface StatisticProps {
  total_pulls: number;
  players: number;
}

/**
 * @name: Name of the event
 * @duration: End Date of the event. Use day.js to calculate the remaining time
 * @description: Description of the event.
 * @image: Image link to illustrate about the event
 * **/
export interface EventsProps {
  name: string;
  duration: Date;
  description: string;
  image: string;
}

export function IntroductoryCard() {
  return (
    <Card className="rounded-sm shadow-sm dark:shadow-none hover:shadow dark:hover:shadow-none transition-shadow ease-in-out col-span-full lg:col-span-8 pb-3">
      <CardHeader>
        <CardTitle>
          <h1 className="scroll-m-20 md:text-4xl tracking-tighter pb-0 my-0 text-xl lg:text-3xl font-bold xl:text-4xl">
            WuWa Tracker helps you
          </h1>
        </CardTitle>
      </CardHeader>
      <CardContent>
        A pity counter for Wuthering Waves, using the
        up-to-date data with global statistics and more. We
        aim to provide the best tools to showcase your
        Wuthering Waves progress to your friends..
      </CardContent>
    </Card>
  );
}

export function StatisticCard({
  total_pulls,
  players,
}: StatisticProps) {
  const mockData = [
    {
      name: '',
    },
  ];
  return (
    <Card className="rounded-sm shadow-sm dark:shadow-none hover:shadow dark:hover:shadow-none transition-shadow ease-in-out col-span-full lg:col-span-4 pb-3">
      <CardHeader>
        <CardTitle>
          <div className="text-lg space-y-0 group flex flex-row gap-2 items-center justify-between">
            <div className="flex gap-2.5 items-center justify-start">
              <span className="font-semibold sm:text-base text-sm">
                Carlotta &amp; Zhezhi
              </span>
            </div>
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 relative z-10 dark:bg-foreground/10 dark:text-foreground bg-primary/10 text-primary border-none group-hover:bg-primary dark:group-hover:bg-primary/10 dark:group-hover:text-primary group-hover:text-background">
              14d left
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="items-center px-6 py-6 pt-0 grid grid-cols-2">
        <div>
          <p className="whitespace-pre-wrap text-lg xl:text-2xl font-medium tracking-tighter text-foreground">
            <span className="inline-block tabular-nums text-foreground">
              <CountUp value={total_pulls} direction="up" />
            </span>
          </p>
          <p className="text-muted-foreground text-sm pt-1">
            Total Pulls
          </p>
        </div>
        <div>
          <p className="whitespace-pre-wrap text-lg xl:text-2xl font-medium tracking-tighter text-foreground">
            <span className="inline-block tabular-nums text-foreground">
              <CountUp value={players} direction="up" />
            </span>
          </p>
          <p className="text-muted-foreground text-sm pt-1">
            Players
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export function OngoingEventCard({
  data,
}: {
  data: EventsProps[];
}) {
  return (
    <Card className="rounded-sm shadow-sm dark:shadow-none hover:shadow dark:hover:shadow-none transition-shadow ease-in-out col-span-full lg:col-span-5 pb-3">
      <CardHeader>
        <CardTitle>
          <h2 className="scroll-m-20 font-semibold tracking-tight lg:text-xl xl:text-2xl pb-0 mt-0 mb-0.5 text-center text-xl sm:text-base sm:text-start">
            Ongoing Events
          </h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {data.map((event: EventsProps, index: number) => (
          <Dialog key={event.name + index.toString()}>
            <DialogTrigger className="w-full mb-2 inline-flex items-center gap-2 whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border dark:bg-background hover:bg-accent dark:hover:bg-accent hover:text-accent-foreground h-10 justify-start relative group border-l-4 dark:border-border border-primary/30 hover:border-primary dark:hover:border-primary border-t-0 border-b-0 border-r-0 bg-muted/50 shadow dark:shadow-none">
              <ButtonWuwa
                eventImage={event.image}
                eventName={event.name}
                eventDuration={getRemainingDay(
                  event.duration,
                )}
              ></ButtonWuwa>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  <div className="flex pr-4 flex-col space-y-1.5">
                    <h2
                      id="radix-:ran:"
                      className="text-lg font-semibold leading-none tracking-tight mb-4"
                    >
                      <span className="dark:text-five-star text-primary font-bold hidden sm:inline uppercase">
                        Event
                      </span>{' '}
                      Pioneer Podcast
                      <p className="text-muted-foreground uppercase text-sm mt-1 font-normal">
                        02 Jan 2025 03:00 - 12 Feb 2025
                        02:59{' '}
                        <span className="rounded-full ml-2 px-2.5 py-0.5 text-tiny font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 relative z-10 dark:bg-foreground/10 dark:text-foreground bg-primary/10 text-primary border-none group-hover:bg-primary dark:group-hover:bg-primary/10 dark:group-hover:text-primary group-hover:text-background">
                          {getRemainingDay(event.duration)}{' '}
                          ngày còn lại
                        </span>
                      </p>
                    </h2>
                  </div>
                  <Separator />
                </DialogTitle>
              </DialogHeader>
              <img
                alt={event.name}
                loading="lazy"
                width="1215"
                height="237"
                decoding="async"
                data-nimg="1"
                className="rounded shadow dark:shadow-none select-none"
                src={event.image}
                style={{
                  color: 'transparent',
                }}
              />
              <DialogDescription className="sm:max-w-xl">
                <div className="overflow-auto max-h-64">
                  <p className="text-sm text-foreground">
                    {event.description}
                  </p>
                </div>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        ))}
      </CardContent>
    </Card>
  );
}

export function GuideCard() {
  return (
    <Card className="overflow-hidden rounded-sm shadow-sm dark:shadow-none hover:shadow dark:hover:shadow-none transition-shadow ease-in-out col-span-full lg:col-span-7 pb-3">
      <CardHeader>
        <CardTitle>
          <h1 className="text-center scroll-m-20 md:text-4xl tracking-tighter pb-0 my-0 text-xl lg:text-3xl font-bold sm:text-left xl:text-4xl">
            WuWa Tracker helps you
          </h1>
        </CardTitle>
        <CardDescription className="relative pt-0 grid grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col gap-4 md:items-start">
            <span className="text-base text-center sm:text-left">Let&#39;s get you started, shall we?</span>
            <ol className="relative sm:ms-3 sm:mt-4 z-10">
              <li className="mb-6 sm:mb-10 ms-0 sm:ms-8 flex items-center">
              <span
                className="hidden sm:flex absolute -start-4 h-8 w-8 items-center justify-center rounded-full bg-accent p-3">
                <p className="text-sm">1</p>
              </span>
                <a
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-64"
                  href="/en/import"
                >
                  <p className="truncate">Import History</p>
                </a>
              </li>
              <li className="mb-6 sm:mb-10 ms-0 sm:ms-8 flex items-center">
              <span
                className="hidden sm:flex absolute -start-4 h-8 w-8 items-center justify-center rounded-full bg-accent p-3">
                <p className="text-sm">2</p>
              </span>
                <a
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-64"
                  href="/en/tracker"
                >
                  <p className="truncate">
                    View Pull History
                  </p>
                </a>
              </li>
              <li className="sm:mb-10 ms-0 sm:ms-8 flex items-center">
              <span
                className="hidden sm:flex absolute -start-4 h-8 w-8 items-center justify-center rounded-full bg-accent p-3">
                <p className="text-sm">3</p>
              </span>
                <a
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-64"
                  href="/en/settings"
                >
                  <p className="truncate">Sync Your Data</p>
                </a>
              </li>
            </ol>
            <div
              className="camellya mask-gradient-to-b absolute -right-20 hidden transition-all group-hover:scale-110 sm:block w-[68%]"
              data-state="closed"
            >
              <img
                alt="Camellya"
                loading="lazy"
                width="749"
                height="1284"
                decoding="async"
                data-nimg="1"
                className="object-cover"
                src="/assets/images/camellya.webp"
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
        </CardDescription>
      </CardHeader>
      <CardFooter className="text-muted-foreground">
        Your data will now sync on demand!
      </CardFooter>
    </Card>
  );
}
