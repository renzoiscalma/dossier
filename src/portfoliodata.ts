import Project from "./types/Project";
import chatterImg from "./assets/chatter-cover.png";
import dossierImg from "./assets/dossier-cover.png";
import mainPageImg from "./assets/main-page.png";
import spaceNoidThumb from "./assets/thumbnails/SpaceNoid.webm";
import airpodsThumb from "./assets/thumbnails/Airpods.webm";

export const portfolioData: Project[] = [
  {
    src: chatterImg,
    thumbnail: chatterImg,
    image: true,
    techStack: ["React", "TypeScript", "GraphQL", "Redis"],
    description: "Watch videos and chat with your friends!",
    title: "Chatter",
    githubURL: "https://github.com/renzoiscalma/chatter-web",
    projectURL: "https://renzoiscalma.github.io/chatter-web-fe/",
  },
  {
    src: "https://youtu.be/f6deZzYAe5U",
    thumbnail: airpodsThumb,
    video: true,
    techStack: ["Javascript", "Tailwind CSS"],
    description: "Replicated the AirPods landing page using Vanilla JS, Tailwind and HTML.",
    title: "Airpods Landing Page Clone",
    projectURL: "https://renzoiscalma.github.io/landing-airpods/src/index.html",
    githubURL: "https://github.com/renzoiscalma/landing-airpods",
  },
  {
    src: dossierImg,
    thumbnail: dossierImg,
    image: true,
    techStack: ["React", "TypeScript", "CSS", "HTML"],
    description: "My own website portfolio!",
    title: "Dossier",
    githubURL: "https://github.com/renzoiscalma/dossier",
    projectURL: "https://renzoiscalma.github.io/dossier/",
  },
  {
    src: mainPageImg,
    thumbnail: mainPageImg,
    image: true,
    techStack: ["React", "TypeScript", "Material-ui"],
    description: "A simple hero page",
    title: "Main-Page",
    githubURL: "https://github.com/renzoiscalma/main-page",
    projectURL: "https://renzoiscalma.github.io/main-page/",
  },
  {
    src: "https://youtu.be/3DDnoT4TtPs",
    thumbnail: spaceNoidThumb,
    video: true,
    techStack: ["Blit3D", "C++"],
    description: "A simple 2D Breakout game made with Blit3D",
    title: "Space Noid",
    githubURL: "https://github.com/renzoiscalma/Space-Noid",
  },
];
