
# log-worker

  A logger which uses the FileSystem API in a WebWorker. For multi-channeled logs.

  It uses a bit of trickery to avoid some Web Worker path and origin issues so the `index.js` is compiled from the files in `lib/` using a small build script into a single worker Blob.

  Free Tip! Here's a trick to start tailing the last changed log file(s) in osx:

    $ find ~/Library/Application\ Support/Google/{Chrome\ Canary,Chrome}/Default/File\ System -mmin -5 | grep -E '\d+\/\d+' | sed 's/ /\\ /g' | xargs tail -f



## Installation

    $ component install publicclass/log-worker

## API

The API follows the [Console API](http://nodejs.org/api/stdio.html) as defined in Node.js.

### LogWorker.log([data], [...])

### LogWorker.info([data], [...])

### LogWorker.warn([data], [...])

### LogWorker.error([data], [...])

### LogWorker.dir(obj)

### LogWorker.time(label)

### LogWorker.timeEnd(label)

### LogWorker.trace(label)

### LogWorker.assert(expression, message)

## License

  MIT
