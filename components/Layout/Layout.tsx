import { Navbar } from "components/Navbar";
import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="min-h-screen">
			<Navbar />
			{children}
		</div>
	);
};
