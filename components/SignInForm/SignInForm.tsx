import * as Yup from "yup";

const schema = Yup.object().shape({
	email: Yup.string()
		.required("This is a required field.")
		.email("This must be a valid email."),
	password: Yup.string()
		.min(8, "Password must be at least 8 characters long.")
		.required("This is a required field."),
});

export const SignInForm = () => {
	return <form>Sign In form</form>;
};
