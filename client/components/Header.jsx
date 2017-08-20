import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <div className="blogHeader">
          <nav className="container row">
          <ul>
            <li>
              <a href="index.html" className="active">home</a> |
              <a href="blog/blog-template.html">blog</a> |
              <a href="contact.html">contact</a>
            </li>
          </ul>

          <ul className="mobileIndex">
            <li>
              <a href="index.html" className="active">home</a>
              <a href="blog/blog-template.html">blog</a>
              <a href="contact.html">contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <h1>Move Mate </h1>
    </div>

  )
}

export default Header
