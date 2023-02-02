import axios from 'axios'
import { useEffect, useState } from 'react'

function Task(): JSX.Element {

	const [List, setList] = useState<string[]>([])

	interface Taskdata {
		tasks: string[]
		}

	const TaskList = async() => {
		console.log('rendering')
		let myResponse = await axios.get<Taskdata>('tasks/')
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
