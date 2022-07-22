import "./App.scss";
// import EventList from "./components/EventList";
// import Navbar from "./components/Navbar";
import RandomQuoteMachine from "./components/RandomQuoteMachine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <RandomQuoteMachine />
        </p>
      </header>
      {/* <Navbar></Navbar> */}
      {/* <EventList></EventList> */}
    </div>
  );
}

export default App;
