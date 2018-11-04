const search = instantsearch({
  appId: 'Z98PBLKA4C',
  apiKey: 'aeb766f8f0ff88f3d154063c447fae6a', // search only API key, no ADMIN key
  indexName: 'Pokesaurus',
  urlSync: true,
  searchParameters: {
    hitsPerPage: 12
  }
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-input'
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: document.getElementById('hit-template').innerHTML,
      empty: "We didn't find any results for the search: <em>\"{{query}}\"</em>"
    }
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination'
  })
);

search.addWidget(
    instantsearch.widgets.refinementList({
      container: '#type-refinement',
      attributeName: ["type1","type2"]
      templates: {
        header: 'Type'
      },
      searchForFacetValues: {
        placeholder: 'Search for brands',
        templates: {
          noResults: '<div class="sffv_no-results">No matching brands.</div>'
        }
      }
    })
  );

search.start();
