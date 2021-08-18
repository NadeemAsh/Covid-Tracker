import "./App.css";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
        </Switch>
      </Router>
    </AppContainer>
  );
}


export default App;
