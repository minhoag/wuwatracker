import { GlobalChart } from '@/routes/global/global.chart';
import { GlobalPieChart } from '@/routes/global/global.piechart';

import { GlobalStatistics, SelectStatistics } from './global.card';

export default function Page() {
  return (
    <>
      <h1 className="mb-6 scroll-m-20 text-3xl font-bold tracking-tighter md:text-4xl">
        Số liệu toàn cầu
      </h1>
      <section className="flex flex-col gap-6 xl:flex-row">
        <SelectStatistics />
        <GlobalStatistics />
      </section>
      <section className="mt-6 flex flex-col gap-6 xl:flex-row">
        <GlobalChart />
        <GlobalPieChart />
      </section>
    </>
  );
}
