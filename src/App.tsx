import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import { RequireAuth } from "./hoc/RequireAuth";
import Аuthentication from "./pages/Аuthentication";
import SerialPage from "./pages/SerialPage";
import PersonalPage from "./pages/PersonalPage/PersonalPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="auth" element={<Аuthentication />} />
          <Route index element={<HomePage />} />
          <Route path="anime/:id" element={<SerialPage />} />
          <Route path="person" element={<PersonalPage />} />
          <Route
            path="users/:id"
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />

          <Route
            path="dorama"
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />

          <Route
            path="/admindesk"
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
