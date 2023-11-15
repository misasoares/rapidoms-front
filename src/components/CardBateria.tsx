import { Button } from "@mui/material";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import styled from "styled-components";

interface CardProps {
  img: string;
  name: string;
  amper: number;
  cca: number;
  warranty: number;
  price: number;
}

const ImgStyled = styled.img`
  width: 100%;
`;

export default function CardBateria(props: CardProps) {
  return (
    <Card>
      <ImgStyled src={props.img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.amper} amperes <br />
          {props.cca} CCA <br />
          {props.warranty} meses de garantia <br />
          R${props.price},00.
        </Typography>
        <Button variant="outlined" size="small">
          Pedir bateria
        </Button>
      </CardContent>
    </Card>
  );
}
