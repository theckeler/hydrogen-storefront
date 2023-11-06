import {Form} from '@remix-run/react';
import {useRef, useEffect} from 'react';
import {Icons} from '../Icons';
import {IconText} from '../IconText';
import {PredictiveSearchResults} from '@/components/Search/PredictiveSearchResults';
import {PredictiveSearchForm} from '@/components/Search/NoSearchResults';

export const NO_PREDICTIVE_SEARCH_RESULTS = [
  {type: 'queries', items: []},
  {type: 'products', items: []},
  {type: 'collections', items: []},
  {type: 'pages', items: []},
  {type: 'articles', items: []},
];

export function SearchForm({searchTerm, className, id}) {
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
    <div className={className + ' relative'} id={id}>
      <PredictiveSearchForm className="w-full xl:max-w-xl">
        {/* <Form
          method="get"
          action="/search/"
          className={className}
          id={id}
          heading="SEARCH"
        > */}
        {({fetchResults, inputRef}) => (
          <div className="grid grid-cols-[1fr_4em] lg:grid-cols-[1fr_6em] ">
            <input
              name="q"
              onChange={fetchResults}
              onFocus={fetchResults}
              placeholder="Search"
              ref={inputRef}
              type="search"
              className="w-full rounded-l border-r-0 bg-sky-800 border-0 outline-0"
            />
            <button
              type="submit"
              className="bg-sky-800 text-white p-2 h-full w-full flex justify-center items-center rounded-r border-l border-sky-700"
            >
              <div className="w-8 h-8">
                <Icons icon="search" className="fill-white" />
              </div>
              <IconText text="Search" className="ml-1 uppercase" />
            </button>
          </div>
        )}
        {/* </Form>*/}
      </PredictiveSearchForm>

      <div className="absolute z-30 top-[calc(100%-2px)] right-0 bg-white w-full xl:max-w-xl rounded-b shadow">
        <PredictiveSearchResults className="p-4" />
      </div>
    </div>
  );
}
