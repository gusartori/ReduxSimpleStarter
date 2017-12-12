import _ from 'lodash';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from  "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

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

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('climbing');        
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, videos => {
            this.setState({ 
                videos:videos,
                selectedVideo:videos[0]
             }); // ES6 consegue fazer videos : videos se transformar em videos por causa dos nomes das variaveis
        });
    }

    render(){
        const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300)
        return ( //React deixa passar a lista de videos que esta no state por um metodo chamado props, que é colocar a referencia do que vc quer passar como argumento do componente
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
            </div>
        );
    }
}

// take this component`s generated HTML and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector(".container"));

// AIzaSyCaNlTUafWBrmVF_Cg-cZBCoxwZdKeQAHA 