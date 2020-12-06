
import React, { useEffect } from "react";
import { app } from "../scripts/fbase";

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
    if (!username||!phno || !fileUrl) {
      return;
    }
    
    await db.collection("users").doc(username).set({
      name: username,
      avatar: fileUrl,
      phno:phno,
    });
    
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await db.collection("users").get();
      setUsers(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchUsers();
  }, []);
  const deleteTodo =  async(e) => {
    const todoRef =db.database().ref('users').child(users.id);
    todoRef.remove();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onFileChange} /><br></br>
        <input type="text" name="username" placeholder="Name" /><br></br>
     
        <input type="text" name="phno" placeholder="Rs." /><br></br>
        <button>Submit</button><br></br>
      </form>
      <ul>
        {users.map((user) => {
          return (
            <div key={user.name} className="row">
              <div>
              <img width="100" height="100" src={user.avatar} alt={user.name} /><br></br><h1>---</h1>
              </div>
             <div>
             <h1>{user.name}</h1>
              <p>Rs..{user.phno}</p>
              {/* <button onClick={deleteTodo}>Delete</button> */}
             </div>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default Appps;
