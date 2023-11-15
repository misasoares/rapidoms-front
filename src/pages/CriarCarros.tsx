import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { FormStyled } from "../components/LoginStyled";
import { criarCarroAPI } from "../config/services/car.service";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import { useAppSelector } from "../store/hooks";
import CriarFabricas from "../components/CriarFabricas";

export interface CarType {
  name: string;
  yearFabrication: number;
  factoryId: string;
  batteryId: (string | undefined)[];
}

// const options = ['Option 1', 'Option 2'];

export default function CriarCarros() {
  const factoriesRedux = useAppSelector((state) => state.factories);
  const bateriesRedux = useAppSelector((state) => state.products);
  const [valueFabrica, setValueFabrica] = useState<string | null>(factoriesRedux[0].name);
  const [valueBateria, setValueBateria] = useState<string[]>([]);
  const [inputValueFabrica, setInputValueFabrica] = useState("");
  const [inputValueBateria, setInputValueBateria] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const factory = factoriesRedux.find((i) => i.name === e.currentTarget.factory.value);
    //  const battery = bateriesRedux.find((i) => `${i.name} - ${i.amper} amperes` === valueBateria);
    const selectedBatteries = valueBateria
      .map((bateriaLabel) => {
        return bateriesRedux.find((battery) =>  `${battery.name} - ${battery.amper} amperes - ${battery.cca} CCA` === bateriaLabel)?.id;
      })
      .filter((id) => id !== undefined);

    if (factory && selectedBatteries) {
      const carro: CarType = {
        name: e.currentTarget.nome.value,
        yearFabrication: parseInt(e.currentTarget.yearFabrication.value),
        factoryId: factory.id,
        batteryId: selectedBatteries,
      };

      const res = await criarCarroAPI(carro);

      if (res.code === 201) {
        console.log(res.data);
      } else {
        console.log(res);
      }
    }
  }

  const handleBateriasChange = (_event: React.SyntheticEvent, newValue: Array<string>) => {
    setValueBateria(newValue);
  };

  return (
    <Container maxWidth='sm' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh'}}>
      
      <CriarFabricas/>
      
      
      <Typography variant="h3" component="h1" textAlign="center" sx={{ my: 4 }}>
        Criar carros
      </Typography>

      <FormStyled onSubmit={(e) => handleSubmit(e)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box  width="100%" maxWidth={400} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField sx={{ margin: 1 }} id="outlined-basic" name="nome" label="Nome" variant="outlined" fullWidth/>
        <TextField sx={{ margin: 1 }} id="outlined-basic" name="yearFabrication" type="number" label="Ano de fabricação" variant="outlined" fullWidth/>
        <Autocomplete
          value={valueFabrica}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(_event: any, newValue: string | null) => {
            setValueFabrica(newValue);
          }}
          inputValue={inputValueFabrica}
          onInputChange={(_event, newInputValue) => {
            setInputValueFabrica(newInputValue);
          }}
          id="controllable-states-demo"
          options={factoriesRedux.map((f) => f.name)}
          renderInput={(params) => <TextField sx={{ margin: 1 }} {...params} name="factory" label="Fábrica" />}
        />

        <Autocomplete
          multiple
          value={valueBateria}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={handleBateriasChange}
          inputValue={inputValueBateria}
          onInputChange={(_event, newInputValue) => {
            setInputValueBateria(newInputValue);
          }}
          id="controllable-states-demo"
          options={bateriesRedux.map((f) => `${f.name} - ${f.amper} amperes - ${f.cca} CCA`)}
          renderInput={(params) => <TextField sx={{ margin: 1 }} {...params} name="batery" label="Baterias" />}
        />
        </Box>

        <Button sx={{ mt: 2 }} type="submit" fullWidth variant="contained">
          Criar
        </Button>
      </FormStyled>
    </Container>
  );
}
