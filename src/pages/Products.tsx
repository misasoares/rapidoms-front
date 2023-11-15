import { Autocomplete, CardActions, Grid, TextField, Typography } from "@mui/material";
import { useAppSelector } from "../store/hooks";

import { BodyProductsStyle } from "../components/ProductsStyled";
import { SetStateAction, useState } from "react";
import CardBateria from "../components/CardBateria";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const productsRedux = useAppSelector((state) => state.products);
  const carsRedux = useAppSelector((state) => state.cars);
  const [valueCars, setValueCars] = useState<string | null>("");
  const [inputCars, setInputCars] = useState("");
  const [isThereCarSelect, setIsThereCarSelect] = useState(false);
  const navigate = useNavigate();

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

      <Autocomplete
        sx={{ width: "80%", margin: "auto" }}
        value={valueCars}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(_event: any, newValue: string | null) => {
          isThereCarASelect(newValue);
        }}
        inputValue={inputCars}
        onInputChange={(_event, newInputValue) => {
          setInputCars(newInputValue);
        }}
        id="controllable-states-demo"
        options={carsRedux.map((f) => f.name)}
        renderInput={(params) => <TextField sx={{ margin: 1 }} {...params} name="batery" label="Digite seu carro" />}
      />

      <Grid container spacing={2} sx={{ width: "80%", margin: "auto" }}>
        {isThereCarSelect
          ? carsRedux
              .filter((c) => c.name === inputCars)
              .map((c) =>
                c.battery.map((b) => (
                  <Grid onClick={() => navigate("/order")} item xs={12} sm={6} md={4} key={b.id}>
                    <CardBateria amper={b.amper} cca={b.cca} img={b.img} name={b.name} price={b.price} warranty={b.warranty} />
                    <CardActions></CardActions>
                  </Grid>
                ))
              )
          : null}
      </Grid>
    </BodyProductsStyle>
  );
}
