import React from 'react'
const ProjectReport=(props)=>{
    const {host,source} =props
  
    return(
    <div><h2>Report</h2>
<ul>
    <li>Host - {host.Name}</li>
    <li>Total Participants-{source.length}</li>
    <li>Duration - {host.Total} </li>
</ul>
    </div>
  
  )
}
export default ProjectReport