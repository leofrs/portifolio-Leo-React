import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projetos</Title>
        <Desc>
          Tenho me empenhado bastante em desenvolver projetos com o máximo de
          complexidade que consigo, faço isso visando aprimorar as habilidades
          adquiridas e ter noção das melhores práticas, melhores formas de
          estruturar códigos e projetos e na utilização de recursos.
        </Desc>
        <CardContainer>
          {projects.map((project) => (
            <ProjectCard
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
