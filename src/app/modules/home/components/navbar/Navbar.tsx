import Box from '@mui/material/Box';

export const Navbar = () => {
   return(
      <Box
      style={{
        display: "flex",
        paddingTop:10,
        paddingLeft: 20,
        paddingRight:20,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <img width={180} src={process.env.PUBLIC_URL +"/img/logo.png"} alt="logo" />
      </div>
      <div>
        <span>Notificaciones</span>  <span>Ayuda</span>
      </div>
    </Box>
   )
}