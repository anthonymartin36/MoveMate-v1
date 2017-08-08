import React from 'react'
import { insertAddress } from '../api'

export default class Homes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      job: {}
    }
    this.submitJob = this.submitJob.bind(this)
    this.updateJobDetails = this.updateJobDetails.bind(this)
    //this.finishAdd = this.finishAdd.bind(this)
  }
  updateJobDetails(e) {
    let job = this.state.job
    job[e.target.name] = e.target.value
    //do something
    this.setState({job: job})
    console.log("the Address is:", this.state.job);
  }

  submitJob(e) {
    e.preventDefault()
    console.log(this.state.job)
    insertAddress(this.state.job, this.finishAdd.bind(this))
  }
  finishAdd(err){
    if(err){
      console.log(err)
    }
  }

  render() {
    return (
      <div>
      <form onSubmit={e => this.submitJob(e)}>

      <h4> Personal Information</h4>
        <input name="fullName" placeholder="full name" type="text" onChange={(e) => this.updateJobDetails(e)}/>
        <input name="mobile" placeholder="mobile number" type="text" onChange={(e) => this.updateJobDetails(e)}/>
        <input name="email" placeholder="email address" type="text" onChange={(e) => this.updateJobDetails(e)}/>
        <input name="landline" placeholder="landline phone number" type="text" onChange={(e) => this.updateJobDetails(e)}/>

      <h4> Current Address </h4>
        <input name="oldStreet" placeholder="street" type="text" onChange={(e) => this.updateJobDetails(e)}/>
        <input name="oldArea" placeholder="Area" type="text" onChange={(e) => this.updateJobDetails(e)}/>
        <input name="oldTown" placeholder="Town" type="text" onChange={(e) => this.updateJobDetails(e)}/>
        <input name="oldPostcode" placeholder="Postcode" type="text" onChange={(e) => this.updateJobDetails(e)}/>

        <p>{this.state.job.street}</p>

      <h4> New Address </h4>
        <input name="newStreet" placeholder="street" type="text" onChange={(e) => this.updateJobDetails(e)}/>
        <input name="newArea" placeholder="Area" type="text" onChange={(e) => this.updateJobDetails(e)}/>
        <input name="newTown" placeholder="Town" type="text" onChange={(e) => this.updateJobDetails(e)}/>
        <input name="newPostcode" placeholder="Postcode" type="text" onChange={(e) => this.updateJobDetails(e)}/>

      <h4> Property Details</h4>

      <p> Street Parking :
      <select name="parking" onChange={(e) => this.updateJobDetails(e)}>
        <option value="1"> Yes </option>
        <option value="0"> No</option>
      </select>
      </p>

      <p> Driveway :
      <select name="addressType" onChange={(e) => this.updateJobDetails(e)} >
        <option value="1"> Yes </option>
        <option value="0"> No </option>
      </select>
      </p>

      <p> Type of Abode :
      <select name="addressType" onChange={(e) => this.updateJobDetails(e)}>
        <option value="1"> House </option>
        <option value="0"> Apartment </option>
      </select>
      </p>

      <p> Number of Bedrooms :
      <select name="bedrooms" onChange={(e) => this.updateJobDetails(e)}>
        <option value="1"> 1 </option>
        <option value="2"> 2</option>
        <option value="3"> 3</option>
        <option value="4"> 4</option>
      </select>
      </p>

      <p> Flights of inside Stairs :
      <select name="internalStairs" onChange={(e) => this.updateJobDetails(e)}>
        <option value="1"> 1 </option>
        <option value="2"> 2</option>
        <option value="3"> 3</option>
        <option value="4"> 4</option>
      </select>
      </p>

      <p> Flights of outside Stairs :
      <select name="externalstairs" onChange={(e) => this.updateJobDetails(e)}>
        <option value="1"> 1 </option>
        <option value="2"> 2</option>
        <option value="3"> 3</option>
        <option value="4"> 4</option>
      </select>
      </p>

      Additional Material
      <p>
        <textarea name="material" rows="4" cols="50" onChange={(e) => this.updateJobDetails(e)} ></textarea>
      </p>
      <p></p><input type="submit" /> <input type="submit" value="clear" onClick="" />
    </form>
    </div>
    )
  }
}
