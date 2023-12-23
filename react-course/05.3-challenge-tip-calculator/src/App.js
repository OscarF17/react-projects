import "./App.css";
import TextField from "./TextField";
import SelectField from "./SelectField";
import Results from "./Results";
import { useState } from "react";

// I could create a new component for the whole app
// and keep only that component inside App
function App() {
  const [bill, setBill] = useState(0);
  const [userTip, setUserTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  const tip = (userTip + friendTip) / 200;
  console.log(tip);

  function handleReset() {
    setBill(0);
    setUserTip(0);
    setFriendTip(0);
  }

  return (
    <div className="App">
      <TextField bill={bill} onChangeBill={setBill}>
        How much was the bill?
      </TextField>
      <SelectField tip={userTip} onChangetip={setUserTip}>
        How did you like the service?
      </SelectField>
      <SelectField tip={friendTip} onChangetip={setFriendTip}>
        How did your friend like the service?
      </SelectField>
      {(bill !== 0 || userTip !== 0 || friendTip !== 0) && (
        <Results bill={bill} tip={tip} onReset={handleReset} />
      )}
    </div>
  );
}

export default App;
