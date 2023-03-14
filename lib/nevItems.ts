export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const nevItems: { name: string; items: Item[] }[] = [
  {
    name: 'Technical Doc',
    items: [
      {
        name: 'Techincal Info',
        slug: 'techenical-info',
      },
      {
        name: 'Development Process',
        slug: 'development-process',
      },
    ],
  },
];
