
/**
 * A simple Console API matching the one in node.js.
 *
 * Takes an optional `opts` object which can contain:
 *
 *  - `name` The name of the file to write to. Defaults to _log.txt_.
 *  - `showHidden` If true, the object's non-enumerable properties will be shown. Defaults to _false_.
 *  - `depth` Recursion depth, pass _null_ for infinite. Defaults to _2_.
 *  - `colors` If true, the output will be styled with ANSI color codes. Defaults to _false_.
 *
 * @param {Object} opts
 */
function Console(opts){
  this._opts = opts || {};
  this._name = this._opts.name || 'log.txt';
  this._times = {};
}
Console.prototype = {
  log: function(){
    write(this._name,util.format.apply(this, arguments,this._opts) + '\n');
  },
  info: function(){
    write(this._name,util.format.apply(this, arguments,this._opts) + '\n');
  },
  warn: function(){
    write(this._name,util.format.apply(this, arguments,this._opts) + '\n');
  },
  error: function(){
    write(this._name,util.format.apply(this, arguments,this._opts) + '\n');
  },
  dir: function(object){
    write(this._name,util.inspect(object,this._opts) + '\n');
  },
  time: function(label){
    this._times[label] = Date.now();
  },
  timeEnd: function(label){
    var time = this._times[label];
    if (!time) {
      throw new Error('No such label: ' + label);
    }
    var duration = Date.now() - time;
    this.log('%s: %dms', label, duration);
  },
  trace: function(){
    var err = new Error;
    err.name = 'Trace';
    err.message = util.format.apply(this, arguments);
    Error.captureStackTrace(err, arguments.callee);
    this.error(err.stack);
  },
  assert: function(expression,message){
    if (!expression) {
      this.error('Assertion failed: ',message);
    }
  }
}

function write(name, data){
  var buffer = new Blob([data], {type: 'text/plain'});
  // have to re-open or it won't append properly
  var fs = self.webkitRequestFileSystemSync(TEMPORARY,1024*1024*5);
  var file = fs.root.getFile(name,{create:true})
  var writer = file.createWriter();
  writer.seek(writer.length)
  writer.write(buffer);
}
