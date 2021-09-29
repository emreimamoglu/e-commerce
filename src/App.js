import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import Sisu from "./pages/sisu/sisu.component";  
import { Route, Switch } from "react-router-dom";
import SHOP_DATA from "./pages/shop/shop.data";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path = '/shop' component = {ShopPage} />
        <Route path = '/signin' component = {Sisu} />

      </Switch>
    </div>
  );
}

export default App;
