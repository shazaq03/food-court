import React from "react";
import style from "../../../../styles/salesreport.module.scss";
import Image from "next/image";

export default function Salesreport() {
	return (
		<div className={style.container}>
			<h2 className={style.title}>Today's Sales</h2>

			<div className={style.statscontainer}>
				<div className={style.statcontainer}>
					<h4 className={style.value}>₹3k</h4>
					<p className={style.valuename}>Total Income</p>
				</div>
				<div className={style.statcontainer}>
					<h4 className={style.value}>65</h4>
					<p className={style.valuename}>Total order</p>
				</div>
				<div className={style.statcontainer}>
					<h4 className={style.value}>8</h4>
					<p className={style.valuename}>New Customers</p>
				</div>
			</div>
			<div className={style.graphcontainer}>
				<div className={style.bargraph}>
					<Image
						src="/barchart.jpg"
						width={300}
						height={200}
						alt="bar chart of sales"
						className={style.image}
					/>
				</div>
				<div className={style.linegraph}>
					<Image
						src="/linegraph.png"
						width={300}
						height={200}
						alt="line graph of sales"
						className={style.image}
					/>
				</div>
			</div>
		</div>
	);
}
