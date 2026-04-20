import { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Volume2, X } from 'lucide-react';
import { siteData } from '../data/portfolioData';

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioContextRef = useRef(null);

  const navLinks = [
    { name: 'About me', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const playClick = (force = false) => {
    if (!force && !soundEnabled) return;

    const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextConstructor) return;

    const context = audioContextRef.current || new AudioContextConstructor();
    audioContextRef.current = context;

    if (context.state === 'suspended') {
      context.resume();
    }

    const now = context.currentTime;
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(720, now);
    oscillator.frequency.exponentialRampToValueAtTime(220, now + 0.055);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.16, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.075);

    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.08);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 overflow-hidden border-b-[3px] border-border bg-mustard/95 shadow-[0_10px_24px_rgba(239,232,219,0.96)] backdrop-blur-2xl backdrop-saturate-150">
      <div className="absolute inset-0 -z-10 bg-canvas/90 backdrop-blur-2xl" />
      <div className="relative mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4 pb-3 pt-5 md:px-8 md:pb-3 md:pt-5">
        <Link to="/" onClick={() => playClick()} className="leading-[0.9] text-ink">
          <div className="font-display text-[1.7rem] font-medium tracking-tight md:text-[2.1rem]">
            {siteData.brandLines.join(' ')}
          </div>
        </Link>

        <nav className="hidden items-center gap-2.5 md:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => playClick()}
                className={`site-button min-w-[94px] px-2.5 py-1.5 text-[0.76rem] ${isActive ? 'site-button-purple' : ''}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <button
            type="button"
            onClick={() => {
              playClick(true);
              setSoundEnabled((value) => !value);
            }}
            aria-pressed={soundEnabled}
            className={`site-button min-w-[106px] gap-2 px-2 py-1.5 ${soundEnabled ? 'text-ink' : 'text-muted'}`}
          >
            <span className={`flex h-6 w-10 items-center rounded-full border-[3px] border-border px-1 transition-colors ${soundEnabled ? 'bg-[#ffd85a]' : 'bg-white'}`}>
              <span className={`block h-4 w-4 rounded-full border-[3px] border-border bg-surface transition-transform ${soundEnabled ? 'translate-x-4' : ''}`} />
            </span>
            <span className="text-[0.82rem] font-semibold">Sound</span>
          </button>
        </div>

        <button
          type="button"
          onClick={() => {
            playClick();
            setOpen((value) => !value);
          }}
          className="site-button px-2.5 py-2 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t-[3px] border-border bg-mustard px-4 pb-6 md:hidden">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => {
                    playClick();
                    setOpen(false);
                  }}
                  className={`site-button justify-center ${isActive ? 'site-button-purple' : ''}`}
                >
                  {link.name}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={() => {
                playClick(true);
                setSoundEnabled((value) => !value);
              }}
              aria-pressed={soundEnabled}
              className={`site-button justify-center gap-2 ${soundEnabled ? 'text-ink' : 'text-muted'}`}
            >
              <Volume2 size={16} />
              Sound {soundEnabled ? 'On' : 'Off'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
