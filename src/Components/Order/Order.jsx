import React from "react";
import "./order-styles.css";
import { ReactComponent as Shirt } from "./../../assets/shirt-svgrepo-com (1).svg";
import { ReactComponent as Pants } from "./../../assets/pants-svgrepo-com.svg";
import { ReactComponent as Cap } from "./../../assets/cap-svgrepo-com.svg";
import { ReactComponent as Shoes } from "./../../assets/shoes-svgrepo-com.svg";

function Order(props) {

	const colors = {
		processing: "#f4ae4f",
		returned: "#e43c5d",
		pending: "#8292ab",
		ready: "#2dce8a",
		delivered: "#0083ff", 
	};

	return (
		<div
			className="order"
			style={{ borderColor: `${colors[props.status]}` }}
		>
			<div className="ordertop">
				<div className="cname">{props.cname}</div>
				<div className="orderid">{props.orderID}</div>
			</div>
			<div className="ordericons">
				{props.items?.map((e) => {
					if (e === "shirt") {
						return <Shirt className='csvg' />;
					} else if (e === "pants") {
						return <Pants className='csvg' />;
					} else if (e === "cap") {
						return <Cap className='csvg' />;
					} else {
						return <Shoes className='csvg' />;
					}
				})}
			</div>
		</div>
	);
}

export default Order;
