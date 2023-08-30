import Sequelize from "sequelize";

let sequelize = new Sequelize('postgresql://ajohn@localhost:5432/sequelize_intro_db')

let num = 52

await sequelize.query(`INSERT INTO testing_table (my_number) VALUES (${num});`)

let response = await sequelize.query(`SELECT * FROM testing_table;`)

console.log(response[0])