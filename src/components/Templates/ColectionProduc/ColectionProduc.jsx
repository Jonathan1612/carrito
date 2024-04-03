import Header from '../../Organims/Header/Header'
import Product from '../../Organims/Product/Product'
import TitleOne from '../../Atoms/TitleOne/TitleOne'
import { useCart } from '../../../hooks/useCart'

const ColectionProduc = () => {

  const { 
    data,
    cart,
    addToCard,
    remuveFromCart,
    increaseQueantity,
    decreaseQueantity,
    clearCart,
    isEmpty,
    cartTotal
  } = useCart() 

  return (
    <div className="container-xl">
      <TitleOne title='Nuestra Colección' />
      <div className='row mt-5"'>
      <Header
        cart={cart}
        remuveFromCart={remuveFromCart}
        increaseQueantity={increaseQueantity}
        decreaseQueantity={decreaseQueantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />
        {data.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCard={addToCard}
          />
        ))}
      </div>
    </div>

  )
}

export default ColectionProduc
