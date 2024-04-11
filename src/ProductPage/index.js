import { useEffect, useContext, useState } from "react";
import { Outlet, NavLink, useParams } from "react-router-dom";
import { HandleContext } from "../index";

import styles from "./product.module.scss";

export default function Productpage() {
	const { slug } = useParams();
	const { handleSearchProductByName } = useContext(HandleContext);
	const [valueInput, setValueInput] = useState("");

	useEffect(() => {
		if (!Boolean(slug)) {
			window.location.replace("http://localhost:3000/san-pham/nike");
		}
	});
	const handleSearch = () => {
		handleSearchProductByName(valueInput);
	};

	return (
		<>
			<div id={styles.main_product}>
				<div id={styles.nav_bar}>
					<div id={styles.title_header}>
						<span>Danh mục thương hiệu</span>
					</div>
					<div id={styles.nav_bar_list}>
						<NavLink
							to="nike"
							className={({ isActive }) =>
								isActive
									? `${styles.active} ${styles.nav_bar_item}`
									: `${styles.nav_bar_item}`}>
							Nike
						</NavLink>
						<NavLink
							to="adidas"
							className={({ isActive }) =>
								isActive
									? `${styles.active} ${styles.nav_bar_item}`
									: `${styles.nav_bar_item}`}>
							Adidas
						</NavLink>
						<NavLink
							to="puma"
							className={({ isActive }) =>
								isActive
									? `${styles.active} ${styles.nav_bar_item}`
									: `${styles.nav_bar_item}`
							}
						>
							Puma
						</NavLink>
					</div>
				</div>
				<div id={styles.content_product}>
					<div id={styles.nav_content}>
						<div id={styles.btn_list}>
							<button className={styles.btn_item}>Nam</button>
							<button className={styles.btn_item}>Nữ</button>
						</div>
						<form
							id={styles.search_product}
							onSubmit={(e) => {
								e.preventDefault();
								handleSearch();
							}}
						>
							<input
								type="text"
								placeholder="Nhập sản phẩm cần tìm..."
								onChange={(e) => setValueInput(e.target.value)}
							/>
							<button type="submit">
								<ion-icon name="search"></ion-icon>
							</button>
						</form>
					</div>
					<Outlet></Outlet>
				</div>
			</div>
		</>
	);
}
