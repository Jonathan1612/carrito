import { useEffect, useState } from 'react'
import Image from '../../Atoms/Image/Image'
import TitleOne from '../../Atoms/TitleOne/TitleOne'
import TitleTwo from '../../Atoms/TitleTwo/TitleTwo'
import Paragraph from '../../Atoms/Paragraph/Paragraph'

export default function Product({product, addToCard}) {
  
  const {id, name, image, description, price} = product

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
        <Image route={`/img/${image}.jpg`} />
        <div className="col-8">
            <TitleTwo name={name} id={id} />
            <Paragraph description={description} />
            <TitleOne title={`$ ${price}`}/>
            <button
            type="button"
            className="btn btn-dark w-100"
            onClick={() => addToCard(product)}
            >Agregar al Carrito</button>
        </div>
    </div>
  )
}
