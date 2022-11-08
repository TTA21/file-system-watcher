const chokidar = require('chokidar');

const paths = JSON.parse(process.argv[2]);

const params = JSON.parse(process.argv[3]);

const watcher = chokidar.watch(paths, params);

watcher
    .on('add', (path, stat) => console.log( JSON.stringify( { type: 'fileCreated', path: path, stats: stat } ) ))
    .on('change', (path, stat) => console.log( JSON.stringify( { type: 'fileUpdated', path: path, stats: stat } ) ))
    .on('unlink', (path) => console.log( JSON.stringify( { type: 'fileDeleted', path: path, stats: [] } ) ))
    .on('addDir', (path, stat) => console.log( JSON.stringify( { type: 'directoryCreated', path: path, stats: stat } ) ))
    .on('unlinkDir', (path) => console.log( JSON.stringify( { type: 'directoryDeleted', path: path, stats: [] } ) ))
