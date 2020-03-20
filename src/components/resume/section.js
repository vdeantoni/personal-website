import React from "react"
import Item from "./item"

const Section = ({ title, images = undefined, items }) => {
  return (
    <>
      <h2 className="ty-h3 my-4 indent-2">{title}</h2>
      <ul className="p-8">
        {items &&
          items.map(item => (
            <Item key={item.name} item={item} images={images} />
          ))}
      </ul>
    </>
  )
}

export default Section