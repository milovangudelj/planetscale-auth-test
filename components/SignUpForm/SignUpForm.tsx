import { useForm, type SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { type LiteralUnion, type ClientSafeProvider } from "next-auth/react";
import { type BuiltInProviderType } from "next-auth/providers";

type FormData = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
};

const schema = Yup.object().shape({
	name: Yup.string().required("This is a required field."),
	email: Yup.string()
		.test(
			"is-available",
			"This email is already in use by another user.",
			async (value, testContext) => {
				console.log(testContext);

				if (typeof value === "undefined") return false;

				if (value === "") {
					return false;
				}

				return true;

				// const fetcher = await fetch(
				// 	`https://dev-api/api/users/email_available?email=${encodeURIComponent(
				// 		value
				// 	)}`
				// );
				// const result = await fetcher.json();
				// return result.available === true;
			}
		)
		.required("This is a required field.")
		.email("This must be a valid email."),
	password: Yup.string()
		.min(8, "Password must be at least 8 characters long.")
		.required("This is a required field."),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password"), null], "The two passwords must match.")
		.required("This is a required field."),
});

export const SignUpForm = ({
	providers,
}: {
	providers: Record<
		LiteralUnion<BuiltInProviderType, string>,
		ClientSafeProvider
	>;
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = (data) => {
		console.log(data);
		console.log(
			`About to make a fetch call to ${providers["credentials"].callbackUrl}`
		);
		fetch(providers["credentials"].callbackUrl, { method: "POST" });
	};

	// const onBlur = (data, e) => {
	// 	if (!props.signup && data.target.value !== "") {
	// 		(async (value, testContext) => {
	// 			const fetcher = await fetch(
	// 				`https://dev-api/api/users/email_available?email=${encodeURIComponent(
	// 					data.target.value
	// 				)}`
	// 			);
	// 			const result = await fetcher.json();
	// 			if (result.available === true)
	// 				router.push(
	// 					`/auth/signup?email=${encodeURIComponent(data.target.value)}`
	// 				);
	// 		})();
	// 	}
	// };

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex max-w-sm flex-col"
		>
			<label>Name</label>
			<input
				{...register("name")}
				className="rounded-lg border border-zinc-100 py-2 px-4"
			/>
			<label>Email</label>
			<input
				{...register("email")}
				className="rounded-lg border border-zinc-100 py-2 px-4"
			/>
			<label>Password</label>
			<input
				{...register("password")}
				className="rounded-lg border border-zinc-100 py-2 px-4"
			/>
			<label>Confirm Password</label>
			<input
				{...register("confirmPassword")}
				className="rounded-lg border border-zinc-100 py-2 px-4"
			/>
			<button
				type="submit"
				className="rounded-lg border-blue-500 bg-blue-500 px-4 py-2 text-sm font-bold uppercase tracking-wide text-white outline-none ring-blue-500/50 transition hover:border-blue-400 hover:bg-blue-400 focus:border-blue-600 focus:bg-blue-600 focus:ring-2"
			>
				Sign Up
			</button>
		</form>
	);
};
