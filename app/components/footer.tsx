import { Link } from '@remix-run/react';

export function Footer() {
  return (
    <footer className="mt-auto flex flex-col justify-between border-t bg-sidebar p-8 text-center text-sm font-medium text-muted-foreground sm:text-start">
      <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
        <div className="flex w-full max-w-lg shrink flex-col items-center justify-between gap-6 lg:items-start">
          <div>
            <span className="flex items-center justify-center gap-2 lg:justify-start">
              <div className="flex aspect-square size-12 items-center justify-center rounded-full bg-primary dark:bg-transparent">
                <div className="relative size-8"></div>
              </div>
              <p className="text-2xl font-medium text-foreground">
                wuwatracker
                <span className="text-primary dark:text-five-star">
                  .com
                </span>
              </p>
            </span>
            <p className="mt-4 text-sm font-normal text-muted-foreground">
              This is an independent fan project, not affiliated with
              or endorsed by Kuro Games. All game assets, content, and
              trademarks belong to their respective owners.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 lg:gap-20">
          <div>
            <h3 className="mb-2 font-bold text-foreground dark:font-semibold">
              Development
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="font-normal hover:text-primary">
                <Link to="https://wuwatracker.com/terms-and-conditions">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="font-normal hover:text-primary">
                <Link to="https://wuwatracker.com/terms-and-conditions">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-bold text-foreground dark:font-semibold">
              Legal
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="font-normal hover:text-primary">
                <Link to="https://wuwatracker.com/terms-and-conditions">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="font-normal hover:text-primary">
                <Link to="https://wuwatracker.com/terms-and-conditions">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-bold text-foreground dark:font-semibold">
              Partners
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="font-normal hover:text-primary">
                <Link to="https://wuwatracker.com/terms-and-conditions">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm text-muted-foreground lg:flex-row lg:items-center lg:text-left">
        <div className="flex items-center justify-center gap-2">
          <div>
            <div className="relative inline-grid h-7 grid-cols-[1fr_1fr] items-center text-sm font-medium">
              <button
                type="button"
                role="switch"
                aria-checked="false"
                data-state="unchecked"
                value="on"
                className="peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary peer absolute inset-0 h-[inherit] w-auto transition-all data-[state=unchecked]:bg-input/50 [&amp;_span]:z-10 [&amp;_span]:h-full [&amp;_span]:w-1/2 [&amp;_span]:transition-transform [&amp;_span]:duration-300 [&amp;_span]:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)] data-[state=checked]:[&amp;_span]:translate-x-full rtl:data-[state=checked]:[&amp;_span]:-translate-x-full"
                id="switch-theme"
              >
                <span
                  data-state="unchecked"
                  className="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
                ></span>
              </button>
              <span className="pointer-events-none relative ms-0.5 flex min-w-6 items-center justify-center text-center transition-transform duration-500 ease-in-out [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:invisible peer-data-[state=unchecked]:translate-x-full rtl:peer-data-[state=unchecked]:-translate-x-full"></span>
              <span className="pointer-events-none relative me-0.5 flex min-w-6 items-center justify-center text-center transition-transform duration-500 ease-in-out [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] peer-data-[state=unchecked]:invisible peer-data-[state=checked]:-translate-x-full peer-data-[state=checked]:text-background rtl:peer-data-[state=checked]:translate-x-full"></span>
            </div>
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
              htmlFor="switch-theme"
            >
              Theme switch
            </label>
          </div>
        </div>
        <p>© 2025 WuWa Tracker </p>
        <div className="flex flex-col gap-2 pr-0.5 pt-1">
          <div className="flex items-center justify-center lg:justify-end">
            <Link to="https://wuwatracker.com/terms-and-conditions">
              Terms &amp; Conditions
            </Link>
            <Link to="https://wuwatracker.com/terms-and-conditions">
              Terms &amp; Conditions
            </Link>
            <Link to="https://wuwatracker.com/terms-and-conditions">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
