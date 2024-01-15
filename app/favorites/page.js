import MainUI from "../components/mainUI";

export async function getData() {
	const res = await fetch(`https://api.punkapi.com/v2/beers`)
	let data = await res.json();
	data = data;
	return data
}

const Favorites = async () => {
	const data = await getData();
	return <MainUI data={data} pageName={'Favorites'} />
}

export default Favorites;
