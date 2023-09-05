import React from "react";
import Link from "next/link";
import style from "../styles/navbar.module.scss";
export default function Navbar() {
	return (
		<div className={style.navbarcontainer}>
			<ul className={style.navlist}>
				<Link href={"/"} className={style.navitem}>
					Home
				</Link>
				<li className={style.navitem}>Shops</li>
				<Link className={style.navitem} href={"./Vendorlogin"}>
					Vendor Login
				</Link>
				<li className={style.navitem}>New Shop</li>
				<li className={style.navitem}>Customer Care</li>
			</ul>
		</div>
	);
}
