import { ChartGlobal } from '@/routes/global/chart.global';
import { PiechartGlobal } from '@/routes/global/piechart.global';

import { GlobalStatistics, SelectStatistics } from './card.global';

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
        <ChartGlobal />
        <PiechartGlobal />
      </section>
    </>
  );
}
