// Services and plans data from README.md

export const services = [
  {
    id: "landing-page",
    nameKey: "services.landingPage.name",
    // Price is localized via i18n: "$20" in English, "20$" in Arabic
    priceKey: "services.landingPage.price",
    featured: true,
  },
  {
    id: "full-website",
    nameKey: "services.fullWebsite.name",
    descriptionKey: "services.fullWebsite.description",
    featured: false,
  },
];

export default services;
