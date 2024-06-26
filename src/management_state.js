import axioisClient from "./axios";
import axios from "axios";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

// Xử lý chuyển qua lại giữa login và register
function handleClick(isLoginPage, callback) {
	callback(!isLoginPage);
}

//function login
function handleLogin(username, password, role = "USER_ROLE", redirect = "/") {
	if (!Boolean(username) || !Boolean(password)) {
		Swal.fire({
			icon: "error",
			text: "Vui lòng nhập đầy đủ thông tin....",
			timer: 1200,
		});
	} else {
		axioisClient
			.post("login", {
				username,
				password,
				role,
			})
			.then((res) => {
				if (res.err) {
					Swal.fire({
						icon: "error",
						text: res.mess,
						timer: 1200,
					});
				} else {
					Swal.fire({
						icon: "success",
						text: "Đăng nhập thành công...",
						timer: 1200,
					});
					localStorage.setItem("isLogin", res.account._id);
					localStorage.setItem("roleLogin", res.account.role);
					setTimeout(() => {
						window.location.assign(`${redirect}`);
					}, 1200);
				}
			})
			.catch(() => {
				Swal.fire({
					icon: "error",
					text: "Chưa thể xử lý....",
					timer: 1200,
				});
			});
	}
}

//function register
function handleRegsiter(
	username,
	password,
	confirmPassword,
	email,
	phone,
	address
) {
	if (
		username === "" ||
		password === "" ||
		confirmPassword === "" ||
		email === "" ||
		phone === "" ||
		address === ""
	) {
		Swal.fire({
			icon: "error",
			text: "Vui lòng nhập đầy đủ thông tin....",
			timer: 1000,
		});
	} else if (password !== confirmPassword) {
		Swal.fire({
			icon: "error",
			text: "Xác thực mật khẩu không đúng...",
			timer: 1000,
		});
	} else {
		axioisClient
			.post("register", {
				username,
				password,
				email,
				phone,
				address,
			})
			.then((res) => {
				if (res.err) {
					Swal.fire({
						icon: "error",
						text: "Tài khoản đã tồn tại...",
						timer: 1000,
					});
				} else {
					const time = 1200;
					Swal.fire({
						icon: "success",
						text: "Đăng ký thành công...",
						timer: time,
					});
					setTimeout(() => {
						window.location.assign("http://localhost:3000/");
					}, time);
				}
			})
			.catch(() => {
				Swal.fire({
					icon: "error",
					text: "Dữ liệu tại chưa được xử lý...",
					timer: 1000,
				});
			});
	}
}

//xử lý thêm vào giỏ hàng
function handle_add_to_cart(user_id, product_id, one_pr_price, amount) {
	if (!Boolean(localStorage.getItem("isLogin"))) {
		Swal.fire({
			icon: "error",
			text: "Vui lòng đăng nhập để tiếp tục....",
			timer: 1000,
		});
	} else {
		axioisClient
			.post("add-to-cart", {
				user_id,
				product_id,
				one_pr_price,
				amount,
			})
			.then((res) => {
				if (!res.err) {
					const status = res.status;
					const cart_id = document.querySelector(".cart_id");
					if (status === 0) {
						cart_id.innerHTML = +cart_id.textContent + 1;
					}
					Swal.fire({
						icon: "success",
						text: "Thêm thàng công....",
						timer: 1000,
					});
				} else {
				}
			});
	}
}

// lấy ra số lượng đơn hàng trong giỏ hàng
function handleGetSizeCart(user_id) {
	axioisClient
		.get(`user/carts/${user_id}`)
		.then((res) => {
			const cart_id = document.querySelector(".cart_id");
			cart_id.innerHTML = res.size;
		})
		.catch((error) => {
			console.log("Co loi");
		});
}

// xử lý xóa đơn hàng khỏi giỏ hàng
function handleDeleteProductFormCart(_id) {
	axioisClient
		.post("/cart/detete", { _id })
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
}

// xử lý thêm sản phẩm ở trang Admin
async function addProductByAdmin(obj) {
	if (
		!Boolean(obj.name) ||
		!Boolean(obj.price) ||
		!Boolean(obj.amount) ||
		!Boolean(obj.origin) ||
		!Boolean(obj.classify) ||
		!Boolean(obj.desc) ||
		!Boolean(obj.image)
	) {
		Swal.fire({
			icon: "error",
			text: "Vui lòng nhập đủ thông tin sản phẩm",
			timer: 1100,
		});
	} else if (
		!Boolean(+obj.price.replaceAll(".", "")) ||
		obj.price.charAt(obj.price.length - 4) !== "."
	) {
		Swal.fire({
			icon: "error",
			text: "Giá tiền không hợp lệ",
			timer: 1100,
		});
	} else {
		console.log(obj);
		const data = await handleUploadCloudinary(obj.image);
		axioisClient
			.post("/add-product", {
				...obj,
				image: data.url,
			})
			.then((res) => {
				if (res.err) {
					Swal.fire({
						icon: "error",
						text: "Sản phẩm đã tồn tại...",
						timer: 1100,
					});
				} else {
					Swal.fire({
						icon: "success",
						text: "Thêm thành công...",
						timer: 1100,
					});
				}
			})
			.catch((err) => {
				Swal.fire({
					icon: "error",
					text: "Có lỗi trong quá trình xử lý...",
					timer: 1100,
				});
			});
	}
}

// xử lý thanh toán
function handlePayment(listIdCart) {
	axioisClient
		.post("/user/payment", {
			cart_list: JSON.stringify(listIdCart),
		})
		.then((res) => {
			if (res.err) {
				Swal.fire({
					icon: "error",
					text: "Thanh toán không thành công.... ",
					timer: 1100,
				});
			} else {
				Swal.fire({
					icon: "success",
					text: "Thanh toán thành công....",
					timer: 1100,
				});

				setTimeout(() => {
					window.location.replace(window.location.href);
				}, 1100);
			}
		})
		.catch((err) => {
			console.log(err);
		});
}

// kiểm tra đăng nhập
function checkLogin() {
	const isLogin = localStorage.getItem("isLogin");
	return Boolean(isLogin);
}

// xử lý đăng xuất
function handleLogout(redirect) {
	localStorage.removeItem("isLogin");
	localStorage.removeItem("roleLogin");
	Swal.fire({
		icon: "success",
		text: "Đăng xuất thành công...",
		timer: 1000,
	});

	setTimeout(() => {
		window.location.assign(`http://localhost:3000/${redirect}`);
	}, 1000);
}

// xử lý xóa sản phẩm trang admin
function handleDeleteProduct(_id) {
	try {
		axioisClient.post("/admin/delete-product", { _id }).then((res) => {
			const icon = res.err ? "error" : "success";
			Swal.fire({
				icon: `${icon}`,
				text: `${res.mess}`,
				timer: 1100,
			});
			setTimeout(() => {
				window.location.reload();
			}, 1200);
		});
	} catch (error) {}
}

// xử lý cập nhật thông tin sản phẩm trong admin
async function handleUpadatePrByAdmin(obj) {
	Swal.fire({
		icon: "success",
		text: `Vui lòng đợi...`,
		timer: 1000,
		showConfirmButton: false,
	});

	if (typeof obj.image != "string") {
		var newImage = await handleUploadCloudinary(obj.image);
	}
	const newProduct = {
		...obj,
		image: newImage ? newImage.url : obj.image,
	};

	axioisClient
		.post("/admin/update-product", newProduct)
		.then((res) => {
			if (res.err) {
				Swal.fire({
					icon: "error",
					text: `${res.mess}`,
					timer: 1100,
				});
			} else {
				Swal.fire({
					icon: "success",
					text: `${res.mess}`,
					timer: 1100,
				});

				setTimeout(() => {
					window.location.replace(window.location.href);
				}, 1100);
			}
		})
		.catch((err) => {
			Swal.fire({
				icon: "error",
				text: `Có lỗi trong quá trình thực hiện`,
			});
		});
}

// xử lý cập nhật thông tin acc trong admin
async function handleUpdateAccByAdmin(account) {
	try {
		console.log(account, "it is data acc");
		Swal.fire({
			icon: "success",
			text: `Vui lòng đợi...`,
			timer: 1000,
			showConfirmButton: false,
		});
		axioisClient
			.post("/admin/update-user", account)
			.then((res) => {
				if (res.err) {
					Swal.fire({
						icon: "error",
						text: `${res.mess}`,
						timer: 1100,
					});
				} else {
					Swal.fire({
						icon: "success",
						text: `${res.mess}`,
						timer: 1100,
					});
					setTimeout(() => {
						window.location.replace(window.location.href);
					}, 1100);
				}
			})
			.catch((err) => {
				Swal.fire({
					icon: "error",
					text: `Có lỗi trong quá trình thực hiện`,
				});
			});
	} catch (error) {}
}

async function handleDeleteAccByAdmin(_id) {
	try {
		console.log(_id, "id account");
		axioisClient.post("/admin/delete-account",{_id}).then((res) => {
			if (res.err) {
				Swal.fire({
					icon: "error",
					text: `${res.mess}`,
					timer: 1100,
				});
			} else {
				Swal.fire({
					icon: "success",
					text: `${res.mess}`,
					timer: 1100,
				});
				setTimeout(() => {
					window.location.replace(window.location.href);
				}, 1100);
			}
		});
	} catch (error) {
		Swal.fire({
			icon: "error",
			text: `Có lỗi trong quá trình thực hiện`,
		});
	}
}

async function handleUploadCloudinary(file) {
	const formData = new FormData();
	formData.append("file", file);
	formData.append("upload_preset", "eezadr9z");
	formData.append("api_key", "847789449836236");
	formData.append("api_secret", "MInNXHClRZGOscQiLL1q5tFMuX4");
	return axios
		.post("https://api.cloudinary.com/v1_1/dippjnh3g/image/upload", formData)
		.then((res) => res.data);
}

// search product
async function handleSearchProductByName(valueSearch) {
	try {
		const response = await axioisClient.post("/search-product", {
			name: valueSearch,
		});
		const res = response;
		console.log("valuesearch", valueSearch);
		console.log(res, "data");
	} catch (error) {
		Swal.fire({
			icon: "error",
			text: `Có lỗi trong quá trình thực hiện`,
		});
	}
}

// Thống kê
async function handleStatictisProductAndBill() {
	try {
		const response = await axioisClient.get("/statistics-product");
		console.log("res", response.countProducts);
		return {
			countProducts: response.countProducts,
			valueProducts: response.valueProducts,
			countBills: response.countBills,
		};
	} catch (error) {
		Swal.fire({
			icon: "error",
			text: `Có lỗi trong quá trình thực hiện`,
		});
	}
}

// get all category
async function handleGetAllCategory() {
	try {
		const response = await axioisClient.get("/classify");
		console.log("res", response.data);
	} catch (error) {
		console.error(error);
	}
}

// delete category
async function handleDeleteCategoryByAdmin(_id) {
	try {
		console.log(_id, "id category");
		axioisClient.post("/delete-classify", { _id }).then((res) => {
			if (res.err) {
				Swal.fire({
					icon: "error",
					text: `${res.mess}`,
					timer: 1100,
				});
			} else {
				Swal.fire({
					icon: "success",
					text: `${res.mess}`,
					timer: 1100,
				});
				setTimeout(() => {
					window.location.replace(window.location.href);
				}, 1100);
			}
		});
	} catch (error) {
		Swal.fire({
			icon: "error",
			text: `Có lỗi trong quá trình thực hiện`,
		});
	}
}

// add category
function handleAddCategoryByAdmin(valueCategory) {
	try {
		console.log(valueCategory);
		const category = {
			name: valueCategory,
		};
		console.log(category, "category")
    console.log(category,'1');
		axioisClient.post("/add-classify", {
				name: valueCategory,
			})
			.then((res) => {
				if (res.err) {
					Swal.fire({
						icon: "error",
						text: "Danh mục đã tồn tại...",
						timer: 1100,
					});
				} else {
					Swal.fire({
						icon: "success",
						text: "Thêm thành công...",
						timer: 1100,
					});
				}
			});
	} catch (error) {
		Swal.fire({
			icon: "error",
			text: "Có lỗi trong quá trình xử lý...",
			timer: 1100,
		});
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	handleClick,
	handleLogin,
	handleRegsiter,
	handle_add_to_cart,
	handleGetSizeCart,
	checkLogin,
	handleDeleteProductFormCart,
	handlePayment,
	handleLogout,
	addProductByAdmin,
	handleDeleteProduct,
	handleUpadatePrByAdmin,
	handleUploadCloudinary,
	handleUpdateAccByAdmin,
	handleDeleteAccByAdmin,
	handleSearchProductByName,
	handleStatictisProductAndBill,
	handleGetAllCategory,
	handleDeleteCategoryByAdmin,
	handleAddCategoryByAdmin,
};
