import Changelog from "./components/Changelog"
import Projects from "./components/Projects";
import About from "./components/AboutMe";
 function App() {

  return (
    <>
      <main>
        <h1>Hello React</h1>
        <About/>
        <Projects/>
        <Changelog />
      </main>
    </>
  );
}

export default App

