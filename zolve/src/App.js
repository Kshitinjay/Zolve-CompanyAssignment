import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/";
import Home from "./components/Home/";
import Clipboard from "./components/Clipboard/";
import Selfie from "./components/Selfie/";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/clip" component={Clipboard} />
        <Route exact path="/selfie" component={Selfie} />
      </Switch>
    </div>
  );
}

export default App;
