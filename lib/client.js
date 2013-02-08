
var lib = new Blob([
  /*= util.js */,
  /*= console.js */,
  /*= log-worker.js */
])

var open = true;
var worker = new Worker(URL.createObjectURL(lib))
worker.onerror = function(e){
  open = false;
  console.error(e);
}
var name = location.pathname.match(/[^/]+$/g);
if( name ){
  worker.postMessage({
    type: 'open',
    name: name[0],
  })
}


var slice = [].slice;
'log info warn error dir time timeEnd trace assert'.split(' ').forEach(register)
function register(name){
  exports[name] = function(){
    if( !open ) return;
    try {
      worker.postMessage({type:name, args: slice.call(arguments) })
    } catch(e){
      if( e.code == e.DATA_CLONE_ERR && arguments.length ){
        // log and try again with less arguments
        console.log('log-worker couldn\'t log because of a data clone error. trying again with less arguments.')
        exports[name].apply(null,slice.call(arguments,0,-1))
      } else {
        throw e;
      }
    }
  }
}

