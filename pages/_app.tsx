import type { AppProps } from "next/app";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";

interface Props extends AppProps {
	pageProps: any;
}

function MyApp({ Component, pageProps }: Props) {
	return (
		<SessionProvider session={pageProps.session}>
			<Component {...pageProps} />
		</SessionProvider>
	);
}

export default MyApp;
