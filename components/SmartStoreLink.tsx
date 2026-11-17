'use client';

import { useEffect, useState } from 'react';
import { APP_STORE_URL, GOOGLE_PLAY_URL } from '@/lib/site';

/**
 * "Download the app" link. Server-rendered pointing to the download page; on phones it is
 * upgraded to the matching store (App Store on iOS/iPadOS, Google Play on Android).
 */
export function SmartStoreLink({ fallback, label, className }: { fallback: string; label: string; className?: string }) {
  const [href, setHref] = useState(fallback);
  useEffect(() => {
    const ua = navigator.userAgent;
    const iPadOS = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
    if (/iPhone|iPad|iPod/i.test(ua) || iPadOS) setHref(APP_STORE_URL);
    else if (/Android/i.test(ua)) setHref(GOOGLE_PLAY_URL);
  }, []);
  const external = href.startsWith('http');
  return (
    <a href={href} className={className} {...(external ? { target: '_blank', rel: 'noopener' } : {})}>
      {label}
    </a>
  );
}
