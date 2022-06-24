import React from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";
import './overview-styles.css'

export default function Overview() {
	return (
		<div className="overview"> <div className="ovtitle">Overview</div>
			<PieChart width={400} height={500} className='chart'>
				<Pie
					dataKey="value"
					data={data1}
					innerRadius={70}
					outerRadius={170}
					fill="#8884d8"
				>
					{data1.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={Colors[index % Colors.length]}
						/>
					))}
				</Pie>
				<Tooltip />
				<Legend iconType={"circle"} />
			</PieChart>
		</div>
	);
}

const data1 = [
	{ name: "Pending", value: 202 },
	{ name: "Returned", value: 50 },
	{ name: "Delivered", value: 347 },
	{ name: "Ready to Deliver", value: 263 },
	{ name: "Processing", value: 99 },
];

const Colors = ["#8292ab", "#e43c5d", "#0083ff", "#2dce8a", "#f4ae4f"];
