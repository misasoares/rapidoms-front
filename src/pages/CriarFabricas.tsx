import { Button, TextField, Tooltip, Typography } from "@mui/material";
import { FormStyled } from "../components/LoginStyled";
import { criarFabricaAPI, listarFabricasAPI } from "../config/services/factory.service";
import { useEffect, useState } from "react";
import Zoom from "@mui/material/Zoom";
import styled from "styled-components";

interface FabricaType {
  id: string;
  name: string;
}

const BodyStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function CriarFabricas() {
  const [fabricas, setFabricas] = useState<FabricaType[]>([]);

  useEffect(() => {
    async function list() {
      const res = await listarFabricasAPI();
      if (res.code === 200) {
        setFabricas(res.data);
      } else {
        console.log("Não foi encontrado fábricas");
      }
    }
    list();
  }, []);

  function handleCopyToClipboard(id: string) {
    navigator.clipboard.writeText(id);
  }

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
        {fabricas.map((f, index) => (
          <div key={index} onClick={() => handleCopyToClipboard(`${f.id}`)}>
            <hr style={{ marginBottom: "10px", marginTop: "10px" }} />
            <p style={{ cursor: "pointer" }}>
              <Tooltip TransitionComponent={Zoom} title="Copiar ID">
                <Button>
                  {f.name} - {f.id}
                </Button>
              </Tooltip>
            </p>
          </div>
        ))}
      </div>
    </BodyStyled>
  );
}
