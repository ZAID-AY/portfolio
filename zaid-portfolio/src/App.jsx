import { CssBaseline, ThemeProvider } from "@mui/material";
import Header1 from "./components/header/Header1";
import Hero from "./components/hero/Hero";
import About from "./components/main/About";
import Skills from "./components/main/Skills";
import Projects from "./components/main/Projects";
import Contact from "./components/main/Contact";

function App() {

   
  return (
    
        <>

        <Header1 />
       <Hero />
       <About />
       <Skills />
       <Projects />
       <Contact />
        </>
    
  );
}

export default App;
