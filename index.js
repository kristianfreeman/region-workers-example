import template from './template'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  return new Response(template(request.cf), {
    headers: { 'content-type': 'text/html' },
  })
}
