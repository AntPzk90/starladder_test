import "./App.css";
import Header from "./components/header/header";
import StartScreen from "./components/start-screen/start-screen";
import ScheduleResult from "./components/schedule-results/schedule-results";
import Stages from "./components/stages/stages";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <StartScreen />
        <ScheduleResult />
        <Stages />
      </main>
    </div>
  );
}

export default App;
