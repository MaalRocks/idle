import { useState } from "react";
import Button from "../Button/Button";
import "./task.css";

const Task = ({
	name,
	description,
	cost,
	costCurrency,
	currencyNeeded,
	payCost,
	setProduced,
	mathFormula,
}) => {
	const [taskCount, setTaskCount] = useState(0);
	const intervall = 1000;

	function handleClick(e) {
		console.log(currencyNeeded);
		if (currencyNeeded >= cost) {
			payCost((m) => m - cost);

			const btnValue = parseInt(e.target.lastChild.data, 10);
			setTaskCount((w) => w + btnValue);

			setInterval(() => {
				setProduced((p) => p + 1);
			}, intervall);
		}
	}

	return (
		<div className="task">
			<div>{name}</div>
			<div>{description}</div>
			<div>{taskCount}</div>
			<div>
				{costCurrency}: -{cost}
			</div>
			<div className="row">
				<Button operator="+" operand="1" onClick={handleClick} />
			</div>
			{/* Number of produced units */}
			<div className="produced">
				<span>generiert:</span>
				<span>{mathFormula}</span>
			</div>
		</div>
	);
};

export default Task;
