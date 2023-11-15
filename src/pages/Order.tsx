import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { FormStyled } from "../components/LoginStyled";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { PatternFormat } from "react-number-format";
import { createUserAPI } from "../config/services/user.service";
import { logado } from "../store/modules/user/userSlice";

export interface CreateUser {
  name: string;
  email: string;
  rua: string;
  numeroDaCasa: number;
  bairro: string;
  cidade: string;
  estado: string;
  password: string;
  phone: string;
  cpf: string;
}

export default function Order() {
  const userRedux = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  async function handleCreateUserSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const user: CreateUser = {
      name: e.currentTarget.nome.value,
      email: e.currentTarget.email.value,
      rua: e.currentTarget.rua.value,
      numeroDaCasa: parseInt(e.currentTarget.numeroDaCasa.value),
      bairro: e.currentTarget.bairro.value,
      cidade: e.currentTarget.cidade.value,
      estado: e.currentTarget.estado.value,
      password: e.currentTarget.password.value,
      phone: e.currentTarget.phone.value,
      cpf: e.currentTarget.cpf.value,
    };
    const res = await createUserAPI(user);

    if (res.code === 201) {
      dispatch(logado(res.data));
    }
  }

  return (
    <>
      <Container maxWidth="sm" sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh", my: 4 }}>
        {userRedux.id === "" ? (
          <FormStyled onSubmit={(e) => handleCreateUserSubmit(e)} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <Box width="100%" maxWidth={400} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField id="outlined-basic" name="nome" label="Digite seu nome" variant="outlined" fullWidth />
              <TextField id="outlined-basic" type="email" name="email" label="Digite seu email" variant="outlined" fullWidth />
              <TextField id="outlined-basic" type="password" name="password" label="Digite sua senha" variant="outlined" fullWidth />
              <TextField id="outlined-basic" name="rua" label="Digite a sua rua" variant="outlined" fullWidth />
              <TextField id="outlined-basic" name="numeroDaCasa" type="number" label="Número da casa" variant="outlined" fullWidth />
              <TextField id="outlined-basic" name="bairro" label="Digite seu bairro" variant="outlined" fullWidth />
              <TextField id="outlined-basic" name="cidade" label="Digite sua cidade" variant="outlined" fullWidth />
              <TextField id="outlined-basic" name="estado" label="Digite seu estado" variant="outlined" fullWidth />
              <PatternFormat name="phone" label="Digite o seu telefone" format="+55 (##) # ####-####" customInput={TextField} />
              <PatternFormat name="cpf" label="Digite o seu CPF" format="###.###.###-##" customInput={TextField} />

              <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                Enviar
              </Button>
            </Box>
          </FormStyled>
        ) : (
          <div>
            <Typography variant="h4" component="h1" textAlign="center" sx={{ mb: 4 }}>
              Confira seus dados:
            </Typography>
            <div style={{ border: "1px solid #c0c0c0", borderRadius: "10px", padding: "10px" }}>
              <Typography>Nome: {userRedux.name}</Typography>
              <Typography>Rua: {userRedux.rua}</Typography>
              <Typography>Numero da casa: {userRedux.numeroDaCasa}</Typography>
              <Typography>Bairro: {userRedux.bairro}</Typography>
              <Typography>Cidade: {userRedux.cidade}</Typography>
              <Typography>Telefone: {userRedux.phone}</Typography>
              <Typography>CPF: {userRedux.cpf}</Typography>
            </div>
            
            <Typography variant="h6" component="h1" textAlign="center" sx={{ mb: 4, mt: 4 }}>
              Está tudo certo?
            </Typography>
          </div>
        )}
      </Container>
    </>
  );
}
