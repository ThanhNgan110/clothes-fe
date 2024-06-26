import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import App from "./App";
import Introduce from "./Introduce/index";
import Productpage from "./ProductPage";
import Children from "./ProductPage/product";
import Details from "./ProductPage/detail";
import ErrorPage from "./Error404/index";
import CartPage from "./Cart";
import UserProfile from "./UserProfile";

import AdminPage from "./DashBoard/index";
import Dashboard from "./DashBoard/HomeDashboard";
import AllProduct from "./DashBoard/AllProduct/allProduct";
import AddProduct from "./DashBoard/AddProduct/index";
import LoginAdminPage from "./DashBoard/LoginInAdmin";
import AllUser from "./DashBoard/AllUser/allAccount";
import AddUser from "./DashBoard/AddUser";
import Category from "./DashBoard/Category";
export default function Router() {
	return (
		<>
			<Routes>
				<Route path="/" element={<App></App>}>
					<Route index element={<Home></Home>} />
					<Route path="gioi-thieu" element={<Introduce></Introduce>} />
					<Route path="san-pham" element={<Productpage></Productpage>}>
						<Route path=":slug" element={<Children></Children>}>
							{/* <Route path="details" element={<h1>Deltai;</h1>}></Route> */}
						</Route>
						<Route path=":slug/details" element={<Details></Details>}></Route>
					</Route>
					<Route path="cart" element={<CartPage />}></Route>
					<Route path="user/profile" element={<UserProfile></UserProfile>} />
					<Route path="*" element={<ErrorPage></ErrorPage>} />
				</Route>
				<Route path="admin/" element={<AdminPage></AdminPage>}>
					<Route index element={<Dashboard></Dashboard>} />
					<Route path="all-product" element={<AllProduct></AllProduct>} />
					<Route path="add-product" element={<AddProduct></AddProduct>} />
					<Route path="all-user" element={<AllUser></AllUser>} />
					{/* <Route path="add-user" element={<AddUser></AddUser>} /> */}
					<Route path="category" element={<Category></Category>} />
				</Route>
				<Route path="admin/login" element={<LoginAdminPage></LoginAdminPage>}></Route>
			</Routes>
		</>
	);
}
