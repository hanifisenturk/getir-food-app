import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Index from "./Pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Index />
    </div>
  );
}

export default App;
