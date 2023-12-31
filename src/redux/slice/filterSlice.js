import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProducts: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_BY_CATEGORY: (state, action) => {
      const { products, category } = action.payload;
      let tempProducts = [];
      if (category === "ALL") {
        tempProducts = products;
      } else {
        tempProducts = products.filter(
          (product) => product.category === category,
        );
      }
      state.filteredProducts = tempProducts;
    },
    FILTER_BY_BRAND: (state, action) => {
      const { products, brand } = action.payload;
      let tempProducts = [];
      if (brand === "ALL") {
        tempProducts = products;
      } else {
        tempProducts = products.filter((product) => product.brand === brand);
      }
      state.filteredProducts = tempProducts;
    },
    FILTER_BY_PRICE: (state, action) => {
      const { products, price } = action.payload;
      let tempProducts = [];
      if (price === "ALL") {
        tempProducts = products;
      } else {
        tempProducts = products.filter((product) => product.price <= price);
      }
      state.filteredProducts = tempProducts;
    },
    FILTER_BY: (state, action) => {
      const { products, category, brand, price } = action.payload;
      let tempProducts = [];

      if (category === "ALL") {
        tempProducts = products;
      } else {
        tempProducts = products.filter(
          (product) => product.category === category,
        );
      }

      if (brand === "ALL") {
        tempProducts = tempProducts;
      } else {
        tempProducts = products.filter((product) => product.brand === brand);
      }

      tempProducts = products.filter((product) => product.price <= price);

      state.filteredProducts = tempProducts;
    },
    SORT_PRODUCTS: (state, action) => {
      const { products, sort } = action.payload;
      let tempProducts = [];
      if (sort === "latest") {
        tempProducts = products;
      }

      if (sort === "lowest-price") {
        tempProducts = products.slice().sort((a, b) => {
          return a.price - b.price;
        });
      }

      if (sort === "highest-price") {
        tempProducts = products.slice().sort((a, b) => {
          return b.price - a.price;
        });
      }

      state.filteredProducts = tempProducts;
    },
  },
});

export const {
  FILTER_BY_CATEGORY,
  FILTER_BY_BRAND,
  FILTER_BY_PRICE,
  FILTER_BY,
  SORT_PRODUCTS,
} = filterSlice.actions;

export const selectFilteredProducts = (state) => state.filter.filteredProducts;
export default filterSlice.reducer;
