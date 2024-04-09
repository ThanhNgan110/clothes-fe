import { useContext, useState } from "react";
import { HandleContext } from "../../index";
import "./index.scss";

export default function AddUser() {
	const { addProductByAdmin } = useContext(HandleContext);
	const [name, setProductName] = useState("");
	const [price, setProductPrice] = useState("");
	const [amount, setProductAmount] = useState("");
	const [origin, setProductOrigin] = useState("");
	const [image, setProductImage] = useState("");

	//xử lý xem hình ảnh trước khi gửi lên server
	const handleOnchangeImage = (e) => {
		const file_name = document.querySelector("#file_name");
		const file = e.target.files[0];
		setProductImage(file);
		const urlImageTemp = URL.createObjectURL(file);
		file_name.style.backgroundImage = `url('${urlImageTemp}')`;
	};

	const handleChangePrice = (price) => {
		var newPrice = price.replaceAll(".", "");
		if (newPrice.length > 3) {
			let index_dots = newPrice.length - 3;
			while (index_dots > 0) {
				let temp1 = newPrice.substring(0, index_dots);
				let temp2 = newPrice.substring(index_dots);
				newPrice = temp1 + "." + temp2;
				index_dots -= 3;
			}
			return newPrice;
		}
		return price.replaceAll(".", "");
	};

	console.log("add-product re-render");
	return (
		<>
			<div id="add_product--main">
				<div id="add_product--head">
					<h2>Thêm tài khoản</h2>
				</div>

				<div id="add_product--form">
					<div className="add_product_form--group">
						<div className="add_product--form-item">
							<label htmlFor="product_name">UserName</label>
							<input
								type="text"
								id="product_name"
								value={name}
								onChange={(e) => {
									setProductName(e.target.value);
								}}
							/>
						</div>
						<div className="add_product--form-item">
							<label htmlFor="product_price">Mật khẩu</label>
							<input
								type="text"
								id="product_price"
								placeholder="Vd: 1.500.000"
								value={price}
								onChange={(e) => {
									const value = handleChangePrice(e.target.value);
									setProductPrice(value);
								}}
							/>
						</div>
					</div>
					<div className="add_product_form--group">
						<div className="add_product--form-item">
							<label htmlFor="product_name">Name</label>
							<input
								type="text"
								id="product_name"
								placeholder="Vd: Sản phẩm A"
								value={name}
								onChange={(e) => {
									setProductName(e.target.value);
								}}
							/>
						</div>
						<div className="add_product--form-item">
							<label htmlFor="product_price">Email:</label>
							<input
								type="text"
								id="product_price"
								placeholder="Vd: 1.500.000"
								value={price}
								onChange={(e) => {
									const value = handleChangePrice(e.target.value);
									setProductPrice(value);
								}}
							/>
						</div>
					</div>
					<div className="add_product_form--group">
						<div className="add_product--form-item">
							<label htmlFor="product_name">Name</label>
							<input
								type="text"
								id="product_name"
								placeholder="Vd: Sản phẩm A"
								value={name}
								onChange={(e) => {
									setProductName(e.target.value);
								}}
							/>
						</div>
						<div className="add_product--form-item">
							<label htmlFor="product_price">Email:</label>
							<input
								type="text"
								id="product_price"
								placeholder="Vd: 1.500.000"
								value={price}
								onChange={(e) => {
									const value = handleChangePrice(e.target.value);
									setProductPrice(value);
								}}
							/>
						</div>
					</div>
					{/* <div id="add_product--form-btn">
						<button
							id="add_product--fomr-btn-item"
							onClick={() => {
								addProductByAdmin();
							}}
						>
							Thêm Sản phẩm
						</button>
					</div> */}
				</div>
			</div>
		</>
	);
}
