import { Button, TextField, Typography } from "@mui/material";
import { FormStyled } from "../components/LoginStyled";
import { criarCarroAPI } from "../config/services/car.service";
import { useState } from "react";

export interface CarType {
  name: string;
  yearFabrication: number;
  factoryId: string;
  batteryId: string;
}

export default function CriarCarros() {
  const [carros, setCarros] = useState<CarType[]>([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const carro: CarType = {
      name: e.currentTarget.nome.value,
      yearFabrication: parseInt(e.currentTarget.yearFabrication.value),
      factoryId: e.currentTarget.factoryId.value,
      batteryId: e.currentTarget.batteryId.value, //pode receber um array de string
    };

    const res = await criarCarroAPI(carro);

    if (res.code === 201) {
      setCarros(res.data);
      console.log(res.data);
    } else {
      console.log(res);
    }
  }

  return (
    <>
      <Typography variant="h3" component="h1">
        Criar carros
      </Typography>

      <FormStyled onSubmit={(e) => handleSubmit(e)}>
        <TextField sx={{ margin: 1 }} id="outlined-basic" name="nome" label="Nome" variant="outlined" />
        <TextField sx={{ margin: 1 }} id="outlined-basic" name="yearFabrication" type="number" label="Ano de fabricação" variant="outlined" />
        <TextField sx={{ margin: 1 }} id="outlined-basic" name="factoryId" label="ID da Fábrica" variant="outlined" />
        <TextField sx={{ margin: 1 }} id="outlined-basic" name="batteryId" label="ID da bateria" variant="outlined" />

        <Button sx={{ margin: 1 }} type="submit" variant="contained">
          Criar
        </Button>
      </FormStyled>

      {/* {carros.map((c, index) => (
        <div key={index}>
          <p>{c.name}</p>
        </div>
      ))} */}
    </>
  );
}
