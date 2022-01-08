import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Spin, Space } from "antd";
import AppLayout from "./pages/layout";
import productApi from "./api/productApi";

function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div>
            <Spin size="large" style={{ margin: "auto" }} />
          </div>
        }
      >
        <Router>
          <AppLayout />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
