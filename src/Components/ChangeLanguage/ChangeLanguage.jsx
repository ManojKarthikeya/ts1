import React, { useState } from "react";
import "./changelang-styles.css";
import { ReactComponent as Down } from "./../../assets/downwards-pointer-svgrepo-com.svg";

const languages = [
	"English",
	"العربية",
	"বাংলা",
	"Български",
	"Español",
	"Esperanto",
	"Euskara",
	"فارسی",
	"Français",
	"Português",
	"Română",
	"Русский",
];

function ChangeLanguage() {
	const [open, setOpen] = useState(0);
	const [language, setLanguage] = useState("English");

	if (!open) {
		return (
			<div
				className="cl-closed"
				onClick={() => {
					setOpen(1);
				}}
			>
				{language}<span>
					<Down className="down-arrowhead" />
				</span>
			</div>
		);
	} else {
		return (
			<div className="cl-open">
				{languages.map((lang)=>(<Language value={lang} cl={setLanguage} so={setOpen} />))}
			</div>
		);
	}
}

const Language = (props) => (
	<div
		className="language"
		onClick={() => {
            props.so(0);
			props.cl(props.value);
		}}
	>
		{props.value}
	</div>
);

export default ChangeLanguage;
