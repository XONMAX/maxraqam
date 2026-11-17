import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MaxRaqam — chiroyli raqamlar va username savdosi',
    short_name: 'MaxRaqam',
    description:
      "MaxRaqam — mustaqil dilerlarning chiroyli telefon raqamlari va Telegram, Instagram username auksionlari uchun bepul ilova.",
    start_url: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#050505',
    lang: 'uz',
    icons: [
      { src: '/icon.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  };
}
