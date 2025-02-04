import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { CopyButton } from '@/components/ui/copy-button';
import { Input } from '@/components/ui/input';
import { action } from '@/routes/import/route';
import { Link, useActionData } from '@remix-run/react';
import { DownloadIcon } from 'lucide-react';
import * as React from 'react';

type Step = {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  render: React.ReactNode;
};

type StepperProps = {
  step: Step[];
};

export const Stepper = ({ step }: StepperProps) => {
  return (
    <div
      data-state="active"
      data-orientation="horizontal"
      role="tabpanel"
      tabIndex={0}
      className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <ol className="relative ms-3 mt-4 border-s">
        {step.map((step: Step, index: number) => (
          <li key={'stepper' + index} className="mb-10 ms-8">
            <span className="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent p-3">
              <p className="text-sm">{index + 1}</p>
            </span>
            <h3 className="mb-1 flex items-center text-base font-semibold text-foreground md:text-lg">
              {step.title}
            </h3>
            <p className="mb-4 text-sm font-normal text-muted-foreground md:text-base">
              {step.description}
            </p>
            {step.render}
          </li>
        ))}
      </ol>
      <div className="grid items-center gap-4 md:flex md:justify-end">
        <Button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded px-8"
          type="submit"
        >
          <DownloadIcon className="!h-4 !w-4" />
          Import History
        </Button>
      </div>
    </div>
  );
};

export function StepOne() {
  return (
    <>
      <div className="flex w-full items-center space-x-2">
        <div className="relative w-full" data-state="closed">
          <div className="h-10 flex items-center justify-between border gap-2 rounded-md pr-1.5">
            <Input
              className="bg-transparent placeholder:text-foreground border-0 overflow-auto resize-none w-full font-mono text-xs text-foreground focus:outline-none dark:shadow-none"
              disabled={true}
              type="text"
              placeholder={
                'iwr -useb "https://wuwatracker.com/import.ps1" | iex'
              }
            />
            <CopyButton
              value={
                'iwr -useb "https://wuwatracker.com/import.ps1" | iex'
              }
            />
          </div>
        </div>
      </div>
      <p className="my-2 text-xs text-justify font-normal text-muted-foreground md:text-sm">
        LƯU Ý: Mã lệnh này hoàn toàn <b>KHÔNG</b> can thiệp gì đến
        file game của bạn (chỉnh sửa, thêm bớt, xóa file). Mã lệnh chỉ
        đọc dữ liệu từ file lịch sử của bạn và gửi lên máy chủ của
        chúng tôi để xử lý.
        <br />
        Đây là mã lệnh được sử dụng bởi{' '}
        <Link
          className="text-five-star hover:underline hover:underline-offset-3"
          rel="noopener noreferrer"
          target="_blank"
          to="https://wuwatracker.com/"
        >
          wuwatracker.com
        </Link>{' '}
        nên bạn hoàn toàn có thể yên tâm sử dụng.
      </p>
      <Link
        className="text-five-star underline hover:font-semibold text-base"
        rel="noopener noreferrer"
        target="_blank"
        to="https://wuwatracker.com/import.ps1"
      >
        Tải về mã lệnh
      </Link>
    </>
  );
}

export function StepTwo() {
  const actionData = useActionData<typeof action>();
  return (
    <div className="relative">
      <Input
        name="gacha_url"
        className="flex h-10 w-full rounded-md px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:ring-none border border-border bg-background font-mono text-xs shadow-inner focus:outline-none dark:shadow-none"
      />
      {actionData?.errors?.url ? (
        <p
          id={Date.now().toString()}
          className="absolute -bottom-6 left-1 text-[0.8rem] font-medium text-red-400"
        >
          {actionData?.errors.url}
        </p>
      ) : null}
    </div>
  );
}

export function StepTwoTitle() {
  return (
    <span className="flex flex-col gap-x-2 md:flex-row">
      Dán link của bạn vào đây.
      <span className="flex gap-x-2 items-center shortcut mt-1 text-sm text-muted-foreground">
        Gợi ý: sử dụng phím tắt
        <span className="text-sm text-muted-foreground">
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-sm font-medium text-muted-foreground opacity-100">
            <span className="text-xs">Ctrl + V </span>
          </kbd>
        </span>
      </span>
    </span>
  );
}

export function StepThree() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox name="share" id="terms-controlled" />
        <label
          htmlFor="terms-controlled"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Chia sẻ dữ liệu Gacha với chúng tôi
        </label>
      </div>
    </div>
  );
}
