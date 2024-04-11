import { useEffect, useLayoutEffect, useState } from "react";

import axiosClient from "../../axios";

import "./index.scss";

import Detail from "./detail";

function AllAccount() {
	const [listProduct, setListProduct] = useState();
	const [indexPagination, setIndexPagination] = useState(1);
	const [detailsPr, setDetailsPr] = useState(false);
	const [detailsItem, setDetailsItem] = useState({});

	// thực hiện call API
	useLayoutEffect(() => {
		axiosClient
			.get("/admin/all-user")
			.then((res) => {
				setListProduct({
					data: res.data,
					size: res.data.length,
				});
				console.log(res.data, "user");
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// thực hiện việc tạo số lượng trang
	useEffect(() => {
		const paginationsEl = document.querySelector(
			"#admin_allproduct--pagination"
		);
		if (paginationsEl) {
			paginationsEl.innerHTML = "";
			const paginationSize = Boolean(listProduct)
				? listProduct.size % 5 === 0
					? parseInt(listProduct.size / 5)
					: parseInt(listProduct.size / 5 + 1)
				: 0;
			console.log(paginationSize);

			for (let i = 0; i < paginationSize; i++) {
				const button = document.createElement("button");
				button.classList.add("admin_allproduct--pagination-item");
				if (i === 0) {
					button.classList.add("active");
				}
				button.textContent = `${i + 1}`;
				button.addEventListener("click", (e) => {
					const buttonActive = document.querySelector(
						".admin_allproduct--pagination-item.active"
					);
					buttonActive.classList.remove("active");
					e.target.classList.add("active");
					setIndexPagination(i + 1);
				});
				paginationsEl.appendChild(button);
			}
		}
	}, [listProduct]);

	// xử lý đóng mở
	const handleOpenOrCloseDetailsPr = (data) => {
		setDetailsItem(data);
		setDetailsPr(!detailsPr);
		console.log(data, "id");
	};

	return (
		<>
			{Boolean(listProduct) && (
				<>
					<div id="admin_allproduct--wrapper">
						<div id="admin_allproduct--head">
							<h2>Tất cả tài khoản</h2>
						</div>
						<div id="admin_allproduct--content">
							<div>
								<table>
									<thead>
										<tr>
											<th>Id</th>
											<th>Name</th>
											<th>Email</th>
											<th>Phone</th>
											<th>Address</th>
											<th>Role</th>
										</tr>
									</thead>
									<tbody id="admin_allproduct--listproduct">
										{listProduct.data.map((user, index) => {
											if (
												index >= indexPagination * 5 - 5 &&
												index < indexPagination * 5
											) {
												return (
													<tr
														className="admin_allproduct--listproduct-item"
														key={user._id}
													>
														<td className="admin_allproduct--listproduct-item-origin">
															<span>{user._id}</span>
														</td>
														<td className="admin_allproduct--listproduct-item-name">
															<span>{user.username}</span>
														</td>
														<td className="admin_allproduct--listproduct-item-id">
															<span>{user.email}</span>
														</td>
														<td className="admin_allproduct--listproduct-item-warehouse">
															<span>{user.phone}</span>
														</td>
														<td className="admin_allproduct--listproduct-item-price">
															<span>{user.address}</span>
														</td>
														<td className="admin_allproduct--listproduct-item-origin">
															<span>{user.role}</span>
														</td>
														<td className="admin_allproduct--listproduct-item-btn">
															<button
																onClick={() => {
																	handleOpenOrCloseDetailsPr(user);
                                  console.log(user.id);
																}}
															>
																Chi Tiết
															</button>
														</td>
													</tr>
												);
											}
										})}
									</tbody>
								</table>
							</div>
							<div id="admin_allproduct--pagination"></div>
						</div>
					</div>
					{detailsPr && (
						<Detail data={detailsItem} handleClose={setDetailsPr} />
					)}
				</>
			)}
		</>
	);
}

export default AllAccount;
