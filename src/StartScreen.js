import { useApp } from "./context/AppContext";
import Button from "./Button";

function StartScreen() {
  const { dispatch, selectorId } = useApp();
  const ids = ["x", "o"];
  return (
    <div className="startScreen">
      <div className="spans">
        x <span>o</span>
      </div>
      <div>
        <div className="picker">
          <p className="pick">PICK PLAYER 1'S MARK</p>
          <div className="selector">
            {ids.map((id, i) => (
              <div
                className={`${
                  i + 1 === selectorId ? "select active" : "select"
                }`}
                key={i}
                onClick={() =>
                  dispatch({ type: "getSelectorId", payload: i + 1 })
                }
              >
                {id}
              </div>
            ))}
          </div>
          <p className="remember">REMEMBER: WHOEVER CHOOSES GOES FIRST</p>
        </div>
        <div className="buts">
          <Button
            onClick={() => dispatch({ type: "startGame", payload: 1 })}
            style={{
              background: "#32c3bd",
              padding: "10px",
            }}
          >
            NEW GAME (VS CPU){" "}
          </Button>
          <Button
            disabled={!selectorId}
            onClick={() => dispatch({ type: "startGame", payload: 2 })}
            style={{
              background: "#f1b038",
              padding: "10px",
            }}
            color=""
          >
            NEW GAME (VS PLAYER){" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
