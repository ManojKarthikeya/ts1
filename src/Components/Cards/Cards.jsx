import React from "react";
import './cardstyles.css'
import { ReactComponent as Box } from "./../../assets/outbound_FILL1_wght400_GRAD0_opsz48.svg";
import { ReactComponent as Time } from "./../../assets/schedule_FILL1_wght400_GRAD0_opsz48.svg";
import { ReactComponent as Thumb } from "./../../assets/recommend_FILL1_wght400_GRAD0_opsz48.svg";
import { ReactComponent as Check } from "./../../assets/check_circle_FILL1_wght400_GRAD0_opsz48.svg";


function Cards() {
	return (
		<div className="cards">
			<div className="card">
				<div className="cartext">
					<div className="cardcat">PENDING ORDER</div>
                    <div className="cardcount">202</div>
				</div>
                <Box className="cardsvg" style={{fill:"#8292ab"}} />
			</div>
            <div className="card">
				<div className="cartext">
					<div className="cardcat">PROCESSING ORDER</div>
                    <div className="cardcount">202</div>
				</div>
                <Time className="cardsvg" style={{fill:"#f4ae4f"}} />
			</div>
            <div className="card">
				<div className="cartext">
					<div className="cardcat">READY TO DELIVER</div>
                    <div className="cardcount">202</div>
				</div>
                <Thumb className="cardsvg" style={{fill:"#2dce8a"}} />
			</div>
            <div className="card">
				<div className="cartext">
					<div className="cardcat">DELIVERED ORDERS</div>
                    <div className="cardcount">202</div>
				</div>
                <Check className="cardsvg" style={{fill:"#0083ff"}} />
			</div>
		</div>
	);
}

export default Cards;
