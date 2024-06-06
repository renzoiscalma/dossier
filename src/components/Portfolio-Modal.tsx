import { useCallback, useEffect, useRef } from "react";
import Project from "../types/Project";
import dialogStyles from "../stylesheets/Portfolio-Modal.module.css";
import VideoCard from "./Portfolio-Card/VideoCard";
import cardStyles from "../stylesheets/Card.module.css";
import { ReactComponent as GithubSVG } from "../assets/brand-github.svg";
import { ReactComponent as ExternalSVG } from "../assets/external-link.svg";
import Icon, { IconNames } from "./Icon";
type PortfolioModalProps = {
  open: boolean;
  handleClose: () => void;
  project?: Project;
};

const PortfolioModal = (props: PortfolioModalProps) => {
  const portfolioRef = useRef<HTMLDialogElement>(null);
  const { project } = props;

  const handleDialogClick = useCallback(
    (e: any) => {
      if (e.target === e.currentTarget) {
        console.log("should close");
        props.handleClose();
      }
    },
    [props]
  );

  useEffect(() => {
    if (props.open) {
      portfolioRef?.current?.showModal();
    } else {
      portfolioRef?.current?.close();
    }
  }, [props.open, handleDialogClick]);

  if (!project) return null;

  return (
    <div>
      <dialog
        onClick={handleDialogClick}
        className={`${dialogStyles.dialog}`}
        ref={portfolioRef}
        onClose={props.handleClose}
      >
        <div>
          <div className={dialogStyles.header}>
            <h1>{project.title}</h1>
          </div>
          <div className={dialogStyles.mediaContainer}>
            {project.video && (
              <div className={dialogStyles.coverVideo}>
                <VideoCard source={project.src} />
              </div>
            )}
            {project.image && (
              <img
                src={project.src}
                className={dialogStyles.coverImage}
                alt={`cover for ${project.title}`}
              />
            )}
          </div>
          <div className={dialogStyles["description-container"]}>{project.description}</div>
          {project.extraDescription && (
            <div className={dialogStyles["extra-description-container"]}>
              {project.extraDescription.map((value, index) => (
                <p key={index} className={dialogStyles["extra-description"]}>
                  {value}
                </p>
              ))}
            </div>
          )}
          <div className={cardStyles["techstack-container"]}>
            {project.techStack.map((value, index) => (
              <div className={cardStyles.pill} key={index}>
                <Icon name={value as IconNames} label="right" size="small" />
              </div>
            ))}
          </div>
          <div className={cardStyles["link-container"]}>
            {project.projectURL && (
              <a
                href={project.projectURL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalSVG className={cardStyles.icon} />
              </a>
            )}
            <a
              href={project.githubURL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <GithubSVG className={cardStyles.icon} />
            </a>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PortfolioModal;
