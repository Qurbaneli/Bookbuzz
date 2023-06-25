import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        BookBuzz
      </div>

      <div className="footer-nav">
        <div className='footer-social'>
          <h4>Social</h4>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Linkedin</a></li>
            </ul>
        </div>

        <div>
            <ul>
              <li><a href="#">Get help</a></li>
              <li><a href="#">Partner with us</a></li>
              <li><a href="#">Add your bookshop</a></li>
              <li><a href="#">Sign up to sell books</a></li>
            </ul>
        </div>

        <div>
            <ul>
              <li><a href="#">Read our blog</a></li>
              <li><a href="#">Buy gift card</a></li>
              <li><a href="#">Bookshops nearby</a></li>
              <li><a href="#">Save on first order</a></li>
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer