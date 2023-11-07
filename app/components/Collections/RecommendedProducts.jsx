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
              <div
                className={
                  blockCSS +
                  ' p-2 col-span-full lg:col-span-1 lg:bg-neutral-800'
                }
              >
                <Image
                  src="https://cdn.shopify.com/s/files/1/0688/1755/1382/collections/cd_a_neatly_arranged_photo_of_mens_clothes_t-shirt_gray_hoodie__c5a4ebe4-ccb1-4d94-ae56-a1b33b4e71d9_1.png?v=1675456349&width=1600&height=1600&crop=center"
                  aspectRatio="1/1"
                  sizes="(min-width: 200px) 20vw, 40vw"
                  className="absolute w-full h-full object-cover z-0 opacity-20 hidden lg:block"
                />
                <div className="relative z-10 grid items-center grid-cols-[1fr_34px] lg:bg-stone-100 py-2 px-4 rounded-3xl shadow">
                  <h2 className="lg:text-right font-bold lg:font-normal text-lg lg:text-xs">
                    Recommended Products
                  </h2>
                  <span className="h-8 w-8 hidden lg:inline-block">
                    <Icons icon="arrowright" className="fill-neutral-800" />
                  </span>
                </div>
              </div>

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
