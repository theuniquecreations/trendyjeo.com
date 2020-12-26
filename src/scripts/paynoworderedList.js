import React, { useEffect } from 'react';
import { app } from "./fbase";
import "./paynow.css";
import barcode from "../images/barcode.jpg"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const db = app.firestore();

function PayNowOrder() {
	const [fileUrl, setFileUrl] = React.useState(null);
	const [users, setUsers] = React.useState([]);

	const onFileChange = async (e) => {
		const file = e.target.files[0];
		const storageRef = app.storage().ref();
		const fileRef = storageRef.child(file.name);
		await fileRef.put(file);
		setFileUrl(await fileRef.getDownloadURL());
    };


    const [fileUrls, setFileUrls] = React.useState(null);
    const [userss, setUserss] = React.useState([]);

    const onFileChangescreen = async (e) => {
		const file = e.target.files[0];
		const storageRef = app.storage().ref();
		const fileRef = storageRef.child(file.name);
		await fileRef.put(file);
		setFileUrls(await fileRef.getDownloadURL());
    };
   
 
	const onSubmit = async (e) => {
		e.preventDefault();
		const username = e.target.username.value;      
		const phno = e.target.phno.value;
		const address = e.target.address.value;
		const select = e.target.select.value;
		const city = e.target.city.value;
		if (!username || !phno || !fileUrl || !fileUrls) {
			return;
		}

		await db.collection('paynow').doc(username).set({
			name: username,
            avatar: fileUrl,
            avatarscreen:fileUrls,
			phno: phno,
			address:address,
			type:select,
		    city:city
		});
	};

	useEffect(() => {
		const fetchUsers = async () => {
			const usersCollection = await db.collection('paynow').get();
			setUsers(
				usersCollection.docs.map((doc) => {
					return doc.data();
				})
            );
            setUserss(
				usersCollection.docs.map((doc) => {
					return doc.data();
				})
			);
		};
		fetchUsers();
	}, []);
	const deleteTodo = async (e) => {
		const todoRef = db.database().ref('paynow').child(users.id);
		todoRef.remove();
	};

	return (
		<> 
            
        <div>
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
                <h1>Please scan and Pay</h1>
            <img src={barcode} alt="barcode" height="200px" width="200px"/>
            <br></br>
                <input type="file" onChange={onFileChangescreen}/>
				<br></br>
				<button>Submit</button>
				<br></br>
               
			</form> */}
            </div>
             <div className="row pd">
			
			<ul>
				{users.map((user) => {
					return (
						<div key={user.name} className="row" >
							<div  className="sps">
							<div><img width="200" height="200" src={user.avatarscreen} alt={user.name} /></div>
							<div className="pds">	 <img width="200" height="200" src={user.avatar} alt={user.name} /></div>
								
						
							
							<div>
							Name :<p>	  {user.name}</p>
						Phno :<p> {user.phno}</p> 
								 Ordered : <p>{user.type}</p> 
							Street :	<p className="fnt"> {user.address}</p> 
							City :	<p className="fnt"> {user.city}</p> 

							<h1>-----------</h1>
						 
							
							 
					 
				 
	
					 
				 
								{/* <Link to="/products" className="btn btn-outline-success">
									item
								</Link> */}
								{/* <button onClick={deleteTodo}>Delete</button> */}
								
							</div></div>
						</div>
					);
                },

                 
                )
                
                }
			</ul> 
		 
			{/* <ul>
			{
					userss.map((user) => {
						return (
							
							<div key={user.name}  >
								 
									  <img width="200" height="200" src={user.avatarscreen} alt={user.name} />
									 
								 <h1>-----------</h1>
							</div>
						);
					},
	
					 
					)
				}
			</ul> */}</div> 
		</>
	);
}
 

export default PayNowOrder;
