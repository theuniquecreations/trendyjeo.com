import React, { useEffect } from 'react';
import { app } from '../../scripts/fbase';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const db = app.firestore();

function Typeofpay() {
	 

	return (
		<>
			  <Link to="/PayOnDelivery" className="btn btn-outline-success">Pay On Delivery</Link> 
              <Link to="/Paynow" className="btn btn-outline-success">Pay Now</Link> 
		</>
	);
}

export default Typeofpay;
