import React from "react";
import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom"
import "./App.css";

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://luminixinc.com/wp-content/uploads/2015/09/premium-edition.jpg"
        alt="Subscription"
      />
      <div className="description">
      <h3>Subscribe to use our premium version!</h3>
      <h5>€25.00 a month</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">
        Subscribe
      </button>
    </form>
  </section>
);

const Success = () =>{ 
  const navigator = useNavigate()
  return (
  <div>
    <h1 className="header">Success</h1>
    <p className="text">Your payment has been recieved successfully</p>
    <button onClick={()=>navigator("/")}>Make another payment</button>
  </div>
)
}
const Failure = () => {
  const navigator = useNavigate()
  return(
  <div>
    <h1 className="header">Failure</h1>
    <p className="text">Oops! Payment has failed. Please click try again to redo the process</p>
    <button onClick={()=>navigator("/")}>Try again</button>
  </div>
)
}


export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductDisplay />}/>
        <Route path="/success" element={<Success />}/>
        <Route path="/failure" element={<Failure />}/>
    </Routes>
    </Router>
  );
}