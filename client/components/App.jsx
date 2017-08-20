import React from 'react'

import Homes from './Homes'
import Header from './Header'
import Footer from './Footer'

const App = () => {
  return (
    <div>
    <Header className="header" />
    <Homes  />
    <Footer className="footer"/>
    </div>
  )
}

export default App
