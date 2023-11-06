import {Await} from '@remix-run/react';
import {Suspense} from 'react';
import {Aside} from '@/components/Asides/';
import {CartMain} from '@/components/Cart/';

export function CartAside({className, cart, handleMenuClose}) {
  function SomeChild() {
    const error = useAsyncError();
    return <p>{error.message}</p>;
  }

  return (
    <Aside
      className={className}
      id="cart"
      heading="CART"
      handleMenuClose={handleMenuClose}
    >
      <Suspense fallback={<p>Loading cart ...</p>}>
        <Await resolve={cart} errorElement={<SomeChild />}>
          {(cart) => {
            return <CartMain cart={cart} layout="aside" />;
          }}
        </Await>
      </Suspense>
    </Aside>
  );
}
