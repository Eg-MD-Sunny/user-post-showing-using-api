import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
		<LoadPosts></LoadPosts>
		<District name='NoyaKhali' special="Bivag"></District>
		<District name='Bramonbaria' special='Joda akbar'></District>
		<District name="Sumilla" special='Moyna and moti'></District>	
    </div>
  ); 
}

//Another Componenet
function LoadPosts(){
	const [posts, setPosts] = useState([])
	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res=>res.json())
		.then(data=>setPosts(data))
	},[])
	return (
		<div>
			<h1>Load Posts: {posts.length}</h1>
			{
				posts.map(post=><Post title={post.title} body={post.body}></Post>)
			}
		</div>
	)
}

function Post(props){
	return (
		<div style={{backgroundColor: 'lightgray',margin:'20px',padding:'20px', border:'2px solid salmon', borderRadius:'10px'}}>
			<h4>Title: {props.title}</h4>
			<p>Body: {props.body}</p>
		</div>
	)
}

const districtStyle = {
	backgroundColor: 'lightblue',
	padding: '20px',
	margin: '20px',
	borderRadius: '20px',
}
function District(props){
	const [power, setPower] = useState(1)
	const boostPower = () =>{
		let newValue = power * 2;
		setPower(newValue)
	}
	return (
		<div style={districtStyle}>
			<h2>Name: {props.name}</h2>
			<p>Specialty: {props.special}</p>
			<p>Power: {power}</p>
			<button onClick={boostPower}>Boost The Power</button>
		</div>
	)
}

export default App;
