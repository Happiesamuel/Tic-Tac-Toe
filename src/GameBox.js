import { useEffect, useRef } from "react";
import { useApp } from "./context/AppContext";

function GameBox({ id, winX, winY }) {
  const {
    dispatch,
    selectorId,
    playerX,
    playerY,
    boxId,
    playerXarr,
    playerYarr,
    choosen,
    gameBut,
  } = useApp();
  const box = useRef();

  useEffect(
    function () {
      if (winX.some((x) => x === id)) {
        box.current.style.background = "#32c3bd";
        box.current.style.color = "#1a2b33";
      }
      if (winY.some((x) => x === id)) {
        box.current.style.background = "#f1b038";
        box.current.style.color = "#1a2b33";
      }
      if (!winX.length && !winY.length)
        box.current.style.background = " #1e3640";
    },
    [winX, id, winY]
  );

  useEffect(
    function () {
      if (gameBut === 2) {
        if (
          (!choosen.length && !playerXarr.length, !playerYarr.length && !boxId)
        )
          box.current.textContent = "";
        if (!playerX && boxId === id) {
          box.current.textContent = "x";
          box.current.style.color = "#32c3bd";
        }
        if (!playerY && boxId === id) {
          box.current.textContent = "o";
          box.current.style.color = " #f1b038";
        }
      }

      if (gameBut === 1) {
        const a = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
          (x) => !choosen.includes(x)
        );
        const b = a.at(Math.floor(Math.random() * a.length));
        if (
          (!choosen.length && !playerXarr.length, !playerYarr.length && !boxId)
        )
          box.current.textContent = "";
        if (!playerX && boxId === id && selectorId === 1) {
          box.current.textContent = "x";
          box.current.style.color = "#32c3bd";
          dispatch({
            type: "getBoxId",
            payload: b,
          });
        }
        if (!playerY && boxId === id && selectorId === 1) {
          box.current.textContent = "o";
          box.current.style.color = " #f1b038";
        }
        if (!playerY && boxId === id && selectorId === 2) {
          box.current.textContent = "o";
          box.current.style.color = " #f1b038";

          dispatch({
            type: "getBoxId",
            payload: b,
          });
        }
        if (!playerX && boxId === id && selectorId === 2) {
          box.current.textContent = "x";
          box.current.style.color = "#32c3bd";
        }
      }
    },
    [
      playerX,
      playerY,
      id,
      boxId,
      selectorId,
      playerXarr,
      playerYarr,
      choosen,
      dispatch,
      gameBut,
    ]
  );

  function handleClick(id) {
    if (choosen.some((x) => x === id)) return;
    dispatch({ type: "getBoxId", payload: id });
  }
  return <div ref={box} onClick={() => handleClick(id)} className="box"></div>;
}

export default GameBox;
