import React from "react";
import { Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import("../pages/home"));
const Cart = React.lazy(() => import("../pages/cart"));
const Payment = React.lazy(() => import("../pages/payment"));

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/payment" component={Payment} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default Routes;
