const fs = require('fs')

const saveToJson = (data) => {

    fs.writeFileSync('./db/db.json', JSON.stringify([data]), (err) => {
        if (err) throw err
        console.log('The file has been saved!')
    })
}

const appendToJson = (data) => {

    const fileData = JSON.parse(fs.readFileSync('./db/db.json'))
    fileData.push(data)
    fs.writeFileSync('./db/db.json', JSON.stringify(fileData))
};

module.exports = {
    saveToJson,
    appendToJson,
}

