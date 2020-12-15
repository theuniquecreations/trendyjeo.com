import React, { useEffect } from 'react';
import { app } from "../scripts/fbase";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const db = app.firestore();

function Order() {
	const [fileUrl, setFileUrl] = React.useState(null);
	const [users, setUsers] = React.useState([]);

	const onFileChange = async (e) => {
		const file = e.target.files[0];
		const storageRef = app.storage().ref();
		const fileRef = storageRef.child(file.name);
		await fileRef.put(file);
		setFileUrl(await fileRef.getDownloadURL());
	};
 
	const onSubmit = async (e) => {
		e.preventDefault();
		const username = e.target.username.value;      
		const phno = e.target.phno.value;
		const address = e.target.address.value;
		const select = e.target.select.value;
		if (!username || !phno || !fileUrl) {
			return;
		}

		await db.collection('UserData').doc(username).set({
			name: username,
			avatar: fileUrl,
			phno: phno,
			address:address,
			type:select,
		});
	};

	useEffect(() => {
		const fetchUsers = async () => {
			const usersCollection = await db.collection('UserData').get();
			setUsers(
				usersCollection.docs.map((doc) => {
					return doc.data();
				})
			);
		};
		fetchUsers();
	}, []);
	const deleteTodo = async (e) => {
		const todoRef = db.database().ref('UserData').child(users.id);
		todoRef.remove();
	};

	return (
		<>
			{/* <form onSubmit={onSubmit}>
				<input type="file" onChange={onFileChange}/>
				<br></br>
				 <select name="select">
				<option value="None">Catogery</option>
				<option value="cup">cup</option>
				<option  value="Phone case">Phone case</option>
				<option value="T-shirt">T-shirt</option>
				</select>
				<br></br>
				<input type="text" name="username" placeholder="Name" />
				<br></br>

				<input type="text" name="phno" placeholder="Number" />
				<br></br>
				<input type="text" name="address" placeholder="Address with pin" />

				<br></br>
				<button>Submit</button>
				<br></br>
			</form> */}
            <br></br>
			<ul>
				{users.map((user) => {
					return (
						<div key={user.name} className="row">
							<div>
								 <img width="100" height="160" src={user.avatar} alt={user.name} />
								<br></br>
								<h1>--------</h1> 
							</div>
							<div>
								  <h1>{user.name}</h1>
								<p>Ph.No: {user.phno}</p>  
                                <p> Address: {user.address}</p>  
                                <p>Order-Type: {user.type}</p>  
							  
							</div>
						</div>
					);
				}
				)}
			</ul>
		</>
	);
}

export default Order;
