import React from 'react'
import {Bar,BarChart,XAxis, YAxis ,CartesianGrid ,Tooltip ,Legend} from 'recharts'
const ProjectGraph=(props)=>{
    const{source}=props
  return(
    <div><h2>ProjectGraph</h2>
	<center>
	<BarChart
		width={500}
		height={300}
		data={source}
		margin={{
			top: 5, right: 30, left: 20, bottom: 5,
		}}
	>
		<CartesianGrid strokeDasharray="3 3" />
		<XAxis dataKey="Name" />
		<YAxis />
		<Tooltip />
		<Legend />
		<Bar dataKey="Total" fill="#8884d8" />
		
	</BarChart>
	</center>
      
    </div>
  
  )
}
export default ProjectGraph