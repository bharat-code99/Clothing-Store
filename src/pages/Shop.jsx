import Hero from "../components/Hero";
import NewCollections from "../components/NewCollections";
import Newsletter from "../components/Newsletter";
import Offer from "../components/Offer";
import Popular from "../components/Popular";

const Shop = () => {
  return(
    <section>
      <Hero />
      <NewCollections />
      <Offer />
      <Popular />
      <Newsletter />
    </section>
  )
}

export default Shop;