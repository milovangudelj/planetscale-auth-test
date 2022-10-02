import { useSession } from "next-auth/react";
import Link from "next/link";

export const Navbar = () => {
	const { data: session } = useSession();

	return (
		<div className="sticky top-0 w-full px-4">
			<nav className="flex items-center justify-between max-w-7xl mx-auto py-2">
				<span>
					<Link href={"/"}>PScale Auth</Link>
				</span>
				{session ? (
					<span>{session.user?.email}</span>
				) : (
					<ul className="flex space-x-4">
						<li>
							<Link href={"/signin"}>Sign in</Link>
						</li>
						<li>
							<Link href={"/signup"}>Sign up</Link>
						</li>
					</ul>
				)}
			</nav>
		</div>
	);
};
