import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const onClickButton = () => {
    setAlertVisibility(!alertVisible);
    console.log("Click!");
  };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button onClickButton={onClickButton}>My button</Button>
    </div>
  );
}

export default App;
