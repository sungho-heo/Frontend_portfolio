import { IoMdClose } from "react-icons/io";
import { FaReadme } from "react-icons/fa6";
import styles from "../../scss/section/Projects.module.scss";
import modalStyles from "../../scss/modal/Modal.module.scss";
import type { ProjectsProps } from "../section/Projects";

type ReadmeModalProps = {
  project: ProjectsProps;
  onClose: () => void;
};

export const ReadmeModalContent = ({ project, onClose }: ReadmeModalProps) => {
  return (
    <>
      <div className={modalStyles["Readme-header"]}>
        <div className={modalStyles.Readme_title}>
          <FaReadme style={{ color: "white" }} /> README
        </div>
        <button
          className={modalStyles.Readme_esc}
          type="button"
          onClick={onClose}
        >
          <IoMdClose />
        </button>
      </div>
      <div className={styles.Modal_body}>
        <div className={styles.Mardown_header} dir="auto">
          <h1 className={styles["MarkDown_header-title"]} dir="auto">
            {project.title}
          </h1>
        </div>
        <div className={styles.MarkDown_period} dir="auto">
          {project.period}
        </div>
        <div className={styles.Mardown_header} dir="auto">
          <h2 className={styles["MarkDown_header-text"]} dir="auto">
            🖇️ URL
          </h2>
        </div>
        <p dir="auto">
          <a href={project.url}>{project.url}</a>
        </p>
        <div className={styles.Mardown_header} dir="auto">
          <h2 className={styles["MarkDown_header-text"]} dir="auto">
            📝 Summary
          </h2>
        </div>
        <p dir="auto">
          <strong>{project.title}</strong>
        </p>
        <ul dir="auto">
          {project.summary.map((text: string) => (
            <li>{text}</li>
          ))}
        </ul>
        <div className={styles.Mardown_header} dir="auto">
          <h2 className={styles["MarkDown_header-text"]} dir="auto">
            🤔 Why Develop?
          </h2>
        </div>
        {project.why.map((text: string) => (
          <p dir="auto" className={styles.MarkDown_text}>
            {text}
          </p>
        ))}
        <div className={styles.Mardown_header} dir="auto">
          <h2 className={styles["MarkDown_header-text"]} dir="auto">
            Meaning
          </h2>
        </div>
        {project.meaning.map((means: string) => (
          <p dir="auto" className={styles.MarkDown_text}>
            {means}
          </p>
        ))}
        <div className={styles.Mardown_header} dir="auto">
          <h2 className={styles["MarkDown_header-text"]} dir="auto">
            Tech Stack
          </h2>
        </div>
        {typeof project.tech === "string" ? (
          <p dir="auto">{project.tech}</p>
        ) : (
          <div>
            <span dir="auto">Front: {project.tech.front}</span>
            <br />
            <span dir="auto">Back: {project.tech.back}</span>
          </div>
        )}
        <div className={styles.Mardown_header} dir="auto">
          <h2 className={styles["MarkDown_header-text"]} dir="auto">
            Setup & Start
          </h2>
        </div>
        <div>
          <div className={styles.MarkDown_setup}>
            <pre>
              <code>{project.setup && project.setup.join("\n")}</code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
};
