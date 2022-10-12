import { SignUpForm, SignInForm } from "components";

export const AuthForm = (props: any) => {
	return (
		<div>
			<h1>{props.signup ? "Sign Up Form" : "Sign In Form"}</h1>
			{props.signup ? (
				<SignUpForm providers={props.providers} />
			) : (
				<SignInForm />
			)}
		</div>
	);
};
