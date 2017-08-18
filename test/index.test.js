import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'

import App from '../client/components/App.jsx'
import Header from '../client/components/Header.jsx'
import Footer from '../client/components/Footer.jsx'
import Contactus from '../client/components/Contactus.jsx'

test('Test React: <App />', t => {
  const expected = '<Header /><Homes /><Footer />'
  var wrapper = shallow(<App />)
  t.is(wrapper.text().trim(), expected)
})

test('Test React: <Header />', t => {
  const expected = 'Move Mate'
  var wrapper = shallow(<Header />)
  t.is(wrapper.text().trim(), expected)
})

test('Test React: <Footer />', t => {
  const expected = '<Contactus />'
  var wrapper = shallow(<Footer />)
  t.is(wrapper.text().trim(), expected)
})
