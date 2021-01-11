import React, { useEffect } from "react";
import { app } from "../scripts/fbase";
import "./admin.css";
import uuid from "react-uuid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const db = app.firestore();

function Appps() {
  const [fileUrl, setFileUrl] = React.useState(null);
  const [users, setUsers] = React.useState([]);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref("TRENDYJEO");
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const phno = e.target.phno.value;
    const select = e.target.select.value;
    if (!username) {
      return;
    }

    await db
      .collection("Trendyjeo")
      .doc("Admin")
      .collection("AddItems")
      .doc(uuid())
      .set({
        id: uuid(),
        name: username,
        avatar: fileUrl,
        phno: phno,
        type: select,

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
        .doc("Admin")
        .collection("AddItems")
        .orderBy("createddate", "desc")
        /*.collection("users").where('type','==','cup')*/
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
    e.preventDefault();
    const username = e.target.username.value;
    const phno = e.target.phno.value;
    const select = e.target.select.value;
    if (!username) {
      return;
    }

    await db
      .collection("Trendyjeo")
      .doc("Admin")
      .collection("AddItems")
      .doc(uuid())
      .set({
        id: uuid(),
        name: username,
        avatar: fileUrl,
        phno: phno,
        type: select,

        active: 0,
        createdby: "Trendyjeo",
        createddate: new Date().toLocaleString(),
      });

    window.location.reload(false);
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
    const storageRef = db.storage().ref("images").child(id);
    const imageRef = db.database().ref("images").child("daily").child(id);
    storageRef.delete().then(() => {
      imageRef.remove();
    });
  };
  useEffect(() => {
    /*getImageUrl();*/
  }, []);

  const completeTodo = () => {
    const todoRef = app.database().ref("users").child(users.id);
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

        <Link
          to="/Order"
          className="btn btn-secondary sps border border-white rounded-pill"
        >
          Pay Now
        </Link>
        <br></br>
        <Link
          to="/Orders"
          className="btn btn-secondary sps border border-white rounded-pill"
        >
          Pay On Delivery
        </Link>
      </div>
      <form onSubmit={onSubmit}>
        <input
          type="file"
          onChange={onFileChange}
          class="form-control-file"
          required
        />
        <br></br>
        <input
          type="text"
          name="username"
          placeholder="Name"
          class="form-control"
          required
        />
        <br></br>

        <input
          type="text"
          name="phno"
          placeholder="Rs."
          class="form-control"
          required
        />
        <br></br>
        <select name="select" class="form-control" required>
          <option value="">Catogery</option>
          <option value="Pillow">Pillow</option>
          <option value="Mug">Mug</option>
          <option value="Handmade_Gifts">Handmade Gifts</option>
          <option value="Wall_Hanging_Frame">Wall Hanging Frame</option>
          <option value="Table_Stand_Frame">Table Stand Frame</option>
          <option value="Keychain">Keychain</option>
          <option value="Magical_Gifts">Magical Gifts</option>
          <option value="Customized_Gifts">Customized Gifts</option>
          <option value="Compo_Gifts">Compo Gifts</option>
          <option value="Other_Gifts">Other Gifts</option>
        </select>
        <br></br>
        <button class="btn btn-primary mb-2">Submit</button>
        <br></br>
      </form>
      <br></br>
      <br></br>

      <ul className="row pd">
        {users.map((user) => {
          return (
            <div key={user.name}>
              <div>
                <img
                  width="100"
                  height="100"
                  src={user.avatar}
                  alt={user.name}
                />
                <br></br>
              </div>
              <div>
                <p className={users.complete ? "complete" : ""}>{user.name}</p>
                <p>Rs..{user.phno}</p>
                {/* <h1>----</h1> */}
                {/* <button onClick={deleteTodo}>Delete</button>    */}
              </div>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default Appps;
