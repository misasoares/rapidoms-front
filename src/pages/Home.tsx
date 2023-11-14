import { Button, Typography } from "@mui/material";
import { BodyHomeStyled, SectionTitleStyled } from "../components/HomeStyled";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { pegarBaterias } from "../config/services/products.service";
import { useDispatch } from "react-redux";
import { BateryType, criarBateria, limparBaterias } from "../store/modules/products/productsSlice";
import { pegarCarros } from "../config/services/car.service";
import { CarType, createCar, limparCarros } from "../store/modules/cars/carsSlice";
import { FactoryType, createFactory, limparFactories } from "../store/modules/factories/factoriesSlice";
import { pegarFabricas } from "../config/services/factory.service";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getBaterias() {
      const res = await pegarBaterias();

      if (res.code === 200) {
        dispatch(limparBaterias());

        res.data.forEach((data: BateryType) => {
          dispatch(criarBateria(data));
        });
      }
    }

    async function getFactories() {
      const res = await pegarFabricas();

      if (res.code === 200) {
        dispatch(limparFactories());
        res.data.forEach((data: FactoryType) => {
          dispatch(createFactory(data));
        });
      }
    }

    async function getCars() {
      const res = await pegarCarros();

      dispatch(limparCarros());
      if (res.code === 200) {
        res.data.forEach((data: CarType) => {
          dispatch(createCar(data));
        });
      }
    }

    getFactories();
    getCars();
    getBaterias();
  }, []);

  return (
    <BodyHomeStyled>
      <SectionTitleStyled>
        <Typography sx={{ textAlign: "center" }} variant="h4" component="h1">
          Nós temos a{" "}
          <span>
            <strong>BATERIA IDEAL</strong>
          </span>
          <br /> para o seu carro!
        </Typography>

        <Button onClick={() => navigate("/produtos")} size="large" sx={{ marginTop: "5%" }} variant="contained">
          Descobrir bateria ideal.
        </Button>
      </SectionTitleStyled>
    </BodyHomeStyled>
  );
}
