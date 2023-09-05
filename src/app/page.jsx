import style from "./styles/mainContainer.module.scss";
import Header from "./components/Header";
import Promocard from "./components/Promocard";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
	return (
		<div className={style.fullcontainer}>
			<Header />
			<Navbar />
			<Promocard />
			<div className={style.title}>Our Shops</div>
			<div className={style.innercontainer}>
				<Link href={"./Shop/Test/"} className={style.vendorcontainer}>
					<div className={style.vendorlogo}>
						<Image
							src="/kfcpromo.png"
							width={80}
							height={80}
							alt="LOGO OF SITE"
							className={style.logo}
						/>
					</div>
					<div className={style.textcontainer}>
						<p className={style.vendorname}>Test Vendor</p>
						<Image
							src="/arrow.png"
							width={20}
							height={20}
							alt=""
							className={style.arrow}
						/>
					</div>
				</Link>

				<div className={style.vendorcontainer}>
					<div className={style.vendorlogo}>
						<Image
							src="/kfcpromo.png"
							width={80}
							height={80}
							alt="LOGO OF SITE"
							className={style.logo}
						/>
					</div>
					<div className={style.textcontainer}>
						<p className={style.vendorname}>Test Vendor</p>

						<Image
							src="/arrow.png"
							width={20}
							height={20}
							alt=""
							className={style.arrow}
						/>
					</div>
				</div>
				<div className={style.vendorcontainer}>
					<div className={style.vendorlogo}>
						<Image
							src="/kfcpromo.png"
							width={80}
							height={80}
							alt="LOGO OF SITE"
							className={style.logo}
						/>
					</div>
					<div className={style.textcontainer}>
						<p className={style.vendorname}>Test Vendor</p>

						<Image
							src="/arrow.png"
							width={20}
							height={20}
							alt=""
							className={style.arrow}
						/>
					</div>
				</div>
				<div className={style.vendorcontainer}>
					<div className={style.vendorlogo}>
						<Image
							src="/kfcpromo.png"
							width={80}
							height={80}
							alt="LOGO OF SITE"
							className={style.logo}
						/>
					</div>
					<div className={style.textcontainer}>
						<p className={style.vendorname}>Test Vendor</p>

						<Image
							src="/arrow.png"
							width={20}
							height={20}
							alt=""
							className={style.arrow}
						/>
					</div>
				</div>
				<div className={style.vendorcontainer}>
					<div className={style.vendorlogo}>
						<Image
							src="/kfcpromo.png"
							width={80}
							height={80}
							alt="LOGO OF SITE"
							className={style.logo}
						/>
					</div>
					<div className={style.textcontainer}>
						<p className={style.vendorname}>Test Vendor</p>

						<Image
							src="/arrow.png"
							width={20}
							height={20}
							alt=""
							className={style.arrow}
						/>
					</div>
				</div>
				<div className={style.vendorcontainer}>
					<div className={style.vendorlogo}>
						<Image
							src="/kfcpromo.png"
							width={80}
							height={80}
							alt="LOGO OF SITE"
							className={style.logo}
						/>
					</div>
					<div className={style.textcontainer}>
						<p className={style.vendorname}>Test Vendor</p>

						<Image
							src="/arrow.png"
							width={20}
							height={20}
							alt=""
							className={style.arrow}
						/>
					</div>
				</div>
				<div className={style.vendorcontainer}>
					<div className={style.vendorlogo}>
						<Image
							src="/kfcpromo.png"
							width={80}
							height={80}
							alt="LOGO OF SITE"
							className={style.logo}
						/>
					</div>
					<div className={style.textcontainer}>
						<p className={style.vendorname}>Test Vendor</p>

						<Image
							src="/arrow.png"
							width={20}
							height={20}
							alt=""
							className={style.arrow}
						/>
					</div>
				</div>
				<div className={style.vendorcontainer}>
					<div className={style.vendorlogo}>
						<Image
							src="/kfcpromo.png"
							width={80}
							height={80}
							alt="LOGO OF SITE"
							className={style.logo}
						/>
					</div>
					<div className={style.textcontainer}>
						<p className={style.vendorname}>Test Vendor</p>

						<Image
							src="/arrow.png"
							width={20}
							height={20}
							alt=""
							className={style.arrow}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
