function duplicateLinkEvaluate(node) {
  const href = node.getAttribute('href');
  if (href === '#') {
    return true;
  }
  // Attempt to grab parent or grandparent if available
  const topNode = node.parentElement
    ? node.parentElement.parentElement
      ? node.parentElement.parentElement
      : node.parentElement
    : false;
  // Find matching nodes and filter out
  const resultNodes = topNode
    ? topNode.querySelectorAll(`a[href="${href}"]`)
    : false;
  const matchingNodes = Array.from(resultNodes).filter(
    foundNode => foundNode !== node
  );
  if (matchingNodes.length) {
    this.relatedNodes(matchingNodes);
  }
  this.data(href);
  return matchingNodes.length === 0;
}

export default duplicateLinkEvaluate;
