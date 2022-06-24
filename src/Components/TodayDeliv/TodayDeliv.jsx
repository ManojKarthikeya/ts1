import React from "react";
import Order from "../Order/Order";
import "./todaydeliv-styles.css";

function TodayDeliv() {
	return (
		<div className="todaydeliv">
			<div className="dheader">
				<div className="dtitle">Today's Delivery</div>
				<div className="hlf">
					<div className="delivsearch">
						<input
							type="text"
							name="search"
							placeholder="Search Here"
						/>
					</div>
					<div className="showlist"></div>
				</div>
			</div>
			<div className="orders">
				<Order
					orderID={"ORD-0948"}
					cname={"98659865"}
					items={["shirt"]}
					status="processing"
				/>
				<Order
					orderID={"ORD-0949"}
					cname={"ARIF"}
					items={["shirt", "shirt"]}
					status="returned"
				/>
				<Order
					orderID={"ORD-0950"}
					cname={"Shiyas"}
					items={["cap"]}
					status="pending"
				/>
				<Order
					orderID={"ORD-0951"}
					cname={"Walk in Customer"}
					items={["shoes", "cap"]}
					status="pending"
				/>
				<Order
					orderID={"ORD-0952"}
					cname={"Customer 2"}
					items={["shirt", "shirt", "cap"]}
					status="delivered"
				/>
				<Order
					orderID={"ORD-0953"}
					cname={"Walk in Customer"}
					items={["shoes", "shirt", "shirt"]}
					status="delivered"
				/>
			</div>
		</div>
	);
}

export default TodayDeliv;
