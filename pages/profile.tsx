import { GetServerSideProps } from "next";
import { Session, unstable_getServerSession } from "next-auth";
import { signOut } from "next-auth/react";

import { authOptions } from "@api/auth/[...nextauth]";
import { Layout } from "components";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	const session = await unstable_getServerSession(req, res, authOptions);

	if (!session) {
		return {
			redirect: {
				destination: "/signin",
				permanent: false,
			},
		};
	}

	return {
		props: {
			session,
		},
	};
};

const Profile = ({ session }: { session: Session }) => {
	return (
		<Layout>
			<main>
				<h1>Welcome back {session.user?.name}</h1>
				<p>Your email is: {session.user?.email}</p>
				<button onClick={() => signOut()}>Sign out</button>
			</main>
		</Layout>
	);
};

export default Profile;
