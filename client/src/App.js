import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Main from "./views/Main";
import Detail from "./views/Detail";
import Update from "./views/Update";

const App = () => (
    <Router>
        <div className="App">
            <Switch>
                <Route path='/:id/edit' render={routeProps => <Update {...routeProps} />} />
                <Route path='/:id' render={routeProps => <Detail {...routeProps} />} />
                <Route path='/' render={routeProps => <Main {...routeProps} />} />
            </Switch>
        </div>
    </Router>
);

export default App;
