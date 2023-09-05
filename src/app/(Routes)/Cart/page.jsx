"use client";
import React from "react";
import style from "../../styles/cart.module.scss";
import Image from "next/image";
import Link from "next/link";
export default function Cart() {
	return (
		<div className={style.cartcontainer}>
			<h3 className={style.itemcount}>3 item(s) in cart</h3>
			<div className={style.itemlist}>
				<li className={style.cartitem}>
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
				<li className={style.cartitem}>
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
				<li className={style.cartitem}>
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
				<li className={style.cartitem}>
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
				<li className={style.cartitem}>
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
			</div>
			<div className={style.orderdetails}>
				<h5 className={style.detailstitle}>Order Details</h5>
				<div className={style.details}>
					Sub Total <span>₹1000</span>
				</div>
				<div className={style.details}>
					Savings <span>-₹200</span>
				</div>
				<div className={style.details}>
					Tax <span>₹63</span>
				</div>
				<div className={style.details}>
					Total <span>₹863</span>
				</div>
			</div>
			<h5 className={style.ordertotal}>₹863.00</h5>
			<div className={style.calltoaction}>
				<button className={style.paymentbtn}>Proceed to Payment</button>
				<Link className={style.backbtn} href={"/Shop/Test"}>
					Continue Shopping
				</Link>
			</div>
		</div>
	);
}
