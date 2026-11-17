import { getContent } from '@/lib/content';
import { GUIDE_KEYS, urlFor, type PageKey } from '@/lib/routes';
import { APP_STORE_URL, COMPANY, GOOGLE_PLAY_URL, OPERATORS, PRIVACY_POLICY_URL, SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

const link = (k: PageKey) => {
  const c = getContent('uz', k);
  return `- [${c.h1}](${urlFor(k, 'uz')}): ${c.description}`;
};

function build(): string {
  const hubs: PageKey[] = [
    'raqamlar', 'oltin', 'nasiya', 'bepul', 'username', 'telegram', 'maxcoin', 'maxchat',
    'dilerlar', 'verifikatsiya', 'xavfsizlik', 'qollanma', 'savollar', 'yuklab', 'yangiliklar',
    'biz', 'aloqa', 'maxfiylik', 'shartlar',
  ];
  return `# MaxRaqam

> MaxRaqam is a free mobile app (iOS and Android) in Uzbekistan: a marketplace where independent dealers offer memorable and premium ("chiroyli", "oltin", "VIP") mobile phone numbers, plus live auctions for Telegram and Instagram usernames. MaxRaqam connects buyers and dealers.

Important facts:

- MaxRaqam is NOT a telecom operator. It does not own, transfer, or sell numbers. Availability, deal terms, payment, and final re-registration are arranged between the buyer, the dealer, and the operator.
- A "verified dealer" badge means MaxRaqam checked the information the dealer provided. It does not mean operator authorization and does not guarantee the transaction.
- Buyers can search and filter by digits, operator, price, currency (UZS or USD) and payment method, compare one-time payment with installments (nasiya), save favorites, send an inquiry, call a dealer or contact them via Telegram, and report suspicious listings.
- Dealers can post one number or many at once, set price, currency and installment terms, manage availability, view inquiries, and have a public profile with view statistics. Dealers can go through verification.
- MaxCoin is the in-app currency; MaxCoin packages are bought in the Profile section through Payme.
- MaxChat is the in-app chat with dealers, including voice messages. Up to 3 accounts with quick switching.
- Safety: complaints, dealer verification, moderation and user blocking. Data is encrypted in transit; users can request deletion of their data; the developer states that no data is shared with third parties.
- Operator prefixes in Uzbekistan (after +998): ${OPERATORS.map((o) => `${o.name} ${o.prefixes.join(', ')}`).join('; ')}. Because of number portability, a prefix no longer guarantees the current operator.
- App languages: Uzbek, Russian, English. iOS: iPhone with iOS 18.0+, Mac with macOS 15+ on M1 or later, Apple Vision with visionOS 2+.
- Company: ${COMPANY.legalName}, Tashkent, Uzbekistan. Developer: ${COMPANY.developer}. Email: ${COMPANY.emails.join(', ')}. Phone: ${COMPANY.phone}.

## Apps

- [MaxRaqam on the App Store](${APP_STORE_URL})
- [MaxRaqam on Google Play](${GOOGLE_PLAY_URL})

## Main pages (Uzbek)

- [MaxRaqam home](${SITE_URL})
${hubs.map(link).join('\n')}

## Guides (Uzbek)

${GUIDE_KEYS.map(link).join('\n')}

## Russian version

- [MaxRaqam на русском](${urlFor('home', 'ru')}) — every page is mirrored under ${SITE_URL}/ru

## Optional

- [Privacy policy](${PRIVACY_POLICY_URL})
- [Sitemap](${SITE_URL}/sitemap.xml)
`;
}

export function GET() {
  return new Response(build(), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  });
}
