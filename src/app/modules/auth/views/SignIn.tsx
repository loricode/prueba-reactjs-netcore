import * as React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { CustomerRepository } from "../../../domain/repositories/customer/CustomerRepository";

export const SignIn = () => {
  const navigation = useNavigate();
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = ( { target }:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> ) => {
    const { value, name } = target;
    setState(prev => ( {
      ...prev,
      [name]:value
    }))
  }

  const submit = async() => {
   const res = await CustomerRepository.service.getCustomers();
   if(res.status === 200 ){
    navigation("/dashboard/home");
   }
    
  }

  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Card>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <TextField
                onChange={handleChange}
                type="text"
                style={{ margin: "10px" }}
                label="Email"
                name="email"
                value={state.email}
                variant="outlined"
              />

              <TextField
                onChange={handleChange}
                type="password"
                name="password"
                style={{ margin: "10px" }}
                label="Password"
                value={state.password}
                variant="outlined"
              />

              <Button
                onClick={submit}
                size="large"
                style={{ margin: "10px" }}
                variant="outlined"
              >
                Sign In
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
};
