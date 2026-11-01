const publicAsset = (path) =>
  `${import.meta.env.BASE_URL}${path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/")}`;

export const projects = [
  {
    id: "princess-coffee",
    nameKey: "projects.princess.name",
    descriptionKey: "projects.princess.description",
    image: publicAsset(
      "img/princes-coffee/images/Macbook-Air-prinses-coffee.png",
    ),
    video: publicAsset(
      "img/princes-coffee/vedio/Recording 2026-05-26 013436.mp4",
    ),
    link: "https://ahmed-elbehy.github.io/princess-coffee/",
  },
  {
    id: "rogina-cafe",
    nameKey: "projects.rogina.name",
    descriptionKey: "projects.rogina.description",
    image: publicAsset(
      "img/RogenCafe/images/Macbook-Air-127.0.0.1.png",
    ),
    video: publicAsset(
      "img/RogenCafe/videos/Recording 2026-03-06 033222.mp4",
    ),
    link: "https://ahmed-elbehy.github.io/Rogina-Cafe/",
  },
  {
    id: "yammy",
    nameKey: "projects.yammy.name",
    descriptionKey: "projects.yammy.description",
    image: publicAsset("img/yammy/images/image1.png"),
    video: publicAsset("img/yammy/videos/yammyVidieo.mp4"),
    link: "https://ahmed-elbehy.github.io/yammy/",
  },
  {
    id: "bakery",
    nameKey: "projects.bakery.name",
    descriptionKey: "projects.bakery.description",
    image: publicAsset("img/Bekary/images/Screenshot 2026-02-28 032308.png"),
    video: publicAsset("img/Bekary/video/Screen Recording 2026-02-28 032632.mp4"),
    link: "https://ahmed-elbehy.github.io/Bakery/",
  },
  {
    id: "creative-portfolio",
    nameKey: "projects.creative.name",
    descriptionKey: "projects.creative.description",
    image: publicAsset("img/Creative/images/Galaxy-Tab-S7-127.0.0.1.png"),
    video: publicAsset("img/Creative/videos/Recording 2026-03-04 055702.mp4"),
    link: "https://ahmed-elbehy.github.io/creative-portfolio/",
  },
  {
    id: "foker",
    nameKey: "projects.foker.name",
    descriptionKey: "projects.foker.description",
    image: publicAsset("img/Foker/images/iPad-PRO-11-127.0.0.1.png"),
    video: publicAsset("img/Foker/videos/Recording 2026-03-02 034817.mp4"),
    link: "https://ahmed-elbehy.github.io/foker/",
  },
  {
    id: "games",
    nameKey: "projects.games.name",
    descriptionKey: "projects.games.description",
    image: publicAsset("img/Games/images/iPad-Air-4-127.0.0.1.png"),
    video: publicAsset("img/Games/videos/Recording 2026-03-05 055201.mp4"),
    link: "https://ahmed-elbehy.github.io/my-Games/",
  },
  {
    id: "previous-portfolio",
    nameKey: "projects.previousPortfolio.name",
    descriptionKey: "projects.previousPortfolio.description",
    image: publicAsset("img/my-portfolio/images/Screenshot 2026-05-09 232020.png"),
    video: publicAsset("img/my-portfolio/vedios/Recording 2026-05-10 000459.mp4"),
    link: "https://ahmed-elbehy.github.io/Ahmed-Elbehy-Portfolio/",
  },
];

export default projects;
