import "./App.css";
import Navbar from "./components/navbar/navbar";
import Typical from "./components/autoTyper/autoTyper";
import Footer from "./components/footer/footer";
import AboutMe from "./components/pages/aboutMeSection/aboutMe";
function App() {
  return (
    <div className="App" id="Home">
      <header className="nav-header">
        <Navbar />
      </header>
      <h1 className="auto-typer-container">
        <Typical />
      </h1>
      <main>
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
