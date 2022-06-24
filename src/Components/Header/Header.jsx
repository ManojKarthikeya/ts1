import React from "react";
import "./header-styles.css";
import { ReactComponent as Menu } from "./../../assets/menu.svg";
import { ReactComponent as Add } from "./../../assets/add.svg";
import { ReactComponent as Tag } from "./../../assets/tag.svg";
import { ReactComponent as Person } from "./../../assets/person.svg";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";

function Header() {
	return (
		<div className="header">
			<Menu className="header-icon menu-icon" />
			<div className="hl">
				<Add className="header-icon" />
				<Tag className="header-icon" />
				<Person className="header-icon" />
				<ChangeLanguage />
			</div>
		</div>
	);
}

export default Header;
