export interface NewsItem {
  id: string
  category: string
  title: string
  description: string
  image: string
  href: string
  date: string
}

export const ALL_NEWS: NewsItem[] = [
  {
    id: '1',
    category: 'Global Trends',
    title: 'Tech-Ready Leadership: A New Paradigm',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    href: '/blog',
    date: '2026-05-10',
  },
  {
    id: '2',
    category: 'Executive Search',
    title: 'The New Profile of the C-Suite Executive in Latin America',
    description:
      'Organizations are redefining leadership criteria. Cultural adaptability and digital fluency are now table stakes for the top roles.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    href: '/blog',
    date: '2026-05-05',
  },
  {
    id: '3',
    category: 'Talent Strategy',
    title: 'Succession Planning: Building Pipelines That Last',
    description:
      'Companies that invest in long-term succession frameworks outperform peers by 20% in retention.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    href: '/blog',
    date: '2026-04-28',
  },
  {
    id: '4',
    category: 'Board Advisory',
    title: 'The Future of Board Governance in 2026',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    image: 'https://images.unsplash.com/photo-1664575198308-3959904fa430?w=800&q=80',
    href: '/blog',
    date: '2026-04-20',
  },
  {
    id: '5',
    category: 'Leadership',
    title: 'Building Resilient Leadership in Uncertain Times',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80',
    href: '/blog',
    date: '2026-04-14',
  },
  {
    id: '6',
    category: 'Executive Search',
    title: 'How Top Companies Attract C-Suite Talent',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    href: '/blog',
    date: '2026-04-07',
  },
  {
    id: '7',
    category: 'Talent Strategy',
    title: 'DE&I as a Competitive Advantage in 2026',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    href: '/blog',
    date: '2026-03-30',
  },
  {
    id: '8',
    category: 'Global Trends',
    title: 'ESG and Its Impact on Corporate Talent Decisions',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    href: '/blog',
    date: '2026-03-18',
  },
  {
    id: '9',
    category: 'Leadership',
    title: 'Culture as the New Currency of Executive Retention',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80',
    href: '/blog',
    date: '2026-03-05',
  },
]

export function getNewsByCategory(category: string, limit = 3): NewsItem[] {
  const filtered = ALL_NEWS.filter((n) => n.category === category)
  return filtered.length >= limit ? filtered.slice(0, limit) : ALL_NEWS.slice(0, limit)
}
