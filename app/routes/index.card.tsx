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
import type { Event, StatisticProps } from '@/types';
import { Link } from '@remix-run/react';
import dayjs from 'dayjs';
import {
  BadgeInfo,
  DownloadIcon,
  FolderSync,
  HeartHandshake,
  HelpCircleIcon,
  LucideEye,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

/**
 * @name IntroductoryCard
 * @description
 * **Description**: Introduces website to users.
 * @TODO create a more specific guide to display more information.
 * **/

export function IntroductoryCard() {
  const words = useMemo(() => ['pity', 'event', 'guide'], []);
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
    <Card className="rounded-sm shadow-sm dark:shadow-none hover:shadow dark:hover:shadow-none transition-shadow ease-in-out col-span-12 lg:col-span-8">
      <CardHeader className="pb-1">
        <CardTitle>
          <div className="flex flex-wrap flex-col gap-2 font-bold tracking-tighter pb-0 my-0 text-xl md:text-3xl lg:text-4xl min-[401px]:flex-row">
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
      <CardContent className="mt-2 pb-0">
        WuwaViet là một ứng dụng được tạo dựa trên giao diện trang
        WuwaTracker. Chúng tôi giúp bạn theo dõi pity, cập nhật sự
        kiện và tổng hợp các hướng dẫn build nhân vật từ nhiều nguồn
        khác nhau.
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
              {total_pulls > 0 ? (
                <CountUp value={total_pulls} direction="up" />
              ) : (
                0
              )}
            </span>
          </p>
          <p className="text-muted-foreground text-sm pt-1">
            Lượt quay
          </p>
        </div>
        <div>
          <p className="whitespace-pre-wrap text-lg xl:text-2xl font-medium tracking-tighter text-foreground">
            <span className="inline-block tabular-nums text-foreground">
              {players > 0 ? (
                <CountUp value={players} direction="up" />
              ) : (
                0
              )}
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

export function OngoingEventCard({ data }: { data: Event[] }) {
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
        {data.length > 0 ? (
          data.map(
            (event: Event, index: number) =>
              getRemainingDay(event.startAt, event.endAt) > 0 && (
                <Dialog key={event.name + index.toString()}>
                  <DialogTitle>
                    <span className="sr-only">DialogCard</span>
                  </DialogTitle>
                  <DialogTrigger className="w-full mb-2 inline-flex items-center gap-2 whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border dark:bg-background hover:bg-accent dark:hover:bg-accent hover:text-accent-foreground h-10 justify-start relative group border-l-4 dark:border-border border-primary/30 hover:border-primary dark:hover:border-primary border-t-0 border-b-0 border-r-0 bg-muted/50 shadow dark:shadow-none">
                    <ButtonWuwa
                      eventImage={event.imgSrc}
                      eventName={event.name}
                      eventDuration={getRemainingDay(
                        event.startAt,
                        event.endAt,
                      )}
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
                              {`${dayjs(event.startAt).format('DD MMM YYYY HH:mm')} - ${dayjs(event.endAt).format('DD MMM YYYY HH:mm')}`}
                              <span className="rounded-full ml-2 px-2.5 py-0.5 text-tiny font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 relative z-10 dark:bg-foreground/10 dark:text-foreground bg-primary/10 text-primary border-none group-hover:bg-primary dark:group-hover:bg-primary/10 dark:group-hover:text-primary group-hover:text-background">
                                {getRemainingDay(
                                  event.startAt,
                                  event.endAt,
                                )}{' '}
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
                      src={event.imgSrc}
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
          )
        ) : (
          <></>
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
      <CardHeader className="md:pb-2">
        <CardTitle>
          <h1 className="text-center scroll-m-20 tracking-tighter pb-0 my-0 font-bold sm:text-left text-base md:text-xl">
            {greeting(new Date())}
          </h1>
        </CardTitle>
        <CardDescription className="relative py-0 grid grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col gap-4 md:items-start">
            <span className="text-base text-center sm:text-left">
              Chúng ta bắt đầu nhé!
            </span>
            <ol className="relative sm:ms-3 sm:mt-4 z-10">
              <li className="mb-6 sm:mb-6 ms-0 sm:ms-8 flex items-center">
                <span className="hidden sm:flex absolute -start-4 h-8 w-8 items-center justify-center rounded-full bg-accent p-3">
                  <p className="text-sm">1</p>
                </span>
                <a
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-64"
                  href="/import"
                >
                  <DownloadIcon className="w-4 h-4" />
                  <p className="truncate">Cập nhật Pity</p>
                </a>
              </li>
              <li className="mb-6 sm:mb-6 ms-0 sm:ms-8 flex items-center">
                <span className="hidden sm:flex absolute -start-4 h-8 w-8 items-center justify-center rounded-full bg-accent p-3">
                  <p className="text-sm">2</p>
                </span>
                <a
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-64"
                  href="/trackers"
                >
                  <LucideEye className="w-4 h-4" />
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
                  <FolderSync className="w-4 h-4" />
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
      <CardFooter className="text-muted-foreground mt-0 pt-0">
        Dữ liệu của bạn giờ đây sẽ đuoc đồng bộ
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
            <CardHeader></CardHeader>
            <CardContent>
              <article className="px-4 py-4 text-foreground">
                <h3 className="text-3xl font-bold mb-6">WuWa Việt</h3>

                <p className="mb-4 leading-relaxed">
                  Là một trang web độc lập, được thiết kế từ con số 0
                  dựa trên giao diện của{' '}
                  <Link
                    className="hover:underline text-five-star"
                    to={'https://wuwatracker.com'}
                  >
                    wuwatracker.com
                  </Link>{' '}
                  vì mình không có khả năng thiết kế tốt. Trang web
                  này không liên kết với{' '}
                  <strong className="font-semibold">
                    Kuro Games{' '}
                  </strong>
                  và được tạo ra với mục đích cá nhân để giúp mọi
                  người có trang theo dõi và tổng hợp dữ liệu gacha
                  của mình.
                </p>

                <p className="mb-6 text-foreground leading-relaxed">
                  Đây là dự án cá nhân với mong muốn mang đến cho mọi
                  người một trang thông tin{' '}
                  <strong>thuần Việt</strong> với đầy đủ chi tiết về
                  lịch sử gacha, cách xây dụng nhân vật bằng tiếng
                  Việt để game có thể tiếp cận được nhiều người hơn —
                  tất cả được trình bày sinh động qua các biểu đồ trực
                  quan, hoàn toàn{' '}
                  <strong className="font-semibold">miễn phí</strong>{' '}
                  và{' '}
                  <strong className="font-semibold">
                    nhanh chóng
                  </strong>
                  .
                </p>

                <div className="bg-foreground p-6 rounded-lg mb-8">
                  <p className="mb-4 text-background">
                    Bạn có thể xuất/nhập dữ liệu qua{' '}
                    <strong className="font-semibold">
                      Google Drive
                    </strong>{' '}
                    và đồng bộ hóa để phân tích trên các ứng dụng
                    khác. Quản lý dữ liệu hoàn toàn thuộc trách nhiệm
                    người dùng.
                  </p>

                  <div className="flex gap-4">
                    <a
                      href="/support"
                      className="text-four-star hover:text-indigo-800 transition-colors font-medium"
                    >
                      Trang Hỗ Trợ
                    </a>
                    <a
                      href="/terms"
                      className="text-four-star hover:text-indigo-800 transition-colors font-medium"
                    >
                      Điều Khoản Dịch Vụ
                    </a>
                  </div>
                </div>

                <h4 className="text-xl font-semibold mb-4">
                  Tiện ích bổ sung:
                </h4>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>
                    <strong className="font-medium">
                      Dòng thời gian sự kiện
                    </strong>
                  </li>
                  <li>
                    <strong className="font-medium">
                      Thống kê thành tựu
                    </strong>
                  </li>
                  <li>
                    <strong className="font-medium">
                      Quản lý kho đồ
                    </strong>
                  </li>
                </ul>

                <p className="text-sm mt-6 pt-4">
                  ... và nhiều tiện ích khác! Công cụ được cập nhật
                  thủ công nên có thể có sai lệch. Chúc mọi người có
                  trải nghiệm sử dụng tốt nhất. ✨
                </p>
              </article>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="update">
          <Card>
            <CardHeader></CardHeader>
            <CardContent>
              <div className="px-4 py-4 text-foreground">
                <h3 className="text-3xl font-bold mb-6">
                  Cập nhật mới nhất về WuWa Việt
                </h3>

                <p className="mb-4 leading-relaxed">
                  Là một trang web độc lập, được thiết kế từ con số 0
                  dựa trên hình ảnh của wuwatracker.com, trang web của
                  mình không liên kết với{' '}
                  <strong className="font-semibold">
                    Kuro Games{' '}
                  </strong>
                  và được tạo ra để giúp mọi người có trang theo dõi
                  và tổng hợp dữ liệu gacha của mình
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="credit">
          <Card>
            <CardHeader></CardHeader>
            <CardContent></CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
