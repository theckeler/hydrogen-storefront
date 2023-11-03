import {Link} from '@remix-run/react';
import React from 'react';
import {pluralToSingularSearchType} from './pluralToSingularSearchType';
import {SearchResultItem} from './SearchResultItem';

export function PredictiveSearchResult({
  goToSearchResult,
  items,
  searchTerm,
  type,
}) {
  const isSuggestions = type === 'queries';
  const categoryUrl = `/search?q=${
    searchTerm.current
  }&type=${pluralToSingularSearchType(type)}`;

  return (
    <div className="predictive-search-result" key={type}>
      <Link prefetch="intent" to={categoryUrl} onClick={goToSearchResult}>
        <h5>{isSuggestions ? 'Suggestions' : type}</h5>
      </Link>
      <ul>
        {items.map((item) => (
          <SearchResultItem
            goToSearchResult={goToSearchResult}
            item={item}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}
