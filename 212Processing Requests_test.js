function processingRequests(servers, requests) {
  let requestsQty = 0;
  for (let i = 1; i <= servers; i++) {
    const requestsCapacity = i * 2;
    const requestIndex = requests.findIndex(req => requestsCapacity >= req);
    if (requestIndex !== -1) {
      requests.splice(requestIndex, 1);
      requestsQty++;
    }
  }
  return requestsQty;
}

processingRequests(2, [1, 5, 6]);
