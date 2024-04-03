import TableHead from '../../Molecules/TableHead/TableHead'
import TableBody from '../../Molecules/TableBody/TableBody'
import Image from '../../Atoms/Image/Image'


const Header = ({ cart, remuveFromCart, increaseQueantity, decreaseQueantity, clearCart, isEmpty, cartTotal }) => {

  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <Image route={`/img/logo.svg`} />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div
              className="carrito"
            >
              <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

              <div id="carrito" className="bg-white p-3">
                {isEmpty ? (
                  <p className="text-center">El carrito esta vacio</p>
                ) : (
                  <>
                    <table className="w-100 table">
                      <TableHead />
                      <TableBody cart={cart} remuveFromCart={remuveFromCart} increaseQueantity={increaseQueantity} decreaseQueantity={decreaseQueantity}/>
                    </table>
                    <p className="text-end">Total pagar: <span className="fw-bold">${cartTotal}</span></p>
                    <button className="btn btn-dark w-100 mt-3 p-2" onClick={clearCart}>Vaciar Carrito</button>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
