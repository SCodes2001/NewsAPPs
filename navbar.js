import React from 'react'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
function navbar(props) {
    return (
        <div>

            <nav className={`navbar navbar-expand-lg navbar-light bg-${props.mode==="light"?"primary":"danger"}`}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/">India</Link>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/general">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/technology">Technology</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/britain">Britain</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/world">US</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:8501/" target='_blank'>FakeNews Detector</a>
                        </li>

                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                    <div className="custom-control custom-switch mx-3">
                        <input type="checkbox" className="custom-control-input" id="customSwitches" onClick={props.changeMode}/>
                        <label className="custom-control-label" htmlFor="customSwitches" />
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default navbar;