'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(a => collectionB.reduce(function(a, b) {
    return a.concat(b)
  }, []).includes(a))
}
