const chokidar = require('chokidar');

const paths = JSON.parse(process.argv[2]);

const params = JSON.parse(process.argv[3]);

/*const watcher = chokidar.watch(paths, {
    ignoreInitial: true,
});*/
const watcher = chokidar.watch(paths, params);

watcher
    .on('add', (path, stat) => console.log(`fileCreated ||| ${path} ||| ${JSON.stringify(stat)}`))
    .on('change', (path, stat) => console.log(`fileUpdated ||| ${path} ||| ${JSON.stringify(stat)}`))
    .on('unlink', path => console.log(`fileDeleted ||| ${path} ||| ${JSON.stringify([])}`))
    .on('addDir', (path, stat) => console.log(`directoryCreated ||| ${path} ||| ${JSON.stringify(stat)}`))
    .on('unlinkDir', path => console.log(`directoryDeleted ||| ${path} ||| ${JSON.stringify([])}`))
