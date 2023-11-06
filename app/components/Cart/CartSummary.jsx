import {Money} from '@shopify/hydrogen';

export function CartSummary({className, cost, children = null}) {
  return (
    <div className={className}>
      <h4 className="border-yellow-300 border-b-2 pb-1 mb-1">Totals</h4>
      <dl className="grid grid-cols-[1fr_minmax(100px,_200px)]">
        <dt>Subtotal</dt>
        <dd className="text-right">
          {cost?.subtotalAmount?.amount ? (
            <Money data={cost?.subtotalAmount} />
          ) : (
            '-'
          )}
        </dd>
      </dl>
      {children}
    </div>
  );
}
