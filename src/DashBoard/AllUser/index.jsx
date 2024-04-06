// import axioisClient from "../../axios";
// import React, { useState, useEffect } from "react";
// import "./user.scss";

// const AllUser = () => {
// 	const [users, setUsers] = useState([]);

// 	useEffect(() => {
// 		axioisClient.get(`/admin/all-user`).then((res) => {
// 			console.log(res, "data");
// 			setUsers(res.data);
// 		});
// 	}, []);

// 	return (
// 		<div className="w-full">
// 			<table className="w-full border-collapse border border-slate-500">
// 				<thead>
// 					<tr>
// 						<th className="border border-slate-600">Name</th>
// 						<th className="border border-slate-600">Email</th>
// 						<th className="border border-slate-600">Phone</th>
// 						<th className="border border-slate-600">Address</th>
// 						<th className="border border-slate-600">Role</th>
// 						<th className="border border-slate-600">Actions</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{users.map((user, index) => (
// 						<tr key={index}>
// 							<td className="border border-slate-700">{user.username}</td>
// 							<td className="border border-slate-700">{user.email}</td>
// 							<td className="border border-slate-700">{user.phone}</td>
// 							<td className="border border-slate-700">{user.address}</td>
// 							<td className="border border-slate-700">{user.role}</td>
// 							<td className="border border-slate-700">
// 								<button className="btn btn-add"><i class="fa-solid fa-plus"></i></button>
// 								<button className="btn btn-minus"><i class="fa-solid fa-minus"></i></button>
// 								<button className="btn btn-delete"><i class="fa-solid fa-trash"></i></button>
// 							</td>
// 						</tr>
// 					))}
// 				</tbody>
// 			</table>
// 		</div>
// 	);
// };

// export default AllUser;
