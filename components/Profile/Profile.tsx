import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

export const Profile = () => {
	const { data: session } = useSession();

	return session ? (
		<div>
			<Image
				src={session.user?.image ?? ""}
				alt={session.user?.name ?? "User profile image"}
				width={32}
				height={32}
			/>
			<h2>{session.user?.name}</h2>
			<p>{session.user?.email}</p>
		</div>
	) : (
		<div>No user</div>
	);
};
