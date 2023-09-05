export default async function fetchurl(url) {
	const res = await fetch({ url });
	return res.json();
}
