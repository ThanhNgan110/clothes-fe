import { useEffect } from "react";

import styles from "./index.module.scss";


export default function Introduce() {

	useEffect(() => {
		const listItem_left = document.querySelectorAll(`.left`);
		const listItem_right = document.querySelectorAll(`.right`);
		document.onscroll = () => {
			const indexScroll = parseInt(window.scrollY);
			listItem_left.forEach((item) => {
				if (item.offsetTop < indexScroll + 500) {
					item.classList.add(`${styles.slide_in_right}`);
				}
			});
			listItem_right.forEach((item) => {
				if (item.offsetTop < indexScroll + 500) {
					item.classList.add(`${styles.slide_in_left}`);
				}
			});
		};
	}, []);

	return (
		<>
			<div className="" style={{ padding: "20px 0" }}>
				<div
					className={`${styles.introduce_content}  ${styles.gradually_clear}`}
				>
					<div id={styles.slogan}>
						<p>
							Chào mừng đến với Fashion store - điểm đến lý tưởng cho những
							người yêu thời trang và đang tìm kiếm sự đa dạng và phong cách
							trong bộ sưu tập quần áo của mình. Tại đây, chúng tôi tự hào mang
							đến cho bạn một trải nghiệm mua sắm độc đáo, nơi bạn có thể dễ
							dàng tìm thấy những món đồ phản ánh phong cách riêng của mình.
						</p>
						<p>
							Với sự đa dạng về kiểu dáng, màu sắc và chất liệu, bộ sưu tập quần
							áo của chúng tôi sẽ giúp bạn tỏa sáng mỗi khi xuất hiện. Từ những
							bộ trang phục thoải mái hàng ngày cho đến những trang phục đẳng
							cấp dành cho các sự kiện quan trọng, chúng tôi cam kết mang đến
							cho bạn những lựa chọn đa dạng và phong phú nhất.
						</p>
						<p>
							Duyệt qua các danh mục sản phẩm của chúng tôi để tìm thấy những
							món đồ ưa thích của bạn và biến mỗi ngày trở nên đặc biệt hơn với
							Fashion store. Cùng chúng tôi khám phá và biến ước mơ thời trang
							của bạn thành hiện thực!
						</p>
						<p>
							--------------------------------------------------------------------
						</p>
					</div>
				</div>

				<div
					className=""
					style={{
						textAlign: "center",
						paddingBottom: "50px",
						textDecoration: "underline",
						textTransform: "uppercase",
						fontSize: "20px",
					}}
				>
				</div>
			</div>
		</>
	);
}
