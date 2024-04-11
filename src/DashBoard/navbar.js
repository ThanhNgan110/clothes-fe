import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

function Navbar() {
    const [dropDownProduct, setDropDownPr] = useState(false);
    const [dropDownAccount, setDropDownAc] = useState(false);
    const [dropDownCategory, setDropDownCat] = useState(false);

    return (
        <div id="admin_navbar">
            <div className="admin_navbar--item">
                <Link to="/admin">
                    <span>
                        <ion-icon name="timer-outline"></ion-icon> Dashboard
                    </span>
                </Link>
            </div>

            {/* Product dropdown */}
            <div
                className="admin_navbar--item"
                style={{
                    marginBottom: dropDownProduct ? "10px" : "-100px",
                }}
            >
                <label
                    onClick={() => {
                        setDropDownPr(!dropDownProduct);
                        setDropDownAc(false); // Close account dropdown
                        setDropDownCat(false); // Close category dropdown
                    }}
                >
                    <span>
                        <ion-icon name="receipt-outline"></ion-icon> Quản lý sản phẩm
                    </span>
                    <div
                        className="admin_navbar_icon--drop"
                        style={{
                            transform: dropDownProduct ? "rotate(90deg)" : "none",
                        }}
                    >
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </div>
                </label>
                <div
                    className={`admin_navbar_drop--list ${dropDownProduct ? "active" : ""}`}
                >
                    <Link to="all-product" className="admin_navbar_drop--item">
                        <span>Tất cả sản phẩm</span>
                    </Link>
                    <Link to="add-product" className="admin_navbar_drop--item">
                        <span>Thêm sản phẩm</span>
                    </Link>
                </div>
            </div>

            {/* Account dropdown */}
            <div
                className="admin_navbar--item"
                style={{ marginBottom: dropDownAccount ? "10px" : "-60px" }}
            >
                <label
                    onClick={() => {
                        setDropDownAc(!dropDownAccount);
                        setDropDownPr(false); // Close product dropdown
                        setDropDownCat(false); // Close category dropdown
                    }}
                >
                    <span>
                        <ion-icon name="people-circle-outline"></ion-icon> Quản lý tài khoản
                    </span>
                    <div
                        className="admin_navbar_icon--drop"
                        style={{
                            transform: dropDownAccount ? "rotate(90deg)" : "none",
                        }}
                    >
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </div>
                </label>
                <div className={`admin_navbar_drop--list ${dropDownAccount ? "active" : ""}`}>
                    <Link to="all-user" className="admin_navbar_drop--item">
                        <span>Tất cả tài khoản</span>
                    </Link>
                </div>
            </div>

            {/* Category dropdown */}
            <div
                className="admin_navbar--item"
                style={{
                    marginBottom: dropDownCategory ? "10px" : "-100px",
                }}
            >
                <label
                    onClick={() => {
                        setDropDownCat(!dropDownCategory);
                        setDropDownPr(false); // Close product dropdown
                        setDropDownAc(false); // Close account dropdown
                    }}
                >
                    <span>
                        <ion-icon name="bookmark-outline"></ion-icon> Quản lý danh mục
                    </span>
                    <div
                        className="admin_navbar_icon--drop"
                        style={{
                            transform: dropDownCategory ? "rotate(90deg)" : "none",
                        }}
                    >
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </div>
                </label>
                <div
                    className={`admin_navbar_drop--list ${dropDownCategory ? "active" : ""}`}
                >
                    <Link to="/admin/category" className="admin_navbar_drop--item">
                        <span>Tất cả danh mục</span>
                    </Link>
                    {/* <Link to="add-category" className="admin_navbar_drop--item">
                        <span>Thêm danh mục</span>
                    </Link> */}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
