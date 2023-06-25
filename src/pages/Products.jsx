import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Product from '../components/Product'



function Products() {


    const [data,setData]=useState([]);
useEffect(()=>{
  let token=localStorage.getItem("login")

  const fetchData = async () => {
    let result= await fetch("http://bookbuzz.cronhex.com/api/v1/product/explore",{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          'Authorization': `Bearer ${token}`
        }
      });

        result = await result.json();
        let products=result.result['products']
        setData(products)
    }

    fetchData();
  
},[])

  return (
    <div id="products">
        <div className="container">
            <Header/>

            <div className='products-title'>
                <h2>Browse All Books</h2>
            </div>
            <div className="all-products">
              {
                data.map((el)=>{
                  return (
                    <NavLink to={`/product-detail/${el.id}`}>
                  <Product
                    id={el.id} 
                    title={el.title}
                    desc={el.subtitleShort}
                    img={el.mainImage}
                    like={el.numOfLikes}

                  />
                  </NavLink>
                  )
                  
                })
              }
                
            </div>

            
            <div className='load-more-row'>
                <div className="load-more">Load More</div>
            </div>

            <Footer/>
        </div>

    </div>
  )
}

export default Products