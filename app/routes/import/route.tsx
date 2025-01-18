import { Card, CardContent } from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  StepOne,
  StepThree,
  StepTwo,
  StepTwoTitle,
  Stepper,
} from '@/routes/import/stepper.import';
import { Link } from '@remix-run/react';
import { TriangleAlert } from 'lucide-react';

const steps = [
  {
    title:
      'Đầu tiên, khởi động trò chơi và mở chi tiết lịch sử trong trò chơi của bạn.',
    description: '',
    render: <StepOne />,
  },
  {
    title: <StepTwoTitle />,
    description: '',
    render: <StepTwo />,
  },
  {
    title: 'Bấm vào nút "Nhập dữ liệu" để hoàn tất.',
    description: '',
    render: <StepThree />,
  },
];

export default function Page() {
  return (
    <div className="max-w-screen-md mx-auto my-4 px-6 sm:my-8 sm:mb-16">
      <h1 className="mb-6 scroll-m-20 text-3xl font-bold tracking-tighter md:text-4xl">
        Cách nhập Lịch sử
      </h1>
      <Tabs defaultValue="pc" className="w-full flex flex-col gap-4">
        <TabsList className="h-9 items-center justify-center rounded border bg-card p-1 text-muted-foreground flex w-full">
          <TabsTrigger
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-accent data-[state=active]:text-foreground data-[state=active]:shadow flex-1"
            value="pc"
          >
            PC
          </TabsTrigger>
          <TabsTrigger
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-accent data-[state=active]:text-foreground data-[state=active]:shadow flex-1"
            value="android"
          >
            Android
          </TabsTrigger>
          <TabsTrigger
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-accent data-[state=active]:text-foreground data-[state=active]:shadow flex-1"
            value="ios"
          >
            iOS
          </TabsTrigger>
        </TabsList>
        <Card className="relative w-full bg-background rounded border shadow-none">
          <CardContent className="relative p-4">
            <p className="my-2 text-xs font-normal text-muted-foreground md:text-sm">
              <TriangleAlert className="absolute right-1 bottom-1" />
              LƯU Ý: Kể từ phiên bản 1.2, đường dẫn URL của bạn sẽ hết
              hạn sau một giờ. Để xem cập nhật dữ liệu, bạn cần phải
              mở Lịch sử trong game của bạn trước khi nhập lại.
            </p>
          </CardContent>
        </Card>
        <div className="w-full">
          <h2 className="scroll-m-20 text-lg font-semibold tracking-tight lg:text-xl xl:text-2xl">
            Chọn phương thức
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            If the automatic method doesn&#39;t work for you, try
            doing it manually using the other tutorial. If you still
            need help, please visit our{' '}
            <Link
              className="text-five-star hover:underline hover:underline-offset-1"
              to="/"
            >
              Discord Server
            </Link>
            .
          </p>
        </div>
        <TabsContent value="pc">
          <Tabs defaultValue="automatic" className="w-full">
            <TabsList className="h-9 items-center justify-center rounded border bg-card p-1 text-muted-foreground flex w-full">
              <TabsTrigger
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-accent data-[state=active]:text-foreground data-[state=active]:shadow flex-1"
                value="automatic"
              >
                Tự động
              </TabsTrigger>
              <TabsTrigger
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-accent data-[state=active]:text-foreground data-[state=active]:shadow flex-1"
                value="manual"
              >
                Thủ công
              </TabsTrigger>
            </TabsList>
            <TabsContent value="automatic">
              <Stepper step={steps}></Stepper>
            </TabsContent>
          </Tabs>
        </TabsContent>
      </Tabs>
    </div>
  );
}
