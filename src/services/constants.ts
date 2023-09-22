export type WorkObject = {
  title: string;
  description: string;
  image: string;
  color: string;
  url: string;
};

export const ourWorks: WorkObject[] = [
  {
    title: "Tolq",
    description:
      "Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.",
    image: "/works/tolq.svg",
    url: "/works/tolq",
    color: "#A9BC87",
  },
  {
    title: "Feedback Labs",
    description:
      "Feedback Labs turns feedback into actionable insights for your team.",
    image: "/works/feedbacklabs.svg",
    url: "/works/feedbacklabs",
    color: " #8BB5C9",
  },
  {
    title: "Codekeeper",
    description:
      "Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.",
    image: "/works/codekeeper.svg",
    url: "/works/codekeeper",
    color: "#00A0B6",
  },
  {
    title: "LegalSite",
    description:
      "Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.",
    image: "/works/legalsite.svg",
    url: "/works/legal-site",
    color: "#8B60D3",
  },
];
