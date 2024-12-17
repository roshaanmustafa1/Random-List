import { useState } from "react";
import "./App.css";
import Data from "./componenets/data";
import List from "./componenets/list";
import { Button } from "./components/ui/button";

function App() {
  const [people, setPeople] = useState(Data);
  return (
    <>
      <h3 className="text-3xl pb-5"> Total List Items {people.length}</h3>
      <List people={people} />
      <Button className="mt-5" onClick={() => setPeople([])}>
        Clear List
      </Button>
    </>
  );
}

export default App;
