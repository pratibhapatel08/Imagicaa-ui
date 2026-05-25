export const OFFERS_SECTION = {
  id: 'offers',
  eyebrow: 'Limited Time',
  title: 'Exclusive Park Offers',
  description:
    'Save more on your next visit with seasonal packages, family bundles, and members-only deals.',
}

export const OFFERS = [
  {
    id: 'weekend-family-pass',
    title: 'Weekend Family Pass',
    description:
      'Four park entries plus meal vouchers — perfect for a full day of rides, shows, and dining.',
    discount: '25% OFF',
    date: { label: 'Valid Until', value: 'Jun 30, 2026' },
    time: { label: 'Valid On', value: 'Sat – Sun' },
    image:
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Family having fun at an amusement park',
    href: '#book-weekend-family',
  },
  {
    id: 'early-bird-tickets',
    title: 'Early Bird Tickets',
    description:
      'Book online 7 days ahead and unlock priority entry with reduced queue times on select rides.',
    discount: '15% OFF',
    date: { label: 'Valid Until', value: 'Dec 31, 2026' },
    time: { label: 'Entry Window', value: '9:00 AM – 11:00 AM' },
    image:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Theme park entrance in the morning',
    href: '#book-early-bird',
  },
  {
    id: 'birthday-celebration',
    title: 'Birthday Celebration Pack',
    description:
      'Includes birthday décor, character meet-and-greet, cake slice, and a souvenir photo frame.',
    discount: '30% OFF',
    date: { label: 'Valid Until', value: 'Aug 15, 2026' },
    time: { label: 'Party Slot', value: '2:00 PM – 5:00 PM' },
    image:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Birthday celebration with balloons and cake',
    href: '#book-birthday',
  },
  {
    id: 'monsoon-splash-deal',
    title: 'Monsoon Splash Deal',
    description:
      'All-access water zone entry with locker rental and complimentary rain ponchos for every guest.',
    discount: '20% OFF',
    date: { label: 'Valid Until', value: 'Sep 30, 2026' },
    time: { label: 'Park Hours', value: '11:00 AM – 7:00 PM' },
    image:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Guests enjoying a water park attraction',
    href: '#book-monsoon',
  },
]
