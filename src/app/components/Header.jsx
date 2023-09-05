import React from "react";
import Image from "next/image";
import SearchComponent from "./Search";
import style from "../styles/header.module.scss";
import Link from "next/link";

export default function Header() {
	return (
		<div className={style.header}>
			<Link href={"/"} className={style.logocontainer}>
				<div className={style.imagecontainer}>
					<Image
						src="/logo.png"
						width={38}
						height={38}
						alt="LOGO OF SITE"
						className={style.logo}
					/>
				</div>
				<div className={style.textcontainer}>
					<h1 className={style.name}>Food Court</h1>
					<p className={style.tagline}>
						One stop shop for all your culinary cravings
					</p>
				</div>
			</Link>
			<SearchComponent />
		</div>
	);
}
