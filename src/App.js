import "./App.css";
import Welcome from "./components/Welcome";
import Dogs from "./components/Dogs";
import Dog from "./components/Dog";
import { Route, HashRouter as Router, Link, Switch } from "react-router-dom"

function App() {
    return (
        <Router>
            <div className="App">
                <header id="header1"  >
                    <Link className="Logo" to="/">
                        <img src="./images/paw.png" />
                    </Link>
                </header>
                <main>
                    <Switch>
                        <Route exact path="/" > <Welcome /></Route>
                        <Route exact path="/overview"> <Dogs /> </Route>
                        <Route path exact ="/dog/:chipNumber"> <Dog /> </Route>
                        
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

export default App;
