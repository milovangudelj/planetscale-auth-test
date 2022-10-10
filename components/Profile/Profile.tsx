import React from "react";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";

export const Profile = () => {
	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	return user ? (
		<div>
			<Image
				src={user.picture ?? ""}
				alt={user.name ?? "User profile image"}
				width={32}
				height={32}
			/>
			<h2>{user.name}</h2>
			<p>{user.email}</p>
		</div>
	) : (
		<div>No user</div>
	);
};
