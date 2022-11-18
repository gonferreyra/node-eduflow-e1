const fs = require('fs')

const saveToJson = (data) => {

    fs.appendFileSync('./db/db.json', JSON.stringify([data]), { 'flags': 'a+' }, (err) => {
        if (err) throw err
        console.log('The file has been saved!')
    })
}

const appendToJson = () => {


    const fileData = JSON.parse(fs.readFileSync('../db/db.json'))
    fileData.push(newData)

    //Write the new data appended to previous into file

    fs.writeFileSync('sample.json', JSON.stringify(fileData, null, 2));

};

module.exports = {
    saveToJson,
}

