import React from 'react';

function EmptySearchResults({
  searchText
}) {
  return <p>No hay ningún resultado para {searchText}</p>;
}

export {
  EmptySearchResults
};
