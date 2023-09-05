import "./styles/globals.scss";
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({
	weight: ["400"],
	subsets: ["latin"],
});

export const metadata = {
	title: "Food Court",
	description: "E-canteen System for College students",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppinsFont.className}>{children}</body>
		</html>
	);
}
