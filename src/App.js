import "./App.css";
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Hello world!</h1>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                Something
                <Outlet />
              </div>
            }
          >
            <Route index element={<div>Something else</div>} />
            <Route path="about" element={<h2>About</h2>} />
            <Route path="dashboard" element={<h2>Dashboard</h2>} />

            {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
            <Route path="*" element={<h2>Oh noes</h2>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
