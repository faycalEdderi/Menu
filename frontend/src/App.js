import React, { Component } from "react";
import FormComponent from "./components/Form";
import axios from "axios";




    class App extends Component {
      constructor(props){
        super(props);
        this.state={

            week : [
                'Lundi',
                'Mardi',
                'Mercredi',
                'Jeudi',
                'Vendredi',
                'Samedi',
                'Dimanche',
            ],
            weekData : []

        }

      }

      componentDidMount() { 

        
  
        let data ; 
  
        axios.get('http://localhost:8000/api/days') 
        .then(res => { 
            data = res.data; 
            this.setState({ 
              weekData : data     
            }); 
        }) 
        .catch(err => {}) 
    } 
        handleInput = (e) => {

            this.setState({ [e.target.name]: e.target.value });

        };

       

     






      //   {this.state.week.map((day, i)=>
      render() {

        
        
        
        return (
          <main className="bg-dark">
            <h1 className="text-center text-white" >Menu de la semaine</h1>


              
                {this.state.weekData.map((week, id) =>(
                  <FormComponent
                      key={id}
                      day={week.day}
                      id = {week.id}
                      

                  />
                  )
                )}

             










             
              
                
          </main>
        );
      }
    }
    export default App;