import "./App.css";
import Welcome from "./components/Welcome";
import Dogs from "./components/Dogs";
import Dog from "./components/Dog";

import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom"

function App() {
    return (
        <HushRouter>
            <div className="App">
                <header id="header1"  >
                    <Link className="Logo" to="/">
                        <img src="./images/paw.png" />
                    </Link>
                </header>
                <main>
                    <Switch>
                        <Route path="/" exact> <Welcome /></Route>
                        <Route path="/overview"> <Dogs /> </Route>
                        <Route path="/dog/:chipNumber"> <Dog /> </Route>
                        
                    </Switch>
                </main>
            </div>
        </HushRouter>
    );
}

export default App;
