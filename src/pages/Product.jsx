import { useParams } from "react-router"
import all_product from '../assets/all_product'
import ProductDisplay from "../components/ProductDisplay";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Product = () => {

  const params = useParams();
  const product = all_product.find((e) => e.id === Number(params.productId));

  return (
    <div>
      <Navbar />
      <ProductDisplay product={product} />
      <Footer />
    </div>

  )
}

export default Product;