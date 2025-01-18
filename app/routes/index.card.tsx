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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { TextAnimate } from '@/components/ui/text-animate';
import { getRemainingDay, greeting } from '@/lib/utils';
import type { EventProps, StatisticProps } from '@/types';
import {
  BadgeInfo,
  HeartHandshake,
  HelpCircleIcon,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

/**
 * @name IntroductoryCard
 * @description
 * **Description**: Introduces website to users.
 * @TODO create a more specific guide to display more information.
 * **/

export function IntroductoryCard() {
  const words = useMemo(() => ['pity', 'sự kiện', 'cập nhật'], []);
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [words]);
  return (
    <Card className="rounded-sm shadow-sm dark:shadow-none hover:shadow dark:hover:shadow-none transition-shadow ease-in-out col-span-12 lg:col-span-8 pb-3">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-col gap-2 scroll-m-20 font-bold tracking-tighter pb-0 my-0 text-xl md:text-3xl lg:text-4xl min-[401px]:flex-row">
            <h1>Chúng tôi hỗ trợ bạn theo dõi</h1>
            <div className="flex flex-row gap-2">
              <TextAnimate
                className="text-five-star"
                animation="blurInUp"
                as={'p'}
                by="character"
              >
                {currentWord}
              </TextAnimate>
              <TextAnimate
                className="text-foreground -ml-1.5"
                animation="blurInUp"
                as={'p'}
                by="character"
              >
                .
              </TextAnimate>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        WuwaTracker là một ứng dụng được tạo dựa trên trang
        WuwaTracker nhưng hoàn toàn dành cho người Việt. Chúng tôi
        giúp bạn theo dõi pity của mình trong game và cập nhật sự kiện
        đang diễn ra với thông tin mới nhất từ trang web chính thức
        của Kuro Game.
      </CardContent>
    </Card>
  );
}

/**
 * @name StatisticCard
 * @description
 * **Description**: Display statistics from database.
 * @TODO update statistics to display more information.
 * **/

export function StatisticCard({
  character_up,
  total_pulls,
  players,
}: StatisticProps) {
  const character = character_up.map((c) => c.name);
  return (
    <Card className="rounded-sm shadow-sm dark:shadow-none hover:shadow dark:hover:shadow-none transition-shadow ease-in-out col-span-12 lg:col-span-4 pb-3">
      <CardHeader>
        <CardTitle>
          <div className="text-lg space-y-0 group flex flex-row gap-2 items-center justify-between">
            <div className="flex gap-2.5 items-center justify-start">
              <span className="font-semibold sm:text-base text-sm">
                {character.join(' and ')}
              </span>
            </div>
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 relative z-10 dark:bg-foreground/10 dark:text-foreground bg-primary/10 text-primary border-none group-hover:bg-primary dark:group-hover:bg-primary/10 dark:group-hover:text-primary group-hover:text-background">
              14n còn lại
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
            Lượt quay
          </p>
        </div>
        <div>
          <p className="whitespace-pre-wrap text-lg xl:text-2xl font-medium tracking-tighter text-foreground">
            <span className="inline-block tabular-nums text-foreground">
              <CountUp value={players} direction="up" />
            </span>
          </p>
          <p className="text-muted-foreground text-sm pt-1">
            Người chơi
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * @name OngoingEventCard
 * @description
 * **Description**: Showing ongoing events.
 * @TODO create an admin page to update the events.
 * @TODO re-write the events, add more images and information.
 **/

export function OngoingEventCard({ data }: { data: EventProps[] }) {
  return (
    <Card className="rounded-sm shadow-sm dark:shadow-none hover:shadow dark:hover:shadow-none transition-shadow ease-in-out col-span-12 lg:col-span-5 pb-3">
      <CardHeader>
        <CardTitle>
          <h2 className="scroll-m-20 font-semibold tracking-tight lg:text-xl xl:text-2xl pb-0 mt-0 mb-0.5 text-center text-xl sm:text-base sm:text-start">
            Những sự kiện đang diễn ra
          </h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {data.map(
          (event: EventProps, index: number) =>
            getRemainingDay(event.duration) > 0 && (
              <Dialog key={event.name + index.toString()}>
                <DialogTitle>
                  <span className="sr-only">DialogCard</span>
                </DialogTitle>
                <DialogTrigger className="w-full mb-2 inline-flex items-center gap-2 whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border dark:bg-background hover:bg-accent dark:hover:bg-accent hover:text-accent-foreground h-10 justify-start relative group border-l-4 dark:border-border border-primary/30 hover:border-primary dark:hover:border-primary border-t-0 border-b-0 border-r-0 bg-muted/50 shadow dark:shadow-none">
                  <ButtonWuwa
                    eventImage={event.imgSrc[0]}
                    eventName={event.name}
                    eventDuration={getRemainingDay(event.duration)}
                  ></ButtonWuwa>
                </DialogTrigger>
                <DialogContent className="flex flex-col">
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
                            02 Jan 2025 03:00 - 12 Feb 2025 02:59{' '}
                            <span className="rounded-full ml-2 px-2.5 py-0.5 text-tiny font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 relative z-10 dark:bg-foreground/10 dark:text-foreground bg-primary/10 text-primary border-none group-hover:bg-primary dark:group-hover:bg-primary/10 dark:group-hover:text-primary group-hover:text-background">
                              {getRemainingDay(event.duration)} ngày
                              còn lại
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
                    src={event.imgSrc[0]}
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
            ),
        )}
      </CardContent>
    </Card>
  );
}

/**
 * @name GuideCard
 * @description
 * **Description**: An guide to redirect users to the right page.
 * @TODO create a more specific guide to display more information.
 **/

export function GuideCard() {
  return (
    <Card className="overflow-hidden rounded-sm shadow-sm dark:shadow-none hover:shadow dark:hover:shadow-none transition-shadow ease-in-out col-span-12 lg:col-span-7 pb-3">
      <CardHeader>
        <CardTitle>
          <h1 className="text-center scroll-m-20 tracking-tighter pb-0 my-0 font-bold sm:text-left text-base md:text-xl">
            {greeting(new Date())}
          </h1>
        </CardTitle>
        <CardDescription className="relative pt-0 grid grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col gap-4 md:items-start">
            <span className="text-base text-center sm:text-left">
              Hãy để tôi dẫn đường bạn nhé!
            </span>
            <ol className="relative sm:ms-3 sm:mt-4 z-10">
              <li className="mb-6 sm:mb-10 ms-0 sm:ms-8 flex items-center">
                <span className="hidden sm:flex absolute -start-4 h-8 w-8 items-center justify-center rounded-full bg-accent p-3">
                  <p className="text-sm">1</p>
                </span>
                <a
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-64"
                  href="/import"
                >
                  <p className="truncate">Cập nhật Pity</p>
                </a>
              </li>
              <li className="mb-6 sm:mb-10 ms-0 sm:ms-8 flex items-center">
                <span className="hidden sm:flex absolute -start-4 h-8 w-8 items-center justify-center rounded-full bg-accent p-3">
                  <p className="text-sm">2</p>
                </span>
                <a
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-64"
                  href="/trackers"
                >
                  <p className="truncate">Xem lịch sử Gacha</p>
                </a>
              </li>
              <li className="sm:mb-10 ms-0 sm:ms-8 flex items-center">
                <span className="hidden sm:flex absolute -start-4 h-8 w-8 items-center justify-center rounded-full bg-accent p-3">
                  <p className="text-sm">3</p>
                </span>
                <a
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-64"
                  href="/settings"
                >
                  <p className="truncate">Đồng bộ dữ liệu</p>
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
        Dữ liệu của bạn đã được đồng bộ!
      </CardFooter>
    </Card>
  );
}

/**
 * @name InfoCard
 * @description
 * **Description**: Introduce the website to users.
 * @TODO rewrite the information to be more specific.
 * **/

export function InfoCard() {
  return (
    <div className="w-full col-span-12">
      <Tabs defaultValue="information">
        <TabsList className="bg-[#111111] grid w-full px-1.5 grid-cols-3 md:px-0">
          <TabsTrigger
            value="information"
            className="text-muted-foreground text-xs md:text-base data-[state=active]:bg-[#262626]"
          >
            <BadgeInfo className="w-3 h-3 md:w-4 md:h-4 mr-1" /> Thông
            tin
          </TabsTrigger>
          <TabsTrigger
            className="text-muted-foreground text-xs md:text-base data-[state=active]:bg-[#262626]"
            value="update"
          >
            <HelpCircleIcon className="w-3 h-3 md:w-4 md:h-4 mr-1" />{' '}
            Cập nhật
          </TabsTrigger>
          <TabsTrigger
            className="text-muted-foreground text-xs md:text-base data-[state=active]:bg-[#262626]"
            value="credit"
          >
            <HeartHandshake className="w-3 h-3 md:w-4 md:h-4 mr-1" />{' '}
            Cảm ơn
          </TabsTrigger>
        </TabsList>
        <TabsContent value="information">
          <Card>
            <CardHeader>
              <CardTitle className="text-base md:text-xl">
                What is WuWa Tracker?
              </CardTitle>
            </CardHeader>
            <CardContent>
              WuWa Tracker is a third-party website, not affiliated
              with Kuro Games, that is dedicated to helping players
              effortlessly track and aggregate their pull data.
              Instead of navigating through endless pages in the
              in-game Convene History, our website allows you to
              easily view and analyze this information. We aim to
              provide players with free & quick access to detailed
              insights into the gacha system, character popularity,
              and their own pull history—all presented through various
              data visualization methods. Our tools enable you to
              export, import, and synchronize your data via Google
              Drive, empowering you to analyze it manually in other
              applications. While we strive to ensure a smooth
              experience, users are fully responsible for managing
              their own data, and we cannot guarantee its integrity.
              You can check our Support Page for any questions
              regarding your data and review our Terms & Conditions on
              how we handle your data. Beyond data tracking, WuWa
              Tracker offers additional utilities such as an event
              timeline, achievement tracker, inventory manager, and
              more. These tools are designed to complement and enrich
              your gameplay experience, though they may not always
              perfectly reflect in-game data as they are manually
              maintained, so please do not take it as a primary source
              of game information.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="update">
          <Card>
            <CardHeader>
              <CardTitle className="text-base md:text-xl">
                What is WuWa Tracker?
              </CardTitle>
            </CardHeader>
            <CardContent>
              WuWa Tracker is a third-party website, not affiliated
              with Kuro Games, that is dedicated to helping players
              effortlessly track and aggregate their pull data.
              Instead of navigating through endless pages in the
              in-game Convene History, our website allows you to
              easily view and analyze this information. We aim to
              provide players with free & quick access to detailed
              insights into the gacha system, character popularity,
              and their own pull history—all presented through various
              data visualization methods. Our tools enable you to
              export, import, and synchronize your data via Google
              Drive, empowering you to analyze it manually in other
              applications. While we strive to ensure a smooth
              experience, users are fully responsible for managing
              their own data, and we cannot guarantee its integrity.
              You can check our Support Page for any questions
              regarding your data and review our Terms & Conditions on
              how we handle your data. Beyond data tracking, WuWa
              Tracker offers additional utilities such as an event
              timeline, achievement tracker, inventory manager, and
              more. These tools are designed to complement and enrich
              your gameplay experience, though they may not always
              perfectly reflect in-game data as they are manually
              maintained, so please do not take it as a primary source
              of game information.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="credit">
          <Card>
            <CardHeader>
              <CardTitle className="text-base md:text-xl">
                What is WuWa Tracker?
              </CardTitle>
            </CardHeader>
            <CardContent>
              WuWa Tracker is a third-party website, not affiliated
              with Kuro Games, that is dedicated to helping players
              effortlessly track and aggregate their pull data.
              Instead of navigating through endless pages in the
              in-game Convene History, our website allows you to
              easily view and analyze this information. We aim to
              provide players with free & quick access to detailed
              insights into the gacha system, character popularity,
              and their own pull history—all presented through various
              data visualization methods. Our tools enable you to
              export, import, and synchronize your data via Google
              Drive, empowering you to analyze it manually in other
              applications. While we strive to ensure a smooth
              experience, users are fully responsible for managing
              their own data, and we cannot guarantee its integrity.
              You can check our Support Page for any questions
              regarding your data and review our Terms & Conditions on
              how we handle your data. Beyond data tracking, WuWa
              Tracker offers additional utilities such as an event
              timeline, achievement tracker, inventory manager, and
              more. These tools are designed to complement and enrich
              your gameplay experience, though they may not always
              perfectly reflect in-game data as they are manually
              maintained, so please do not take it as a primary source
              of game information.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
