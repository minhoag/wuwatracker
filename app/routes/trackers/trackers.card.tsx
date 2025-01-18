import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Progress } from '@/components/ui/progress';
import { Toggle } from '@/components/ui/toggle';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ConveneHistoryProps } from '@/types';

export function ConveneCard({
  convene,
}: {
  convene: ConveneHistoryProps[];
}) {
  return (
    <>
      {convene.map((data: ConveneHistoryProps, index: number) => (
        <Card
          key={Date.now() + index}
          className="relative mt-4 mb-6 rounded-sm shadow-sm dark:shadow-none hover:shadow dark:hover:shadow-none transition-shadow ease-in-out"
        >
          <CardTitle>
            <span className="sr-only">{data.type}</span>
          </CardTitle>
          <CardContent className="flex flex-col justify-center p-0">
            <AspectRatio ratio={16 / 9}>
              <div className="flex-col pl-4 pt-4 gap-2">
                <div className="mb-2 text-five-star">
                  <p className="truncate text-xl font-bold drop-shadow-2xl">
                    {data.fivestar}/80
                  </p>
                  <p className="truncate text-xs font-semibold drop-shadow-2xl">
                    ✦ Pity
                  </p>
                </div>
                <div className="mb-2 text-four-star">
                  <p className="truncate text-xl font-bold drop-shadow-2xl">
                    {data.fourstar}/10
                  </p>
                  <p className="truncate text-xs font-semibold drop-shadow-2xl">
                    ✦ Pity
                  </p>
                </div>
              </div>
              <div className="mask-gradient-to-b absolute right-0 w-1/2 transition-all -bottom-2 group-hover:scale-100 scale-100">
                <img
                  alt="Carlotta &amp; Zhezhi"
                  loading="lazy"
                  width="450"
                  height="600"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover"
                  src="https://wuwatracker.com/assets/portraits/carlotta.webp"
                  style={{
                    color: 'transparent',
                  }}
                />
              </div>
              <p className="absolute pl-7 lg:z-10 bottom-4 font-semibold -left-2">
                {data.type}
              </p>
            </AspectRatio>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export function FeaturedCard() {
  return (
    <Card className="relative mt-4 rounded-sm shadow-sm dark:shadow-none hover:shadow dark:hover:shadow-none transition-shadow ease-in-out">
      <CardTitle>
        <div className="flex flex-col space-y-1.5 py-6 px-1 pb-4 pt-2">
          <p className="truncate px-3 py-1.5 text-base font-semibold sm:text-xl">
            Nhân vật đặc biệt
          </p>
        </div>
      </CardTitle>
      <CardContent className="flex flex-col justify-center p-0">
        <div className="py-6 pt-0 flex flex-col gap-1 px-4 text-sm sm:text-base">
          <dl className="space-y-2">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">
                <span className="hidden sm:inline">Số lần&nbsp;</span>
                quay
              </dt>
              <dd className="font-medium">0</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">
                Số Astrites&nbsp;
                <span className="hidden sm:inline">sử dụng</span>
              </dt>
              <dd className="font-medium">0</dd>
            </div>
            <div className="flex justify-between text-five-star">
              <dt>5✦ Pulls</dt>
              <dd className="font-medium">0</dd>
            </div>
            <div className="flex justify-between text-four-star">
              <dt>4✦ Pulls</dt>
              <dd className="font-medium">0</dd>
            </div>
          </dl>
        </div>
      </CardContent>
      <CardFooter className="w-full items-end justify-end text-muted-foreground">
        wuwatracker.com
      </CardFooter>
    </Card>
  );
}

export function LuckRating() {
  return (
    <Carousel>
      <CarouselContent className="relative">
        <CarouselItem>
          {/** Carousel 5✦ Luck Rating **/}
          <Card className="relative five-star mt-4 rounded-sm shadow-sm dark:shadow-none hover:shadow dark:hover:shadow-none transition-shadow ease-in-out">
            <CardTitle>
              <div className="flex flex-col space-y-1.5 px-6 py-6 pt-3.5 text-base font-semibold sm:text-lg">
                Tỉ lệ trúng 5 sao
              </div>
            </CardTitle>
            <CardContent className="flex flex-col justify-center p-0">
              <div className="relative px-6 py-6 pt-0 grid gap-y-1.5 text-sm">
                <div className="mb-2">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex cursor-help justify-between gap-4 text-sm">
                          <p className="max-w-[20ch] truncate">
                            Pity trung bình
                          </p>
                          <span className="text-muted-foreground transition-colors hover:text-foreground">
                            60%
                          </span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Tỉ lệ trung bình bạn trúng nhà khai phá 5
                          sao.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Progress
                    value={60}
                    bg={'bg-five-star'}
                    className="w-full h-1 my-0.5"
                  />
                  <p className="text-five-star text-xs">
                    Triệu tập thêm để hiển thị
                  </p>
                </div>
                <div className="mb-2">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex cursor-help justify-between gap-4 text-sm">
                          <p className="max-w-[20ch] truncate">
                            Tỉ lệ trúng 5 sao tổng cộng
                          </p>
                          <span className="text-muted-foreground transition-colors hover:text-foreground">
                            60%
                          </span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Tỉ lệ tổng cộng bạn trúng nhà khai phá 5 sao
                        </p>
                        <p>
                          Cách tính: Tổng số luợt triệu tập / Tổng số
                          lần trúng 5 sao
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Progress
                    value={60}
                    bg={'bg-five-star'}
                    className="w-full h-1 my-0.5"
                  />
                  <p className="text-five-star text-xs">
                    Triệu tập thêm để hiển thị
                  </p>
                </div>
                <div className="mb-2">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex cursor-help justify-between gap-4 text-sm">
                          <p className="max-w-[20ch] truncate">
                            Thắng 50 / 50
                          </p>
                          <span className="text-muted-foreground transition-colors hover:text-foreground">
                            60%
                          </span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Xác suất thắng 50 / 50 khi triệu tập nhà
                          khai phá 5 sao
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Progress
                    value={60}
                    bg={'bg-five-star'}
                    className="w-full h-1 my-0.5"
                  />
                  <p className="text-five-star text-xs">
                    Triệu tập thêm để hiển thị
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        {/* Carousel 4✦ Luck Rating */}
        <CarouselItem>
          <Card className="relative four-star left-4 mt-4 rounded-sm shadow-sm dark:shadow-none hover:shadow dark:hover:shadow-none transition-shadow ease-in-out">
            <CardTitle>
              <div className="flex flex-col space-y-1.5 px-6 py-6 pt-3.5 text-base font-semibold sm:text-lg">
                Tỉ lệ trúng 4 sao
              </div>
            </CardTitle>
            <CardContent className="flex flex-col justify-center p-0">
              <div className="relative px-6 py-6 pt-0 grid gap-y-1.5 text-sm">
                <div className="mb-2">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex cursor-help justify-between gap-4 text-sm">
                          <p className="max-w-[20ch] truncate">
                            Pity trung bình
                          </p>
                          <span className="text-muted-foreground transition-colors hover:text-foreground">
                            60%
                          </span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Tỉ lệ trung bình bạn trúng nhà khai phá 4
                          sao.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Progress
                    value={60}
                    bg={'bg-four-star'}
                    className="w-full h-1 my-0.5"
                  />
                  <p className="text-four-star text-xs">
                    Triệu tập thêm để hiển thị
                  </p>
                </div>
                <div className="mb-2">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex cursor-help justify-between gap-4 text-sm">
                          <p className="max-w-[20ch] truncate">
                            Pity trung bình
                          </p>
                          <span className="text-muted-foreground transition-colors hover:text-foreground">
                            60%
                          </span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Tỉ lệ tổng cộng bạn trúng nhà khai phá 4 sao
                        </p>
                        <p>
                          Cách tính: Tổng số luợt triệu tập / Tổng số
                          lần trúng
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Progress
                    value={60}
                    bg={'bg-four-star'}
                    className="w-full h-1 my-0.5"
                  />
                  <p className="text-four-star text-xs">
                    Triệu tập thêm để hiển thị
                  </p>
                </div>
                <div className="mb-2">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex cursor-help justify-between gap-4 text-sm">
                          <p className="max-w-[20ch] truncate">
                            Tỉ lệ thắng 50 / 50
                          </p>
                          <span className="text-muted-foreground transition-colors hover:text-foreground">
                            60%
                          </span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Xác suất thắng 50 / 50 khi triệu tập nhà
                          khai phá 5 sao
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Progress
                    value={60}
                    bg={'bg-four-star'}
                    className="w-full h-1 my-0.5"
                  />
                  <p className="text-four-star text-xs">
                    Triệu tập thêm để hiển thị
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <div className="absolute right-14 top-8 md:right-16 md:top-10 text-muted-foreground">
        <CarouselPrevious className="-left-[1.25rem] inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 rounded-full"></CarouselPrevious>
        <CarouselNext className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 rounded-full" />
      </div>
    </Carousel>
  );
}

export function RecentCard() {
  return (
    <Card className="relative rounded-sm shadow-sm dark:shadow-none hover:shadow dark:hover:shadow-none transition-shadow ease-in-out">
      <CardTitle className="px-6 py-6 flex flex-col items-center justify-between gap-4 space-y-0 text-center sm:flex-row sm:gap-0 md:text-start">
        <div className="flex flex-col flex-wrap items-center text-xl font-semibold sm:flex-row sm:gap-x-3">
          Những triệu tập gần đây
        </div>
        <div className="flex gap-2">
          <Toggle
            variant="outline"
            defaultPressed={false}
            defaultChecked={false}
            aria-label="4 star"
            className="rounded px-3 h-7 gap-1 border text-sm font-semibold shadow-sm border-four-star bg-four-star text-four-star-dark hover:bg-four-star hover:text-four-star-dark"
          >
            4 ✦
          </Toggle>
          <Toggle
            variant="outline"
            aria-label="5 star"
            className="rounded px-3 h-7 gap-1 border text-sm font-semibold shadow-sm border-five-star bg-five-star text-five-star-dark hover:bg-five-star hover:text-five-star-dark"
          >
            5 ✦
          </Toggle>
        </div>
      </CardTitle>
      <CardContent className="px-6 py-6 flex flex-wrap justify-start gap-4 pt-2">
        <></>
      </CardContent>
      <CardFooter className="w-full text-xs items-end justify-end text-muted-foreground">
        (không có dữ liệu hiển thị)
      </CardFooter>
    </Card>
  );
}

export function HistoryCard() {
  return (
    <Card className="relative rounded-sm shadow-sm dark:shadow-none hover:shadow dark:hover:shadow-none transition-shadow ease-in-out">
      <CardTitle className="px-6 py-6 flex flex-col items-center justify-between gap-4 space-y-0 text-center sm:flex-row sm:gap-0 md:text-start">
        <div className="flex flex-col flex-wrap items-center text-xl font-semibold sm:flex-row sm:gap-x-3">
          Lịch sử triệu tập
        </div>
        <div className="flex gap-2">
          <Toggle
            variant="outline"
            aria-label="3 star"
            className="rounded px-3 h-7 gap-1 border text-sm font-semibold shadow-sm border-three-star bg-three-star text-three-star-dark hover:bg-three-star hover:text-five-three-dark"
          >
            3 ✦
          </Toggle>
          <Toggle
            variant="outline"
            defaultPressed={false}
            defaultChecked={false}
            aria-label="4 star"
            className="rounded px-3 h-7 gap-1 border text-sm font-semibold shadow-sm border-four-star bg-four-star text-four-star-dark hover:bg-four-star hover:text-four-star-dark"
          >
            4 ✦
          </Toggle>
          <Toggle
            variant="outline"
            aria-label="5 star"
            className="rounded px-3 h-7 gap-1 border text-sm font-semibold shadow-sm border-five-star bg-five-star text-five-star-dark hover:bg-five-star hover:text-five-star-dark"
          >
            5 ✦
          </Toggle>
        </div>
      </CardTitle>
      <CardContent className="px-6 py-6 flex flex-wrap justify-start gap-4 pt-2">
        <></>
      </CardContent>
      <CardFooter className="w-full text-xs items-end justify-end text-muted-foreground">
        (không có dữ liệu hiển thị)
      </CardFooter>
    </Card>
  );
}
