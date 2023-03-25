import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import { client } from "../../lib/client";
import { IProduct } from "../../lib/types/products";
import ProductList from "../../components/productList/ProductList";
import { ICategoryPathsParams } from "../../lib/types/pagePathsParams";

const index: NextPage<{
  products: IProduct[];
}> = ({ products }) => {
  return (
    <div>
      <ProductList productList={products} />
    </div>
  );
};

export default index;

export const getStaticProps: GetStaticProps = async (context) => {
  const category = context.params?.category ?? "digital";
  const productQuery = `*[_type=='product'&& category[0]=="${category}"]`;
  const products = await client.fetch(productQuery);

  return {
    props: {
      products: products,
    },
  };
};
