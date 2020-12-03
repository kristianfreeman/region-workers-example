import template from './template'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  return new Response(template, {
    headers: { 'content-type': 'text/html' },
  })
}
