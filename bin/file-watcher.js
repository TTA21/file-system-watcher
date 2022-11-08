const chokidar = require('chokidar');

const paths = JSON.parse(process.argv[2]);

const params = JSON.parse(process.argv[3]);

const watcher = chokidar.watch(paths, params);

watcher
    .on('add', (path, stat) => console.log( JSON.stringify( { type: 'fileCreated', path: path, stat: stat } ) ))
    .on('change', (path, stat) => console.log( JSON.stringify( { type: 'fileUpdated', path: path, stat: stat } ) ))
    .on('unlink', (path) => console.log( JSON.stringify( { type: 'fileDeleted', path: path, stat: [] } ) ))
    .on('addDir', (path, stat) => console.log( JSON.stringify( { type: 'directoryCreated', path: path, stat: stat } ) ))
    .on('unlinkDir', (path) => console.log( JSON.stringify( { type: 'directoryDeleted', path: path, stat: [] } ) ))
