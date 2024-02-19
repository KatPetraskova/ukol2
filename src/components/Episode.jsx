import React from 'react';
import './Episode.css';
import episodes from "../data";

const Episode = () => {
      
    const episodeList = episodes.map(ep => <div key={ep.num} className='episodes-list'>
        <div className='episode'>
            <div className='episode__num'>{ep.num}</div>
            <div className='episode__body'>
                <div className='episode__title'>{ep.title}</div>
                <div className='episode__guest'>{ep.guest}</div>
            </div>    
          </div>
        </div>
        )

    return (<div>{episodeList}</div>)
};


export default Episode;