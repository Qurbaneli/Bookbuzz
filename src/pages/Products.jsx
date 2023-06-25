import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Product from '../components/Product'



function Products() {


    const [data,setData]=useState([]);
useEffect(()=>{

  const fetchData = async () => {
    let result= await fetch("http://bookbuzz.cronhex.com/api/v1/product/explore",{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQm9iIiwiaWF0IjoxNjg3NjQzMjY2LCJleHAiOjE2ODc2NDM1NjZ9.eU4oBDjyfpahTpQ9fEyaK7yjs4BobgCifALTtB_yhbM'
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
                  return (<Product
                    id={el.id} 
                    title={el.title}
                    desc={el.subtitleShort}
                    img={el.mainImage}
                    like={el.numOfLikes}

                  />)
                  
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