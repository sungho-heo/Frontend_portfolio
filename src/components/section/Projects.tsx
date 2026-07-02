import { useState } from "react";
import { Modal } from "../modal/Modal";
import { ReadmeModalContent } from "../modal/ReadmeModalContent";
import { PreviewModalContent } from "../modal/PreviewModalContent";
import globalStyles from "../../scss/styles.module.scss";
import styles from "../../scss/section/Projects.module.scss";

// Project type
export type ProjectsProps = {
  id: number;
  title: string;
  period: string;
  detailTitle: string;
  summary: string[];
  url: string;
  why: string[];
  tech:
    | string
    | {
        front: string;
        back?: string;
        ai?: string;
      };
  meaning: string[];
  images: string[];
  setup?: string[];
};

// projects 내용
const projectList: ProjectsProps[] = [
  {
    id: 1,
    title: "법률챗봇",
    period: "2026.05.28~2026.06.29 (4인 프로젝트)",
    url: "",
    detailTitle:
      "법률 문서를 기반으로 정확한 답변을 제공하는 AI 법률 상담 챗봇",
    summary: [
      "약 74,000건 규모의 법률 문서 데이터를 구축하여 RAG 기반 검색 시스템 구현",
      "사용자가 업로드한 PDF, HWP, DOCX 문서에 대해 OCR 및 AI 요약 기능 제공",
      "Pinecone Vector DB를 활용한 Dense + Sparse Hybrid Search 환경 구축",
      "법률 문서 조항 구조를 고려한 Chunking 전략 설계 및 검색 품질 개선",
      "FastAPI 기반 API 서버 및 PostgreSQL 기반 메타데이터 관리 시스템 구축",
      "JWT 기반 사용자 인증 및 문서 이력 관리 기능 구현",
    ],
    why: [
      "법률 문서는 전문 용어와 방대한 분량으로 인해 필요한 정보를 찾기 어렵다는 문제를 해결하고자 프로젝트를 기획하였습니다. 사용자가 법률 문서를 업로드하거나 질문을 입력하면 AI가 관련 법률 정보를 검색하고 이해하기 쉬운 형태로 제공하는 서비스를 목표로 개발하였습니다.",
    ],
    meaning: [
      "데이터셋 구축부터 OCR 처리, 벡터화, 검색, 응답 생성까지 AI 서비스의 End-to-End 파이프라인을 설계하고 구현하는 경험을 쌓았습니다.",
      "법률 문서 특성상 문맥 보존이 중요하다고 판단하여 조항 단위 Chunking 전략을 설계하였고, 이를 통해 검색 결과의 관련성과 응답 품질을 개선할 수 있었습니다.",
      "약 74,000건 규모의 청크 데이터를 PostgreSQL과 Pinecone에 각각 저장하며 RDB와 Vector DB의 역할 분리 및 데이터 관리 구조를 설계하였습니다.",
      "OCR 처리 시간과 응답 지연 문제를 개선하여 평균 응답 시간을 약 3분에서 1~2분 수준으로 단축하였으며, HWP 문서 처리 시간 역시 약 1분 수준까지 최적화하였습니다.",
      "요구사항 정의서 작성, ERD 설계, 로직 문서화 및 단위 테스트를 수행하며 개발뿐 아니라 프로젝트 문서화와 협업 프로세스의 중요성을 경험하였습니다.",
    ],
    tech: {
      front: "React, TypeScript, vite, Radix UI, Tailwind CSS, Zustand",
      back: "FastAPI, LangChain, PaddleOCR, PostgreSQL, SQLAlchemy, Pinecone, JWT,Docker,WebSocket",
      ai: "BGE-M3, Hybrid Search, RAG, Ollama",
    },
    images: [
      "/images/legal-chatbot/legal-chatbot1.png",
      "/images/legal-chatbot/legal-chatbot2.png",
      "/images/legal-chatbot/legal-chatbot3.png",
      "/images/legal-chatbot/legal-chatbot4.png",
      "/images/legal-chatbot/legal-chatbot5.png",
    ],
    setup: [
      "",
      "# FastAPI",
      "uvicorn app.main:app --reload",
      "",
      "# Frontend",
      "npm install",
      "npm run dev",
    ],
  },
  {
    id: 2,
    title: "doc-summary",
    period: "2026.05 (5인 프로젝트)",
    url: "",
    detailTitle: "문서를 업로드하면 AI가 자동으로 요약해주는 웹 서비스",
    summary: [
      "더다올디앤씨 인턴십 3기 미니 프로젝트로 진행",
      "PDF, HWP, DOCX 등 다양한 문서 파일을 업로드하여 AI 요약 요청",
      "요약된 파일을 카테고리 필터 및 파일명 검색으로 조회",
      "React Query를 활용한 서버 상태 관리 및 불필요한 API 요청 최소화",
      "로그인/회원가입 인증 처리 및 Protected Route 구현",
    ],
    why: [
      "인턴십 팀 프로젝트로, 문서 요약 작업을 반복적으로 수행하는 사용자들의 불편함을 해소하고자 기획하게 되었습니다. 파일을 업로드하기만 하면 AI가 자동으로 핵심 내용을 정리해주는 서비스를 목표로 개발했습니다.",
    ],
    meaning: [
      "화면 정의서를 직접 작성하며 UI 기획 단계부터 개발까지 전 과정을 경험했고, 와이어프레임과 실제 구현 화면을 비교하며 기획 의도를 코드로 옮기는 과정에서 협업의 중요성을 체감했습니다.",
      "파일 업로드 후 요약 완료까지 여러 상태(업로드 중 / 요약 대기 / 요약 중 / 요약 완료)를 관리해야 했는데, Redux와 React Query를 함께 활용해 서버 상태와 클라이언트 상태를 명확히 분리하여 처리하는 방법을 익혔습니다.",
      "파일 확장자 불일치, 용량 초과, 최대 개수 초과, 요약 실패 등 다양한 예외 상황을 처리하면서 사용자 경험을 위한 에러 핸들링의 중요성을 알게 되었습니다.",
    ],
    tech: {
      front: "TypeScript, React, Redux, React Query, Axios, Tailwind CSS",
      back: "FastAPI, JWT, LangChain, PaddleOCR, PostgreSQL, SQLAlchemy ORM",
      ai: "Ollama",
    },
    images: [
      "/images/doc-summary/doc-summary1.png",
      "/images/doc-summary/doc-summary2.png",
      "/images/doc-summary/doc-summary3.png",
      "/images/doc-summary/doc-summary4.png",
      "/images/doc-summary/doc-summary5.png",
    ],
    setup: [
      "",
      "# FastAPI",
      "uvicorn app.main:app --reload",
      "",
      "# Frontend",
      "npm install",
      "npm run dev",
    ],
  },
  {
    id: 3,
    title: "포트폴리오 웹사이트",
    period: "2025.10 (1인 프로젝트)",
    url: "https://frontend-portfolio-wheat-nine.vercel.app/",
    detailTitle: "포트폴리오 사이트",
    summary: [
      "저만의 포트폴리오 제작을위해서 개발",
      "swiper를 사용하여 캐러쉘 구현",
    ],
    why: [
      "저 자신만의 프로젝트들을 정리 해놓은 사이트가 필요하였고, 또한 기존의 포트폴리오가 빈약해서 꾸준히 보완해나가면서 채우기에는 저만의 사이트가 있어야한다고 느끼게되었습니다.",
    ],
    meaning: [
      "포트폴리오는 저 자자신을 짧은 시간에 보여줘야하기에 한눈에 보기좋고 많이 화려하지않고 깔끔한 디자인이 중요하다고 생각해서, 많은 레퍼런스를 통해서 한눈에 보기좋은 UI/UX를 개발하는 과정에서 디자인 역량도 기르게되었습니다.",
    ],
    tech: { front: "TypeScript, React, Sass, vercel" },
    images: [
      "/images/portfolio/portfolio1.png",
      "/images/portfolio/portfolio2.png",
      "/images/portfolio/portfolio3.png",
      "/images/portfolio/portfolio4.png",
      "/images/portfolio/portfolio5.png",
      "/images/portfolio/portfolio6.png",
    ],
    setup: [
      "# Install Javascript Packages",
      "npm install",
      "",
      "# Run Server",
      "npm run dev",
    ],
  },
  {
    id: 4,
    title: "날씨에 따라 옷차림 추천",
    period: "2024.09.01~2024.12.21",
    url: "https://sungho-heo.github.io/weather_tuto",
    detailTitle: "날씨와 온도에 따라 밖에 나갈옷을 추천해주는 날씨웹",
    summary: [
      "온도에따라 옷을 어떻게 입을지 고민하다가 제작하게 되었습니다.",
      "Redux를 활용해 날씨데이터 상태값 관리",
      "Rechart를 활용해 시간대별 온도값 그래프로 시각화",
      "Open-Meteo API를 활용하여 사용자 위치 기반 날씨 데이터를 받아오고, 해당 데이터를 가공하여 시간별/일별 UI로 구성했습니다. React Query를 활용해 서버 데이터를 캐싱하고, 불필요한 요청을 줄이며 사용자 경험을 개선했습니다.",
    ],
    why: [
      "날씨와 온도에 따라 밖에 나갈때 옷을 뭐입어야할지 고민에 제작을 하게되었습니다.",
    ],
    meaning: [
      "날씨 웹사이트들중 많이 사용하는 네이버나 핸드폰의 기본 날씨어플의 UI를 참고하니 어떻게 해야 사용자에게 데이터를 쉽고 보기 좋은지 좀더 알게된듯합니다.",
      "시간대별 날씨를 보여주기위해 카드식 구성을 사용하게되었습니다. 처음에 세로 스크롤로 밑으로 내리면서 구현을 했으나, 해당 웹의 특성을 죽이기에 가로스크롤로 구현을하게되었습니다.",
    ],
    tech: {
      front: "TypeScript, React, styled-css, Redux",
    },
    images: [
      "/images/weather/weather1.png",
      "/images/weather/weather2.png",
      "/images/weather/weather3.png",
    ],
    setup: [
      "# Install Javascript Packages",
      "npm install",
      "",
      "# Run Server",
      "npm run dev",
    ],
  },
  {
    id: 5,
    title: "1세대 포켓몬 도감",
    period: "2024.05.20~2024.09.24 (1인 프로젝트)",
    url: "https://sungho-heo.github.io/poke2_front",
    detailTitle: "1세대 포켓몬 정보를 빠르게 알기위한 포켓몬 도감",
    summary: [
      "포켓몬을 평소에 좋아해서 1세대 포켓몬정보를 정리하기위해 제작",
      "즐겨찾기를 이용한 빠른 포켓몬 특성 확인",
      "검색을 통해서 포켓몬 찾기 개발",
      "프론트와 백엔드의 데이터 송수신 첫 구현",
    ],
    why: [
      "자신만의 포켓몬 1세대 도감을 만들기위해 공식 포켓몬 사이트를 참고해보니 해당 사이트에 도감 기능이 제공된다는 것을 알게 되었습니다.하지만 즐겨찾기 기능이 없어 아쉬움을 느꼈고, 이를 보완한 나만의 웹 도감을 만들어보고자 1세대 포켓몬으로 프로젝트를 진행하게 되었습니다.",
    ],
    meaning: [
      "API 데이터를 기반으로 포켓몬 정보를 UI에 구조적으로 표현하고, 즐겨찾기 기능 구현 과정에서 상태 관리와 데이터 흐름의 중요성을 경험했습니다.",
      "공식 api에서 가져오는 이미지 로딩속도로 인해서 전체적인 사이트의 속도가 느려지는 현상이 발생했었는데, 가져오는 포켓몬들의 이미지를 저용량 webp확장자로 변환후 적용을 하였고 해당 결과로 이미지 로딩속도가 2배이상 빨라졌습니다.",
      "프론트와 백엔드 데이터를 주고반는 과정이 있었는데 데이터가 넘어오는 것은 확인이 되나 화면에 해당 값이 보이지 않는 현상이 있었는데 백엔드에서 온 데이터값을 프론트에서 잘못된 키값을 사용하여 발생한 문제를 해결함으로써 데이터의 유무도 중요하지만 데이터의 구조와 해당 키값을 명확히 확인하는 점을 알게되었습니다.",
    ],
    tech: {
      front: "TypeScript, React, styled-css",
      back: "Mongodb",
    },
    images: [
      "/images/poke/poke1.png",
      "/images/poke/poke2.png",
      "/images/poke/poke3.png",
      "/images/poke/poke4.png",
    ],
    setup: [
      "# Install Javascript Packages",
      "npm install",
      "",
      "# Run Server",
      "npm run dev",
    ],
  },
];

export const Projects = () => {
  const [modalType, setModalType] = useState<"README" | "PREVIEW" | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectsProps | null>(
    null,
  );

  // readme preview modal 2가지
  const openModal = (project: ProjectsProps, type: "README" | "PREVIEW") => {
    setSelectedProject(project);
    setModalType(type);
  };

  // modal close
  const closeModal = () => {
    setModalType(null);
    setSelectedProject(null);
  };
  return (
    <>
      <section id="projects" className={styles.Projects_section}>
        <div className={styles.Projects_content}>
          <div className={globalStyles.SectionTitle_content}>
            <h2 className={globalStyles.SectionTitle_title}>PROJECTS</h2>
          </div>
          <div className={styles["ProjectDetails_project-details"]}>
            {/* 프로젝트 리스트 */}
            {projectList.map((project) => (
              <div
                key={project.id}
                className={styles["ProjectDetails_project-detail"]}
              >
                <h4 className={styles.ProjectsDetails_name}>{project.title}</h4>
                <div className={styles["ProjectDetails_period"]}>
                  {project.period}
                </div>
                <div className={styles.ProjectDetails_container}>
                  <h5 className={styles.ProjectDetails_title}>
                    {project.detailTitle}
                  </h5>
                  <ul className={styles.ProjectDetails_summary}>
                    {project.summary.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.ProjectsDetails_url}>
                  <a href={project.url} target="_blank">
                    {project.url}
                  </a>
                </div>
                <div className={styles["ProjectDetails_tech-stack"]}>
                  {typeof project.tech === "string" ? (
                    project.tech
                  ) : (
                    <div>
                      {project.tech.front && (
                        <div>Frontend: {project.tech.front}</div>
                      )}
                      {project.tech.back && (
                        <div>Backend: {project.tech.back}</div>
                      )}
                      {project.tech.ai && <div>AI: {project.tech.ai}</div>}
                    </div>
                  )}
                </div>
                <div className={styles["ProjectDetails_button-container"]}>
                  <button
                    className={styles.ProjectDetails_button}
                    type="button"
                    onClick={() => openModal(project, "README")}
                  >
                    README
                  </button>
                  <button
                    className={styles.ProjectDetails_button}
                    type="button"
                    onClick={() => openModal(project, "PREVIEW")}
                  >
                    PREVIEW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 모달 */}
      {modalType && selectedProject && (
        <Modal isOpen={true} onClose={closeModal}>
          {/* readme click인지 preview인지 확인 */}
          {modalType === "README" ? (
            <ReadmeModalContent
              project={selectedProject}
              onClose={closeModal}
            />
          ) : (
            <PreviewModalContent project={selectedProject} />
          )}
        </Modal>
      )}
    </>
  );
};
