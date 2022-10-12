import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { unstable_getServerSession } from "next-auth/next";
import { type BuiltInProviderType } from "next-auth/providers";
import { Session } from "next-auth";
import {
	getProviders,
	getCsrfToken,
	type LiteralUnion,
	type ClientSafeProvider,
} from "next-auth/react";

import { authOptions } from "./api/auth/[...nextauth]";
import { AuthForm } from "components";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	const session = await unstable_getServerSession(req, res, authOptions);

	if (session) {
		return {
			redirect: { destination: "/", permanent: false },
		};
	}

	const providers = await getProviders();
	const csrfToken = await getCsrfToken();

	return {
		props: {
			session,
			providers,
			csrfToken,
		},
	};
};

interface SignInPageProps {
	session?: Session;
	providers?: Record<
		LiteralUnion<BuiltInProviderType, string>,
		ClientSafeProvider
	>;
	csrfToken?: string;
}

const SignInPage: NextPage<SignInPageProps> = ({
	providers,
	csrfToken,
	session,
}) => {
	const { query } = useRouter();

	return (
		<div>
			<Head>
				<title>Planetscale Auth Test | Sign In</title>
				<meta
					name="description"
					content="Planetscale Auth Test | Sign In"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<AuthForm
					providers={providers}
					csrfToken={csrfToken}
					query={query}
					signup={false}
					session={session}
				/>
			</main>
			{query.error && (
				<>
					<div className="rounded-lg bg-red-50 py-2 px-4 text-red-700">
						Could not login. Please check your e-mail or password or
						third-party application.
					</div>
				</>
			)}
		</div>
	);
};

export default SignInPage;
