
import { Autocomplete, CardActions, Grid, TextField, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { BodyProductsStyle } from "../components/ProductsStyled";
import { useState } from "react";
import CardBateria from "../components/CardBateria";
import { useNavigate } from "react-router-dom";
import { BateryType } from "../store/modules/products/productsSlice";
import { OrderType, criarPedido } from "../store/modules/order/orderSlice";
import { CarType } from "./CriarCarros";

export default function Products() {
  const dispatch = useAppDispatch();
  const carsRedux = useAppSelector((state) => state.cars);
  const [valueCars, setValueCars] = useState<CarType | null>(null);
  const [inputCars, setInputCars] = useState("");
  const [isThereCarSelect, setIsThereCarSelect] = useState(false);
  const navigate = useNavigate();
  console.log(carsRedux, '------------------------------')

  function isThereCarASelect(newValue: CarType | null) {
    setValueCars(newValue);
    setIsThereCarSelect(true);
  }

  function handleProduct(b: BateryType) {
    const findCar = carsRedux.find((c) => c.name === inputCars);
    if (findCar) {
      const order: OrderType = { car: findCar, battery: b };
      dispatch(criarPedido(order));
      navigate("/order");
    }
  }

  return (
    <BodyProductsStyle>
      <Typography variant="h5" component="h1">
        Digite o modelo do seu carro.
      </Typography>

      <Autocomplete
        sx={{ width: "80%", margin: "auto" }}
        value={valueCars}
        onChange={(_event, newValue) => {
          isThereCarASelect(newValue);
        }}
        inputValue={inputCars}
        onInputChange={(_event, newInputValue) => {
          setInputCars(newInputValue);
        }}
        id="controllable-states-demo"
        options={[...carsRedux]}
        getOptionLabel={(option: CarType) => option.name}
        renderOption={(props, option) => (
          <li {...props}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>{option.name}</div>
              <div style={{ fontSize: "small", color: "gray" }}> {option.description}</div>
            </div>
          </li>
        )}
        renderInput={(params) => <TextField {...params} label="Digite seu carro" />}
      />

      <Grid container spacing={2} sx={{ width: "80%", margin: "auto" }}>
        {isThereCarSelect
          ? carsRedux
              .filter((c) => c.name === inputCars)
              .map((c) =>
                c.battery.map((b) => (
                  <Grid onClick={() => handleProduct(b)} item xs={12} sm={6} md={4} key={b.id}>
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
