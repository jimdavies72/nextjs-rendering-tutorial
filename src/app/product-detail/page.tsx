import { Suspense } from 'react';
import { Product } from '@/components/product';
import { Reviews } from '@/components/reviews';

const ProductDetailsPage = () => {
  return (
    <div>
      <h1>Product detail page</h1>
      <Suspense fallback={<p>Loading products...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading reviews...</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
};

export default ProductDetailsPage;

