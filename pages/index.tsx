import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Planetscale Auth Test</title>
				<meta name="description" content="Planetscale Auth Test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>Welcome to Planetscale Auth Test!</h1>

				<p>Fun things to come</p>
			</main>
		</div>
	);
};

export default Home;
