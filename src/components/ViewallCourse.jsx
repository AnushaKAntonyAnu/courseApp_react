import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewallCourse = () => {
    const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8085/view").then(
            (response)=>{
                changeData(response.data)
    
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <br></br><h3><u><center>ViewAll Course</center></u></h3><br></br>
            <div className="conatiner">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-dark table-striped-columns">
                           
                                <thead>
                                    <tr>
                                        <th scope="col">SI.NO</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Duration</th>
                                        <th scope="col">Venues</th>
                                        <th scope="col">TainerName</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {data.map(
                                    (value,index)=>{
                                        return <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{value.title}</td>
                                        <td>{value.description}</td>
                                        <td>{value.date}</td>
                                        <td>{value.duration}</td>
                                        <td>{value.venue}</td>
                                        <td>{value.trainername}</td>
                                    </tr>
                                   
                                    }
                                   )}
                                </tbody>
                            </table>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewallCourse