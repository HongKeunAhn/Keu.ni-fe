export type Product = {
  id: string;
  name: string;
  thumbnail: string | null;
  price: number;
};

export type ProductListProps = {
  products: Product[];
};


export type ProductsProps = {
  products: Product[];
  totalCount: number;
};
