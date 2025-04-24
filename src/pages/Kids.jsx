import all_product from "../assets/all_product";
import Item from "../components/Item";

const Kids = () => {
  const kidsProducts = all_product.filter((product) => {
    if(product.category === 'kid'){
      return product;
    }
  })

  return(
    <div className="my-8 px-4">
      <h1 className="my-8 text-4xl text-gray-800 font-bold">Kid's Collection</h1>
      <div className='flex gap-8 flex-wrap justify-center'>
        {kidsProducts.map((product) => {
          return (
            <Item 
              key={product.id} 
              name={product.name} 
              image={product.image} 
              new={product.new_price} 
              old={product.old_price} 
              id={product.id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Kids;