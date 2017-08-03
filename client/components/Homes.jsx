import React from 'react'

export default class Homes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newHome: {}
    }
    // this.submitHome = this.submitHome.bind(this)
    // this.updateNewHomeDetails = this.updateNewHomeDetails.bind(this)
  }
  updateNewHomeDetails(e) {
    let newHome = this.state.newHome
    newHome[e.target.name] = e.target.value
    //do something
    this.setState({newHome: newHome})
    console.log("the Address is:", this.state.newHome);
  }
  submitHome(e) {
    e.preventDefault()
    console.log({e});
    //console.log("the Address is:", this.state.newHome);
  }
  render() {
    return (
      <form onSubmit={this.submitHome}>
        <input name="Address" placeholder="Address" type="text" onChange={(e) => this.updateNewHomeDetails(e)}/>
        <input name="Area" placeholder="Area" type="text" onChange={(e) => this.updateNewHomeDetails(e)}/>
        <input name="Town" placeholder="Town" type="text" onChange={(e) => this.updateNewHomeDetails(e)}/>
        <input name="Postcode" placeholder="Postcode" type="text" onChange={(e) => this.updateNewHomeDetails(e)}/>
        <input type="submit" />
        <p>{this.state.newHome.name}</p>
      </form>
    )
  }
}
