import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (initialState, action) => {
      initialState.username = action.payload;
    },
    setEmail: (initialState, action) => {
      initialState.email = action.payload;
    },
  },
});

// export const OnCheckIsLogin = () => async (dispatch) => {
// 	try {
// 		// const accessToken = localStorage.getItem("accessToken");

// 		// const CheckToken = await axiosInstance(accessToken).get(
// 		// 	"/users/verifyAccess"
// 		// );

// 		// dispatch(setIsLogin(true));
// 		// dispatch(login(CheckToken.data.data));

// 		// if (CheckToken.data.data.role === "admin") {
// 		// 	dispatch(setWarehouse(CheckToken.data.data.warehouse_id));
// 		// 	dispatch(setWarehouseId(CheckToken.data.data.warehouse_id));
// 		// }
// 	} catch (error) {
//         console.log(error);
//     }
// }

export const { setUsername, setEmail } = userSlice.actions;
export default userSlice.reducer;
