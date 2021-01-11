import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import UploadImage from "../../../scripts/uploadImage";
import FooterArea from "../../../components/FooterArea";
// images
import "./style.scss";
import Form from "../../../scripts/Form";
import TodoList from "../../../scripts/TodoList";
import Todo from "../../../scripts/Todo"; 
import Formss from "../../../scripts/comb";
import Appps from "../../../scripts/newadmin";

const AdminPage = () => {
  return (
    <Fragment>
      <header className="headerArea">
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <div className="contactusPageArea ">
        <div className="container row">
        
        {/* <Form />  
      <TodoList />
          <UploadImage />
           */}
            
       <Appps/>  
        </div>
      </div>
      {/* <Formss/> */}
      <FooterArea />
    </Fragment> 
  );
};
export default AdminPage;
