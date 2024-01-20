import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi, signupApi } from "../api/AuthRequest";


const initialState = {
  authData: null,
  loading: false,
  error: false,
  updateLoading: false
}
export const loginAsync = createAsyncThunk('auth/login', async (data) => {
  console.log('login', data);

  const { email, password } = data;
  const response = await loginApi({ password, email});
  return response.data;

})
export const signUpAsync = createAsyncThunk('auth/register', async (data) => {
  console.log('signup', data);

  const { firstName,lastname,password,email, } = data;
  
  const response =  await signupApi({ firstName, lastname, password, email});
  console.log('after response');
  return response.data;
  
})

const authSlice=createSlice({
  name:'auth',
  initialState,
  reducers:{
     
  },
  extraReducers:(builder)=>
  {
      builder
      .addCase(loginAsync.pending,(state)=>{
          state.loading=true
          state.error=false
      })
      .addCase(loginAsync.fulfilled,(state,action)=>{
          state.loading=false
          state.error=false
          localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
          return { ...state, authData: action.payload, loading: false, error: false };
         
      })
      .addCase(loginAsync.rejected,(state)=>{
          state.loading=false
          state.error=true
          return { ...state, loading: false, error: true }
         
      })
      .addCase(signUpAsync.pending,(state)=>{
          state.loading=true
          state.error=false
      })
      .addCase(signUpAsync.fulfilled,(state,action)=>{
        console.log(
            'now till'
          );
          state.loading=false
          state.error=false
          
          localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
          return { ...state, authData: action.payload, loading: false, error: false };
         
      })
      .addCase(signUpAsync.rejected,(state,action)=>{
          state.loading=false
          state.error=true
          return { ...state, loading: false, error: true }
         
      })


  }
})

export default authSlice.reducer;

// const authReducer = (state = {}, action) => {
//   switch (action.type) {
//     case "AUTH_START":
//       return { ...state, loading: true, error: false };
//     case "AUTH_SUCCESS":
//       localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

//       return { ...state, authData: action.data, loading: false, error: false };



//     case "AUTH_FAIL":
//       return { ...state, loading: false, error: true };



//     case "LOG_OUT":
//       localStorage.clear();
//       return { ...state, authData: null, loading: false, error: false, updateLoading: false }




//     default:
//       return state;
//   }
// };

// export default authSlice.reducer;