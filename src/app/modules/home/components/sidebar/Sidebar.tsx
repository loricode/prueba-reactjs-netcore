import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  cursor:"pointer",
}))


export const Sidebar = () => {
  return (
    <Grid item={true} xs={12} md={2}>
      <div
        className="sidebar"
        style={{ display:"flex", width:"200px", flexDirection:"column", justifyContent:"space-around", background: "#2196f3", height: "100%",  textAlign: "center" }}
      >
        <Stack
          direction="column"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
            alt="Remy Sharp"
            src={process.env.PUBLIC_URL + "/logo192.png"}
          />
          <p>mi perfil</p>
          <p>Editar</p>
        </Stack>

        <List className="navigation" >
          <ListItem disablePadding>
            <ListItemButton  style={{justifyContent:"center"}}>
             <NavLink className="item-nav" to="/dashboard/customer">Mis Actividades</NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
         
            <ListItemButton style={{justifyContent:"center"}}>
             <NavLink className="item-nav" to="/dashboard/home">El personal</NavLink>
            </ListItemButton>
          
          </ListItem>
          <ListItem disablePadding>
       
            <ListItemButton style={{justifyContent:"center"}} >
            <NavLink className="item-nav" to="/dashboard/#">
              Mis intereses
              </NavLink>
            </ListItemButton>
        
          </ListItem>
        </List>


    <div>
      <Grid container  alignItems="center"   justifyContent="center" alignContent="center">
          <Grid item={true} xs={10}>
          <Item>Cerrar sesión</Item>
          </Grid>
      </Grid>   
      </div>

      </div>

     
    </Grid>
  );
};
