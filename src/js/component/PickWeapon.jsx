import React, { useState } from "react";

function PickAWeapon(props) {
	return (
		<div className="container text-center">
			<h2 className="text-white pb-5">Pick a Weapon</h2>
			<div className="container bg-dark mt-5 bg-opacity-50">
				<div className="p-5">
					<div className="container">
						<h3 className="text-white">CHOOSE YOUR WEAPON</h3>
						<input type="text" />
						<input type="text" />
					</div>
					<div className="container p-3 display-1">
						<button
							className="text-warning p-1 m-3"
							id="botonx"
							onClick={props.show}>
							X
						</button>
						<button
							className="text-info p-1 m-3"
							id="botono"
							onClick={props.show}>
							O
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PickAWeapon;
