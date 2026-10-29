type BrandLogoProps = {
  variant?: 'light' | 'dark';
};

export function BrandLogo({ variant = 'light' }: BrandLogoProps) {
  const isLight = variant === 'light';

  return (
    <span className="inline-flex items-center gap-2 sm:gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary/45 bg-navy shadow-lg shadow-navy/20 sm:h-11 sm:w-11 sm:rounded-2xl">
        <svg
          aria-hidden="true"
          viewBox="0 0 40 40"
          fill="none"
          className="h-7 w-7 sm:h-8 sm:w-8"
        >
          <path
            d="M7.5 11.5 13.2 28.5 19 11.5"
            stroke="white"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m19 28.5 7.3-17 7.2 17m-11.3-7.2h8.2"
            stroke="#d58a60"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 33h24"
            stroke="#d58a60"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity=".7"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`whitespace-nowrap text-[17px] font-bold tracking-[-0.045em] sm:text-[21px] lg:text-[23px] ${
            isLight ? 'text-white' : 'text-navy'
          }`}
        >
          Vehicle <span className="font-semibold text-primary">Analyse</span>
        </span>
        <span
          className={`mt-1 whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.16em] sm:mt-1.5 sm:text-[10px] sm:tracking-[0.18em] ${
            isLight ? 'text-white' : 'text-primary'
          }`}
        >
          Vehicle checks · UK
        </span>
      </span>
    </span>
  );
}
