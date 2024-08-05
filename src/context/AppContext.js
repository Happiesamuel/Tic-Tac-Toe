import { createContext, useContext, useEffect, useReducer } from "react";

const AppContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "getSelectorId":
      return {
        ...state,
        selectorId: action.payload === state.selectorId ? null : action.payload,
      };
    case "startGame":
      return { ...state, status: "start", gameBut: action.payload };
    case "playerX":
      return { ...state, playerX: !state.playerX };
    case "playerY":
      return { ...state, playerY: !state.playerY };
    case "winner":
      return { ...state, boxId: null };
    case "winnerScoreX":
      return { ...state, scoreX: state.scoreX + 1 };
    case "winnerScoreY":
      return { ...state, scoreY: state.scoreY + 1 };

    case "tier":
      return { ...state, tier: state.tier + 1 };
    case "emptyChoosen":
      return {
        ...state,
        choosen: [],
        playerXarr: [],
        playerYarr: [],
        boxId: null,
        selectorId: state.selectorId,
        playerX: state.selectorId === 1 ? true : false,
        playerY: state.selectorId === 2 ? true : false,
      };
    case "getBoxId":
      return state.playerX
        ? {
            ...state,
            choosen: [...state.choosen, action.payload],
            playerY: !state.playerY,
            playerX: !state.playerX,
            boxId: action.payload,
            playerXarr: state.playerXarr.some((x) => x === action.payload)
              ? [...state.playerXarr]
              : [...state.playerXarr, action.payload],
          }
        : {
            ...state,
            choosen: [...state.choosen, action.payload],
            playerY: !state.playerY,
            playerX: !state.playerX,
            boxId: action.payload,
            playerYarr: state.playerYarr.some((x) => x === action.payload)
              ? [...state.playerYarr]
              : [...state.playerYarr, action.payload],
          };
    case "reset":
      return { ...initialState };
    default:
      return { ...state };
  }
}

const initialState = {
  selectorId: null,
  status: "ready",
  playerX: false,
  playerY: false,
  boxId: null,
  playerXarr: [],
  playerYarr: [],
  choosen: [],
  scoreX: 0,
  scoreY: 0,
  tier: 0,
  gameBut: null,
};
export function AppProvider({ children }) {
  const [
    {
      selectorId,
      status,
      playerX,
      playerY,
      boxId,
      playerXarr,
      playerYarr,
      choosen,
      scoreX,
      scoreY,
      tier,
      gameBut,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  useEffect(
    function () {
      if (selectorId === 1) dispatch({ type: "playerX" });
      if (selectorId === 2) dispatch({ type: "playerY" });
    },
    [selectorId, dispatch]
  );

  return (
    <AppContext.Provider
      value={{
        dispatch,
        selectorId,
        status,
        playerX,
        playerY,
        boxId,
        playerXarr,
        playerYarr,
        choosen,
        scoreX,
        scoreY,
        tier,
        gameBut,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) console.log("Wrong position!!!");
  return context;
}
