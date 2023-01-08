// Components
import About from "./about/About";
import Home from "./home/Home";
import Resume from "./resume/Resume";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

// Main view main function
export default function MainView() {
  return (
    <div className="block h-max w-screen items-center bg-background-black">
      <Home></Home>
      <div className="w-screen h-32 custom-bg-divider-1"></div>
      <About></About>
      <div className="w-screen h-32 custom-bg-divider-2"></div>
      <Resume></Resume>
      <div className="w-screen h-32 custom-bg-divider-1"></div>
      <Projects></Projects>
      <div className="w-screen h-32 custom-bg-divider-2"></div>
      <Contact></Contact>
    </div>
  );
}
