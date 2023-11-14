import { Button, TextField, Typography } from "@mui/material";
import { FormStyled } from "../components/LoginStyled";
import { criarFabricaAPI } from "../config/services/factory.service";

import styled from "styled-components";

const BodyStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function CriarFabricas() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const name = e.currentTarget.nome.value as string;

    const res = await criarFabricaAPI(name);

    if (res.code === 201) {
      console.log("Fábrica criada com sucesso.");
      console.log(res.data);
    } else {
      console.log("Aconteceu algum erro, tente novamente");
    }
  }

  return (
    <BodyStyled>
      <div style={{ width: "60%", margin: "50px", display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid black", borderRadius: "80px 0px 80px 0px" }}>
        <Typography variant="h3" component="h1">
          Criar fábrica
        </Typography>

        <FormStyled onSubmit={(e) => handleSubmit(e)}>
          <TextField sx={{ margin: 1 }} id="outlined-basic" name="nome" label="Nome" variant="outlined" />
          <Button sx={{ margin: 1 }} type="submit" variant="contained">
            Criar
          </Button>
        </FormStyled>

        <Typography marginTop="50px" variant="h4" component="h1">
          Lista de fábricas cadastradas:
        </Typography>
      </div>
    </BodyStyled>
  );
}
