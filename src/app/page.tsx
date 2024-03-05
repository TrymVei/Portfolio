import About from "./components/atoms/about";
import Experience from "./components/atoms/experience";
import Hero from "./components/atoms/hero";

const Home = () => {
  return (
    <main>
      <Hero />
      <Experience />
      <About />
    </main>
  );
};

export default Home;
