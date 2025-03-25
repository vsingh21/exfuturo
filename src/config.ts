export const SITE = {
  website: "https://exfuturo.org/", // replace this with your deployed domain
  author: "Viraj Singh",
  profile: "https://github.com/vsingh21",
  desc: "CTF Writeups by ex futuro",
  title: "ex futuro",
  ogImage: "exfuturo_og.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "",
  },
  dynamicOgImage: true,
} as const;
