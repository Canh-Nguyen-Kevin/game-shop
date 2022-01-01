import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Spin, Space } from "antd";
import AppLayout from "./pages/layout";

const Fallback = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Spin size="large" style={{ margin: "auto" }} />
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <Suspense fallback={Fallback}>
        <Router>
          <AppLayout />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
