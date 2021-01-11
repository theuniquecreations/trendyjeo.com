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

  const SelectAllItems = async (name) => {
    console.log("alltems", name);
    const usersCollection = await db
      .collection("Trendyjeo")
      .doc("Admin")
      .collection("AddItems")
      .get(); /*.orderBy('phno','asc').limit(6).get()*/
    setUsers(
      usersCollection.docs.map((doc) => {
        return doc.data();
      })
    );
  };

  const SelectItems = async (name) => {
    const usersCollection = await db
      .collection("Trendyjeo")
      .doc("Admin")
      .collection("AddItems")

      .where("type", "==", name)
      .get(); /*.orderBy('phno','asc').limit(6).get()*/
    setUsers(
      usersCollection.docs.map((doc) => {
        return doc.data();
      })
    );
  };

  // const Pillow = async () => {
  //   const usersCollection = await db
  //     .collection("Trendyjeo")
  //     .doc("Admin")
  //     .collection("AddItems")

  //     .where("type", "==", "Pillow")
  //     .get(); /*.orderBy('phno','asc').limit(6).get()*/
  //   setUsers(
  //     usersCollection.docs.map((doc) => {
  //       return doc.data();
  //     })
  //   );
  // };
  // const Mug = async () => {
  //   const usersCollection = await db
  //     .collection("Trendyjeo")
  //     .doc("Admin")
  //     .collection("AddItems")
  //     .where("type", "==", "Mug")
  //     .get(); /*.orderBy('phno','asc').limit(6).get()*/
  //   setUsers(
  //     usersCollection.docs.map((doc) => {
  //       return doc.data();
  //     })
  //   );
  // };
  // const Handmade_Gifts = async () => {
  //   const usersCollection = await db
  //     .collection("Trendyjeo")
  //     .doc("Admin")
  //     .collection("AddItems")
  //     .where("type", "==", "Handmade_Gifts")
  //     .get(); /*.orderBy('phno','asc').limit(6).get()*/
  //   setUsers(
  //     usersCollection.docs.map((doc) => {
  //       return doc.data();
  //     })
  //   );
  // };

  // const Wall_Hanging_Frame = async () => {
  //   const usersCollection = await db
  //     .collection("Trendyjeo")
  //     .doc("Admin")
  //     .collection("AddItems")
  //     .where("type", "==", "Wall_Hanging_Frame")
  //     .get(); /*.orderBy('phno','asc').limit(6).get()*/
  //   setUsers(
  //     usersCollection.docs.map((doc) => {
  //       return doc.data();
  //     })
  //   );
  // };

  // const Table_Stand_Frame = async () => {
  //   const usersCollection = await db
  //     .collection("Trendyjeo")
  //     .doc("Admin")
  //     .collection("AddItems")
  //     .where("type", "==", "Table_Stand_Frame")
  //     .get(); /*.orderBy('phno','asc').limit(6).get()*/
  //   setUsers(
  //     usersCollection.docs.map((doc) => {
  //       return doc.data();
  //     })
  //   );
  // };
  // const Keychain = async () => {
  //   const usersCollection = await db
  //     .collection("Trendyjeo")
  //     .doc("Admin")
  //     .collection("AddItems")
  //     .where("type", "==", "Keychain")
  //     .get(); /*.orderBy('phno','asc').limit(6).get()*/
  //   setUsers(
  //     usersCollection.docs.map((doc) => {
  //       return doc.data();
  //     })
  //   );
  // };
  // const Magical_Gifts = async () => {
  //   const usersCollection = await db
  //     .collection("Trendyjeo")
  //     .doc("Admin")
  //     .collection("AddItems")
  //     .where("type", "==", "Magical_Gifts")
  //     .get(); /*.orderBy('phno','asc').limit(6).get()*/
  //   setUsers(
  //     usersCollection.docs.map((doc) => {
  //       return doc.data();
  //     })
  //   );
  // };
  // const Customized_Gifts = async () => {
  //   const usersCollection = await db
  //     .collection("Trendyjeo")
  //     .doc("Admin")
  //     .collection("AddItems")
  //     .where("type", "==", "Customized_Gifts")
  //     .get(); /*.orderBy('phno','asc').limit(6).get()*/
  //   setUsers(
  //     usersCollection.docs.map((doc) => {
  //       return doc.data();
  //     })
  //   );
  // };
  // const Compo_Gifts = async () => {
  //   const usersCollection = await db
  //     .collection("Trendyjeo")
  //     .doc("Admin")
  //     .collection("AddItems")
  //     .where("type", "==", "Compo_Gifts")
  //     .get(); /*.orderBy('phno','asc').limit(6).get()*/
  //   setUsers(
  //     usersCollection.docs.map((doc) => {
  //       return doc.data();
  //     })
  //   );
  // };
  // const Other_Gifts = async () => {
  //   const usersCollection = await db
  //     .collection("Trendyjeo")
  //     .doc("Admin")
  //     .collection("AddItems")
  //     .where("type", "==", "Other_Gifts")
  //     .get(); /*.orderBy('phno','asc').limit(6).get()*/
  //   setUsers(
  //     usersCollection.docs.map((doc) => {
  //       return doc.data();
  //     })
  //   );
  // };

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
      const usersCollection = await db
        .collection("Trendyjeo")
        .doc("Admin")
        .collection("AddItems")
        .orderBy("createddate", "desc")
        .get(); /*.orderBy('phno','asc').limit(6).get()*/
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
      <h1 className="catcontainer family">↓↓↓ Filter Products ↓↓↓</h1>
      <br></br>
      <div className="catcontainer">
        <label>
          <button
            onClick={() => SelectAllItems("all")}
            class="rounded-pill btncat btn-outline-warning"
          >
            All Products
          </button>
        </label>
        <label>
          <button
            onClick={() => SelectItems("Pillow")}
            //  onClick={Pillow}
            class="rounded-pill btncat btn-outline-warning"
          >
            Pillow
          </button>
        </label>
        <label>
          <button
            onClick={() => SelectItems("Mug")}
            class="rounded-pill btncat btn-outline-warning"
          >
            Mug
          </button>
        </label>
        <label>
          <button
            onClick={() => SelectItems("Handmade_Gifts")}
            // onClick={Handmade_Gifts}
            class="rounded-pill btncat btn-outline-warning"
          >
            Handmade Gifts
          </button>
        </label>
        <label>
          <button
            onClick={() => SelectItems("Wall_Hanging_Frame")}
            //onClick={Wall_Hanging_Frame}
            class="rounded-pill btncat btn-outline-warning"
          >
            Wall Hanging Frame
          </button>
        </label>
        <label>
          <button
            onClick={() => SelectItems("Table_Stand_Frame")}
            // onClick={Table_Stand_Frame}
            class="rounded-pill btncat btn-outline-warning "
          >
            Table Stand Frame
          </button>
        </label>
        <label>
          <button
            onClick={() => SelectItems("Keychain")}
            // onClick={Keychain}
            class="rounded-pill btncat btn-outline-warning "
          >
            Keychain
          </button>
        </label>
        <label>
          <button
            onClick={() => SelectItems("Magical_Gifts")}
            // onClick={Magical_Gifts}
            class="rounded-pill btncat btn-outline-warning "
          >
            Magical Gifts
          </button>
        </label>
        <label>
          <button
            onClick={() => SelectItems("Customized_Gifts")}
            // onClick={Customized_Gifts}
            class="rounded-pill btncat btn-outline-warning "
          >
            Customized Gifts
          </button>
        </label>
        <label>
          <button
            onClick={() => SelectItems("Compo_Gifts")}
            // onClick={Compo_Gifts}
            class="rounded-pill btncat btn-outline-warning "
          >
            Compo Gifts
          </button>
        </label>
        <label>
          <button
            onClick={() => SelectItems("Other_Gifts")}
            //onClick={Other_Gifts}
            class="rounded-pill btncat btn-outline-warning "
          >
            Other Gifts
          </button>
        </label>
      </div>
      {/* <form onSubmit={onSubmit}> */}
      {/* <input type="file" onChange={onFileChange} /><br></br>
        <input type="text" name="username" placeholder="Name" /><br></br>
        <input type="text" name="phno" placeholder="Rs." /><br></br>
        <button>Submit</button><br></br> */}
      {/* </form> */}
      <div className="productArea justify-content-center">
        <div className="container">
          <ul>
            {users.map((user) => {
              return (
                <>
                  <div className="productdiv">
                    <div key={user.name}>
                      <img
                        width="300"
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
