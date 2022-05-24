
import React, { Component } from 'react';
import axios from 'axios';

  export default class CreateTopic extends Component{

    constructor(props){
      super(props);

      this.state={
        Area:"",
        Topic:"",
        Supervisors:"",
        CoSupervisors:"",
        GroupName:"",
        Leader:"",
        SState:"",
        CState:"",
        Comments:""
        
      }
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })


  

  onSubmit=(e)=>{
      e.preventDefault();

      const {Area,Topic,Supervisors,CoSupervisors,GroupName,Leader,SState,CState,Comments} = this.state;

      const data={
        Area:Area,
        Topic:Topic,
        Supervisors:Supervisors,
        CoSupervisors:CoSupervisors,
        GroupName:GroupName,
        Leader:Leader,
        SState:SState,
        CState:CState,
        Comments:Comments
          
      }

      console.log(data)
      axios.post("http://localhost:8000/topic/save",data).then((res) =>{
        if(res.data.success){
          this.setState(
            {
              Area :"",
              Topic:"",
              Supervisors:"",
              CoSupervisors :"",
              GroupName: "",
              Leader:"",
              SState:"",
              CState:"",
              Comments:""
            }
          )
        }
      })
     
  }




    render() {

        return (
            <div className="edit">
       
            <div className="col-md-8 mt-4 mx-auto">
            <div style={{height:'80px', width:'100%', backgroundColor:"#080523", marginTop:'-20px'}}>
                    <br/>
                    <h2 style={{color:'white', textAlign:'center'}}>Topic Registration Form</h2>
                   <br/>
          </div>
                <br/>
                <div >
  
                <form className="row g-3">
  
                    <div className="form-group" >
                        <label for="inputEmail4" className="form-label" >Research Area : </label>
                        <input type="text" className="form-control" name="Area"  value={this.state.Area} placeholder="Please select the research area" onChange={this.handleChange} required></input>
                    </div>
                   
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label" >Research Topic : </label>
                        <input type="text" className="form-control" name="Topic" value={this.state.Topic} placeholder="Enter the selected topic" onChange={this.handleChange} required/>
                    </div>
  
  
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label">Supervisor : </label>
                        <input type="text" className="form-control" name="Supervisor" value={this.state.Supervisors} placeholder="Enter the name of the selected supervisor" onChange={this.handleChange} required/>
                    </div>
  
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label">Co-Supervisor :</label>
                        <input type="email" className="form-control" name="CoSupervisor" value={this.state.CoSupervisors} placeholder="Enter the name of the selected co-supervisor" onChange={this.handleChange} required/>
                    </div>

                    <div className="form-group">
                        <label for="inputAddress2" className="form-label">Registered name of the group :</label>
                        <input type="text" className="form-control" name="GroupName" value={this.state.GroupName} placeholder="Enter the registered name " onChange={this.handleChange} />
                          <div style={{ marginTop:'-20px'}}>
                    <br/>
          </div>
                    </div>
                   
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label">Enter the details of the Leader : </label>
                        <input type="text" className="form-control" name="Leader" value={this.state.Leader} placeholder="IT number of the leader" onChange={this.handleChange} />
                    </div>

                     
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label">Supervisor state : </label>
                        <input type="text" className="form-control" name="SState" value={this.state.SState} list="SStates" placeholder="Response of the Supervisor" onChange={this.handleChange} />
                    </div>
                    <datalist id="SStates">
                          <option value="Supervisor response - pending"></option>
                          <option value="Supervisor response - accepted"></option>
                          <option value="Supervisor response - rejected"></option>

                          </datalist>
                     
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label">Co-Supervisor State : </label>
                        <input type="text" className="form-control" name="CState" value={this.state.CState} list="CStates" placeholder="Response of the Co-Supervisor" onChange={this.handleChange} />
                    </div>
                    <datalist id="CStates">
                          <option value="Co-Supervisor response - pending"></option>
                          <option value="Co-Supervisor response - accepted"></option>
                          <option value="Co-Supervisor response - rejected"></option>

                          </datalist>

                     
                    <div className="form-group">
                        <label for="inputAddress2" className="form-label">Comments : </label>
                        <input type="text" className="form-control" name="Comments" value={this.state.Comments} placeholder="Enter the comments to be viewed about topic selection" onChange={this.handleChange} />
                        <p>If no comments, please proceed with a "No"</p>
                    </div>
                    
                </form>
                    <div>
                        <hr/>
                        <center>
                        <button className="btn btn btn-dark btn-lg" onClick={this.onSubmit} href="/">Register Topic</button>&nbsp;
                        </center>
                        <br/>
                        <br/>
                    </div>
  
  
                    </div>
                    
            </div>
            </div>
        )
    }
  }
