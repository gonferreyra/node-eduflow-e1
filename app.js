const fs = require('fs');
const prompts = require('prompts');
const { saveToJson, appendToJson } = require('./helpers/saveToJson');



const main = async () => {

    const questions = [
        {
            type: 'text',
            name: 'expense',
            message: 'Enter the expese: '
        },
        {
            type: 'number',
            name: 'price',
            message: `How much did you spend? `
        }
    ];

    const response = await prompts(questions)

    const fileExists = fs.existsSync('./db/db.json');
    // console.log(fileExists)
    if (fileExists) {
        appendToJson(response)
    } else if (!fileExists) {
        saveToJson(response)
    }
};

main()

// { expense: 'Tenis 2', price: 900 }