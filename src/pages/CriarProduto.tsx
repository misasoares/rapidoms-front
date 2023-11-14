import { Button, TextField, Typography } from "@mui/material";
import { FormStyled } from "../components/LoginStyled";
import { useDispatch } from "react-redux";
import { criarBateria } from "../store/modules/products/productsSlice";
import { criarBateriaAPI } from "../config/services/products.service";

export interface CriarBateria {
  img: string;
  name: string;
  amper: number;
  cca: number;
  warranty: number;
  quantity: number;
  price: number;
}

export default function CriarProduto() {
  const dispatch = useDispatch();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const bateria: CriarBateria = {
      img: e.currentTarget.img.value,
      name: e.currentTarget.nome.value,
      amper: parseInt(e.currentTarget.amper.value),
      cca: parseInt(e.currentTarget.cca.value),
      warranty: parseInt(e.currentTarget.garantia.value),
      quantity: parseInt(e.currentTarget.quantidade.value),
      price: parseFloat(e.currentTarget.preco.value),
    };

    const res = await criarBateriaAPI(bateria);

    if (res.code === 201) {
      alert("Criou, meu calabreso");
      dispatch(criarBateria(res.data));
    }
  }

  return (
    <>
      <Typography>Criar produtos</Typography>
      <FormStyled onSubmit={(e) => handleSubmit(e)}>
        <TextField sx={{ margin: 1 }} id="outlined-basic" name="nome" label="Nome" variant="outlined" />
        <TextField sx={{ margin: 1 }} id="outlined-basic" name="amper" label="Amperes" variant="outlined" />
        <TextField sx={{ margin: 1 }} id="outlined-basic" name="cca" type="number" label="CCA" variant="outlined" />
        <TextField sx={{ margin: 1 }} id="outlined-basic" name="garantia" type="number" label="Garantia (em meses)" variant="outlined" />
        <TextField sx={{ margin: 1 }} id="outlined-basic" name="quantidade" type="number" label="Quantidade" variant="outlined" />
        <TextField sx={{ margin: 1 }} id="outlined-basic" name="preco" type="number" label="Preço" variant="outlined" />
        <TextField sx={{ margin: 1 }} id="outlined-basic" name="img" label="Imagem(link)" variant="outlined" />
        <Button sx={{ margin: 1 }} type="submit" variant="contained">
          Criar
        </Button>
      </FormStyled>
    </>
  );
}
