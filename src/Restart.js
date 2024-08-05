import Button from "./Button";
import { useApp } from "./context/AppContext";

function Restart({ setRestart }) {
  const { dispatch } = useApp();

  return (
    <div className="openModal">
      <div className="overlay" onClick={() => setRestart(false)}>
        <div
          className="child"
          style={{
            padding: "35px 10px",
          }}
        >
          {" "}
          <div className="confirm">
            <div className="restart">RESTART GAME?</div>
            <div
              className="confirmBut "
              style={{
                margin: "10px 0px  0px",
              }}
            >
              <Button
                onClick={() => setRestart(false)}
                style={{
                  background: "#a9bec9",
                  padding: "5px 10px",
                  fontSize: "15px",
                }}
              >
                NO CANCEL
              </Button>
              <Button
                onClick={() => dispatch({ type: "emptyChoosen" })}
                style={{
                  background: "#f1b038",
                  padding: "5px 10px",
                  fontSize: "15px",
                }}
              >
                YES RESTART
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restart;
