import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  LinkedInButton,
  ButtonContainer,
} from "./NavbarStyledComponent";

import { Bio } from "../../data/constants";

import NavbarMobile from "./NavbarMobile/index";

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>Leonardo Santos</NavLogo>
        <NavItems>
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href="#skills">Habilidade</NavLink>
          <NavLink href="#projects">Projetos</NavLink>
          <NavLink href="#education">Formação/Cursos</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github
          </GitHubButton>
          <LinkedInButton href={Bio.linkedin} target="_blank">
            LinkedIn
          </LinkedInButton>
        </ButtonContainer>
        <NavbarMobile />
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
