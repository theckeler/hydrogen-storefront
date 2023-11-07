import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {Icons} from '@/components/Icons';

export function FeaturedCollection({collection}) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <Link className="" to={`/collections/${collection.handle}`}>
      {image && (
        <div className="relative min-h-[300px] bg-black grid content-center ">
          <div className="p-4 lg:p-8 text-white relative z-10">
            <h1 className="text-xl lg:text-3xl font-bold mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h1>
            <p className="text-sm leading-6">
              Nulla dignissim lectus non ante ultricies rhoncus. Cras cursus
              ullamcorper gravida. Nulla in est vitae dolor dictum dapibus.
              Praesent ut leo metus. In non cursus ipsum. Nulla justo nunc,
              consequat sed blandit non, faucibus a mauris. Aliquam aliquam
              suscipit facilisis. Cras et laoreet lacus, vehicula pellentesque
              massa.
            </p>

            <button className="grid grid-cols-[1fr_34px] items-center bg-yellow-400 rounded-3xl py-2 px-6 shadow text-black mt-6">
              <span className="lg:text-right font-bold">
                View Featured Collection
              </span>
              <span className="h-8 w-8 hidden lg:inline-block">
                <Icons icon="chevronright" className="fill-neutral-800" />
              </span>
            </button>
          </div>

          <Image
            className="absolute z-0 object-cover h-full w-full opacity-30"
            data={image}
            aspectRatio="20/3"
            sizes="(min-width: 45em) 40vw, 100vw"
            loading="eager"
          />
        </div>
      )}
    </Link>
  );
}
