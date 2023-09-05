"use client";
import React from "react";
import style from "../../styles/vendorlogin.module.scss";
import { useRouter } from "next/navigation";

export default function Adminlogin() {
	const router = useRouter();
	function handleSubmit(e) {
		e.preventDefault();
		router.push("/Vendors/Testvendor");
	}
	return (
		<div className={style.fullpagecontainer}>
			<p className={style.errormsg}>
				ERROR! THIS PAGE IS NOT OPTIMIZED FOR THIS SCREEN SIZE.
			</p>
			<div className={style.logincontainer}>
				<form
					id="#only-form"
					onSubmit={(e) => {
						handleSubmit(e);
					}}
				>
					<h3 className={style.inputtitle}>Vendor Login</h3>
					<div className={style.inputgroup}>
						<input
							name="Name"
							id="Shop Name"
							type="text"
							placeholder="Shop Name"
							className={style.input}
						/>
					</div>
					<div className={style.inputgroup}>
						<input
							name="Password"
							id="Password"
							type="password"
							placeholder="Password"
							className={style.input}
						/>
					</div>
					<button className={style.btn} type="submit">
						Log In
					</button>
				</form>
			</div>
		</div>
	);
}
