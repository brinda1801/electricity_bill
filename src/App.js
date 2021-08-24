import Details from "./components/Details/Details";
import Header from "./components/Layout/Header";
import Login from "./components/Login/Login";
import QuickPay from "./components/QuickPay/QuickPay";
import { Route } from "react-router-dom";
import Payment from "./components/Payment/Payment";

function App() {
  return (
    <div>
      <Route path="/Welcome">
        <Header />
        <Login />
      </Route>
      <Route path="/Details">
        <Header name="logout" />
        <Details name="Details" />
      </Route>
      <Route path="/QuickPay">
        <QuickPay />
      </Route>
      <Route path="/Payment">
        <Payment />
      </Route>
    </div>
  );
}

export default App;
