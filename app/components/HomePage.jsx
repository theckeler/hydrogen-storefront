import {FeaturedCollection} from './Collections/FeaturedCollection';
import {RecommendedProducts} from './Collections/RecommendedProducts';

export default function HomePage({data}) {
  return (
    <>
      <FeaturedCollection collection={data.featuredCollection} />
      <RecommendedProducts
        className="my-4 p-2 2xl:p-0"
        products={data.recommendedProducts}
      />
    </>
  );
}
