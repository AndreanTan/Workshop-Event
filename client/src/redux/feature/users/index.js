import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

export const OnCheckIsLogin = () => async (dispatch) => {
  try {
    const accessToken = localStorage.getItem("tokenAccess");

    const CheckToken = await axios.get(
      "http://localhost:4000/api/verifyAccess",
      {
        headers: {
          Authorization: accessToken,
        },
      }
    );

    dispatch(setUsername(CheckToken.data.data.username));
    dispatch(setEmail(CheckToken.data.data.email));
    console.log(CheckToken);
  } catch (error) {
    console.log(error);
  }
};

export const onLogout = () => async (dispatch) => {
  try {
    dispatch(setEmail(""));
    dispatch(setUsername(""));
    localStorage.removeItem("idAccess");
    localStorage.removeItem("tokenAccess");
  } catch (error) {
    console.log(error);
  }
};

export const { setUsername, setEmail } = userSlice.actions;
export default userSlice.reducer;
