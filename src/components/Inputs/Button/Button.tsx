interface ButtonProps{
	onClickHandler?: () => void;
	label?: string,
	customClass?: string,
	isPillStyle?: boolean,
	type?: "button" | "submit" | "reset" | undefined,
};

function Button({
	onClickHandler,
	label = 'Submit',
	customClass = `bg-yellow-600 w-80`,
	isPillStyle = false,
	type = 'button',
} : ButtonProps) {
    const defaultClass = `focus:outline-none text-white focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-5 py-2.5 ${customClass}`;
    const pillClass = '';

	return (
		<button
			type={type}
			onClick={onClickHandler}
			className={defaultClass}>
			{label}
		</button>
	);
}

export default Button;