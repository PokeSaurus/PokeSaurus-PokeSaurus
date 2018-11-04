const search = instantsearch({
  appId: 'Z98PBLKA4C',
  apiKey: 'aeb766f8f0ff88f3d154063c447fae6a', // search only API key
  indexName: 'Pokesaurus',
  urlSync: true
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-input'
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    hitsPerPage: 12,
    templates: {
      item: document.getElementById('hit-template').innerHTML,
      empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
    }
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination'
  })
);

search.addWidget(
  instantsearch.widgets.stats({
    container: '#stats-container'
  })
);

search.addWidget(
    instantsearch.widgets.refinementList({
      container: '#type1||type2-refinement',
      attributeName: 'type',
      templates: {
        header: 'Type'
      },
      searchForFacetValues: {
        placeholder: 'Search by types',
        templates: {
          noResults: '<div class="sffv_no-results">No matching types.</div>'
        }
      }
    })
  );


search.addWidget(
  instantsearch.widgets.sortBySelector({
    container: '#sort-by-container',
    indices: [
      {name: 'instant_search', label: 'Most relevant'},
      {name: 'instant_search_ID_asc', label: 'Ascending ID#'},
      {name: 'instant_search_ID_desc', label: 'Descending ID#'},
      {name: 'instant_search_HP_asc', label: 'Ascending HP'},
      {name: 'instant_search_HP_desc', label: 'Descending HP'},
      {name: 'instant_search_attack_asc', label: 'Ascending attack'},
      {name: 'instant_search_attack_desc', label: 'Descending attack'},
      {name: 'instant_search_defence_asc', label: 'Ascending defence'},
      {name: 'instant_search_defence_desc', label: 'Descending defence'},
      {name: 'instant_search_spAtk_asc', label: 'Ascending spAtk'},
      {name: 'instant_search_spAtk_desc', label: 'Descending spAtk'},
      {name: 'instant_search_spDef_asc', label: 'Ascending spDef'},
      {name: 'instant_search_spDef_desc', label: 'Descending spDef'},
      {name: 'instant_search_speed_asc', label: 'Ascending speed'},
      {name: 'instant_search_speed_desc', label: 'Descending speed'},
      {name: 'instant_search_totalBaseStats_asc', label: 'Ascending Total Base Stats'},
      {name: 'instant_search_totalBaseStats_desc', label: 'Descending Total Base Stats'},
    ]
  })
);

search.start();


