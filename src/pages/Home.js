import React, { useEffect} from 'react'
import { add } from '../Redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES, fetchproducts } from '../Redux/ProductSlice';


const Home = () => {
    const dispatch = useDispatch()
    const {data :product,status} = useSelector((state)=>state.product)
    
    useEffect(()=>{
       dispatch(fetchproducts());
    },[])

  const handleClick = (product)=>{
     dispatch(add(product))
  }
  //loader
  if(status === STATUSES.LOADING){
    return <h1 className='loader'>Loading...</h1>
  }



  return (
    <div className='productsWrapper'>
      {
        product.map((products)=>(
            <div className='card' key={products.id}>
                <img className='img' src={products.image} alt='img'/>
                <h4>{products.title}</h4>
                <h5>{products.price}</h5>
                <button className='btn' onClick={()=>handleClick(products)} >Add to Cart</button>
            </div>
        )

        )
      }
    </div>
  )
}

export default Home
