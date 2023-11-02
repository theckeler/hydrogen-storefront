import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';

export function FeaturedCollection({collection}) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <Link
      className=""
      to={`/collections/${collection.handle}`}
    >
      <h1>{collection.title}</h1>
      {image && (
        <div className="relative">
          <Image data={image} sizes="100vw" crop />
        </div>
      )}
    </Link>
  );
}
