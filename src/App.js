// import what I need
import "./App.css";
// import components and my sections of the website
import Navbar from "./components/navbar/navbar";
import Typical from "./components/autoTyper/autoTyper";
import Footer from "./components/footer/footer";
import AboutMe from "./components/pages/aboutMeSection/aboutMe";
import MyWork from "./components/pages/myWork/myWork";
import ContactMe from "./components/pages/contactMe/contactMe";

function App() {
  return (
    <div className="App" id="Home">
      <header className="nav-header z-index">
        <Navbar />
      </header>
      <div className="auto-typer-container">
        <Typical />
      </div>
      <main>
        <MyWork />
        <AboutMe />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
