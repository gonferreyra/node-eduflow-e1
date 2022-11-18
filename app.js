const fs = require('fs');
const prompts = require('prompts');
const { saveToJson, appendToJson } = require('./helpers/saveToJson');



const main = async () => {


    // const fileExists = fs.existsSync('./db/db.json');
    // console.log(fileExists)

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
    (async () => {
        const response = await prompts(questions)

        const saveExpense = new Promise((resolve, reject) => {

            resolve(saveToJson(response))

        })

    })()

};

main()

// { expense: 'Tenis 2', price: 900 }