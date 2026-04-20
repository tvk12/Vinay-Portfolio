export default function ArtworkBlock({ variant = 'logo-v', className = '', imageSrc = '', imageAlt = '' }) {
  const shared = "relative overflow-hidden rounded-[1.65rem] border-[3px] border-border";

  if (variant === 'logo-v') {
    return (
      <div className={`${shared} bg-[#ffc71e] ${className}`}>
        <div className="absolute inset-[8%] rounded-[1.3rem] border-[3px] border-[#f0d678] bg-[#ffd44b]" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-display text-[min(18vw,10rem)] font-black leading-none text-ink">V</span>
        </div>
      </div>
    );
  }

  if (variant === 'split-screen') {
    return (
      <div className={`${shared} grid grid-cols-2 bg-white ${className}`}>
        <div className="relative bg-[#d7ebff]">
          <div className="absolute inset-x-[10%] top-[8%] h-[10%] rounded-full bg-[#b6d1f3]" />
          <div className="absolute left-[28%] top-[22%] h-[24%] w-[44%] rounded-full bg-[#b1d1f2]" />
          <div className="absolute bottom-[16%] left-[10%] right-[10%] h-[12%] rounded-full bg-[#ffffff]" />
        </div>
        <div className="relative bg-[#171717]">
          <div className="absolute inset-x-[10%] top-[8%] h-[10%] rounded-full bg-[#111111]" />
          <div className="absolute left-[28%] top-[22%] h-[24%] w-[44%] rounded-full bg-[#b1d1f2]" />
          <div className="absolute bottom-[16%] left-[10%] right-[10%] h-[12%] rounded-full bg-[#ffffff]" />
        </div>
      </div>
    );
  }

  if (variant === 'dark-dashboard') {
    return (
      <div className={`${shared} bg-[#202020] ${className}`}>
        <div className="absolute left-[4%] top-[6%] h-[10%] w-[28%] rounded-md border-2 border-[#5a3a15] bg-[#ff8c1a]" />
        <div className="absolute left-[36%] top-[10%] h-[70%] w-[30%] rounded-md bg-[#2c2c2c]" />
        <div className="absolute right-[5%] top-[10%] h-[24%] w-[24%] rounded-md bg-[#2c2c2c]" />
        <div className="absolute left-[7%] top-[24%] h-[54%] w-[20%] rounded-md bg-[#2c2c2c]" />
        <div className="absolute right-[8%] bottom-[10%] h-[28%] w-[24%] rounded-md bg-[#2c2c2c]" />
      </div>
    );
  }

  if (variant === 'arc') {
    return (
      <div className={`${shared} bg-[#dd281b] ${className}`}>
        <div className="absolute inset-[8%] rounded-[1.3rem] border-[3px] border-[#ef8678] bg-[#d63d2a]" />
        <div className="absolute inset-0 grid place-items-center">
          <div className="h-24 w-40 rounded-full border-[8px] border-white border-l-transparent border-b-transparent rotate-[-15deg] md:h-32 md:w-52" />
        </div>
      </div>
    );
  }

  if (variant === 'swoosh') {
    return (
      <div className={`${shared} bg-white ${className}`}>
        <div className="absolute inset-[8%] rounded-[1.3rem] border-[3px] border-[#e4ddcf] bg-white" />
        <div className="absolute inset-0 grid place-items-center">
          <div className="h-8 w-48 skew-x-[-28deg] rounded-[90%_10%_50%_0%] bg-black md:h-10 md:w-64" />
        </div>
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className={`${shared} bg-[#0d4d23] ${className}`}>
        <div className="absolute inset-[8%] rounded-[1.3rem] border-[3px] border-[#4d7c55] bg-[#235c2b]" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-center font-display text-4xl font-black text-[#c0ff5b] md:text-6xl">ML</span>
        </div>
      </div>
    );
  }

  if (variant === 'pilot') {
    return (
      <div className={`${shared} bg-[#ffcb3b] ${className}`}>
        <div className="absolute inset-[8%] rounded-[1.3rem] border-[3px] border-[#efcf74] bg-[#ffd44b]" />
        <div className="absolute inset-[8%] bg-[radial-gradient(circle_at_30%_20%,white_0,white_12%,transparent_13%)]" />
        <div className="absolute bottom-[8%] left-[2%] right-[2%] h-[48%] rounded-t-[50%] border-[3px] border-border bg-white" />
      </div>
    );
  }

  if (variant === 'healmind') {
    return (
      <div className={`${shared} bg-[#dff5ea] ${className}`}>
        <div className="absolute inset-[8%] rounded-[1.3rem] border-[3px] border-[#abdcc5] bg-[#8ec5c9]" />
        <div className="absolute left-[19%] top-[56%] h-[18%] w-[46%] rounded-[100%_100%_90%_30%] border-[3px] border-[#2d5260] bg-[#ffd4bc] rotate-[-8deg]" />
        <div className="absolute left-[28%] top-[18%] h-[34%] w-[40%] rounded-[44%_46%_40%_42%] border-[3px] border-[#2d5260] bg-[#f1b08a]" />
        <div className="absolute left-[46%] top-[26%] h-[10%] w-[10%] rounded-full border-[3px] border-[#2d5260] bg-[#8ec5c9]" />
        <div className="absolute left-[17%] top-[36%] h-[14%] w-[8%] rotate-[-24deg] rounded-full border-[3px] border-[#55785f] bg-[#7dbd7a]" />
        <div className="absolute right-[18%] top-[34%] h-[14%] w-[8%] rotate-[28deg] rounded-full border-[3px] border-[#55785f] bg-[#7dbd7a]" />
        <div className="absolute left-[24%] top-[20%] h-[4%] w-[4%] rounded-full bg-white/80" />
        <div className="absolute right-[22%] top-[16%] h-[4%] w-[4%] rotate-45 bg-[#ffe3a6]" />
      </div>
    );
  }

  if (variant === 'neuralyn') {
    return (
      <div className={`${shared} bg-[#171717] ${className}`}>
        <div className="absolute inset-[8%] rounded-[1.3rem] border-[3px] border-[#5968b3] bg-[linear-gradient(135deg,#33215f,#304d91)]" />
        <div className="absolute left-[18%] top-[16%] h-[10%] w-[18%] rounded-full bg-white/10" />
        <div className="absolute right-[16%] top-[16%] h-[10%] w-[18%] rounded-full bg-[#f9bb64]/20" />
        <div className="absolute inset-0">
          <div className="absolute left-[26%] top-[26%] h-[12%] w-[8%] rounded bg-[#c8d5ff]" />
          <div className="absolute left-[46%] top-[18%] h-[12%] w-[8%] rounded bg-[#c8d5ff]" />
          <div className="absolute right-[24%] top-[28%] h-[12%] w-[8%] rounded bg-[#f4c48a]" />
          <div className="absolute left-[34%] bottom-[24%] h-[12%] w-[8%] rounded bg-[#c8d5ff]" />
          <div className="absolute right-[30%] bottom-[22%] h-[12%] w-[8%] rounded bg-[#c8d5ff]" />
          <div className="absolute left-[50%] top-[44%] h-[14%] w-[14%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_28px_rgba(255,255,255,0.7)]" />
          <div className="absolute left-[50%] top-[44%] h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
          <div className="absolute left-[30%] top-[32%] h-[2px] w-[24%] rotate-[18deg] bg-[#9fd9ff]" />
          <div className="absolute left-[48%] top-[26%] h-[2px] w-[18%] rotate-[72deg] bg-[#9fd9ff]" />
          <div className="absolute left-[54%] top-[42%] h-[2px] w-[24%] rotate-[-18deg] bg-[#9fd9ff]" />
          <div className="absolute left-[34%] top-[50%] h-[2px] w-[18%] rotate-[-48deg] bg-[#d4b4ff]" />
          <div className="absolute right-[22%] top-[42%] h-[16%] w-[10%] rounded-[40%_40%_50%_50%] bg-[#c6dda8]" />
          <div className="absolute left-[18%] bottom-[26%] h-[16%] w-[10%] rounded-[40%_40%_50%_50%] bg-[#c8d5ff]" />
          <div className="absolute right-[18%] bottom-[24%] h-[16%] w-[10%] rounded-[40%_40%_50%_50%] bg-[#f4c9b8]" />
        </div>
      </div>
    );
  }

  if (variant === 'grocery-agent') {
    return (
      <div className={`${shared} bg-[#1d2e1f] ${className}`}>
        <div className="absolute inset-[8%] rounded-[1.3rem] border-[3px] border-[#5f8b63] bg-[#2d4931]" />
        <div className="absolute left-[18%] top-[26%] h-[34%] w-[44%] rounded-[1rem] border-[3px] border-[#d6ef9d] bg-[#9fd36a]" />
        <div className="absolute left-[30%] top-[18%] h-[8%] w-[18%] rounded-full border-[3px] border-[#d6ef9d] bg-transparent" />
        <div className="absolute left-[24%] bottom-[24%] h-[8%] w-[8%] rounded-full bg-[#ffd166]" />
        <div className="absolute left-[48%] bottom-[24%] h-[8%] w-[8%] rounded-full bg-[#ffd166]" />
        <div className="absolute right-[18%] top-[26%] h-[12%] w-[14%] rounded-full bg-[#ff6b6b]" />
        <div className="absolute right-[24%] top-[42%] h-[18%] w-[8%] rounded-[999px] bg-[#8fd14f]" />
        <div className="absolute right-[12%] bottom-[24%] h-[16%] w-[18%] rounded-[999px] bg-[#ffb703]" />
      </div>
    );
  }

  if (variant === 'spam-dashboard') {
    return (
      <div className={`${shared} bg-white ${className}`}>
        <div className="absolute inset-x-0 top-0 h-[10%] bg-[#ffa424]" />
        <div className="absolute left-[10%] top-[18%] font-display text-[min(10vw,5rem)] font-black text-ink">V.</div>
        <div className="absolute bottom-[14%] left-[10%] right-[10%] top-[46%] bg-[repeating-linear-gradient(to_right,#0000_0,#0000_7px,#201d1b66_7px,#201d1b66_9px)] opacity-35" />
        <div className="absolute bottom-[18%] left-[20%] h-[22%] w-[7%] bg-ink" />
        <div className="absolute bottom-[18%] left-[44%] h-[34%] w-[7%] bg-ink" />
        <div className="absolute bottom-[18%] left-[68%] h-[22%] w-[7%] bg-ink" />
      </div>
    );
  }

  return <div className={`${shared} bg-lavender ${className}`} />;
}
