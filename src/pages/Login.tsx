import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useAppDispatch } from "../store/hooks";
import { login } from "../config/services/auth.service";
import { logado } from "../store/modules/user/userSlice";
import { useNavigate } from "react-router-dom";
import { FormStyled, LoginBodyStyled } from "../components/LoginStyled";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const user = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    const res = await login(user);

    if (res.code === 401) {
      alert("Email ou senha incorretos.");
    }

    dispatch(logado(res.data));
    localStorage.setItem("token", res.data.token);
    navigate("/");
  }

  return (
    <LoginBodyStyled>
      <Typography variant="h3" component="h1">
        Login
      </Typography>

      <FormStyled onSubmit={(e) => handleSubmit(e)}>
        <TextField sx={{ margin: 1 }} id="outlined-basic" name="email" label="Email" variant="outlined" />
        <TextField sx={{ margin: 1 }} id="outlined-basic" name="password" type="password" label="Senha" variant="outlined" />
        <Button sx={{ margin: 1 }} type="submit" variant="contained">
          Entrar
        </Button>
      </FormStyled>
    </LoginBodyStyled>
  );
}
