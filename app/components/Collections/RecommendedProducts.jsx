import {Await, Link} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import {Icons} from '@/components/Icons';

export function RecommendedProducts({products, className}) {
  const blockCSS = 'grid justify-center content-center relative rounded';

  return (
    <div className={className}>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {({products}) => (
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-4">
              <h2
                className={
                  blockCSS +
                  ' grid-cols-[1fr_34px] lg:bg-yellow-400 p-2 col-span-full lg:col-span-1'
                }
              >
                <span className="lg:text-right font-light">
                  Recommended Products
                </span>
                <span className="h-8 w-8 hidden lg:inline-block">
                  <Icons icon="chevronright" className="fill-neutral-800" />
                </span>
              </h2>

              {products.nodes.map((product) => (
                <Link
                  key={product.id}
                  className={blockCSS + ' min-h-[240px] font-bold border'}
                  to={`/products/${product.handle}`}
                >
                  <Image
                    data={product.images.nodes[0]}
                    aspectRatio="1/1"
                    sizes="(min-width: 200px) 20vw, 40vw"
                    className="absolute w-full h-full object-cover z-0"
                  />
                  <div className="relative z-10">
                    <h4 className="bg-yellow-400 rounded-3xl py-2 px-6 shadow text-sm">
                      {product.title}
                    </h4>
                    {/* <small>
                    <Money data={product.priceRange.minVariantPrice} />
                  </small> */}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
}
