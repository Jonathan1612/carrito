import React from 'react'

export default function TableBody( {cart, remuveFromCart, increaseQueantity, decreaseQueantity} ) {
    return (
        <tbody>
            {cart.map(product => (
                <tr key={product.id}>
                    <td>
                        <img className="img-fluid" src={`/img/${product.image}.jpg`} alt="imagen guitarra" />
                    </td>
                    <td>{product.name}</td>
                    <td className="fw-bold">
                        ${product.price}
                    </td>
                    <td className="flex align-items-start gap-4">
                        <button
                            type="button"
                            className="btn btn-dark"
                            onClick={() => decreaseQueantity(product.id)}
                        >
                            -
                        </button>
                        {product.quantity}
                        <button
                            type="button"
                            className="btn btn-dark"
                            onClick={() => increaseQueantity(product.id)}
                        >
                            +
                        </button>
                    </td>
                    <td>
                        <button
                            className="btn btn-danger"
                            type="button"
                            onClick={() => remuveFromCart(product.id)}
                        >
                            X
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}
