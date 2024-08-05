import Button from "./Button";
import { useApp } from "./context/AppContext";
function Winner({ children }) {
  const { dispatch } = useApp();

  return (
    <div className="openModal">
      <div className="overlay">
        <div className="child">
          {" "}
          <div className="confirm">
            <p className="p"> YOU WON!</p>
            <div
              style={{ color: children === "O" ? "#f1b038" : "#32c3bd" }}
              className="confirmText"
            >
              {children} <span>TAKES THE ROUND</span>
            </div>
            <div className="confirmButtons">
              <Button
                onClick={() => dispatch({ type: "emptyChoosen" })}
                style={{
                  background: "#a9bec9",
                  padding: "5px 20px",
                }}
              >
                PLAY AGAIN
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Winner;
