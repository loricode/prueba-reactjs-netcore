import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from '@mui/material/Button';
import { CustomerRepository } from "../../../domain/repositories/customer/CustomerRepository";
import { useCustomer, useDispatch } from "../../../hooks/useCustomer";
import { listCustomer, saveCustomer } from "../../../store/customer/action";
import { useNavigate } from "react-router-dom";
//import TablePagination from '@mui/material/TablePagination';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0d47a1",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "2px solid #000",
  display: "flex",
  flexDirection: "row-reverse",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(1),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(0.8em)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export function searchData<T>(data: Array<T>, toSearch: string) {
  if (data.length === 0) return [];
  
  let filteredData: T[] = [];

  for (const key in data[0]) {
      filteredData.push(...data.filter(item => String(item[key]).toLowerCase().includes(toSearch.toLowerCase())))   
  }
  
  const noRepeat = new Set(filteredData);
  return Array.from(noRepeat);
}



export const Home = () => {
  const navigation = useNavigate();
  const { data } = useCustomer();
  const dispatch = useDispatch();
  const [text, setText] = React.useState("");


  React.useEffect(() => {
    (async () => {
      const res = await CustomerRepository.service.getCustomers();
      if (res.status === 200) {
        dispatch(listCustomer(res.data));
      }
    })();
  }, [dispatch]);

  const getCustomerOfId = async(idCustomer:string) => {
    const res = await CustomerRepository.service.getCustomerId(idCustomer);
    console.log(res)
    dispatch(saveCustomer(res));
    navigation("/dashboard/customer")
  }

  return (
    <Box>
      <Box
        style={{
          display: "flex",
          paddingLeft: 20,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ marginBlockEnd: 0, fontSize: 20 }}>consultar cliente</p>
          <p style={{ marginBlockStart: 0 }}>
            vista de tu tablero para tus clases por semana
          </p>
        </div>
        <div>
          <Search>
            <StyledInputBase
              placeholder="Search…"
              onChange={(e) => setText(e.target.value)}
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
        </div>
      </Box>

      <TableContainer  component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID usuario</StyledTableCell>
              <StyledTableCell align="left">Nombre</StyledTableCell>
              <StyledTableCell align="left">Apellido</StyledTableCell>
              <StyledTableCell align="left">Teléfono</StyledTableCell>
              <StyledTableCell align="left">Dirección</StyledTableCell>
              <StyledTableCell align="left">Intereses</StyledTableCell>
              <StyledTableCell align="center">Sexo</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchData(data.customers, text).map((row) => (
              <TableRow
                
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.identificacion} <Button style={{fontSize:10}} variant="text"
                  onClick={() => getCustomerOfId(row.id)}
                  >ver detalle</Button>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.nombre}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.apellido}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.telefono}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.direccion}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.intereses}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.sexo}
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.customers.length}
          rowsPerPage={5}
          page={5}
          onPageChange={()=> {}}
          onRowsPerPageChange={()=> {}}
        /> */}
    </Box>
  );
};
