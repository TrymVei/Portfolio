import About from "./components/atoms/about";
import Experience from "./components/atoms/experience";
import Hero from "./components/atoms/hero";
import { Projects } from "./components/atoms/projects";

const Home = () => {
  return (
    <main>
      <Hero />
      <Experience />
      <About />
      <Projects />
    </main>
  );
};

export default Home;
