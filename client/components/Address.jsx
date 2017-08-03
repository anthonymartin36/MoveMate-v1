import React from 'react'
import Request from 'superagent'

export default class Address extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      weather: '',
      Address: '53 Hankey St'
    }
  }

  componentDidMount() {
    this.connectAPI()
  }

connectAPI(e) {
  if(e){
    e.preventDefault()
  }
  Request.get('https://api.addressfinder.io/api/nz/address')
  .set('get', 'ADDRESSFINDER_NZ_DEMO_KEY')
  .set('Accept', 'application/json').query({a: "184 Willis"})
  .end(function(err, res) {
    if (res.ok) {
      this.setState({address: res.text})
    } else {
      alert('Oh no! error ' + res.text)
    }
  }.bind(this))
}

handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Weather API</h1>
          <div>
              {this.state.address}
          </div>
          <form onSubmit={this.connectAPI.bind(this)}>
             <input type="text" name="a" onChange={this.handleChange.bind(this)} value={this.state.address}/>
             <button type="submit">Submit</button>
          </form>

      </div>
    )
  }
}
