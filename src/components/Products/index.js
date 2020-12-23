import React, { useEffect } from "react";
import { app } from "../../scripts/fbase";
import FooterArea from "../FooterArea";
import "./style.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Checkout from "../Payment/payondelivery";

const db = app.firestore();

function Appps() {
  const [fileUrl, setFileUrl] = React.useState(null);
  const [users, setUsers] = React.useState([]); 

const filteredSch=async()=>{  
      const usersCollection = await db.collection("users").where('type','==','cup').get();/*.orderBy('phno','asc').limit(6).get()*/
      setUsers(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })      );
    
}
const filteredSchs=async()=>{  
  const usersCollection = await db.collection("users").where('type','==','Phone case').get();/*.orderBy('phno','asc').limit(6).get()*/
  setUsers(
    usersCollection.docs.map((doc) => {
      return doc.data();
    })
  );
}
const filteredSchss=async()=>{  
  const usersCollection = await db.collection("users").where('type','==','T-shirt').get();/*.orderBy('phno','asc').limit(6).get()*/
  setUsers(
    usersCollection.docs.map((doc) => {
      return doc.data();
    })
  );
}
const all=async()=>{  
const usersCollection = await db.collection("users").get()/*.orderBy('phno','asc').limit(6).get()*/;
      setUsers(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
}

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
    const select=e.target.select.value;
    if (!username || !phno || !fileUrl) {
      return;
    }

    await db.collection("users").doc(username).set({
      name: username,
      avatar: fileUrl,
      phno: phno,
    });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await db.collection("users").get()/*.orderBy('phno','asc').limit(6).get()*/;
      setUsers(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchUsers();
  }, []);
  const deleteTodo = async (e) => {
    const todoRef = db.database().ref("users").child(users.id);
    todoRef.remove();
  };

  return (
    <>
    <br></br>
    <br></br>
    <br></br>  
    <select name="select" onChange={all}>
				<option value="None">Catogery</option>
				<option value="all">all</option>
				</select>
    <select name="select" onChange={filteredSch}>
				<option value="None">Catogery</option>
				<option value="cup">cup</option>
				</select>
        <select name="select" onChange={filteredSchs}>
				<option value="None">Catogery</option>
			 
				<option  value="Phone case">Phone case</option>
				 
				</select>
        <select name="select" onChange={filteredSchss}>
				<option value="None">Catogery</option>
				 
				<option value="T-shirt">T-shirt</option>
				</select>
        
      {/* <form onSubmit={onSubmit}> */}
      {/* <input type="file" onChange={onFileChange} /><br></br>
        <input type="text" name="username" placeholder="Name" /><br></br>
        <input type="text" name="phno" placeholder="Rs." /><br></br>
        <button>Submit</button><br></br> */}
      {/* </form> */}
      <div className="productArea">  
        <div className="container">
          <ul>
            {users.map((user) => {
              return (
                <>
                  <div className="productdiv">
                    <div key={user.name}>
                      <img
                        width="250"
                        height="300"
                        src={user.avatar}
                        alt={user.name}
                      />
                      <h4 className="wrap">{user.name}</h4>
                      <div className="clearboth">
                        <div className="floatleft">
                          <p className="bold">Rs..{user.phno}</p>
                        </div>
                        {/* <button onClick={deleteTodo}>Delete</button> */}
                        {/* <Route path="/Checkout" component={Checkout} /> */}
                        <div className="floatright">
                          <Link 
                            to="/Typeofpay"
                            className="btn btn-outline-success"
                          >
                            Buy Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </ul>
        </div>
        <div className="clearboth"></div>
      </div>
    </>
  );
}

export default Appps;

/*import React, { useState, useEffect } from "react";
import firebase from "../../scripts/fbase";
import { v4 as uuid } from "uuid";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function UploadImage() {
  const [imageUrl, setImageUrl] = useState([]);
  const readImages = async (e) => {
    const file = e.target.files[0];
    const id = uuid();
    const storageRef = firebase.storage().ref("images").child(id);
    const imageRef = firebase.database().ref("images").child("daily").child(id);
    await storageRef.put(file);
    storageRef.getDownloadURL().then((url) => {
      imageRef.set(url);
      const newState = [...imageUrl, { id, url }];
      setImageUrl(newState);
    });
  };
  const getImageUrl = () => {
    const imageRef = firebase.database().ref("images").child("daily");
    imageRef.on("value", (snapshot) => {
      const imageUrls = snapshot.val();
      const urls = [];
      for (let id in imageUrls) {
        urls.push({ id, url: imageUrls[id] });
      }
      const newState = [...imageUrl, ...urls];
      setImageUrl(newState);
    });
  };
  const deleteImage = (id) => {
    const storageRef = firebase.storage().ref("images").child(id);
    const imageRef = firebase.database().ref("images").child("daily").child(id);
    storageRef.delete().then(() => {
      imageRef.remove();
    });
  };
  useEffect(() => {
    getImageUrl();
  }, []);

  return (    
  <div className="aboutArea">
      <h1 >Upload image</h1>
    <div class="row sb">
      {imageUrl
        ? imageUrl.map(({ id, url }) => {
            return (
              <div key={id}  class="sb">
                <h1></h1>
                <img src={url} alt="" height="300px" width="250px" class="border-right border-left border border-primary mx-auto rounded"/>
               
                 <button onClick={() => deleteImage(id)}>Delete</button> 
                <h2>-----</h2>
              </div>
            );
          })
        : ""}
        </div>
      <img src={imageUrl} alt=""/> 
    </div>
  );
}
*/
