import { Autocomplete, TextField, Typography } from "@mui/material";
import { useAppSelector } from "../store/hooks";

import { BodyProductsStyle } from "../components/ProductsStyled";
import { SetStateAction, useState } from "react";

export default function Products() {
  const productsRedux = useAppSelector((state) => state.products);
  const carsRedux = useAppSelector((state) => state.cars);
  const [valueCars, setValueCars] = useState<string | null>("");
  const [inputCars, setInputCars] = useState("");
  const [isThereCarSelect, setIsThereCarSelect] = useState(false);

  function isThereCarASelect(newValue: SetStateAction<string | null>) {
    setValueCars(newValue);
    setIsThereCarSelect(true);
  }

  return (
    <BodyProductsStyle>
      <Typography variant="h4" component="h1">
        Produtos
      </Typography>
      <Typography variant="h5" component="h2">
        Modelos de baterias: {productsRedux.length}
      </Typography>

      <Autocomplete sx={{width:"80%"}}
        value={valueCars}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(event: any, newValue: string | null) => {
          isThereCarASelect(newValue);
        }}
        inputValue={inputCars}
        onInputChange={(event, newInputValue) => {
          setInputCars(newInputValue);
        }}
        id="controllable-states-demo"
        options={carsRedux.map((f) => f.name)}
        renderInput={(params) => <TextField sx={{ margin: 1 }} {...params} name="batery" label="Digite seu carro" />}
      />

      {isThereCarSelect ? 
      carsRedux.filter((c) => c.name === inputCars).map((c) => 
      <div key={c.name}>
        {c.battery.map((b)=>
          <div key={b.id}>
            <Typography>{b.name} - {b.amper} amperes - {b.cca} CCA - R${b.price},00</Typography>
          </div>
        )}
        </div>) :
       null}
    </BodyProductsStyle>
  );
}
