import {Aside} from '~/components/Asides';
import {PredictiveSearchForm} from '../Search/NoSearchResults';
import {PredictiveSearchResults} from '../Search/PredictiveSearchResults';

export function SearchAside({className, handleMenuClose}) {
  return (
    <Aside
      className={className}
      id="search"
      heading="SEARCH"
      handleMenuClose={handleMenuClose}
    >
      <div className="predictive-search">
        <PredictiveSearchForm>
          {({fetchResults, inputRef}) => (
            <div>
              <input
                name="q"
                onChange={fetchResults}
                onFocus={fetchResults}
                placeholder="Search"
                ref={inputRef}
                type="search"
              />
              &nbsp;
              <button type="submit">Search</button>
            </div>
          )}
        </PredictiveSearchForm>
        <PredictiveSearchResults />
      </div>
    </Aside>
  );
}
