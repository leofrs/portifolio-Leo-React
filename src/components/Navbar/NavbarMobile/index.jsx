import { useState } from "react";

import {
  MobileIcon,
  MobileMenu,
  MobileLink,
  GitHubButton,
  LinkedInButton,
} from "../NavbarStyledComponent";

import { FaBars } from "react-icons/fa";
import { useTheme } from "styled-components";
import { Bio } from "../../../data/constants";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <>
      <MobileIcon>
        <FaBars
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </MobileIcon>
      {isOpen && (
        <MobileMenu isOpen={isOpen}>
          <MobileLink
            href="#about"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Sobre
          </MobileLink>
          <MobileLink
            href="#skills"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Habilidades
          </MobileLink>
          <MobileLink
            href="#projects"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Projetos
          </MobileLink>
          <MobileLink
            href="#education"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Formação/Cursos
          </MobileLink>
          <GitHubButton
            style={{
              padding: "10px 16px",
              background: `${theme.primary}`,
              color: "white",
              width: "max-content",
            }}
            href={Bio.github}
            target="_blank"
          >
            Github
          </GitHubButton>
          <LinkedInButton
            style={{
              padding: "10px 16px",
              background: `${theme.primary}`,
              color: "white",
              width: "max-content",
            }}
            href={Bio.github}
            target="_blank"
          >
            LinkedIn
          </LinkedInButton>
        </MobileMenu>
      )}
    </>
  );
};

export default NavbarMobile;
