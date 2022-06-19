import "./Button.css"

export const Button = props => {
	let classes = "button "
	classes += props.operation ? "operation" : ""
	classes += props.double ? "double" : ""
	classes += props.triple ? "triple" : ""

	return (
		<button
			onClick={e => props.click && props.click(props.label)}
			className={classes}
		>
			{props.label}
		</button>
	)
}
