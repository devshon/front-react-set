import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store/store";
import Main from "pages/Main";
import Login from "pages/Login";

function App() {
  return (
    <BrowserRouter basename="/">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
