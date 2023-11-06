import {CartCheckoutActions} from './CartCheckoutActions';
import {CartDiscounts} from './CartDiscounts';
import {CartSummary} from './CartSummary';
import {CartItem} from './CartItem';
import {Icons} from '@/components/Icons';

export function CartDetails({layout, cart}) {
  return (
    <>
      <ul>
        {cart?.lines.nodes.map((line) => (
          <CartItem key={line.id} line={line} />
        ))}
      </ul>

      <CartSummary cost={cart.cost} className="py-3">
        {/* <CartDiscounts discountCodes={cart.discountCodes} /> */}

        <a
          href={cart.checkoutUrl}
          target="_self"
          className="w-full py-1 px-6 bg-yellow-400 grid grid-cols-[1fr_40px] items-center uppercase font-bold mt-4"
        >
          <span className="text-lg text-right">Continue to Checkout</span>
          <Icons icon="chevronright" />
        </a>
      </CartSummary>
    </>
  );
}
