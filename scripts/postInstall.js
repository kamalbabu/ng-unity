const fs = require("fs");
const path = require("path");

const appSrc = "../src/app";
const appDest = "../nativescript/src";

const sharedSrc = "../shared/";
const sharedDest = "../nativescript/shared/";


const createSymlink = function (src, dest) {
    console.log(`Creating SymLink for ${src}`);
    let srcFullPath = resolve(src);
    let destFullPath = resolve(dest);

    fs.symlink(srcFullPath, destFullPath, (err) => {
        if (err) {
            console.log("Could not create symlink ");
            console.log(err);
        } else {
            console.log(`SymLink for ${src} created successfully`);
        }
    });
}

const splitPath = function (args) {
    if (args.indexOf('/') !== -1) {
        return args.split('/');
    } else {
        return args.split("\\");
    }
}


const resolve = function (args) {

    var cwdPath = splitPath(process.argv[1]);
    // Kill the Script name
    cwdPath.length = cwdPath.length - 1;

    var resolvePath = splitPath(args);

    // Eliminate a trailing slash/backslash
    if (cwdPath[cwdPath.length - 1] === "") { cwdPath.pop(); }

    if (args[0] === '/' || args[0] === "\\") { cwdPath = []; }
    for (var i = 0; i < resolvePath.length; i++) {
        if (resolvePath[i] === '.' || resolvePath[i] === "") { continue; }
        if (resolvePath[i] === '..') { cwdPath.pop(); }
        else { cwdPath.push(resolvePath[i]); }
    }
    if (process.platform === 'win32') {
        var winResult = cwdPath.join("\\");
        if (winResult[winResult.length - 1] === "\\") { winResult = winResult.substring(0, winResult.length - 1); }
        return winResult;
    } else {
        var result = cwdPath.join('/');
        if (result[0] !== '/') { result = '/' + result; }
        if (result[result.length - 1] === '/') { result = result.substring(0, result.length - 1); }
        return result;
    }
}



createSymlink(appSrc, appDest);
createSymlink(sharedSrc, sharedDest);

