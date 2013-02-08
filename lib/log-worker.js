var console = new Console();
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
    case 'open': console = new Console(e.data); break
    default: throw new Error('unknown type: '+e.data.type)
  }
}