import { useParams } from "react-router"


const Product = () => {

  const params = useParams();

  return (
    <div>{params.productId}</div>
  )
}

export default Product;