import React from "react";
import style from "../../../../styles/vendordashboard.module.scss";
import Image from "next/image";

export default function Dashboard() {
	return (
		<div className={style.dashboardcontainer}>
			<div className={style.addmenubtn}>
				<p className={style.addsymbol}>+</p>
				<p className={style.name}>Add Menu</p>
			</div>
			<div className={style.menuitem}>
				<div className={style.imagecontainer}>
					<Image
						src="/testmenuitem.png"
						width={80}
						height={80}
						alt="Menu Item"
						className={style.itemimage}
					/>
				</div>
				<div className={style.itemdetails}>
					<h4 className={style.title}>Test Food</h4>
					<p className={style.detail}>Non-veg Serves 1</p>
					<p className={style.price}>₹200</p>
				</div>
				<div className={style.edititem}>Edit</div>
			</div>
			<div className={style.menuitem}>
				<div className={style.imagecontainer}>
					<Image
						src="/testmenuitem.png"
						width={80}
						height={80}
						alt="Menu Item"
						className={style.itemimage}
					/>
				</div>
				<div className={style.itemdetails}>
					<h4 className={style.title}>Test Food</h4>
					<p className={style.detail}>Non-veg Serves 1</p>
					<p className={style.price}>₹200</p>
				</div>
				<div className={style.edititem}>Edit</div>
			</div>
			<div className={style.menuitem}>
				<div className={style.imagecontainer}>
					<Image
						src="/testmenuitem.png"
						width={80}
						height={80}
						alt="Menu Item"
						className={style.itemimage}
					/>
				</div>
				<div className={style.itemdetails}>
					<h4 className={style.title}>Test Food</h4>
					<p className={style.detail}>Non-veg Serves 1</p>
					<p className={style.price}>₹200</p>
				</div>
				<div className={style.edititem}>Edit</div>
			</div>
			<div className={style.menuitem}>
				<div className={style.imagecontainer}>
					<Image
						src="/testmenuitem.png"
						width={80}
						height={80}
						alt="Menu Item"
						className={style.itemimage}
					/>
				</div>
				<div className={style.itemdetails}>
					<h4 className={style.title}>Test Food</h4>
					<p className={style.detail}>Non-veg Serves 1</p>
					<p className={style.price}>₹200</p>
				</div>
				<div className={style.edititem}>Edit</div>
			</div>
			<div className={style.menuitem}>
				<div className={style.imagecontainer}>
					<Image
						src="/testmenuitem.png"
						width={80}
						height={80}
						alt="Menu Item"
						className={style.itemimage}
					/>
				</div>
				<div className={style.itemdetails}>
					<h4 className={style.title}>Test Food</h4>
					<p className={style.detail}>Non-veg Serves 1</p>
					<p className={style.price}>₹200</p>
				</div>
				<div className={style.edititem}>Edit</div>
			</div>
			<div className={style.menuitem}>
				<div className={style.imagecontainer}>
					<Image
						src="/testmenuitem.png"
						width={80}
						height={80}
						alt="Menu Item"
						className={style.itemimage}
					/>
				</div>
				<div className={style.itemdetails}>
					<h4 className={style.title}>Test Food</h4>
					<p className={style.detail}>Non-veg Serves 1</p>
					<p className={style.price}>₹200</p>
				</div>
				<div className={style.edititem}>Edit</div>
			</div>
		</div>
	);
}
