import React from 'react'

const ProjectTable=(props)=>{
    const {source}=props 
  return(
    <div><h2>ProjectTable</h2>
    <table className="table"  >
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Duration</th>
            </tr>
        </thead>
        <tbody>
            {
                source.map((ele)=>{
                    return(
                        <tr>
                            <td>{ele.Name}</td>
                            <td>{ele.User}</td>
                            <td>{ele.Total}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    </div>
  
  )
}
export default ProjectTable