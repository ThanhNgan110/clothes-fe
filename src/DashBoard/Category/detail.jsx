import { useState, memo, useContext } from "react";

import { HandleContext } from "../../index";

import "./detail.scss";

function Detail({ data, handleClose,  }) {
	const { handleDeleteCategoryByAdmin, handleUpdateCategoryByAdmin } = useContext(HandleContext);

	// set state for click edit
	const [editName, setEditName] = useState(true);

	const [name, setName] = useState(data.name);

	return (
		<>
			<div id="admin_details-category">
				<div id="admin_details-category-form">
					<div id="admin_details-category-form-close-icon">
						<ion-icon
							name="close"
							onClick={() => {
								handleClose(false);
							}}
						></ion-icon>
					</div>
					<div id="admin_details-category--list-info">
						<div className="admin_details-category--info-item">
							<label htmlFor="">Name:</label>
							<input
								type="text"
								disabled={editName}
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
							<div className="admin_details-category--edit-icon">
								<ion-icon
									name="brush"
									onClick={() => {
										setEditName(!editName);
									}}
								></ion-icon>
							</div>
						</div>
					</div>
					<div id="btn_update-acc">
						<button
							id="btn_update-acc--detele"
							onClick={() => {
								handleDeleteCategoryByAdmin(data._id);
								console.log("data_id", data._id);
							}}
						>
							Xóa
						</button>
						<button
							id="btn_update-acc--save"
							onClick={() => {
								// handleUpdateAccByAdmin({
								// 	_id: data._id,
								// 	username: name,
								// 	email: email,
								// 	phone: phone,
								// 	address: address,
								// 	role: role,
								// });
							}}
						>
							Lưu
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(Detail);
