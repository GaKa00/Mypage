import Changelog from "./components/Changelog"
import Projects from "./components/Projects";
import About from "./components/AboutMe";
import WorkXP from "./components/WorkXP";
 function App() {

  return (
    <>
      <main className="bg-violet-200">
        <h1>Hello React</h1>
        <About/>
        <Projects/>
        <WorkXP />
        <Changelog />
      </main>
    </>
  );
}

export default App

