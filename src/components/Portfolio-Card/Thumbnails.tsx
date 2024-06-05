import ReactPlayer from "react-player";
type ThumbnailsProps = {
  src: string;
  image?: boolean;
  video?: boolean;
  projectName: string;
};
const Thumbnails = (props: ThumbnailsProps) => {
  const { src, image, video, projectName } = props;
  if (image) {
    return <img src={src} alt={`${projectName} thumbnail`} />;
  }
  if (video)
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <ReactPlayer url={src} controls={false} playing muted loop width="100%" height="100%" />
      </div>
    );
  return null;
};

export default Thumbnails;
