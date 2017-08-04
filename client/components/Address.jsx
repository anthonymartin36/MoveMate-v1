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
    Request.get('https://api.nzpost.co.nz/addresschecker/1.0/')
    .set('addressChecker', '/apiplatform/repository/v2/organizations/b8271f09-2ad8-4e1c-b6b1-322c5727d148/public/apis/273/versions/25399/definition')
    .set('Accept', 'application/json').query({'address_line_1': '184 Willis'})
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
        <h1>Address API</h1>
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
