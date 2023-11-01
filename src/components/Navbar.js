import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Navbar = () => {
  const items  = useSelector((state)=>state.cart)
  return (
    <div className='nav'>
        <strong><i class="fa-brands fa-ello"></i> E-Products</strong>
     <div>
       <Link className='navlink' to={"/"}><i class="fa-solid fa-house"></i></Link>
       <Link className='navlink' to={"/cart"}><i class="fa-solid fa-cart-shopping"></i></Link>
       <span className='navlink'> Cart-Items : {items.length} </span>
     </div> 
    </div>
  )
}

export default Navbar
