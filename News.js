import React from 'react'
// import logo as './logo192.png';
import { useEffect,useState } from 'react';

function News(props) {
    return (
        <>
            <div>
                <div className={`card text-blue bg-${props.mode=="light"?"light":"info"} mb-3`} style={{ width: "18rem"}}>
                    <img className="card-img-top" src={props.img} alt="Card" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description.substring(0,400)}</p>
                        <a href={props.url} className={`btn btn-${props.mode=="light"?"info":"danger"}`} target="_blank">Read Full News</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News
