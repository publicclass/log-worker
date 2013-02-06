
var open = false;
var worker = new Worker('log-worker.js')
worker.addEventListener('error',function(e){
  open = false;
  console.error(e);
})
worker.postMessage({
  type: 'location',
  hash: location.hash,
  host: location.host,
  hostname: location.hostname,
  href: location.href,
  origin: location.origin,
  pathname: location.pathname,
  port: location.port,
  protocol: location.protocol,
  search: location.search
})

'log info warn error dir time timeEnd trace assert'.split(' ').forEach(register)
function register(name){
  exports[name] = function(){
    open && worker.postMessage({type:name, args: [].slice.call(arguments) })
  }
}
