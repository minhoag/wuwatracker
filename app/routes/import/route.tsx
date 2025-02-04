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
import type { ActionFunctionArgs } from '@remix-run/node';
import { Form, Link } from '@remix-run/react';

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const url = String(formData.get('url'));
  const errors: { [key: string]: string } = {
    url: '',
  };

  if (!url) {
    errors.url = 'URL must not be empty';
  } else if (
    !url.startsWith(
      'https://aki-gm-resources-oversea.aki-game.net/aki/gacha/index.html',
    )
  ) {
    errors.url =
      'Link bạn vừa dán vào không hợp lệ. Link mẫu: https://aki-gm-resources-oversea.aki-game.net...';
  }
  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  return null;
}

export default function Page() {
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

  return (
    <section className="max-w-screen-md mx-auto">
      <h1 className="mb-6 scroll-m-20 text-3xl font-bold tracking-tighter md:text-4xl">
        Cách nhập Lịch sử
      </h1>
      <Tabs defaultValue="pc" className="w-full">
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
        <Card className="relative my-3 w-full bg-background rounded border shadow-none">
          <CardContent className="relative p-2">
            <p className="text-xs font-normal text-muted-foreground md:text-sm">
              <b>LƯU Ý:</b> Kể từ phiên bản 1.2, đường dẫn URL của bạn
              sẽ hết hạn sau một giờ. Để xem cập nhật dữ liệu, bạn cần
              phải mở Lịch sử trong game của bạn trước khi nhập lại.
            </p>
          </CardContent>
        </Card>
        <div className="w-full my-4">
          <h2 className="scroll-m-20 text-lg font-semibold tracking-tight lg:text-xl xl:text-2xl">
            Chọn phương thức
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Nếu cả 2 phương thức đều không họt động, hãy tham gia
            <Link
              className="mx-1 text-five-star hover:underline hover:underline-offset-1"
              to="/"
            >
              Discord Server
            </Link>
            và gửi chúng tôi vấn đề của bạn. Chúng tôi sẽ cố gắng
            hướng dẫn bạn cách fix lỗi.
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
              <Form preventScrollReset method="post">
                <Stepper step={steps}></Stepper>
              </Form>
            </TabsContent>
          </Tabs>
        </TabsContent>
      </Tabs>
    </section>
  );
}
