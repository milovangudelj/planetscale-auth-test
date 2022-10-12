import type { NextPage } from "next";
import Head from "next/head";

import { Profile } from "components";
import Link from "next/link";

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
				<Link href={"/signin"} passHref>
					<a className="rounded-lg border-blue-500 bg-blue-500 px-4 py-2 text-sm font-bold uppercase tracking-wide text-white outline-none ring-blue-500/50 transition hover:border-blue-400 hover:bg-blue-400 focus:border-blue-600 focus:bg-blue-600 focus:ring-2">
						Sign In
					</a>
				</Link>
				<Link href={"/signup"} passHref>
					<a className="rounded-lg border-blue-500 bg-blue-500 px-4 py-2 text-sm font-bold uppercase tracking-wide text-white outline-none ring-blue-500/50 transition hover:border-blue-400 hover:bg-blue-400 focus:border-blue-600 focus:bg-blue-600 focus:ring-2">
						Sign Up
					</a>
				</Link>

				<Profile />
			</main>
		</div>
	);
};

export default Home;
