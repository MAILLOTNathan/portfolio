import Contact from "./components/Contact";
import Hobbies from "./components/Hobbies";
import MyNavBar from "./components/MyNavBar";
import Parcours from "./components/Parcours";
import Skills from "./components/Skills";
import Whoami from "./components/Whoami";

function App() {
  return (
    <main className="overflow-x-hidden">
      <MyNavBar />
      <Whoami />
      <Parcours />
      <Hobbies />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
