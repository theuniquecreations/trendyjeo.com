
import React, { useEffect } from "react";
import { app } from "../scripts/fbase";
import "./admin.css";
 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const db = app.firestore();

function Appps() {
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
    const select = e.target.select.value;
    if (!username||!phno || !fileUrl) {
      return;
    }
    
    await db.collection("users").doc(username).set({
      name: username,
      avatar: fileUrl,
      phno:phno,
      type:select,
    });
    
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await db.collection("users")/*.where('type','==','cup')*/.get();
      setUsers(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchUsers();
  }, []);


  const deleteTodo = async () => {
    /*const usersCollection = await db.collection("users") .where('name','==',"").get();
      setUsers(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );*/
  };
  /*const deleteTodo = async () => {
    
     const d=db.firestore()
     d.collection('users').doc("0").set({...users.id})
  };
  const deleteTodo =  async() => {
    db
    .collection('users')
    .doc(username)
    .delete()
    .then(() => {
      console.log('User deleted!');
    });
  };*/
  const deleteImage = (id) => {
    const storageRef = db .storage().ref("images").child(id);
    const imageRef = db.database().ref("images").child("daily").child(id);
    storageRef.delete().then(() => {
      imageRef.remove();
    });
  };
  useEffect(() => {
    /*getImageUrl();*/
  }, []);

  const completeTodo = () => {
    const todoRef = app.database().ref('users').child(users.id);
    todoRef.update({
      complete: !users.complete,
    });
  };
 
  return (
    <>
    <div>
    {/* <div class="btn-group btn-group-toggle " data-toggle="buttons">
    <label class="btn btn-secondary active">
       <button   class="rounded-pill btn btn-outline-warning cent">All Products</button></label></div> */}

     <Link to="/Order" className="btn btn-secondary sps border border-white rounded-pill">Pay Now</Link><br></br>
     <Link to="/Orders" className="btn btn-secondary sps border border-white rounded-pill">Pay On Delivery</Link>
     </div>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onFileChange} /><br></br>
        <input type="text" name="username" placeholder="Name" /><br></br>
     
        <input type="text" name="phno" placeholder="Rs." /><br></br>
        <select name="select">
				<option value="None">Catogery</option>
				<option value="cup">Mug</option>
				<option  value="phone case">Phone case</option>
        <option value="pillow">Pillow</option>
				<option value="t-shirt">T-shirt</option>
        <option value="photo">Photo frame</option>
				<option value="hand">Hand made craft</option>
				</select><br></br>
        <button>Submit</button><br></br>
      </form><br></br>
      <br></br> 
     
       
      <ul className="row pd">
        {users.map((user) => {
          return (
				<div key={user.name}  >
					<div>
						<img width="100" height="100" src={user.avatar} alt={user.name} />
						<br></br>
						<h1>---</h1>
					</div>
					<div>
						<p className={users.complete ? "complete":""} >{user.name}</p>
						<p>Rs..{user.phno}</p>
					 
					  {/* <button onClick={deleteTodo}>Delete</button>  */}
					</div>
				</div>
			);
        })}
      </ul> 
       
      
      
    </>
  );
}

export default Appps;
