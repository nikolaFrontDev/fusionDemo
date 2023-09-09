import React from 'react'

export default function Button({style, id, type, title}) {
  return (
    <button className={style} id={id} type={type}>{title}</button>
  )
}
