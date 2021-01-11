import React, {
  useEffect,
} from "react"; /*
import { app } from '../../scripts/fbase';*/
import { app } from "../scripts/fbase";
import "./style.scss";
import uuid from "react-uuid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const db = app.firestore();

function PayOnDeliveryOrder() {
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
    const address = e.target.address.value;
    const select = e.target.select.value;
    const city = e.target.city.value;
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

        active: 1,
        createdby: "Trendyjeo",
        createddate: new Date().toLocaleString(),
      });
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
    const username = e.target.username;
    const phno = e.target.phno;
    const address = e.target.address;
    const select = e.target.select;

    if (!username || !phno || !fileUrl || !address || !select) {
      return;
    }
    db.ref("payondelivery").child(username).delete({
      name: username,
      avatar: fileUrl,
      phno: phno,
      address: address,
      type: select,
    });
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
				  
				<br></br>
				<button>Submit</button>
				<br></br>
			</form> */}
      <div className="productArea">
        <div className="container">
          <ul>
            {users.map((user) => {
              return (
                <>
                  <div className="productdiv">
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
                        <p>{user.name}</p>
                        <div className="clearboth">
                          <p> Phno : {user.phno}</p>
                          <p>Type : {user.type}</p>

                          <p>Street : {user.address}</p>
                          <p>City : {user.city}</p>
                          <p>Pin Code : {user.pin}</p>
                          {/* <Link to="/products" className="btn btn-outline-success">
									item
								</Link> */}
                          {/* <button onClick={ deleteTodo}>Delete</button>  */}
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

export default PayOnDeliveryOrder;
