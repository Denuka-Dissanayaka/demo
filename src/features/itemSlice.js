import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getItems = createAsyncThunk("items/getItems", async () => {
  return fetch("http://localhost:8000/key").then((res) => res.json());
});

//=========================================

// export const deleteItems = createAsyncThunk(
//   "items/deleteItems",
//   async ({ id }) => {
//     return fetch(`http://localhost:8000/key/${id}`, { method: "DELETE" }).then(
//       (res) => res.json()
//     );
//   }
// );

// create post -------------------------

export const createItems = createAsyncThunk(
  "items/createItems",
  async ({ values }) => {
    return fetch(`http://localhost:8000/key`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: values.title,
        date: values.date,
      }),
    }).then((res) => res.json());
  }
);

//*************************** */

// export const deleteItems = createAsyncThunk(
//     "items/deleteItems",
//     async ({ id }) => {
//       try {
//         const response = await fetch(`http://localhost:8000/key/${id}`, { method: "DELETE" });
//         const data = await response.json();

//         console.log(data); // Log the server response

//         return data;
//       } catch (error) {
//         console.error("Error deleting item:", error);
//         throw error;
//       }
//     }
//   );

//*************************** */

export const deleteItems = createAsyncThunk(
  "items/deleteItems",
  async ({ id }) => {
    try {
      await fetch(`http://localhost:8000/key/${id}`, { method: "DELETE" });

      // Fetch the updated list of items after deletion
      const updatedListResponse = await fetch("http://localhost:8000/key");
      const updatedList = await updatedListResponse.json();

      return updatedList;
    } catch (error) {
      console.error("Error deleting item:", error);
      throw error;
    }
  }
);

const initialState = {
  value: [],
  loading: false,
};

export const itemSlice = createSlice({
  name: "items",
  initialState,

  extraReducers: {
    [getItems.pending]: (state, action) => {
      state.loading = true;
    },
    [getItems.fulfilled]: (state, action) => {
      state.loading = false;
      state.value = action.payload;
    },
    [getItems.rejected]: (state, action) => {
      state.loading = false;
    },
    [deleteItems.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteItems.fulfilled]: (state, action) => {
      state.loading = false;
      state.value = action.payload;
      console.log(action.payload);
    },
    [deleteItems.rejected]: (state, action) => {
      state.loading = false;
    },
  },

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    deleteItem: (state, action) => {
      state.value = state.value.filter((item) => item.id != action.payload);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, deleteItem, incrementByAmount } = itemSlice.actions;

export default itemSlice.reducer;
