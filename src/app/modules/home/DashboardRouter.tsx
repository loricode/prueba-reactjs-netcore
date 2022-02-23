import { Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import { LayoutRouter } from "./LayoutRouter";
import { Navbar } from "./components/navbar/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Footer } from "./components/footer/Footer";


export const DashboardRouter = () => {
  return (
    <Box style={{ display: "flex", height:"auto", maxHeight:"100%", minHeight:"100vh", overflow:"auto" }}>
      <Sidebar />
      <Box style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Navbar />

        <Routes>
          <Route path="/*" element={<LayoutRouter />} />
        </Routes>

        <Footer />
      </Box>
    </Box>
  );
};
