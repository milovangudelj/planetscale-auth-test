import type { AppProps } from "next/app";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";

type PageProps = {
	session: Session;
	[key: string]: any;
};

function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps<PageProps>) {
	return (
		<SessionProvider session={session}>
			<Component {...pageProps} />
		</SessionProvider>
	);
}

export default MyApp;
