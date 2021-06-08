import React,{useState} from 'react'
import ProjectTable from "./ProjectTable"
import ProjectGraph from "./ProjectGraph"
import ProjectReport from './ProjectReport'


const ProjectContainer=()=>{
    const [input,setInput]=useState('')
    const[source,setSource]=useState(false)
    const [host,setHost]=useState([])
    const handlechange=(e)=>{
        const files=e.target.files
        setInput(files[0])
        let reader=new FileReader()
        reader.readAsText(files[0])
        reader.onload=(e)=>{
            const FormData=e.target.result
            const a=FormData.split('\r\n')
            const b=[]
            console.log('a',a)
            a.forEach((ele)=>{
                let d=ele.split(',')
                b.push(d)
            })
            const c=b[0]
            b.splice(0,1)

            let f={}
            const g=[]
          
            console.log('b, ',b)//data
            console.log('c',c)//header
            console.log('c length',)
            for (let i=0;i<b.length-1;i++){
                for(let j=0;j<c.length;j++){
                    let y=c[j].split(' ')[0].toString().replaceAll(/\s/g,'')
                    console.log('y',y)
                   f[y]=b[i][j]
                }
                g.push(f)
                f={}
            }
          
            const filteredValue=g.find((ele)=>{
                return ele.Guest =='No'})
            setHost(filteredValue)
            setSource(g)
        }
     
    }
  return(
    <div className='container'>
    <h1>ProjectContainer</h1>
   
  <input type="file" id="myFile" name="filename"  onChange={handlechange}/><hr/>
    {source&&<div><ProjectReport host={host} source={source}/><hr/><br/></div>}
    {source&&<ProjectTable source ={source}/>}
    {source&&<ProjectGraph source={source}/> }
     
      
    </div>
  
  )
}
export default ProjectContainer