import { useLayoutEffect, useState, useContext} from "react";
import axiosClient from "../../axios";
import "./index.scss";
import Details from "./detail";
import { HandleContext } from "../../index";

function AllCategory() {
	const [listCategory, setListCategory] = useState();
	const [detailsPr, setDetailsPr] = useState(false);
	const [detailsItem, setDetailsItem] = useState({});
	const [nameCategory, setNameCategory] = useState('');
	const { handleAddCategoryByAdmin} = useContext(HandleContext);
	

	// call API
	useLayoutEffect(() => {
		axiosClient
			.get("/classify")
			.then((res) => {
				setListCategory(res);
			})
			.catch((err) => {});
	}, []);

	// xử lý đóng mở
	const handleOpenOrCloseDetailsPr = (data) => {
		// truyen data qua popup
		setDetailsItem(data);
		// xử lý đóng mở popup
		setDetailsPr(!detailsPr);
	};


	return (
		<>
		<div id="add-category-form">
                <h2>Thêm mới category</h2>
                <input
                    type="text"
                    placeholder="Enter category"
                    value={nameCategory}
                    onChange={(e) => setNameCategory(e.target.value)}
                />
                <button className="btn-add" onClick={() => {
								handleAddCategoryByAdmin(nameCategory);
								//reset empty input 
								// setNameCategory('');
								}}>Thêm</button>
            </div>
			{Boolean(listCategory) && (
				<>
					<div id="admin_allcategory--wrapper">
						<div id="admin_allcategory--head">
							<h2>Tất cả danh mục</h2>
						</div>
						<div id="admin_allcategory--content">
							<div>
								<table>
									<thead>
										<tr>
											<th>STT</th>
											<th>Name</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody id="admin_allcategory--listproduct">
										{listCategory.map((category, index) => (
											<tr
												className="admin_allcategory--listproduct-item"
												key={category._id}
											>
												<td className="admin_allcategory--listproduct-item-name">
													<span>{index}</span>
												</td>
												<td className="admin_allcategory--listproduct-item-name">
													<span>{category.name}</span>
												</td>
												<td className="admin_allcategory--listproduct-item-btn">
													<button
														onClick={() => handleOpenOrCloseDetailsPr(category)}
													>
														Chi Tiết
													</button>
												</td>
												<td className="admin_allcategory--listproduct-item-btn">
													{/* <button onClick={handleAddCategory()}>
														Thêm
													</button> */}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
							<div id="admin_allcategory--pagination"></div>
						</div>
					</div>
					{detailsPr && (
						<Details data={detailsItem} handleClose={setDetailsPr} />
					)}
				</>
			)}
		</>
	);
}

export default AllCategory;
