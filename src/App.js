
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import Epp from "./components/Epp";
import Contact from "./components/Contact";


function App() {

  const top = () => {
    window.scrollTo(0, 0)
  };
  
  return (
    <div>
    <NavBar />
    <Home />
    <About />
    <Experience />
    <Epp />
    <Contact />

    <div className=" p-5 flex justify-end bg-gradient-to-b from-blue-50 to-blue-400">
    <button onClick={top} className=" p-3 justify-end border-none rounded-full  bg-yellow-700">Up</button>
    </div>
    <footer className="flex justify-center  bg-gray-400 w-full">@2023 :: 1Njeru</footer>
    
    </div>
  );
}

export default App;
