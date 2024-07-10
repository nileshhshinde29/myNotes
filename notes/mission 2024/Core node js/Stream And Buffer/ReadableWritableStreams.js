const fs = require('fs')
const zlib = require('zlib')

const glib = zlib.createGzip()

const readableStream = fs.createReadStream('./file.txt', {
    encoding: "utf-8"
})

const writeableStream = fs.createWriteStream('./File2.txt')

readableStream.on('data', (chunk) => {
    console.log(chunk);
    writeableStream.write(chunk)
})

/********************* OR we can write ***********************/

readableStream.pipe(writeableStream)

/*********************** if you want to create zip file  *************/
readableStream.pipe(glib).pipe(fs.WriteStream('./File3.txt.gz'))
