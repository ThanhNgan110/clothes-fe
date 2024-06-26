import React from "react";
import { Link } from "react-router-dom";
import "../Footer/index.css";
const Footer = () => {
	return (
		<>
			<footer>
				<div class="footer-top">
					<div class="footer-left">
						<h2 class="heading-secondary ">Subcribe our Newsletter</h2>
						<p class="content-heading">
							Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
							Phasellus imperdiet elit eu magna.
						</p>
					</div>
					<form class="form-input" action="" method="post" name="search">
						<div class="form-input-search form-input-search-position">
							<input
								class="input-email"
								type="email"
								placeholder="Your email address"
							/>
							<button
								type="submit"
								class="btn btn-subscribe btn-search-position"
							>
								Subscribe
							</button>
						</div>
					</form>
					<ul class="list-socials">
						<li>
							<a href="#">
								<span class="icon icon-social icon-social-facebook"></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="icon icon-social icon-social-twitter"></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="icon icon-social icon-social-pinterest"></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="icon icon-social icon-social-instagram"></span>
							</a>
						</li>
					</ul>
				</div>
				<div class="footer-bottom">
					<div class="footer-infor">
						<Link to="#" class="footer-logo">
							<h2 class="title-logo">Fashion</h2>
						</Link>
						<p class="footer-content">
							Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
							dui, eget bibendum magna congue nec.
						</p>
						<address class="address-infor">
							<a class="link-address" href="tel:+2195550114">
								(219) 555-0114
							</a>{" "}
							or
							<a class="link-address" href="email:Proxy@gmail.com">
								Proxy@gmail.com
							</a>
						</address>
					</div>
					<nav class="nav-col">
						<p class="footer-heading">My Account</p>
						<ul class="footer-nav">
							<li>
								<a class="footer-link" href="#">
									My Account
								</a>
							</li>
							<li>
								<a class="footer-link" href="#">
									Order History
								</a>
							</li>
							<li>
								<a class="footer-link" href="#">
									Shoping Cart
								</a>
							</li>
							<li>
								<a class="footer-link" href="#">
									Wishlist
								</a>
							</li>
						</ul>
					</nav>
					<nav class="nav-col">
						<p class="footer-heading">Helps</p>
						<ul class="footer-nav">
							<li>
								<a class="footer-link" href="#">
									Helps
								</a>
							</li>
							<li>
								<a class="footer-link" href="#">
									Contact
								</a>
							</li>
							<li>
								<a class="footer-link" href="#">
									Faqs
								</a>
							</li>
							<li>
								<a class="footer-link" href="#">
									Term & Condition
								</a>
							</li>
							<li>
								<a class="footer-link" href="#">
									Privacy Policy
								</a>
							</li>
						</ul>
					</nav>
					<nav class="nav-col">
						<p class="footer-heading">Proxy</p>
						<ul class="footer-nav">
							<li>
								<a class="footer-link" href="#">
									About
								</a>
							</li>
							<li>
								<a class="footer-link" href="#">
									Shop
								</a>
							</li>
							<li>
								<a class="footer-link" href="#">
									Product
								</a>
							</li>
							<li>
								<a class="footer-link" href="#">
									Track Order
								</a>
							</li>
						</ul>
					</nav>
					<nav class="nav-col">
						<p class="footer-heading">Categories</p>
						<ul class="footer-nav">
							<li>
								<a class="footer-link" href="#">
									Fruit & Vegetables
								</a>
							</li>
							<li>
								<a class="footer-link" href="#">
									Meat & Fish
								</a>
							</li>
							<li>
								<a class="footer-link" href="#">
									Bread & Bakery
								</a>
							</li>
							<li>
								<a class="footer-link" href="#">
									Beauty & Health
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</footer>
		</>
	);
};

export default Footer;
