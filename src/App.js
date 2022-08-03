import { useState } from "react";

import "./App.css";
import Task from "./components/Task/Task";

function App() {
	const [worker, setWorker] = useState(0);
	const [machine, setMachine] = useState(0);
	const [add, setAdd] = useState(0);

	const [money, setMoney] = useState(100);
	const [fame, setFame] = useState(0);

	return (
		<div className="App">
			<div className="stats-panel">
				<h2>Stats</h2>
				<div className="stat-group">
					<span>Geld: </span>
					<span>{money}</span>
				</div>
				<div className="stat-group">
					<span>Bekanntheit: </span>
					<span>{fame}</span>
				</div>
			</div>
			<div className="row">
				<div>Zahl die Aufsteigt {worker}</div>
				<div>Zahl die Aufsteigt {machine}</div>
				<div>Zahl die Aufsteigt 3</div>
			</div>
			<div className="row"></div>
			<div className="row">
				<Task
					name="Arbeiter"
					description="eingestellt"
					cost="15"
					costCurrency="Geld"
					currencyNeeded={money}
					payCost={setMoney}
					setProduced={setMoney}
					mathFormula="Geld"
				/>
				<Task
					name="Sacrifiece Stone"
					description="geopfert"
					cost="10"
					costCurrency="Arbeiter"
					currencyNeeded={worker}
					payCost={setWorker}
					setProduced={setFame}
					mathFormula="Bekanntheit"
				/>
				<Task
					name="Werbung"
					description="geschaltet"
					cost="100"
					costCurrency="Geld"
					currencyNeeded={money}
					payCost={setMoney}
					setProduced={setFame}
					mathFormula="Geld"
				/>
			</div>
		</div>
	);
}

export default App;
