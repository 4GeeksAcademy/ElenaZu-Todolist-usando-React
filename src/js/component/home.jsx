import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

	const [textInput, setTextInput] = useState("");
	const [taskList, setTaskList] = useState([]);

	function handleChange(e) {
		setTextInput(e.target.value);
	}

	function handleTask(e) {
		if (e.key == "Enter" && textInput !== "") {
			setTaskList([...taskList, textInput]);
			setTextInput("");
		}
	}

	function deleteTask(position) {
		setTaskList(taskList.filter((_, index) => index !== position))
	}

	return (
		<div>
			<h1 className="text-center">TODOS</h1>
			<div className='container'>
				<div className="input-icon"><input type="text" placeholder="What needs to be done" value={textInput} onChange={handleChange} onKeyDown={handleTask} /></div>
				{
					taskList.map((task, index) => {
						return (
							<div className="input-icon">

								<input key={index} value={task} />
								<FontAwesomeIcon className="icon" icon={faTimes} onClick={() => { deleteTask(index) }} />
							</div>
						)
					})
				}
			</div>
			{
				<div className="footer">
				<h5>
					{
						taskList.length
					}
					items left
				</h5>
				</div>
			}
		</div>
	);
};

export default Home;