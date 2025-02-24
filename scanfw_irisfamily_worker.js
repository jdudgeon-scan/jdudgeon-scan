addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
    const url = new URL(request.url);
    if (url.hostname === 'scanfw.org') {
      url.hostname = 'irisfamily.org';
    }
    const modifiedRequest = new Request(url, request);
    return fetch(modifiedRequest);
  }