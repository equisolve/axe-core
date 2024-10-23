function duplicateLinkAfter(results) {
  var uniqueAnchors = [];

  // filter out anchor elements that share the same role and accessible text
  // so every non-unique anchor isn't reported as a failure (just the first)
  return results.filter(currentResult => {
    var findMatch = someResult => {
      return (
        currentResult.node.element.getAttribute('href') ===
        someResult.node.element.getAttribute('href')
      );
    };

    var matchedResult = uniqueAnchors.find(findMatch);
    if (matchedResult) {
      matchedResult.result = false;
      matchedResult.relatedNodes.push(currentResult.relatedNodes[0]);
      return false;
    }

    uniqueAnchors.push(currentResult);
    currentResult.relatedNodes = [];
    return true;
  });
}

export default duplicateLinkAfter;
