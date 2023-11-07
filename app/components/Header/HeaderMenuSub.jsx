import {Image} from '@shopify/hydrogen-react';

export function HeaderMenuSub({className, setSubmenu, handleMenuClose}) {
  
  return (
    <ul
      className={`max-w-screen-2xl mx-auto w-full p-2 lg:p-4 grid lg:grid-cols-4 ${className}`}
    >
      <li>
        <ul>
          <li>
            <Image
              src="https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenFrontpack.jpg?v=1675455064&width=1000&height=1000&crop=center"
              className="mb-2 border"
            />
            <h3 className="text-lg font-bold mb-1 pb-1">
              Proin porttitor auctor nisl
            </h3>
          </li>
          <li>
            <a href="#top" className="underline">
              Suspendisse convallis
            </a>
          </li>
          <li>
            <a href="#top" className="underline">
              Suspendisse convallis
            </a>
          </li>
          <li>
            <a href="#top" className="underline">
              Suspendisse convallis
            </a>
          </li>
          <li>
            <a href="#top" className="underline">
              Suspendisse convallis
            </a>
          </li>
          <li>
            <a href="#top" className="underline">
              Suspendisse convallis
            </a>
          </li>
        </ul>
      </li>
      <li></li>
    </ul>
  );
}
