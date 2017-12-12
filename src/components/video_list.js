import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => { //props é uma palavra reservada que recebera os atributos do React que sao passados para o componente, na classe index.js nesse exemplo
    //JSX usa ClassName para referenciar Class do CSS
    const videoItems = props.videos.map((video) =>{
        return (
        <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag} 
        video={video} />
    )
    })
    // curly braces são sempre usadas para referenciar JS dentro de JSX
    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;