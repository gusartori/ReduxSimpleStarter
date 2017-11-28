import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from  "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from './components/video_list';

const API_KEY = "AIzaSyCaNlTUafWBrmVF_Cg-cZBCoxwZdKeQAHA";

// create a new component
// const App = () => {        //const declara uma variável imutável, seria "final" no Java
//     return (
//     <div>
//         <SearchBar />    
//     </div>
//     );   //O html aqui é o JSX, parece HTML mas não é
// }                               //JSX não é interpretado diretamente pelo browser, mas o babel faz essa conversão

class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'climbing'}, videos => {
            this.setState({ videos }) // ES6 consegue fazer videos : videos se transformar em videos por causa dos nomes das variaveis
        })
    }

    render(){
        return ( //React deixa passar a lista de videos que esta no state por um metodo chamado props, que é colocar a referencia do que vc quer passar como argumento do componente
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// take this component`s generated HTML and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector(".container"));

// AIzaSyCaNlTUafWBrmVF_Cg-cZBCoxwZdKeQAHA 