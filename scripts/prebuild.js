
const fs = require("fs");
const path = require("path");

const srcPath = "./nativescript/src/";
const destPath = "./nativescript/app/";


let fullDestinationPath = path.resolve(destPath);
let fullSourcePath = path.resolve(srcPath);
let tempFolder = path.resolve("./nativescript/_tmp/");

init();

function init() {
    if (!fs.existsSync(tempFolder)) {
        fs.mkdirSync(tempFolder);
    }
    copyFolderContentsRecursive(fullSourcePath, tempFolder);
    processFilesRecursive(tempFolder);
    copyFolderContentsRecursive(tempFolder, fullDestinationPath);
}

function copyFolderContentsRecursive(src, dest) {
    let files = [];
    files = fs.readdirSync(src);

    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest);
    }

    files.forEach((file) => {
        let srcFileName = path.join(src, file);
        let destFileName = path.join(dest, file);
        if (fs.lstatSync(srcFileName).isDirectory()) {
            copyFolderContentsRecursive(`${src}/${file}`, `${dest}/${file}`);
        } else {
            fs.copyFileSync(srcFileName, destFileName);
        }
    });
}

function processFilesRecursive(src) {
    let files = [];
    files = fs.readdirSync(src);

    let tnsPattern = /.tns/g;

    files.forEach((file) => {

        let srcFileName = path.join(src, file);

        if (fs.lstatSync(srcFileName).isDirectory()) {
            processFilesRecursive(srcFileName);
            //copyFolderContentsRecursive(`${src}/${file}`, `${dest}/${file}`);
        }
        if (file.match(tnsPattern)) {
            let destFileName = path.join(src, file.replace(".tns", ""));
            //console.log(`Processing  ${srcFileName}  ->  ${destFileName}`);

            fs.copyFileSync(srcFileName, destFileName);
            fs.unlinkSync(srcFileName);
        }
    });

}




function transformFiles() {
    let files = [];
    files = fs.readdirSync(tempFolder);


    files.forEach((file) => {
        if (file.match(tnsPattern)) {


            let srcFileName = path.join(tempFolder, file);
            let destFileName = path.join(tempFolder, file.replace(".tns", ""));

            console.log(`Copying ${srcFileName}  ->  ${destFileName}`);

            fs.copyFileSync(srcFileName, destFileName);
            fs.unlinkSync(srcFileName);

        }
    });
}
