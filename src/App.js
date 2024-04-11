import { Outlet } from "react-router-dom";

import Header from "./Header/index";
import Footer from "./Footer";

export default function App() {
	return (
		<>
			<Header />
			<div id="content" style={{ minHeight: "100vh", paddingTop: "150px" }}>
				<Outlet></Outlet>
			</div>
			<Footer />
		</>
	);
}
