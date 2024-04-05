import React from 'react'

const List = ({contact}) => {
  return (
      <ul className='contact__list'>{contact.map((item) => (
          <li key={item.name} className="contact__list-item">
              
          </li>
      ))}</ul>
  )
}

export default List