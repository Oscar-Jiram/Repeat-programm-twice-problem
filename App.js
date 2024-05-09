import React from "react";
import "./App.css";
import { useEffect,useState } from "react";

function App(){
  const[datos,setDatos] = useState([])

  useEffect(()=>{

    const url = "https://randomuser.me/api/?results=3";
    const peticion = fetch(url);
    peticion
    .then(datos=>datos.json())
    .then(lectura=>{
      lectura.results.map((persona)=>{
        setDatos( (e) => [ 
          ...e,<div key={persona.email} >
            <div> {persona.name.first} {persona.name.last}</div>
            <div>
              <img src={persona.picture.large} alt="foto de empleado del mes"/>
            </div>
          </div>
         ])
        console.log(persona.name.first)
      })
       })
    .catch(()=>console.log("Se ha encontrado un error"))
   },[])

  return ( 
  <>
  <h1>El empleados del mes es:</h1>
  <div> {datos} </div>
  
  </>
  )
}
export default App;
