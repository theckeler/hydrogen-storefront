import {CartEmpty} from './CartEmpty';
import {CartDetails} from './CartDetails';

export function CartMain({layout, cart}) {
  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  const withDiscount =
    cart &&
    Boolean(cart.discountCodes.filter((code) => code.applicable).length);
  const className = `${withDiscount ? 'with-discount' : ''}`;

  return (
    <div className="p-2">
      {!!cart && cart.totalQuantity > 0 ? (
        <CartDetails cart={cart} />
      ) : (
        <CartEmpty hidden={linesCount} />
      )}
    </div>
  );
}
