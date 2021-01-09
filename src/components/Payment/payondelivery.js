import React, { useEffect } from "react";
import { app } from "../../scripts/fbase";
import "./style.scss";
import uuid from "react-uuid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const db = app.firestore();

function PayOnDelivery() {
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
    const city = e.target.city.value;
    const pin = e.target.pin.value;
    if (!username || !phno || !fileUrl) {
      return;
    }

    await db
    .collection("Trendyjeo")
    .doc("PayOn")
	.collection("Users")
	.doc(uuid())
	.set({
		id: uuid(),
      name: username,
      avatar: fileUrl,
      phno: phno,
      address: address,
      type: select,
      city: city,
      pin:pin,
    
      active: 1,
      createdby: "Trendyjeo",
      createddate: new Date().toLocaleString(),
  });
  window.location.reload(false);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await db
      .collection("Trendyjeo")
        .doc("PayOn")
        .collection("Users")
        .orderBy("createddate", "desc")
      .get();
      setUsers(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchUsers();
  }, []);
  const deleteTodo = async (e) => {
    const todoRef = db.database().ref("payondelivery").child(users.id);
    todoRef.remove();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onFileChange} class="form-control-file" required/>
        <br></br>
        {/* <select name="select" class="form-control" required>
          <option value="" >Catogery</option>
          <option value="cup">Mug</option>
				<option  value="phone case">Phone case</option>
        <option value="pillow">Pillow</option>
				<option value="t-shirt">T-shirt</option>
        <option value="photo">Photo frame</option>
				<option value="hand">Hand made craft</option>
        </select> */}
         <input type="text" name="select" placeholder="Eg.. Mug or Pillow" class="form-control" required/>
        <br></br>
        <input type="text" name="username" placeholder="Name" class="form-control" required/>
        <br></br>

        <input type="text" name="phno" placeholder="Number" class="form-control" required/>
        <br></br>
        <input type="text" name="address" placeholder="Street" class="form-control" required/>
        <br></br>
        <div class="row">
    <div class="col">
        <input type="text" name="city" placeholder="City" class="form-control" required/></div>
        <div class="col">
        <input type="text" name="pin" placeholder="Pin Code" class="form-control" required/></div>
        </div>
        <br></br>
        <br></br>
        <button class="btn btn-primary mb-2">Submit</button>
        <br></br>
      </form>
      <ul>
        {users.map((user) => {
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
        })}
      </ul>
    </>
  );
}

export default PayOnDelivery;
