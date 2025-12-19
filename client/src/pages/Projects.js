import React,{useState,useEffect}from'react';
import api from '../api/axiosConfig';
import Card from '../components/ProjectCard';
export default()=>{
    const[p,setP]=useState([]);
    useEffect(()=>{api.get('/projects').then(r=>setP(r.data));},[]);
    return(
       <section className="projects">
        <div className="projects-hero container">
            <span className="badge">PORTFOLIO</span>
            <h1>Things I’ve Built</h1>
            <p>
            Real-world full-stack applications built with MERN, focused on
            performance, scalability, and clean UX.
            </p>
        </div>

        <div className="projects-grid container">
            {p.map(x => <Card key={x._id} project={x} />)}
        </div>
        </section>
    );
    }