import { Routes, Route } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Home } from "./views/Home";
import Paper from "@mui/material/Paper";
import { CustomerContext } from "../../store/customer/Context";
import { useAuth } from "../../hooks/useAuth";
import { ConfigPanel } from "./views/config/ConfigPanel";

const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: 'center',
   color: theme.palette.text.secondary,
   cursor:"pointer",
 }))


export const LayoutRouter = () => {

  const {auth} = useAuth()

  return (
    <CustomerContext>
    <Grid item={true}  md={12} style={{ paddingLeft: 60 }}>
      <Box
        style={{
          display: "flex",
          paddingLeft: 20,
          paddingRight: 20,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item={true} xs={2}>
          <Item>Consulta</Item>
          </Grid>
          <Grid item={true} xs={2}>
          <Item>Crear Cliente</Item>
          </Grid>
          <Grid item={true} xs={2}>
          <Item>Estadisticas</Item>
          </Grid>
        </Grid>
        <div style={{textAlign:"end"}}>
          <p style={{ marginBlockEnd: 0, fontSize: 20 }}>
             Administrador
          </p>
          <p style={{ marginBlockStart: 0 }}>
           {auth.username}
          </p>
          <p style={{ marginBlockStart: 0 }}>
         ultimo acceso:  fechasfewfewfew
          </p>
        </div>
      </Box>

      <Grid item={true} xs={12} md={11}>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/customer" element={<ConfigPanel/>} />
      </Routes>
      </Grid>
    </Grid>
    </CustomerContext>
  );
};
