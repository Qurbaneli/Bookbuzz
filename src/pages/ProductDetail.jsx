import React,{useEffect,useState} from 'react'
import {useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ProductDetail() {
    const params=useParams();
    const bookId=params?.bookId;

    const [detail,setDetail]=useState([]);

useEffect(()=>{
  let token=localStorage.getItem("login")

  const fetchData = async () => {
    let result= await fetch(`http://bookbuzz.cronhex.com/api/v1/product/details?productId=${bookId}`,{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          'Authorization': `Bearer ${token}`
        }
      });
        result = await result.json();
        console.log(result)
        let detail=result.result
        setDetail(detail)
        console.log(detail.images)
    }

    fetchData();
  
},[])

  return (
    <div id="product-detail">
        <div className="container">
            <Header/>

                <div className="product-detail-content">
                    <div className="product-detail-images">
                        <div className="big-image">
                            <img src={detail.mainImage} alt="" />
                        </div>
                        <div className="little-images">
                             {/* {
                                detail.images.map((el)=>{
                                    return (
                                        <div className="little-image">
                                        <img src="https://m.media-amazon.com/images/I/51FInNmoxSS.jpg" alt="" />
                                        </div>
                                    )
                                })
                            } 
         */}
                        </div>
                    </div>

                    <div className="product-detail-desc">
                        <h2>{detail.title}</h2>
                        <p>{detail.subtitleShort}</p>
                        
                        <div className="tags">
                            <div className='tag'>
                                tag1
                            </div>
                            <div className='tag'>
                                tag2
                            </div>
                            <div className='tag'>
                                tag3
                            </div>
                        </div>

                        <div className="product-detail-author">
                            <div>
                                <div className="product-author-detail-image">
                                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                                </div>
                                <div className="product-author-title">
                                John Smith
                                </div>
                                
                            </div>

                            <div>
                                <div className="product-author-detail-image">
                                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                                </div>
                                <div className="product-author-title">
                                Wooden Backends
                                </div>
                                
                            </div>
                        </div>
                    
                    
                    </div>
                </div>

            <Footer/>
        </div>
    </div>
  )
}

export default ProductDetail