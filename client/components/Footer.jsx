import React from 'react'

const Footer = () => {
  return (
      <div className="blogFooter">
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
  )
}

export default Footer
