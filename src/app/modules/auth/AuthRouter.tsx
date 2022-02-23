import { Route, Routes } from "react-router-dom";
import { SignIn } from "./views/SignIn";

export function AuthRouter() {
  return (
    <Routes>
      <Route path="/" element={<SignIn/>} />
    </Routes>
  );
}