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
];

export default projects;
