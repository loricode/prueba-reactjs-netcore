import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";
import { CustomerTransaction } from "../../../../domain/transactions/customer/CustomerTransaction";
import { CustomerRepository } from "../../../../domain/repositories/customer/CustomerRepository";
import { useCustomer } from "../../../../hooks/useCustomer";
import { Data } from "../../../../store/customer/customer.interface";


const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  borderRadius: 10,
  padding: "6px 12px",
  lineHeight: 1.5,
  backgroundColor: "#ffeb3b",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export const ConfigPanel = () => {
  const { data } = useCustomer();
  const [value, setValue] = React.useState(0);

  const [state, setState] = React.useState<Data>({
    id:"",
    nombre: "",
    apellido: "",
    identificacion: "",
    telefono: "",
    telefonoOtros: "",
    direccion: "",
    fechaNacimiento: "",
    fechaAfiliacion: "",
    sexo: "",
    imagen: "",
    resenaPersonal:"",
    intereses: "",
  });
  const [interes, setInteres] = React.useState<any>([]);
  const [imagen, setImagen] = React.useState(null);

  React.useEffect(() => {
    (() => {
      setState({...data.customer})
      getInteres();
      
    })();
  }, [data, setInteres]);

  const getInteres = async () => {
  
    const response = await CustomerRepository.service.getInteres();
    setInteres(response);
   
  };

  const handlerChange = ({
    target,
  }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value, name } = target;
    changeState(name, value)
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    
    const obj:any = { ...state, imagen: imagen };
    delete obj['id'];
    await CustomerTransaction.service.PostCustomers(obj);
  
  };

  const encodeImageFileAsURL = (file: any) => {
    const reader: any = new FileReader();

    reader.onloadend = function () {
      const [, textImageCustomer] = reader.result.toString().split("base64,");
      setImagen(textImageCustomer);
    };

    reader.readAsDataURL(file);
  };

  const addImagen = (e: any) => {
    const file = (e.target as any).files[0];
    encodeImageFileAsURL(file);
  };

  const handleChangeSelect = (event: any) => {
    const { value } = event.target;
    changeState("intereses", value )
  };

  const handleChangeGroup = (event: any) => {
    const { value, name } = event.target;
    changeState(name, value )
  };

  const changeState = (name:string, value:any)=>{
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const onSubmitEdit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    let obj = {} ;
    if(imagen === null){
       obj = { ...state };
    }else{
      obj = { ...state, imagen: imagen };
    }
     
    await CustomerTransaction.service.PutCustomers(obj, state.id);
  
  };

  const onSubmitDelete = async() =>{
    await CustomerTransaction.service.DeleteCustomers(state.id);
  }

  return (
    <Card>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Button variant="text">Text</Button>
        </div>

        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Crear Nuevo" />
          <Tab label="Clientes Creados" />
          <Tab label="Consulta" />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Grid container>
          <Grid item xs={6}>
            <Box>
            <input
              onChange={(e: any) => addImagen(e)}
              type="file"
              accept="image/*"
            />
           </Box>
           <Box pt={3}>
            <TextField
              id="outlined-multiline-flexible"
              label="Reseña Personal"
              multiline
              maxRows={12}
              name="resenaPersonal"
              onChange={handlerChange}
              value={state.resenaPersonal}
            />
             </Box>
          </Grid>
          <Grid item xs={6}>
            <form>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <TextField
                    name="nombre"
                    value={state.nombre}
                    onChange={handlerChange}
                    label="Nombre"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name="apellido"
                    value={state.apellido}
                    onChange={handlerChange}
                    label="Apellidos"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name="identificacion"
                    value={state.identificacion}
                    onChange={handlerChange}
                    label="Identificación"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name="telefono"
                    value={state.telefono}
                    onChange={handlerChange}
                    label="Celular"
                    variant="standard"
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    onChange={handlerChange}
                    label="Fecha de nacimiento"
                    name="fechaNacimiento"
                    type="date"
                    value={state.fechaNacimiento}
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    onChange={handlerChange}
                    name="direccion"
                    value={state.direccion}
                    label="Dirección"
                    variant="standard"
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    label="Fecha de afiliacion"
                    type="date"
                    value={state.fechaAfiliacion}
                    name="fechaAfiliacion"
                    onChange={handlerChange}
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    onChange={handlerChange}
                    label="Teléfono"
                    value={state.telefonoOtros}
                    name="telefonoOtros"
                    variant="standard"
                  />
                </Grid>

                <Grid item xs={6}>
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Genero
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="M"
                        name="sexo"
                        onChange={handleChangeGroup}
                        control={<Radio />}
                        label="M"
                      />
                      <FormControlLabel
                        value="F"
                        name="sexo"
                        onChange={handleChangeGroup}
                        control={<Radio />}
                        label="F"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth variant="standard">
                      <InputLabel id="demo-simple-select-label">
                        Intereses
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="intereses"
                        value={state.intereses}
                        onChange={handleChangeSelect}
                      >
                        {interes.map((item: any) => (
                          <MenuItem key={item.id} value={item.valor}>
                            {item.descripcion}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>

              <Stack
                direction="row"
                spacing={2}
                pt={2}
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <BootstrapButton
                  variant="contained"
                  style={{ background: "#2c387e" }}
                  onClick={onSubmitDelete}
                >
                  Borrar
                </BootstrapButton>

                <BootstrapButton
                  variant="contained"
                  style={{
                    background: "#fff",
                    color: "#000",
                    border: "1px solid #2c387e",
                  }}
                  onClick={onSubmitEdit}
                >
                  Editar
                </BootstrapButton>

                <BootstrapButton variant="contained" onClick={onSubmit}>
                  Guardar
                </BootstrapButton>
              </Stack>
            </form>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Card>
  );
};

// export const RowRadioButtonsGroup = () => {
//   return (
//     <FormControl>
//       <FormLabel id="demo-row-radio-buttons-group-label">Genero</FormLabel>
//       <RadioGroup
//         row
//         aria-labelledby="demo-row-radio-buttons-group-label"
//         name="row-radio-buttons-group"
//       >
//         <FormControlLabel value="M" control={<Radio />} label="M" />
//         <FormControlLabel value="F" control={<Radio />} label="F" />
//       </RadioGroup>
//     </FormControl>
//   );
// };

// export const BasicSelect = () => {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event:any) => {
//     setAge(event.target.value);
//   };

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth variant="standard">
//         <InputLabel id="demo-simple-select-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           label="Age"
//           onChange={handleChange}
//         >
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }
