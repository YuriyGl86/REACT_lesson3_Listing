import React from 'react'
import { ListItem } from '../ListItem'


export  function Listing({ items }) {
  return (
    <div className="item-list">
        {items.map((item) => (
            <ListItem item={item} key={item.listing_id}/>
        ))}
    </div>


  )
}
