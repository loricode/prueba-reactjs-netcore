import { BrowserRouter, Route, Routes } from "react-router-dom"; //npm i react-router-dom
import { AuthContext } from "../store/auth/Context";
import { AuthRouter } from "../modules/auth/AuthRouter";
import { DashboardRouter } from "../modules/home/DashboardRouter";

export function AppRouter() {
  return (
    <AuthContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthRouter />} />
          <Route path="dashboard/*" element={<DashboardRouter />} />
        </Routes>
      </BrowserRouter>
    </AuthContext>
  );
}
