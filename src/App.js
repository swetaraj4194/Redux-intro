import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBalance } from "./store/balance/actions";
import { getBalanceAmount, getDarkMode } from "./store/balance/selectors";
import "./App.css";

function App() {
  const [balanceInput, setBalanceInput] = useState();

  const dispatch = useDispatch();
  
  const reduxAmount = useSelector(getBalanceAmount); // get data from state => use selector

  const darkMode = useSelector(getDarkMode); // get data from state => use selector

  const onAddClick = () => {
    const action = addBalance(10);
    dispatch(action); // ADD/CHANGE the state => we dispatch an action
  };

  const onSubstractClick = () => {
    const action = { type: "SUBSTRACT_BALANCE", payload: 10 };
    dispatch(action); // ADD/CHANGE the state => we dispatch an action
  };

  const setDarkMode = () => {
    const action = { type: "TOGGLE_DARKMODE" };
    dispatch(action);
  };

  const setBalanceClick = () => {
    // Change the redux state to the balance of this input field
    const action = { type: "SET_BALANCE", payload: balanceInput };
    dispatch(action);
  };

  const darkModeStyles = darkMode
    ? { backgroundColor: "blue", color: "white" }
    : { backgroundColor: "antiquewhite", color: "black" };

  console.log("local state for input", balanceInput);
  return (
    <div className="App" style={darkModeStyles}>
      <button onClick={setDarkMode}>Dark mode</button>
      <h1>Redux Intro class 57</h1>
      <div>
        <h3>Balance: {reduxAmount}</h3>
        <button onClick={onAddClick}>Add $10</button>
        <button onClick={onSubstractClick}>Substract $10</button>
        <div>
          <br />
          <label>Set balance to:</label>
          <input
            value={balanceInput}
            onChange={(e) =>
              setBalanceInput(e.target.value ? Number(e.target.value) : "")
            }
          />
          <button onClick={setBalanceClick}>Set</button>
        </div>
      </div>
    </div>
  );
}

export default App;
