import Navigation from "./Components/navigation";
import Main from "./Components/mainContent";
import "./Styles/App.css";

function App() {
  return (
    <div id="container">

      <div id="navigation">
        <Navigation />
      </div>

      <div id="main-content">
        <Main />
      </div>
    </div>
  );
}

export default App;
