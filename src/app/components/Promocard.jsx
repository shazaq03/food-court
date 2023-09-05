import React from "react";
import style from "../styles/promocard.module.scss";
import Image from "next/image";

export default function Promocard() {
	return (
		<div className={style.promocontainer}>
			<div className={style.promoinnercontainer}>
				<div className={style.textcontainer}>
					<h2 className={style.title}>Promotion(s)</h2>
					<p className={style.promodesc}>
						Everything is 100% off, take what you want!!!.
					</p>
				</div>
				<div className={style.imagecontainer}>
					<Image
						src="/kfcpromo.png"
						width={90}
						height={87}
						alt="LOGO"
					/>
				</div>
			</div>
		</div>
	);
}
