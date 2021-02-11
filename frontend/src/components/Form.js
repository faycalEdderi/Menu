import React, { Component } from "react";
import axios from "axios";



export default class FormComponent extends Component{
    constructor(props) {
        super(props);

        this.state= {
            titre: '',
            description: '',
            selectedDay : this.props.id,
            week : []
            
        }

      

    }
/*
    componentDidMount() { 
  
        let data ; 
  
        axios.get('http://localhost:8000/api/days') 
        .then(res => { 
            data = res.data; 
            this.setState({ 
                week : data     
            }); 
        }) 
        .catch(err => {}) 
    } 

     {this.state.week.map((week, id) =>(
                      <option value={week.id} key={id}>
                          
                          {this.props.day}
                      </option>
                    )
                  )}

    */

    handleChange = (e) => {

        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value)


    };

    handleSubmit = (e) => {
        axios
            .post(`http://localhost:8000/api/menus/`, {
                name : this.state.titre,
                description : this.state.description, 
                day_of_menu : this.props.id
            })
            .then((res) => {
                this.setState({
                    titre : "",
                    description: "",
                    
                })
            })
            .catch((err) => {});
    };

    render(){

       

        
        return(

        <div>
            <h1 className="text-center bg-success text-dark">{this.props.day}</h1>
            <p>Le plat : {this.state.titre}</p>
            <p>La description : {this.state.description}</p>
            <p>le jour : {this.state.selectedDay}</p>

            

           <form action="" className="d-flex align-items-center flex-column " onSubmit= {this.handleSubmit}>
              <input placeholder="Nom"  onChange={this.handleChange} className="w-50 mb-3" type="text" name="titre" />
              <textarea placeholder="Description"  onChange={this.handleChange}  className="w-50 "  name="description" />
              <select onChange={this.handleChange} name="selectedDay">
                 
                      <option required value={this.props.id} >
                          
                          {this.props.day}
                      </option>
                  
              </select>

              

           
              
              <button className="btn mt-3 mb-3 btn-success">Valider</button>
            </form>
        </div>



            
        )
    }
}


