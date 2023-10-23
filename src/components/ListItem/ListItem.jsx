import React from 'react'

export  function ListItem({ item }) {
    if(item.state !== 'active'){return}

    const titleFormat = (title) => {
        if(title.length <= 50){return title}
        return title.slice(0,50) + '...'
    }

    const currencyFormat = (code, price ) => {
        if(code === 'USD' || code === 'EUR'){
            const currency = code === 'USD'? '$': '€'
            return `${currency} ${price}`
        }
        return `${price} ${code}`
    }

    const getQuantityClass = (quantity) => {
        const className = quantity > 20? 'level-high': quantity>10? 'level-medium': 'level-low'
        return  `item-quantity ${className}`
    }


  return (
    <div className="item">
        <div className="item-image">
            <a href={ item.url }>
                <img src={ item.MainImage.url_570xN } alt=''/>
            </a>
        </div>
        <div className="item-details">
            <p className="item-title">{ titleFormat(item.title) }</p>
            <p className="item-price">{ currencyFormat(item.currency_code, item.price ) }</p>
            <p className= {getQuantityClass(item.quantity)}>{item.quantity} left</p>
        </div>
    </div>
  )
}
