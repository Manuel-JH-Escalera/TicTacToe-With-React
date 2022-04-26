import React, { useState } from "react";
import App from "../component/App.jsx";
import PickAWeapon from "./PickWeapon.jsx";

//create your first component
const Home = () => {
	const [show, setShow] = useState(false);
	return (
		<div>
			<nav>
				<h1 className="text-center text-white m-4">
					Tic Tac Toe in React.js
				</h1>
				{show ? <App /> : null}
			</nav>
			{!show ? <PickAWeapon show={() => setShow(!show)} /> : null}
		</div>
	);
};

export default Home;
