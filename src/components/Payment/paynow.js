import React, { useEffect } from "react";
import { app } from "../../scripts/fbase";
import "./style.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import barcode from "../../images/barcode.jpg";

const db = app.firestore();

function Paynow() {
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

    await db.collection("paynow").doc(username).set({
      name: username,
      avatar: fileUrl,
      avatarscreen: fileUrls,
      phno: phno,
      address: address,
      type: select,
      city: city,
    });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await db.collection("paynow").get();
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
    const todoRef = db.database().ref("paynow").child(users.id);
    todoRef.remove();
  };

  return (
    <>
      <div>
        <div>
          <form onSubmit={onSubmit}>
            <input type="file" onChange={onFileChange} />
            <br></br>
            <select name="select">
              <option value="None">Catogery</option>
              <option value="cup">cup</option>
              <option value="Phone case">Phone case</option>
              <option value="T-shirt">T-shirt</option>
            </select>
            <br></br>
            <input type="text" name="username" placeholder="Name" />
            <br></br>
            <input type="text" name="phno" placeholder="Number" />
            <br></br>
            <input type="text" name="address" placeholder="Street" />
            <br></br>
            <input type="text" name="city" placeholder="city" />
            <br></br>
            <h1>Please scan and Pay</h1>
            <div className="gpay">
              <img id="gpay" src={barcode} alt="barcode" />
            </div>
            <br></br>
            Upload Payment Screenshot :{" "}
            <input type="file" onChange={onFileChangescreen} />
            <br></br>
            <button>Submit</button>
            <br></br>
          </form>
        </div>
        <div></div>
      </div>
      <ul>
        {
          (users.map((user) => {
            return (
              <div key={user.name} className="row">
                <div>
                  {/* <img width="100" height="100" src={user.avatar} alt={user.name} />
								<br></br>
								<h1>---</h1> */}
                </div>
                <div>
                  {/* <h1>{user.name}</h1>
								<p>Rs..{user.phno}</p> */}
                  {/* <Link to="/products" className="btn btn-outline-success">
									item
								</Link> */}
                  {/* <button onClick={deleteTodo}>Delete</button> */}
                </div>
              </div>
            );
          }),
          userss.map((user) => {
            return (
              <div key={user.name} className="row">
                <div>
                  {/* <img width="100" height="100" src={user.avatar} alt={user.name} />
								<br></br>
								<h1>---</h1> */}
                </div>
                <div>
                  {/* <h1>{user.name}</h1>
								<p>Rs..{user.phno}</p> */}
                  {/* <Link to="/products" className="btn btn-outline-success">
									item
								</Link> */}
                  {/* <button onClick={deleteTodo}>Delete</button> */}
                </div>
              </div>
            );
          }))
        }
      </ul>
    </>
  );
}

export default Paynow;
