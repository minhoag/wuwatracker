'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Pie, PieChart, Sector } from 'recharts';
import { PieSectorDataItem } from 'recharts/types/polar/Pie';

const chartData = [
  { character: '5 sao', visitors: 275, fill: 'var(--color-chrome)' },
  { character: '4 sao', visitors: 200, fill: 'var(--color-safari)' },
  { character: '3 sao', visitors: 187, fill: 'var(--color-firefox)' },
];

const chartConfig = {
  visitors: {
    label: 'Nhân vật',
  },
  chrome: {
    label: '5 sao',
    color: 'hsl(var(--chart-1))',
  },
  safari: {
    label: '4 sao',
    color: 'hsl(var(--chart-2))',
  },
  firefox: {
    label: '3 sao',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig;

export function PiechartGlobal() {
  const totalVisitors = chartData.reduce(
    (acc, { visitors }) => acc + visitors,
    0,
  );
  return (
    <Card className="w-full rounded-sm md:w-1/4">
      <CardHeader className="items-center pb-0">
        <CardTitle>Tỉ lệ giữa các độ hiếm</CardTitle>
        <CardDescription>Khác biệt tỉ lệ 5/4/3 ✦</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  className="w-full mr-2"
                  hideLabel
                />
              }
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="character"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={0}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <Sector {...props} outerRadius={outerRadius + 10} />
              )}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col justify-center gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Tỉ lệ theo từng độ hiếm
        </div>
        <div className="flex items-center gap-1.5 [&amp;>svg]:h-3 [&amp;>svg]:w-3 [&amp;>svg]:text-muted-foreground">
          <div className="h-2 w-2 shrink-0 rounded-[2px] bg-five-star">
            <span className="sr-only">Nhân vật 5✦</span>
          </div>
          Nhân vật 5✦:{' '}
          {roundToTwo((chartData[0].visitors / totalVisitors) * 100)}%
        </div>
        <div className="flex items-center gap-1.5 [&amp;>svg]:h-3 [&amp;>svg]:w-3 [&amp;>svg]:text-muted-foreground">
          <div className="h-2 w-2 shrink-0 rounded-[2px] bg-four-star">
            <span className="sr-only">Nhân vật 4✦</span>
          </div>
          Nhân vật 4✦:{' '}
          {roundToTwo((chartData[1].visitors / totalVisitors) * 100)}%
        </div>
        <div className="flex items-center gap-1.5 [&amp;>svg]:h-3 [&amp;>svg]:w-3 [&amp;>svg]:text-muted-foreground">
          <div className="h-2 w-2 shrink-0 rounded-[2px] bg-three-star">
            <span className="sr-only">Nhân vật 3✦</span>
          </div>
          Nhân vật 3✦:{' '}
          {roundToTwo((chartData[2].visitors / totalVisitors) * 100)}%
        </div>
      </CardFooter>
    </Card>
  );
}

function roundToTwo(num: number): number {
  const p = Math.pow(10, 2);
  return Math.round(num * p) / p;
}
