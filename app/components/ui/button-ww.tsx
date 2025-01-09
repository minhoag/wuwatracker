import * as React from 'react';

interface Props {
  eventName: string;
  eventDuration: number;
  eventImage: string;
}

export function ButtonWuwa({
  eventName,
  eventDuration,
  eventImage,
}: Props) {
  return (
    <span className="w-full h-full p-0 truncate relative z-10 text-xs sm:text-base flex gap-3">
      <div className="my-2 mx-3 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 relative z-10 dark:bg-foreground/10 dark:text-foreground bg-primary/10 text-primary border-none group-hover:bg-primary dark:group-hover:bg-primary/10 dark:group-hover:text-primary group-hover:text-background">
        {eventDuration}d left
      </div>
      <span className="truncate my-auto">{eventName}</span>
      <img
        alt="Tower of Adversity: Hazard Revisited"
        loading="lazy"
        width={1440}
        height={520}
        decoding="async"
        data-nimg={1}
        className="absolute object-cover right-0 h-full w-96 md:w-full rounded dark:brightness-50 brightness-[0.85] dark:group-hover:brightness-90 group-hover:brightness-95 transition-all ease-in-out"
        style={{
          color: 'transparent',
          WebkitMaskImage:
            'linear-gradient(to left, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0) 50%)',
          maskImage:
            'linear-gradient(to left, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0) 50%)',
          backgroundColor: 'rgb(var(--background))',
        }}
        src={eventImage}
      />
    </span>
  );
}
