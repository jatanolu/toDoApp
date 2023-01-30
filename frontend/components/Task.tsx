import axios from 'axios'
import { useEffect, useState } from 'react'

function Task() {
	const [List, setList] = useState([])
	const TaskList=async()=>{
		let myResponse = await axios.get('tasks/')
		console.log(myResponse)	
		setList(myResponse.data.tasks)
	}
	useEffect(()=>{
		TaskList()
	},[])
	
	return(
	<>
	<p>From the task component</p>
	{List.map((task)=> {return (<p>{task}</p>)})}
	</>
	)
}
export default Task
