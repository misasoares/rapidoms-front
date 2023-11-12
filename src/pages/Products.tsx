import { Typography } from "@mui/material";
import { useAppSelector } from "../store/hooks";
import CardBateria from "../components/CardBateria";
import { BodyProductsStyle } from "../components/ProductsStyled";



export default function Products() {
    const productsRedux = useAppSelector((state)=>state.products)

    console.log(productsRedux, '---')

  return (
    <BodyProductsStyle>
      <Typography variant="h4" component="h1">
        Produtos
      </Typography>
      <Typography variant="h5" component="h2">Modelos de baterias: {productsRedux.length}</Typography>

        {productsRedux.map((b, index)=>(
            <div key={index}>
                <Typography variant="h6" component="p">
                    <CardBateria img={b.img} name={b.name} amper={b.amper} cca={b.cca} price={b.price} warranty={b.warranty}/>
                </Typography>

            </div>
        ))}
    </BodyProductsStyle>
  );
}
