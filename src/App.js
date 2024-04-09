import { Outlet } from "react-router-dom";

import Header from "./Header/index";

export default function App() {
	return (
		<div id="main" style={{ padding: "0 0 100px" }}>
			<Header />
			<div
				id="content"
				style={{minHeight: "100vh", paddingTop: "150px"}}>
				<Outlet></Outlet>
			</div>
		</div>
	);
}
