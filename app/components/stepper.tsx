import { cn } from '@/lib/utils';
import * as React from 'react';

const StepperWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-state="active"
    data-orientation="horizontal"
    role="tabpanel"
    aria-labelledby="radix-:r2c:-trigger-pc1"
    id="radix-:r2c:-content-pc1"
    tabIndex={0}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className,
    )}
    {...props}
  ></div>
));
StepperWrapper.displayName = 'StepperWrapper';

const Stepper = React.forwardRef<
  HTMLOListElement,
  React.HTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn('relative ms-3 mt-4 border-s', className)}
    {...props}
  />
));

Stepper.displayName = 'Stepper';

const StepperList = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn(
      'mb-1 font-medium leading-none tracking-tight',
      className,
    )}
    {...props}
  />
));
StepperList.displayName = 'StepperList';

export { StepperWrapper, Stepper, StepperList };
