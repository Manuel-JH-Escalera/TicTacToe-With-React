import React, { useState } from "react";

function Square({ value, onClick }) {
	return (
		<button className="square col" onClick={onClick}>
			{value}
		</button>
	);
}

function TicTacToe() {
	const [squares, setSquares] = React.useState(Array(9).fill(null));
	const [isX, setIsX] = React.useState(true);
	const handleClick = (i) => {
		if (calculateWinner(squares) || squares[i]) {
			return;
		}

		squares[i] = isX ? "X" : "O";
		setSquares(squares);
		setIsX(!isX);
	};

	const winner = calculateWinner(squares);
	let status;

	if (winner) {
		status = `${winner} Wins!`;
	} else {
		status = "It is " + (isX ? "X" : "O") + " turn!";
	}

	const handleRestart = () => {
		setIsX(true);
		setSquares(Array(9).fill(null));
	};

	const renderSquare = (i) => {
		return <Square value={squares[i]} onClick={() => handleClick(i)} />;
	};
	return (
		<div className="text-center board">
			<h1 className="text-white text-center">{status}</h1>
			<button className="" onClick={handleRestart}>
				Start Over
			</button>
			<div className=" display-1 container w-50">
				<div className="row">
					<Square value={squares[0]} onClick={() => handleClick(0)} />
					<Square value={squares[1]} onClick={() => handleClick(1)} />
					<Square value={squares[2]} onClick={() => handleClick(2)} />
				</div>
				<div className="row">
					<Square value={squares[3]} onClick={() => handleClick(3)} />
					<Square value={squares[4]} onClick={() => handleClick(4)} />
					<Square value={squares[5]} onClick={() => handleClick(5)} />
				</div>
				<div className="row">
					<Square value={squares[6]} onClick={() => handleClick(6)} />
					<Square value={squares[7]} onClick={() => handleClick(7)} />
					<Square value={squares[8]} onClick={() => handleClick(8)} />
				</div>
			</div>
		</div>
	);
}

function calculateWinner(squares) {
	const winningPatterns = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < winningPatterns.length; i++) {
		const [a, b, c] = winningPatterns[i];
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[a] === squares[c]
		) {
			return squares[a];
		}
	}
	return null;
}

export default TicTacToe;
