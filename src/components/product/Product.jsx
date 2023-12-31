"use client";
import useFetchCollection from "@/hooks/useFetchCollection";
import styles from "./Product.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  GET_PRICE_RANGE,
  selectProducts,
  STORE_PRODUCTS,
} from "@/redux/slice/productSlice";
import ProductFilter from "@/components/product/productFilter/ProductFilter";
import Loader from "@/components/loader/Loader";
import ProductList from "@/components/product/productList/ProductList";
const Product = () => {
  const { data, isLoading } = useFetchCollection("products");
  const dispatch = useDispatch();
  console.log(data, "data");

  useEffect(() => {
    dispatch(STORE_PRODUCTS({ products: data }));
    dispatch(GET_PRICE_RANGE({ products: data }));
  }, [data, dispatch]);

  const products = useSelector(selectProducts);

  return (
    <section className={styles.product}>
      <aside className={styles.filter}>
        {isLoading ? null : <ProductFilter />}
      </aside>
      <div className={styles.content}>
        {isLoading ? <Loader basic /> : <ProductList />}
      </div>
    </section>
  );
};

export default Product;
