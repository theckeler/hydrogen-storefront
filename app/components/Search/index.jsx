import {Form} from '@remix-run/react';
import React, {useRef, useEffect} from 'react';
import {Icons} from '../Icons';
import {IconText} from '../IconText';

export const NO_PREDICTIVE_SEARCH_RESULTS = [
  {type: 'queries', items: []},
  {type: 'products', items: []},
  {type: 'collections', items: []},
  {type: 'pages', items: []},
  {type: 'articles', items: []},
];

export function SearchForm({searchTerm, className}) {
  const inputRef = useRef(null);

  // focus the input when cmd+k is pressed
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'k' && event.metaKey) {
        event.preventDefault();
        inputRef.current?.focus();
      }

      if (event.key === 'Escape') {
        inputRef.current?.blur();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Form method="get" className={className}>
      <div className="grid grid-cols-[1fr_4em] lg:grid-cols-[1fr_10em]">
        <input
          class="w-full rounded-l border-r-0"
          defaultValue={searchTerm}
          name="q"
          placeholder="Search…"
          ref={inputRef}
          type="search"
        />
        <button
          type="submit"
          className="bg-slate-800 text-white p-2 h-full w-full flex justify-center items-center rounded-r"
        >
          <div className="w-8 h-8">
            <Icons icon="search" className="fill-white" />
          </div>
          <IconText text="Search" className="ml-1" />
        </button>
      </div>
    </Form>
  );
}
