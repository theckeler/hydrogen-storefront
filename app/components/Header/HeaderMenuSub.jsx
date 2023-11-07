import {Image} from '@shopify/hydrogen-react';
import {Icons} from '@/components/Icons';

export function HeaderMenuSub({className, setSubmenu, handleMenuClose}) {
  return (
    <ul
      className={`max-w-screen-2xl mx-auto w-full p-2 lg:p-4 grid gap-4 lg:grid-cols-[minmax(200px,_400px)_1fr] ${className}`}
    >
      {/* <li className="col-span-full">
        <h2 className="text-bold text-xl border-b border-sky-800 pb-2 text-sky-800">
          Donec rutrum aliquet
        </h2>
      </li> */}

      <li className="lg:border-r">
        <ul className="divide-y p-2">
          {[...Array(4)].map((page) => (
            <li className="">
              <a
                href="#top"
                className="grid gap-1 grid-cols-[1fr_28px] grid-rows-2 lg:py-1 lg:px-2 lg:hover:bg-yellow-300"
              >
                <span className="text-lg font-bold text-sky-800">
                  Proin porttitor auctor nisl
                </span>
                <span className="row-span-2 fill-sky-800">
                  <Icons icon="chevronright" />
                </span>
                <span className="text-sm">Proin porttitor auctor nisl</span>
              </a>
            </li>
          ))}
        </ul>
      </li>

      <li>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[28px_1fr_28px] gap-2 w-full h-full">
          <li className="col-span-full">
            <h2 className="text-bold text-xl text-sky-800">
              Donec rutrum aliquet
            </h2>
          </li>
          {[...Array(4)].map((page) => (
            <li className="flex min-h-[200px]">
              <a
                href="#top"
                className="bg-stone-800 relative w-full border flex justify-center items-center"
              >
                <span className="relative z-10 bg-neutral-800 text-white py-2 px-6 rounded-3xl shadow">
                  asdasd
                </span>
                <Image
                  src="https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenFrontpack.jpg"
                  className="absolute w-full h-full object-cover top-0 left-0 z-0"
                  aspectRatio="1/1"
                />
              </a>
            </li>
          ))}
          <li className="col-span-full">
            <h2 className="text-bold text-sm underline text-right uppercase">
              View all
            </h2>
          </li>
        </ul>
      </li>
    </ul>
  );
}
