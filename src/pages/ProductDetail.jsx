import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ProductDetail() {
  return (
    <div id="product-detail">
        <div className="container">
            <Header/>

                <div className="product-detail-content">
                    <div className="product-detail-images">
                        <div className="big-image">
                            <img src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781526604279.jpg" alt="" />
                        </div>
                        <div className="little-images">
                            <div className="little-image">
                                <img src="https://m.media-amazon.com/images/I/51FInNmoxSS.jpg" alt="" />
                            </div>

                            <div className="little-image">
                                <img src="https://marketplace.canva.com/EAD7WuSVrt0/1/0/1003w/canva-colorful-illustration-young-adult-book-cover-LVthABb24ik.jpg" alt="" />
                            </div>

                            <div className="little-image">
                                <img src="https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="product-detail-desc">
                        <h2>The Wooden Table</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a odit rerum pariatur doloribus accusamus dolor omnis tempore quos quia. Cupiditate vel iure consectetur necessitatibus impedit consequuntur odio voluptas eius?</p>
                        
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