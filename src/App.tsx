import { useState } from "react";
import Posts from "./Views/Posts";

function App() {
  const [show, setShow] = useState(true);
  return (
    <main>
      <button onClick={() => setShow((s) => !s)}>toggle</button>

      {show && <Posts />}
    </main>
  );
}

export default App;
