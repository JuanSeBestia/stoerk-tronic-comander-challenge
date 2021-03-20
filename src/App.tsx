import "./App.scss";
import Commander from "./modules/Commander/Commander";

// Configure FontAwesome
import fontawesome from "@fortawesome/fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(faCheckSquare, faCoffee);

function App() {
  return (
    <div className="App">
      <header className="App-header">Commander app</header>
      <main>
        <Commander />
      </main>
    </div>
  );
}

export default App;
