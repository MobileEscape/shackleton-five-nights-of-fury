interface Asset {
  label: string;
  icon?: string;
  text?: string;
  link?: string;
  parts?: Asset[];
}

const contents: Asset[] = [
  {
    label: "Ice Pack Map",
    link: "/our-apologies?index=0",
  },
  {
    label: "Penguin Artwork",
    link: "/our-apologies?index=1",
  },
  {
    label: "Seating Chart",
    link: "/our-apologies?index=2",
  },
  {
    label: "Stove Parts x 4",
    link: "/our-apologies?index=2",
  },
  {
    label: "Journal Pages x 5",
    link: "/our-apologies?index=3",
  },
  {
    label: "Tobacco Paper",
    link: "/our-apologies?index=4",
  },
  {
    label: "Wuzzle Puzzle",
    link: "/our-apologies?index=5",
  },
  {
    label: "Compass Wheel",
    link: "/our-apologies?index=6",
  },
  {
    label: "Wild's Note",
    link: "/our-apologies?index=6",
  },
  {
    label: "Flow Card",
    link: "/our-apologies?index=7",
  },
];

export { contents, type Asset };
