import {Image} from '@shopify/hydrogen';
import {Link} from '@remix-run/react';
import {useVariantUrl} from '~/utils';
import {CartLinePrice} from './CartLinePrice';
import {CartLineQuantity} from './CartLineQuantity';

export function CartItem({layout, line}) {
  const {id, merchandise} = line;
  const {product, title, image, selectedOptions} = merchandise;
  const lineItemUrl = useVariantUrl(product.handle, selectedOptions);

  return (
    <li
      key={id}
      className="grid grid-cols-[minmax(40px,_100px)_1fr] gap-4 border-b pb-2 mb-2"
    >
      {image && (
        <Image
          alt={title}
          aspectRatio="1/1"
          data={image}
          height={100}
          width={100}
          loading="lazy"
          className="w-100 h-100 border"
        />
      )}

      <div>
        <Link
          prefetch="intent"
          to={lineItemUrl}
          onClick={() => {
            if (layout === 'aside') {
              // close the drawer
              window.location.href = lineItemUrl;
            }
          }}
        >
          <p>
            <strong>{product.title}</strong>
          </p>
        </Link>
        <CartLinePrice line={line} as="span" />
        <ul>
          {selectedOptions.map((option) => (
            <li key={option.name}>
              <small>
                {option.name}: {option.value}
              </small>
            </li>
          ))}
        </ul>
        <CartLineQuantity line={line} />
      </div>
    </li>
  );
}
