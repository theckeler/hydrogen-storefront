import {CartEmpty} from './CartEmpty';
import {CartDetails} from './CartDetails';

export function CartMain({layout, cart}) {
  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  const withDiscount =
    cart &&
    Boolean(cart.discountCodes.filter((code) => code.applicable).length);
  const className = `cart-main ${withDiscount ? 'with-discount' : ''}`;

  return (
    <div className={className}>
      {!!cart && cart.totalQuantity > 0 ? (
        <CartDetails cart={cart} layout={layout} />
      ) : (
        <CartEmpty hidden={linesCount} layout={layout} />
      )}
    </div>
  );
}
