import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [search,setSearch]=useState("");
    const searchVal=()=>{
        val=document.getElementById("searchBox").value;
        
        setSearch(val.split(" ").join("-"));
    }

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-primary-subtle">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsExpress</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>

                        </ul>
                        <div className="d-flex my-2 my-lg-0">
                            <input className="form-control me-2" type="search" id='searchBox' placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" style={{ width: "auto" }}><Link onClick={searchVal}className="nav-link" to={`${search}`}>Search</Link></button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Navbar
