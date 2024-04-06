import { useState, memo, useContext } from "react";

import { HandleContext } from "../../index";

import "./detail.scss";

function Detail({ data, handleClose }) {
 console.log(data,'it issss');
	const { handleDeleteAccByAdmin, handleUpdateAccByAdmin } = useContext(HandleContext);

	// set state for click edit
	const [editName, setEditName] = useState(true);
	const [editPrice, setEditPrice] = useState(true);
	const [editDesc, setEditDesc] = useState(true);
	const [editAmount, setEditAmount] = useState(true);

	const [name, setName] = useState(data.username);
	const [email, setEmail] = useState(data.email);
	const [phone, setPhone] = useState(data.phone);
	const [address, setAddress] = useState(data.address);
	const [role, setRole] = useState(data.role);

	return (
		<>
			<div id="admin_details-product">
				<div id="admin_details-product-form">
					<div id="admin_details-product-form-close-icon">
						<ion-icon
							name="close"
							onClick={() => {
								handleClose(false);
							}}
						></ion-icon>
					</div>
					<div id="admin_details-product--list-info">
						<div className="admin_details-product--info-item">
							<label htmlFor="">User name:</label>
							<input
								type="text"
								disabled={editName}
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
							<div className="admin_details-product--edit-icon">
								<ion-icon
									name="brush"
									onClick={() => {
										setEditName(!editName);
									}}
								></ion-icon>
							</div>
						</div>
						<div className="admin_details-product--info-item">
							<label htmlFor="">Email:</label>
							<input
								type="text"
								disabled={editPrice}
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
							<div className="admin_details-product--edit-icon">
								<ion-icon
									name="brush"
									onClick={() => {
										setEditPrice(!editPrice);
									}}
								></ion-icon>
							</div>
						</div>
						<div className="admin_details-product--info-item">
							<label htmlFor="">Phone:</label>
							<input
								type="text"
								disabled={editAmount}
								value={phone}
								onChange={(e) => {
									setPhone(e.target.value);
								}}
							/>
							<div className="admin_details-product--edit-icon">
								<ion-icon
									name="brush"
									onClick={() => {
										setEditAmount(!editAmount);
									}}
								></ion-icon>
							</div>
						</div>
						<div className="admin_details-product--info-item">
							<label htmlFor="">Address:</label>
							<input
								type="text"
								disabled={editDesc}
								value={address}
								onChange={(e) => {
									setAddress(e.target.value);
								}}
							></input>
							<div className="admin_details-product--edit-icon">
								<ion-icon
									name="brush"
									onClick={() => {
										setEditDesc(!editDesc);
									}}
								></ion-icon>
							</div>
						</div>
						<div className="admin_details-product--info-item">
							<label htmlFor="">Role:</label>
							<input
								type="text"
								disabled={editAmount}
								value={role}
								onChange={(e) => {
									setRole(e.target.value);
								}}
							/>
							<div className="admin_details-product--edit-icon">
								<ion-icon
									name="brush"
									onClick={() => {
										setEditAmount(!editAmount);
									}}
								></ion-icon>
							</div>
						</div>
					</div>
					<div id="btn_update-product">
						<button
							id="btn_update-product--detele"
							onClick={() => {handleDeleteAccByAdmin(data._id);
								console.log('acc_id', data._id);
							}
							}>Xóa
						</button>
						<button
							id="btn_update-product--save"
							onClick={() => {
								handleUpdateAccByAdmin({
									_id: data._id,
									username: name,
									email: email,
									phone: phone,
									address: address,
									role: role,});}}>
							Lưu
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(Detail);
