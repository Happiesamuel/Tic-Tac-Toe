import Button from "./Button";
import { useApp } from "./context/AppContext";

function TiedMatch({ children }) {
  const { dispatch } = useApp();

  return (
    <div className="openModal">
      <div className="overlay">
        <div className="child">
          {" "}
          <div className="confirm">
            <p className="p"> NO WINNER!</p>
            <div className="restart">TIED MATCH</div>
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

export default TiedMatch;
