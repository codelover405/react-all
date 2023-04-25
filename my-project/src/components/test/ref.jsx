import React, { useState, useEffect, useReducer, useContext } from "react";
import { render } from "react-dom";

const FishContext = React.createContext("trout");

function reducer(state, action) {
  switch (action.type) {
    case "catch":
      return { ...state, caughtFish: state.caughtFish + 1 };
    case "release":
      return { ...state, caughtFish: state.caughtFish - 1 };
    case "setFish":
      return { ...state, fishingFor: action.payload };
    default:
      return state;
  }
}

function FishingDemoApp() {
  const [fishState, dispatch] = useReducer(reducer, {
    fishingFor: "trout",
    caughtFish: 0,
  });
  return (
    <FishContext.Provider value={fishState}>
      <FishingBucket dispatch={dispatch} />
    </FishContext.Provider>
  );
}

function FishingBucket({ dispatch }) {
  const fishContext = useContext(FishContext);
  const [baitType, setBaitType] = useState();
  useEffect(() => {
    switch (fishContext.fishingFor) {
      case "trout":
        setBaitType("smelly-stuff");
        break;
      case "salmon":
        setBaitType("roe");
        break;
      default:
        break;
    }
  }, [fishContext.fishingFor]);
  return (
    <>
      <button
        onClick={() => dispatch({ type: "setFish", payload: "trout" })}
        className="bg-purple-500 text-white mr-2 p-2"
      >
        Fish for Trout
      </button>
      <button
        onClick={() => dispatch({ type: "setFish", payload: "salmon" })}
        className="bg-purple-500 text-white mr-2 p-2"
      >
        Fish for Salmon
      </button>
      <p>
        We are fishing for {fishContext.fishingFor} using {baitType}
      </p>
    </>
  );
}

// render(<FishingDemoApp />, document.getElementById("root"));
export default FishingDemoApp;
