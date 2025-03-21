export const SITE = {
  website: "https://vsingh21.github.io/exfuturo/", // replace this with your deployed domain
  author: "Viraj Singh",
  profile: "https://github.com/vsingh21",
  desc: "CTF Writeups by ex futuro",
  title: "ex futuro",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
} as const;
