import React, { useEffect } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactGa from "react-ga";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

/* we are going to pass in props are query parameters, could have used redux instead of react router
When the user first comes to our page, they are greeted with our join component, and they pass in their data via the log in form
and through query strings we pass in the data through the chat, once we have the data, we will render the chat component. May change things up a bit here!
*/

export default function App() {
  useEffect(() => {
    console.log("app");
    ReactGa.initialize("G-V6NE5DJRE0");
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Router>
      <Route path="/" exact component={Join} />
      {/*not an exact path since we are going to pass in properities*/}
      <Route path="/chat" component={Chat} />
    </Router>
  );
}
