import { Button, TextField, Typography } from "@mui/material";
import { FormStyled } from "../components/LoginStyled";

export interface CreateUser {
  name: string;
  email: string;
  address: string;
  password: string;
  phone: string;
  cpf: string;
}

export default function Order() {
  function handleCreateUserSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const user: CreateUser = {
      name: e.currentTarget.nome.value,
      email: e.currentTarget.email.value,
      address: e.currentTarget.address.value,
      password: e.currentTarget.password.value,
      phone: e.currentTarget.phone.value,
      cpf: e.currentTarget.cpf.value,
    };
    console.log(user);
  }

  return (
    <>
      <Typography>Faça seu pedido aqui</Typography>

      <FormStyled onSubmit={(e) => handleCreateUserSubmit(e)}>
        <TextField id="outlined-basic" name="nome" label="Digite seu nome" variant="outlined"></TextField>
        <TextField id="outlined-basic" type="email" name="email" label="Digite seu email" variant="outlined"></TextField>
        <TextField id="outlined-basic" type="password" name="password" label="Digite sua senha" variant="outlined"></TextField>
        <TextField id="outlined-basic" name="address" label="Digite seu endereço" variant="outlined"></TextField>
        <TextField id="outlined-basic" name="phone" label="Digite seu telefone" variant="outlined"></TextField>
        <TextField id="outlined-basic" name="cpf" label="Digite seu cpf" variant="outlined"></TextField>

        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </FormStyled>
    </>
  );
}
