import React, { useState, useEffect } from "react";
import firebase from "../scripts/fbase";
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
    <div>
      <h1>Upload image</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Form>
              <Form.Group controlId="formprodcut">
                <Form.Label>Prodcut Name</Form.Label>
                <Form.Control type="text" placeholder="Enter prodcut name" />
              </Form.Group>

              <Form.Group controlId="formcaetogory">
                <Form.Label>Select Caetogory</Form.Label>
                <Form.Control as="select">
                  <option>Select</option>
                  <option>Mug</option>
                  <option>Key Chain</option>
                  <option>PhotoFrame</option>
                  <option>Pillow</option>
                  <option>Others</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formdes">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Description" />
              </Form.Group>

              <Form.Group controlId="formcaet">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="text"
                  name="quantity"
                  placeholder="Quantity"
                />
              </Form.Group>

              <Form.Group controlId="formcaet">
                <Form.File id="formcheck-api-regular">
                  <Form.File.Label>Select Image</Form.File.Label>
                  <Form.File.Input accept="image/*" onChange={readImages} />
                </Form.File>
              </Form.Group>

              <Button variant="primary" type="submit">
                Add Product
              </Button>
            </Form>
          </div>
          <div className="col-lg-6">
            <p>
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description Description
            </p>
          </div>
        </div>
      </div>
      {/* <input type="file" accept="image/*" onChange={readImages} /> */}
      <h4></h4>

      {imageUrl
        ? imageUrl.map(({ id, url }) => {
            return (
              <div key={id}>
                <img src={url} alt="" height="200px" width="200px" />
                <h3></h3>
                <button onClick={() => deleteImage(id)}>Delete</button>
                <h2>----</h2>
              </div>
            );
          })
        : ""}
      {/* <img src={imageUrl} alt=""/> */}
    </div>
  );
}
