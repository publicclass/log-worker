
var console
  , name;

self.onmessage = function(e){
  if( !e.data ) return;
  switch(e.data.type){
    case 'log':
    case 'info':
    case 'warn':
    case 'error':
    case 'dir':
    case 'time':
    case 'timeEnd':
    case 'trace':
    case 'assert':
      console[e.data.type].apply(console,e.data.args);
      break
    case 'location': location(e.data); break
    default: throw new Error('unknown type: '+e.data.type)
  }
}

function location(obj){
  // set log name
  var lastSlash = obj.pathname.lastIndexOf('/')
    , lastPeriod = obj.pathname.lastIndexOf('.');
  name = obj.pathname.slice(lastSlash+1,lastPeriod)+'.log';

  // import scripts
  var base = obj.origin + obj.pathname.slice(0,lastSlash);
  importScripts(base+'/util.js',base+'/console.js')
  var stdout = {
    write: function(data){
      write(new Blob([data], {type: 'text/plain'}))
    }
  }
  console = new Console(stdout)
}

function open(name){
  var fs = self.webkitRequestFileSystemSync(TEMPORARY,1024*1024*5);
  var file = fs.root.getFile(name,{create:true})
  return writer = file.createWriter();
}

function write(buffer){
  // have to re-open or the length will not match...
  var writer = open(name || 'log.txt')
  writer.seek(writer.length)
  writer.write(buffer);
}
