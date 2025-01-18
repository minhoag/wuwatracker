import { GlobalChart } from '@/routes/global/global.chart';
import { GlobalPieChart } from '@/routes/global/global.piechart';

import { GlobalStatistics, SelectStatistics } from './global.card';

export default function Page() {
  return (
    <>
      <h1 className="scroll-m-20 text-3xl font-bold tracking-tighter sm:mt-8 md:px-20 md:text-4xl">
        Số liệu toàn cầu
      </h1>
      <div className="max-w-screen-xl w-full flex-1 flex flex-col gap-6 px-4 my-4 sm:my-8 md:px-6 mx-auto xl:flex-row">
        <SelectStatistics />
        <GlobalStatistics />
      </div>
      <div className="max-w-screen-xl mx-auto w-full flex-1 flex flex-row gap-6 my-4 px-4 sm:my-8 md:px-6">
        <GlobalChart />
        <GlobalPieChart />
      </div>
    </>
  );
}
