import Project from "./types/Project";
import chatterImg from "./assets/chatter-cover.png";
import projectVThumb from "./assets/thumbnails/ProjectVThumb.webm";
import mainPageImg from "./assets/main-page.png";
import spaceNoidThumb from "./assets/thumbnails/SpaceNoid.webm";
import airpodsThumb from "./assets/thumbnails/Airpods.webm";
import aStarThumb from "./assets/thumbnails/AstarThumb.webm";
import asteroidsThumb from "./assets/thumbnails/AsteroidsThumb.webm";
import connectFourThumb from "./assets/thumbnails/ConnectFourThumb.webm";
import helicopterThumb from "./assets/thumbnails/HelicopterThumb.webm";
import ringEyeThumb from "./assets/thumbnails/RingEyeThumb.webm";
import kitchenHellThumb from "./assets/thumbnails/KitchenHellThumb.webm";
import dungeonEscapadeThumb from "./assets/thumbnails/DungeonEscapadeThumb.webm";
import tronThumb from "./assets/thumbnails/TronThumb.webm";

export const portfolioData: Project[] = [
  {
    src: chatterImg,
    thumbnail: chatterImg,
    image: true,
    techStack: ["React", "Typescript", "GraphQL", "Redis", "HTML", "CSS"],
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
    techStack: ["Javascript", "Tailwind", "HTML", "CSS"],
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
    techStack: ["React", "Typescript", "MUI", "HTML", "CSS"],
    description: "A simple hero page",
    title: "Main-Page",
    githubURL: "https://github.com/renzoiscalma/main-page",
    projectURL: "https://renzoiscalma.github.io/main-page/",
    extraDescription: [
      "Another fun page that I personally created. Despite having a fair amount of frontend experience when developing this, I realized that I never made a landing page since most of the time I dealt with enterprise web applications... So I ended up crafting one. I mainly focused on using flexbox for everything and making it responsive.",
    ],
  },
  {
    src: "https://youtu.be/mm8JHAU06-A",
    thumbnail: projectVThumb,
    video: true,
    techStack: ["CSharp", "Unity"],
    description: "A 2D top down action roguelike survival game made with Unity.",
    title: "Project V",
    githubURL: "https://github.com/renzoiscalma/Project-V",
    extraDescription: [
      "Project V is a 2D action game where you try to survive from hordes of monsters. The game includes 6 upgrade perks to strengthen your character. The goal is to survive as long as possible.",
      "As time progresses enemies will spawn more frequently and the game will become more difficult. There is are enemies such as bats and ogres that will try to defeat you. Try defeating them first!",
      "The is a very fun experience to play, and develop considering it was one of the first games I made with Unity. I focused on a component based architecture, and boy it really was worth it because adding features to the game was easy because of the archictecture.",
      "Interesting optimization for the game was the use a scrolling world, essentially you'll be roaming around a 9x9 2D grid that wraps itself around so it would look like you have an endless world. This was a very fun challenge to implement.",
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
    src: "https://youtu.be/RVvwgIkcfws",
    thumbnail: dungeonEscapadeThumb,
    video: true,
    techStack: ["Unity", "CSharp"],
    description: "An infinite scrolling dungeon game made with Unity",
    title: "Dungeon Escapade",
    githubURL: "https://github.com/renzoiscalma/Dungeon-Escapade",
    extraDescription: [
      "Developed a cross platform mobile game that is an infinite side scrolling with Unity. What's fun about this is that the asset that I had had no jumping animation with a samurai sword, so I had to pull up Aesprite and do it myself.",
      "Also, the background has a parallax effect with the floors so it would appear that there's more depth to the background, I though it would look cool and appropriate as well.",
      "As for the debris from the destroyed objects, it was a simple applied force to a randomly generated 1x1 scaled image for an extra effect. ",
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
    src: "https://youtu.be/8ibDP-Iva2Q",
    thumbnail: tronThumb,
    video: true,
    techStack: ["Java", "PyGame", "Python"],
    description: "A multiplayer Tron game made with PyGame (client) and Java (server)",
    title: "Multiplayer Tron",
    githubURL: "https://github.com/WarrenRice/TronNBCC2024/",
    extraDescription: [
      "Another group project were we had to create a multiplayer game. This was interesting because we used two programming languages for this project. The server was on Java, and the client was developed using Python. (PyGame was the game's library) ",
      "I designed and developed the backend where there could be at most 4 players in the game. Each update call in the game loop of the clients they would send out their current position, and also request the current position of other players.",
      "This posed some problems initially as we would see that some of the clients could not equally update the other client's position since it would skip some positions. This probably happened because of the game looop being too fast and and not every position was properly requested from the server. We ended up fixing this by at least returning the last five positions of the player. ",
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
