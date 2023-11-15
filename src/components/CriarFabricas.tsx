import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { FormStyled } from "./LoginStyled";
import { criarFabricaAPI } from "../config/services/factory.service";
// import { useAppSelector } from "../store/hooks";



export default function CriarFabricas() {
  // const fabricasRedux = useAppSelector(state=>state.factories)
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
    <Container maxWidth='sm' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 3 }}>
    <Typography variant="h3" component="h1" textAlign="center"  sx={{ my: 4 }}>
      Criar fábrica de carro
    </Typography>

    <FormStyled onSubmit={(e) => handleSubmit(e)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <Box width="100%" maxWidth={400} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField sx={{ margin: 1 }} id="outlined-basic" name="nome" label="Nome" variant="outlined" fullWidth />
        <Button sx={{ margin: 1 }} type="submit" variant="contained">
          Criar
        </Button>
      </Box>
    </FormStyled>
  </Container>
  );
}
