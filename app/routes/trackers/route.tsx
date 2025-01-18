import { ConveneHistoryProps } from '@/types';
import { Link } from '@remix-run/react';

import {
  ConveneCard,
  FeaturedCard,
  HistoryCard,
  LuckRating,
  RecentCard,
} from './trackers.card';

export default function Page() {
  const convene: ConveneHistoryProps[] = [
    {
      type: 'Nhân vật giới hạn',
      image: 'test.png',
      fivestar: 10,
      fourstar: 10,
    },
    {
      type: 'Vũ Khí Giới Hạn',
      image: 'test.png',
      fivestar: 10,
      fourstar: 10,
    },
    {
      type: 'Nhân vật Tiêu chuẩn',
      image: 'test.png',
      fivestar: 10,
      fourstar: 10,
    },
    {
      type: 'Vũ Khí Tiêu chuẩn',
      image: 'test.png',
      fivestar: 10,
      fourstar: 10,
    },
    {
      type: 'Tân thủ',
      image: 'test.png',
      fivestar: 10,
      fourstar: 10,
    },
    {
      type: 'Tự chọn cho tân thủ',
      image: 'test.png',
      fivestar: 10,
      fourstar: 10,
    },
  ];
  return (
    <div className="max-w-screen-xl w-full flex-1 flex-col px-4 my-4 sm:my-8 sm:mb-16 md:px-6 mx-auto">
      <div className="col-span-full mb-6 flex flex-col justify-between sm:flex-row">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tighter flex items-center justify-between gap-3 md:text-4xl sm:justify-start sm:text-start">
          Theo dõi triệu hồi
        </h1>
        <div className="z-10 hidden items-center gap-4 pt-4 sm:flex sm:pt-0 md:justify-end">
          <Link
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-card dark:bg-background hover:bg-accent dark:hover:bg-accent hover:text-accent-foreground h-11 rounded px-8 w-full"
            type="button"
            to="/global"
          >
            Thông số chung
          </Link>
          <Link
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-card dark:bg-background hover:bg-accent dark:hover:bg-accent hover:text-accent-foreground h-11 rounded px-8 w-full"
            type="button"
            to="/import"
          >
            Nhập lịch sử của bạn
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Limited Character */}
        <div className="col-span-12 md:col-span-4 xl:col-span-3">
          <div className="relative overflow-y-auto max-h-60 transition-none h-64 flex-1 sm:h-full sm:max-h-[68vh] no-scrollbar mask-gradient-to-t-and-b">
            <ConveneCard convene={convene} />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-8 xl:col-span-9">
          <div className="flex flex-col gap-6 pb-6 lg:flex-row">
            <div className="flex flex-1 flex-col xl:w-2/3">
              <FeaturedCard />
            </div>
            <div className="flex flex-1 flex-col xl:w-2/3">
              <LuckRating />
            </div>
          </div>
          <div className="w-full pb-6">
            <RecentCard />
          </div>
          <div className="w-full pb-6">
            <HistoryCard />
          </div>
        </div>
      </div>
    </div>
  );
}
