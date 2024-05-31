"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import CatagoryCard from "@app/client/components/admincomponent/catagorycard/catagoryCard";

import { useContext } from "react";
import { useGlobalState } from "@app/client/data/globalState";

export default function Catagory() {
  // const { categoryData } = useContext(DataContext);
  const categoryData = useGlobalState((state) => state.categories);
  console.log(categoryData);
  const products = categoryData.map((catagory) => {
    return (
      <CatagoryCard
        id={catagory.id}
        // image={catagory.image}
        name={catagory.name}
        // discription={catagory.description}
      />
    );
  });

  return (
    <div className="home">
      <h2 className="name_header">Edit Catagory</h2>
      <div className={styles.products}>
        <div className={styles.add_products}>
          <Link href="/admin/catagory/addCatagory">
            <div className={styles.add}>+</div>
          </Link>
        </div>
        {products}
      </div>
    </div>
  );
}
