import "./style/style.css";
import "./style/style.css.map";
import Header from "./components/components-static/header/header";
import StartScreen from "./components/components-static/start-screen/start-screen";
import ScheduleResult from "./components/components-static/schedule-results/schedule-results";
import Stages from "./components/components-static/stages/stages";

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
