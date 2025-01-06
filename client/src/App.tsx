import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
import Login from "./Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useGetUserInfo } from "./api";
import ProblemsPage from "./pages/ProblemsPage";
import EditorPage from "./pages/EditorPage";

function App() {
  const { data, isLoading, isError } = useGetUserInfo();

  if (isError) {
    console.log("not logged in");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Determine if the user is logged in
  const isLoggedIn = Boolean(data);

  return (
    <BrowserRouter>
      <div>
        <GoogleOAuthProvider clientId="182239427342-8l5ar58d1vstvtudn3q0spmp6dlhrji1.apps.googleusercontent.com">
          <Routes>
            {/* Protect the Problems route */}
            <Route
              path="/problems"
              element={isLoggedIn ? <ProblemsPage /> : <Navigate to="/login" />}
            />
            <Route
              path="/problems/:questionID"
              element={isLoggedIn ? <EditorPage /> : <Navigate to="/login" />}
            />
            {/* Login route */}
            <Route
              path="/login"
              element={isLoggedIn ? <Navigate to="/problems" /> : <Login />}
            />
            {/* Redirect any unknown route to Login */}
            <Route
              path="*"
              element={<Navigate to={isLoggedIn ? "/problems" : "/login"} />}
            />
          </Routes>
        </GoogleOAuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
