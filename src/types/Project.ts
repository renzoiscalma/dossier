interface Project {
  src: string;
  techStack: string[];
  description: string;
  title: string;
  githubURL: string;
  projectURL?: string;
  thumbnail: string;
  video?: boolean;
  image?: boolean;
  extraDescription?: string[];
}

export default Project;
