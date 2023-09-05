"use client";
import React from "react";
import { useState } from "react";
import style from "../../../styles/testvendor.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import Salesreport from "./components/Salesreport";

export default function Testvendorpage() {
	const [activeTab, setActiveTab] = useState("Dashboard");
	const router = useRouter();
	function switchtab(e) {
		setActiveTab(e.target.innerText);
	}
	return (
		<div className={style.fullpagecontainer}>
			<div className={style.bannercontainer}>
				<h2 className={style.vendortitle}>KFC</h2>
				<div className={style.logocontainer}>
					<Image
						src="/kfcpromo.png"
						width={150}
						height={140}
						alt="LOGO OF SITE"
						priority={true}
						className={style.logo}
					/>
				</div>
			</div>
			<div className={style.bodycontainer}>
				<div className={style.sidepanel}>
					<ul className={style.list}>
						<li className={style.tab} onClick={(e) => switchtab(e)}>
							Dashboard
						</li>
						<li className={style.tab} onClick={(e) => switchtab(e)}>
							<span>
								<Image
									src="/carticon1.png"
									width={30}
									height={30}
									alt="cart-icon"
									className={style.carticon}
								/>
							</span>
							Orders
						</li>
						<li className={style.tab} onClick={(e) => switchtab(e)}>
							<span>
								<Image
									src="/analytics.png"
									width={30}
									height={30}
									alt="cart-icon"
									className={style.carticon}
								/>
							</span>
							Sales Report
						</li>
						<li className={style.tab} onClick={() => router.back()}>
							<span>
								<Image
									src="/signout.png"
									width={30}
									height={30}
									alt="cart-icon"
									className={style.carticon}
								/>
							</span>
							Sign Out
						</li>
					</ul>
				</div>
				<div className={style.mainpanel}>
					{activeTab == "Dashboard" && <Dashboard />}
					{activeTab == "Orders" && <Orders />}
					{activeTab == "Sales Report" && <Salesreport />}
					{activeTab == "Sign Out" && <p>Sign Out</p>}
				</div>
			</div>
		</div>
	);
}
