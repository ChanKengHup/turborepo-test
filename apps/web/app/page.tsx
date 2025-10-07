import { type ImageProps } from "next/image";
import CreateProduct from "./create-product/create-product";
import Products from "./products/products";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <CreateProduct />
      <Products />{" "}
    </>
  );
}
