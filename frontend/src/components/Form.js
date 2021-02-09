import React, { Component } from "react";
import axios from "axios";



export default class FormComponent extends Component{
    constructor(props) {
        super(props);

        this.state= {
            titre: '',
            description: '',
        }

    }

    handleChange = (e) => {

        this.setState({ [e.target.name]: e.target.value });


    };

    handleSubmit = (e) => {
        axios
            .post(`http://localhost:8000/api/menus/`, {
                name : this.state.titre,
                description : this.state.description
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

           <form action="" className="d-flex align-items-center flex-column " onSubmit= {this.handleSubmit}>
              <input placeholder="Nom"  onChange={this.handleChange} className="w-50 mb-3" type="text" name="titre" />
              <textarea placeholder="Description"  onChange={this.handleChange}  className="w-50 "  name="description" />
              <button className="btn mt-3 mb-3 btn-success">Valider</button>
            </form>
        </div>



            
        )
    }
}


