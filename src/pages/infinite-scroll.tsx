import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { ProductsProps } from '../types/product';
import ProductList from '../components/ProductList';
import { Header } from '../components/header';

function InfiniteScrollPage({ products, totalCount }: ProductsProps) {
  const [productList, setProductList] = useState(products);
  const [page, setPage] = useState<number>(2);
  const [loading, setLoading] = useState<boolean>(false);

  const lastPage = Math.ceil(totalCount / 16);

  const fetchProducts = async (page: number) => {
    const response = await fetch(`https://localhost:3000/products?page=${page}&size=16`);
    const {
      data: { products },
    } = await response.json();
    const newProductList = productList.concat(products);
    setProductList(newProductList);
    setLoading(true);
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const handleLoadMore = async () => {
    await setPage((prevPage) => prevPage + 1);
  };

  const pageEnd = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          console.log(entries);

          if (entries[0].isIntersecting) {
            handleLoadMore();
            if (page === lastPage) {
              observer.unobserve(pageEnd.current);
              setLoading(false);
            }
          }
        },
        { threshold: 1 }
      );
      observer.observe(pageEnd.current);
    }
  }, [loading]);

  return (
    <>
      <Header />
      <Container>
        <ProductList products={productList} />
        {page !== lastPage && <div ref={pageEnd}>Loading ... </div>}
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`https://localhost:3000/products?page=1&size=16`);
  const {
    data: { products, totalCount },
  } = await response.json();
  return {
    props: {
      products,
      totalCount,
    },
  };
}

export default InfiniteScrollPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 40px;
`;
