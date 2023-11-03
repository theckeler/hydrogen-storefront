import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';

export function FeaturedCollection({collection}) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <Link className="" to={`/collections/${collection.handle}`}>
      {image && (
        <div className="relative min-h-[300px]">
          <Image
            className="absolute z-0 object-cover h-full w-full"
            data={image}
            aspectRatio="20/3"
            sizes="(min-width: 45em) 40vw, 100vw"
            loading="eager"
          />
          <h1 className="absolute z-10 bottom-2 right-2 bg-yellow-400/80 px-6 py-3 text-xl uppercase font-bold">
            {collection.title}
          </h1>
        </div>
      )}
    </Link>
  );
}
