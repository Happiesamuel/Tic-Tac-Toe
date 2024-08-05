import Button from "./Button";
import Confirm from "./Confirm";
import { useApp } from "./context/AppContext";
import { Modal } from "./context/Modal";
import GameBox from "./GameBox";
import { PiArrowArcRightBold } from "react-icons/pi";
import TiedMatch from "./TiedMatch";
import Winner from "./Winner";
import { useEffect } from "react";

function GameScreen() {
  const {
    choosen,
    playerX,
    dispatch,
    playerXarr,
    playerYarr,
    scoreX,
    scoreY,
    tier,
  } = useApp();
  const wins = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  const checkWinX = wins
    .map((win) => {
      return win.map((winX) => playerXarr.filter((x) => x === winX)).flat();
    })
    .filter((x) => x.length === 3)
    .flat();
  const checkWinY = wins
    .map((win) => {
      return win.map((winX) => playerYarr.filter((x) => x === winX)).flat();
    })
    .filter((x) => x.length === 3)
    .flat();
  const winnerX = checkWinX.length === 3;
  const winnerY = checkWinY.length === 3;
  const tiers = choosen.length >= 9 && !winnerX && !winnerX;
  useEffect(
    function () {
      winnerX && dispatch({ type: "winnerScoreX" });
      winnerY && dispatch({ type: "winnerScoreY" });
      tiers && dispatch({ type: "tier" });
    },
    [dispatch, winnerX, winnerY, tiers]
  );
  return (
    <Modal>
      <div className="startScreen">
        <div className="game">
          <div className="page">
            <div className="spans">
              x<span>o</span>
            </div>
            <div className="turn">
              <span>{playerX ? "X" : "O"}</span> TURN
            </div>
            <Modal.Open open="restart">
              <Button
                style={{
                  background: "#a9bec9",
                  fontWeight: "900",
                  fontSize: "20px",
                  padding: "5px 20px",
                }}
              >
                <PiArrowArcRightBold />
              </Button>
            </Modal.Open>
          </div>
          <div className="box-container">
            {Array.from({ length: 9 }).map((x, i) => (
              <GameBox key={i} id={i + 1} winX={checkWinX} winY={checkWinY} />
            ))}
          </div>
          <div className="but-container">
            <Button
              color=""
              style={{
                background: "#32c3bd",
                padding: "5px 20px",
              }}
            >
              <div> X(YOU)</div>
              <div>{scoreX}</div>
            </Button>

            <Button
              color=""
              style={{
                background: "#a9bec9",
                padding: "5px 20px",
              }}
            >
              <div> TIERS</div>
              <div>{tier}</div>
            </Button>
            <Button
              style={{
                background: "#f1b038",
                padding: "5px 20px",
              }}
            >
              <div> O(CPU)</div>
              <div>{scoreY}</div>
            </Button>
          </div>
        </div>
      </div>
      {winnerX && <Winner>X</Winner>}
      {winnerY && <Winner>O</Winner>}
      {choosen.length >= 9 && !winnerX && !winnerX && <TiedMatch />}
      <Modal.Window window="restart">
        <Confirm
          onClick={() => dispatch({ type: "emptyChoosen" })}
          butOne="NO CANCEL"
          butTwo="YES RESTART"
        >
          <div className="restart">RESTART GAME?</div>
        </Confirm>
      </Modal.Window>
    </Modal>
  );
}

export default GameScreen;
