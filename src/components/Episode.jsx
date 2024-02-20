import React from 'react';
import './Episode.css';

export const Episode = ({ ep }) => {

    return (
    <>
        <div key={ep.num} className='episodes-list'>
            <div className='episode'>
                <div className='episode__num'>{ep.num}</div>
                <div className='episode__body'>
                    <div className='episode__title'>{ep.title}</div>
                    <div className='episode__guest'>{ep.guest}</div>
                </div>    
            </div>
        </div>
    </>
    )
};

const AllEpisodes = ({ episode }) => {

    return (
        <>
            ({episode.map(ep => (<Episode key={ep.num} ep={ep} />))})
        </>
    )

}

export default AllEpisodes;