import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "../utils/Themes";
import Navbar from "../components/Navbar";
import "../App.css";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Education from "../components/Education";
import ProjectDetails from "../components/ProjectDetails";
import { Body, Wrapper } from "./HomeStyledComponent";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Navbar />
      <Body>
        <HeroSection />
        <Wrapper>
          <Skills />
        </Wrapper>
        <Projects openModal={openModal} setOpenModal={setOpenModal} />
        <Wrapper>
          <Education />
        </Wrapper>
        <Footer />
        {openModal.state && (
          <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
        )}
      </Body>
    </ThemeProvider>
  );
};

export default Home;
