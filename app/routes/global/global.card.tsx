import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { CountUp } from '@/components/ui/count-up';
import { GlobalSelect } from '@/routes/global/global.select';
import { ChartColumn } from 'lucide-react';

export function GlobalStatistics() {
  return (
    <Card className="relative overflow-hidden h-56 w-full md:w-1/2 items-end rounded border bg-card sm:flex lg:items-start">
      <div className="mx-auto">
        <span className="absolute bottom-4 left-4 z-10 rounded border-l-4 border-five-star bg-card px-4 pb-1 text-base font-bold shadow-lg backdrop-blur dark:shadow-none md:text-xl">
          <span className="uppercase">Carlotta</span>
          <span className="flex gap-1 font-mono text-xs font-medium text-muted-foreground">
            <CountUp
              className="relative block !text-muted-foreground"
              value={61097}
              direction="up"
            />{' '}
            pulls
          </span>
        </span>
        <div className="portraits relative -left-4 sm:left-0">
          <img
            alt="Carlotta"
            loading="lazy"
            width="404"
            height="560"
            decoding="async"
            data-nimg="1"
            src="https://wuwatracker.com/assets/portraits/carlotta.webp"
            className="left-0"
          />
        </div>
      </div>
      <div className="mx-auto text-right sm:block">
        <span className="absolute bottom-4 right-4 z-10 rounded border-r-4 border-five-star bg-card px-4 pb-1 text-base font-bold shadow-lg dark:shadow-none md:text-xl">
          <span className="uppercase">Zhezhi</span>
          <span className="flex gap-1 font-mono text-xs font-medium text-muted-foreground">
            <CountUp
              className="relative block !text-muted-foreground"
              value={61097}
              direction="up"
            />{' '}
            pulls
          </span>
        </span>
        <div className="relative portraits -right-4 sm:-right-16 md:-right-12 lg:-right-24">
          <img
            alt="Zhezhi"
            loading="lazy"
            width="404"
            height="560"
            decoding="async"
            data-nimg="1"
            src="https://wuwatracker.com/assets/portraits/zhezhi.webp"
            className="right-0"
          />
        </div>
      </div>
    </Card>
  );
}

export function SelectStatistics() {
  return (
    <Card className="relative rounded-sm flex flex-col justify-between w-full md:w-1/2">
      <CardTitle className="w-full px-0">
        <GlobalSelect />
      </CardTitle>
      <CardContent className="py-6 pt-0 flex flex-col gap-1 px-4 text-sm sm:px-5 sm:text-base">
        <div className="space-y-2">
          <div className="flex justify-between">
            <dt className="text-muted-foreground">
              <span className="hidden sm:inline">Total&nbsp;</span>
              Pulls
            </dt>
            <dd className="font-mono font-medium">5,421,917</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">
              <span className="hidden sm:inline">Total&nbsp;</span>
              Astrites
            </dt>
            <dd className="flex items-center gap-1 font-mono font-medium">
              <img
                alt="Astrite"
                loading="lazy"
                width="256"
                height="256"
                decoding="async"
                data-nimg="1"
                className="size-6"
                src="https://wuwatracker.com/assets/icons/astrite.webp"
              />
              813,287,550
            </dd>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="w-1/2 md:w-1/3">
          <ChartColumn />
          Xem thông số của bạn
        </Button>
      </CardFooter>
    </Card>
  );
}
