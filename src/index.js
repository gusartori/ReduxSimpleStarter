import React from "react";
import ReactDOM from "react-dom";

const API_KEY = "AIzaSyCaNlTUafWBrmVF_Cg-cZBCoxwZdKeQAHA";

// create a new component
const App = () => {        //const declara uma variável imutável, seria "final" no Java
    return <div>Hello, this is JSX!</div>;   //O html aqui é o JSX, parece HTML mas não é
}                               //JSX não é interpretado diretamente pelo browser, mas o babel faz essa conversão

// take this component`s generated HTML and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector(".container"));

// AIzaSyCaNlTUafWBrmVF_Cg-cZBCoxwZdKeQAHA 