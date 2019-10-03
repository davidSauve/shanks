import React, {FunctionComponent} from "react";
import NavbarInstance from "../Navbar/NavbarInstance";

interface LayoutProperties {

}

const Layout : FunctionComponent<LayoutProperties> = ({children}) => {
	return (
		<div className="Layout">
			<header>
				<NavbarInstance/>
			</header>
			<main className="py-2">
				{children}
			</main>
		</div>
	);
}

export default Layout;
