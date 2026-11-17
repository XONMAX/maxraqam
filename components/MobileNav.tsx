'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/** Header navigation: always visible on desktop, a tap/keyboard-operated panel on mobile. */
export function MobileNav({
  children,
  navLabel,
  openLabel,
  closeLabel,
}: {
  children: ReactNode;
  navLabel: string;
  openLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        button.current?.focus();
      }
    };
    const onResize = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <>
      <button
        ref={button}
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="nav-bars" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <nav
        id="site-nav"
        className="site-nav"
        data-open={open ? 'true' : 'false'}
        aria-label={navLabel}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest('a')) setOpen(false);
        }}
      >
        {children}
      </nav>
    </>
  );
}
