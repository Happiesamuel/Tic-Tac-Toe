import { useEffect, useState } from "react";
import { useApp } from "./context/AppContext";
import GameScreen from "./GameScreen";
import Preloader from "./Preloader";
import StartScreen from "./StartScreen";

function App() {
  const { status } = useApp();
  const [load, setLoad] = useState(true);
  useEffect(function () {
    setTimeout(function () {
      setLoad(false);
    }, 2000);
  });
  if (load) return <Preloader />;
  return (
    <div>
      {status === "ready" && <StartScreen />}
      {status === "start" && <GameScreen />}
    </div>
  );
}

export default App;
