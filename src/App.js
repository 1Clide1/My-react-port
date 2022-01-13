import './App.css';
import Navbar from './components/navbar/navbar'
import Typical from './components/autoTyper/autoTyper'
function App() {
  return (
    <div className="App">
      <header className="port-header">
      <Navbar />
      </header>
      <main>
      <h1 className='auto-typer-container'>
        <Typical/>
      </h1>
      </main>
    </div>
  );
}

export default App;
