import {Await} from '@remix-run/react';
import {Suspense} from 'react';
import {Aside} from '~/components/Asides';
import {CartMain} from '~/components/Cart';

export function CartAside({cart}) {
  return (
    <Aside id="cart-aside" heading="CART">
      <Suspense fallback={<p>Loading cart ...</p>}>
        <Await resolve={cart}>
          {(cart) => {
            return <CartMain cart={cart} layout="aside" />;
          }}
        </Await>
      </Suspense>
    </Aside>
  );
}
