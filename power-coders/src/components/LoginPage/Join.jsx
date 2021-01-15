import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../assets/css/LoginPage/Join.css";

export const Join = () => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
	const [isOpenDesti, setIsOpenDesti] = useState(false);
	const [isOpenName, setIsOpenName] = useState(false);

	const toggleDesti = () => setIsOpenDesti(true);
	const toggleName = () => setIsOpenName(true);

	return (
		<div className="joinOuterContainer">
			<div className="joinInnerContainer">
				<h1 className="heading">See U Further</h1>
				<h2>Cliquez sur la Terre pour choisir une destination !</h2>
				<div
					type="toggle"
					id="earth"
					className="collapsible"
					onClick={toggleDesti}
				/>
				{isOpenDesti && (
					<div className="reveal">
						<div>
							<input
								type="radio"
								id="Moscou"
								name="destination"
								value="Moscou"
								onChange={(event) => setRoom(event.target.value)}
							/>
							<label htmlFor="Moscou">Moscou</label>

							<input
								type="radio"
								id="Rome"
								name="destination"
								value="Rome"
								disabled
								onChange={(event) => setRoom(event.target.value)}
							/>
							<label htmlFor="Rome">Rome</label>

							<input
								type="radio"
								id="Paris"
								name="destination"
								value="Paris"
								disabled
								onChange={(event) => setRoom(event.target.value)}
							/>
							<label htmlFor="Paris">Paris</label>

							<input
								type="radio"
								id="Barcelone"
								name="destination"
								value="Barcelone"
								disabled
								onChange={(event) => setRoom(event.target.value)}
							/>
							<label htmlFor="Barcelone">Barcelone</label>
						</div>

						<button className="button mt-20 collapsible" onClick={toggleName}>
							Suivant
						</button>
					</div>
				)}
				{isOpenName && (
					<div className="reveal">
						<h3>
							Bienvenue sur See you further, <br />
							l'appli qui vous rapproche de vos voyages entre amis !
						</h3>
						<p className="rules">
							Vous allez bientôt (enfin!!!) tous vous retrouver dans la même
							pièce ! Fouillez un peu partout pour découvrir ce qu'il s'y cache.
							Certains objets vous donneront des information de manière
							individuelle, et d'autres vont gérérer des activités ensemble.
							N'oubliez pas de vous attendre pour chaque étape et de communiquer
							via le chat ;)
						</p>
						<input
							placeholder="Prénom"
							className="joinInput"
							type="text"
							onChange={(event) => setName(event.target.value)}
						/>
						<Link
							onClick={(e) => (!name || !room ? e.preventDefault() : null)}
							to={`/room/chat?name=${name}&room=${room}`}
						>
							<button className={"button mt-20"} type="submit">
								On y va ou quoi ?
							</button>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};
