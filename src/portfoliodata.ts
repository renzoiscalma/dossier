import Project from "./types/Project";
import chatterImg from "./assets/chatter-cover.png";
import dossierImg from "./assets/dossier-cover.png";
import mainPageImg from "./assets/main-page.png";
import spaceNoidThumb from "./assets/thumbnails/SpaceNoid.webm";
import airpodsThumb from "./assets/thumbnails/Airpods.webm";
import aStarThumb from "./assets/thumbnails/AstarThumb.webm";
import asteroidsThumb from "./assets/thumbnails/AsteroidsThumb.webm";
import connectFourThumb from "./assets/thumbnails/ConnectFourThumb.webm";
import helicopterThumb from "./assets/thumbnails/HelicopterThumb.webm";
import ringEyeThumb from "./assets/thumbnails/RingEyeThumb.webm";
import kitchenHellThumb from "./assets/thumbnails/KitchenHellThumb.webm";

export const portfolioData: Project[] = [
  {
    src: chatterImg,
    thumbnail: chatterImg,
    image: true,
    techStack: ["React", "Typescript", "GraphQL", "Redis"],
    description: "Watch videos and chat with your friends!",
    title: "Chatter",
    githubURL: "https://github.com/renzoiscalma/chatter-web",
    projectURL: "https://renzoiscalma.github.io/chatter-web-fe/",
    extraDescription: [
      "Implemented front end with the use of React, and Material UI. For the backend's messaging system, it is using Redis' PubSub for the websockets. Has multiple websockets to update the video's state and the messages send over the lobby created. Moreover, the database used for the project is MongoDB",
      "This project is mostly a discovery phase for GraphQL as it piqued my interest because of the simplicity of fetching data from a backend.",
    ],
  },
  {
    src: "https://youtu.be/f6deZzYAe5U",
    thumbnail: airpodsThumb,
    video: true,
    techStack: ["Javascript", "Tailwind"],
    description: "Replicated the AirPods landing page using Vanilla JS, Tailwind and HTML.",
    title: "Airpods Landing Page Clone",
    projectURL: "https://renzoiscalma.github.io/landing-airpods/src/index.html",
    githubURL: "https://github.com/renzoiscalma/landing-airpods",
    extraDescription: [
      "This was a fun challenge that I gave to myself. I Implemented the whole page using Vanilla Javascript with Tailwind. The pages were split into their own section, and for each section there is an internal progress system. The progress the user made on each section determines which frame you are on the web page. Similarly, the videos were played frame by frame based on the progression system that I have mentioned. ",
      "The reason I used tailwind was to test how Tailwind works and what value it gives to. Surprisingly, it served me well and really sped up my development process as I don't have to think about the stylesheets that I make.",
    ],
  },
  // {
  //   src: dossierImg,
  //   thumbnail: dossierImg,
  //   image: true,
  //   techStack: ["React", "Typescript", "CSS", "HTML"],
  //   description: "My own website portfolio!",
  //   title: "Dossier",
  //   githubURL: "https://github.com/renzoiscalma/dossier",
  //   projectURL: "https://renzoiscalma.github.io/dossier/",
  // },
  {
    src: mainPageImg,
    thumbnail: mainPageImg,
    image: true,
    techStack: ["React", "Typescript", "MUI"],
    description: "A simple hero page",
    title: "Main-Page",
    githubURL: "https://github.com/renzoiscalma/main-page",
    projectURL: "https://renzoiscalma.github.io/main-page/",
    extraDescription: [
      "Another fun page that I personally created. Despite having a fair amount of frontend experience when developing this, I realized that I never made a landing page since most of the time I dealt with enterprise web applications... So I ended up crafting one. I mainly focused on using flexbox for everything and making it responsive.",
    ],
  },
  {
    src: "https://youtu.be/3DDnoT4TtPs",
    thumbnail: spaceNoidThumb,
    video: true,
    techStack: ["Blit3D", "C++"],
    description: "A simple 2D Breakout game made with Blit3D",
    title: "Space Noid",
    githubURL: "https://github.com/renzoiscalma/Space-Noid",
    extraDescription: [
      "This was one of the first games I made when delving in the world of game development. Funnily, the most challenging part that I had to code here was the particle effect and how I had to rotate the sprite based on which part of the ball collided with a wall. I thought I should just rotate it based on the ball's velocity towards the wall, but I didn't like the solution...",
      "So, I ended up just making the wall it's own entity and get the contact point for the wall for each objects that collided with it and render a specific sprite for that wall. ",
    ],
  },
  {
    src: "https://youtu.be/Sqkmr74vddM",
    thumbnail: asteroidsThumb,
    video: true,
    techStack: ["C++", "Blit3D"],
    description: "An asteroids game made with Blit3D",
    title: "ProjectAsteroids",
    githubURL: "https://github.com/renzoiscalma/Project-Asteroids",
    extraDescription: [
      "This is another projects that I made when starting out developing games. Initially this game did not have spaceships spawning, but since on our class we talked out the flocking algorithm, I decided to add spaceship with the flocking algorithm into the game. Fun stuff!",
    ],
  },
  {
    src: "https://youtu.be/zlqnDgzrzbU",
    thumbnail: helicopterThumb,
    video: true,
    techStack: ["C++", "Blit3D", "OpenGL"],
    description: "A helicopter simulation made with Blit3D and OpenGL",
    title: "Helicopter Simulation",
    githubURL: "https://github.com/renzoiscalma/Heli-Copter",
    extraDescription: [
      "A helicopter simulation that lets you move in the air by using a game controller. The only physics applied to the helicopter are basic vectors. (e.g. lift vectors based on where it's facing) The 3D helicopter is rendered by using OpenGL and meshes.",
      "The terrain for these are generated by using a noise algorithm, Perlin Noise.",
    ],
  },
  {
    src: "https://youtu.be/DUz7kp_VqqU",
    thumbnail: ringEyeThumb,
    video: true,
    techStack: ["C++", "Blit3D"],
    description: "An infinite scrolling game made with Blit3D",
    title: "Ring Eye",
    githubURL: "https://github.com/renzoiscalma/Ring-Eye",
    extraDescription: [
      "An infinite scroller game that lets you go through hoops! Some interesting implementations are the scrolling background, it only uses two instantiations of the background that wraps around when not visible on the screen.",
    ],
  },
  {
    src: "https://youtu.be/9oklMBDFTbE",
    thumbnail: kitchenHellThumb,
    video: true,
    techStack: ["Godot", "GDScript"],
    description: "A 2D action game made with Godot",
    title: "Kitchen Hell",
    githubURL: "https://github.com/renzoiscalma/Kitchen-Hell",
    extraDescription: [
      "A group project that my classmates and I made for our production process class. I was assigned as the main developer for the project. Focused on the design pattern of composition instead of inheritance so the team can easily integrate features into prefabs. There is still inheritance but it is strictly kept into a single level inheritance to minimize complexity.",
      "I implemented most of the combat mechanics and the enemy spawner, aside from that I am the one responsible for integrating the animations into the game.",
    ],
  },
  {
    src: "https://youtu.be/PmXbeEjz7cQ",
    thumbnail: aStarThumb,
    video: true,
    techStack: ["C++", "Blit3D"],
    description: "An A* Simulation made with Blit3D",
    title: "A* Simulation",
    githubURL: "https://github.com/renzoiscalma/AStarSimulation",
    extraDescription: [
      "Created an A Star visual simulation when traversing paths over a 2D Grid. The project lets you load a map file and gives you to choose the starting position and the end position.",
    ],
  },
  {
    src: "https://youtu.be/CNHhdkkWp6w",
    thumbnail: connectFourThumb,
    video: true,
    techStack: ["PyGame", "Python"],
    description:
      "A Connect Four game made with PyGame. Play agains an AI that uses minmax algorithm.",
    title: "Connect Four",
    githubURL: "https://github.com/renzoiscalma/Connect-Four-PyGame",
    extraDescription: [
      "Made a Connect-Four game that lets you play with an AI! Powered by PyGame. AI can definitely be improved by changing the points heuristic calculator, and upgrade the algorithm with alpha-beta pruning.",
    ],
  },
];
