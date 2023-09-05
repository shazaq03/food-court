"use client";
import React from "react";
import style from "../../../styles/teststyle.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Testshop() {
	return (
		<div className={style.container}>
			<div className={style.bannercontainer}>
				<Image
					src="/kfcpromo.png"
					width={200}
					height={100}
					alt="LOGO OF SITE"
					priority={true}
					className={style.bannerimage}
				/>
			</div>
			<Link href={"/"} className={style.backbtn}>
				&lt;
			</Link>
			<Link className={style.carttrigger} href={"/Cart"}>
				<Image
					src="/carticon.png"
					width={30}
					height={30}
					alt="cart-icon"
					className={style.carticon}
				/>
			</Link>

			<div className={style.menucontainer}>
				<ul className={style.menulist}>
					<li className={style.menuitem}>
						<div className={style.imagecontainer}>
							<Image
								src="/testmenuitem.png"
								width={80}
								height={80}
								alt="LOGO OF SITE"
								className={style.itemimage}
							/>
						</div>
						<div className={style.descriptioncontainer}>
							<h4 className={style.itemname}>Test Dish</h4>
							<p className={style.itemdes}>Non-veg Serves: 1</p>
							<p className={style.itemprice}>₹20</p>
						</div>
						<div className={style.countercontainer}>
							<button className={style.quantitybtn}>+</button>
							<span className={style.quantitycounter}>0</span>
							<button className={style.quantitybtn}>-</button>
						</div>
					</li>
					<li className={style.menuitem}>
						<div className={style.imagecontainer}>
							<Image
								src="/testmenuitem.png"
								width={80}
								height={80}
								alt="LOGO OF SITE"
								className={style.itemimage}
							/>
						</div>
						<div className={style.descriptioncontainer}>
							<h4 className={style.itemname}>Test Dish</h4>
							<p className={style.itemdes}>Non-veg Serves: 1</p>
							<p className={style.itemprice}>₹20</p>
						</div>
						<div className={style.countercontainer}>
							<button className={style.quantitybtn}>+</button>
							<span className={style.quantitycounter}>0</span>
							<button className={style.quantitybtn}>-</button>
						</div>
					</li>
					<li className={style.menuitem}>
						<div className={style.imagecontainer}>
							<Image
								src="/testmenuitem.png"
								width={80}
								height={80}
								alt="LOGO OF SITE"
								className={style.itemimage}
							/>
						</div>
						<div className={style.descriptioncontainer}>
							<h4 className={style.itemname}>Test Dish</h4>
							<p className={style.itemdes}>Non-veg Serves: 1</p>
							<p className={style.itemprice}>₹20</p>
						</div>
						<div className={style.countercontainer}>
							<button className={style.quantitybtn}>+</button>
							<span className={style.quantitycounter}>0</span>
							<button className={style.quantitybtn}>-</button>
						</div>
					</li>
					<li className={style.menuitem}>
						<div className={style.imagecontainer}>
							<Image
								src="/testmenuitem.png"
								width={80}
								height={80}
								alt="LOGO OF SITE"
								className={style.itemimage}
							/>
						</div>
						<div className={style.descriptioncontainer}>
							<h4 className={style.itemname}>Test Dish</h4>
							<p className={style.itemdes}>Non-veg Serves: 1</p>
							<p className={style.itemprice}>₹20</p>
						</div>
						<div className={style.countercontainer}>
							<button className={style.quantitybtn}>+</button>
							<span className={style.quantitycounter}>0</span>
							<button className={style.quantitybtn}>-</button>
						</div>
					</li>
					<li className={style.menuitem}>
						<div className={style.imagecontainer}>
							<Image
								src="/testmenuitem.png"
								width={80}
								height={80}
								alt="LOGO OF SITE"
								className={style.itemimage}
							/>
						</div>
						<div className={style.descriptioncontainer}>
							<h4 className={style.itemname}>Test Dish</h4>
							<p className={style.itemdes}>Non-veg Serves: 1</p>
							<p className={style.itemprice}>₹20</p>
						</div>
						<div className={style.countercontainer}>
							<button className={style.quantitybtn}>+</button>
							<span className={style.quantitycounter}>0</span>
							<button className={style.quantitybtn}>-</button>
						</div>
					</li>
					<li className={style.menuitem}>
						<div className={style.imagecontainer}>
							<Image
								src="/testmenuitem.png"
								width={80}
								height={80}
								alt="LOGO OF SITE"
								className={style.itemimage}
							/>
						</div>
						<div className={style.descriptioncontainer}>
							<h4 className={style.itemname}>Test Dish</h4>
							<p className={style.itemdes}>Non-veg Serves: 1</p>
							<p className={style.itemprice}>₹20</p>
						</div>
						<div className={style.countercontainer}>
							<button className={style.quantitybtn}>+</button>
							<span className={style.quantitycounter}>0</span>
							<button className={style.quantitybtn}>-</button>
						</div>
					</li>
					<li className={style.menuitem}>
						<div className={style.imagecontainer}>
							<Image
								src="/testmenuitem.png"
								width={80}
								height={80}
								alt="LOGO OF SITE"
								className={style.itemimage}
							/>
						</div>
						<div className={style.descriptioncontainer}>
							<h4 className={style.itemname}>Test Dish</h4>
							<p className={style.itemdes}>Non-veg Serves: 1</p>
							<p className={style.itemprice}>₹20</p>
						</div>
						<div className={style.countercontainer}>
							<button className={style.quantitybtn}>+</button>
							<span className={style.quantitycounter}>0</span>
							<button className={style.quantitybtn}>-</button>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}
