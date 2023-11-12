import { Button, Typography } from "@mui/material";
import { BodyHomeStyled, SectionTitleStyled } from "../components/HomeStyled";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { pegarBaterias } from "../config/services/products.service";
import { useDispatch } from "react-redux";
import { BateryType, criarBateria, limparBaterias } from "../store/modules/products/productsSlice";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    async function get() {
      const res = await pegarBaterias();

      if (res.code === 200) {
        dispatch(limparBaterias());

        res.data.forEach((data: BateryType) => {
          dispatch(criarBateria(data));
        });
      }
    }

    get();
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
