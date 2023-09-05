"use client";
import React, { useState } from "react";

import style from "../styles/header.module.scss";

function SearchComponent() {
	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<form
			className={style.searchform}
			onSubmit={(e) => {
				handleSubmit(e);
			}}
		>
			<div className={style.searchcontainer}>
				<input
					type="text"
					placeholder="Search..."
					className={style.searchtext}
					spellCheck="false"
				/>
				{/* <button type="submit" className={style.searchbutton}>
					Go
				</button> */}
			</div>
		</form>
	);
}

export default SearchComponent;
