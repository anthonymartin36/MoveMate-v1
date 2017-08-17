import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'

import App from '../client/components/App.jsx'

test('<App />', t => {
  const expected = 'Move Mate <Homes />'
  var wrapper = shallow(<App />)
  t.is(wrapper.text(), expected)
})
