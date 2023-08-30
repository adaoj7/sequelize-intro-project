import Sequelize, {Model,DataTypes} from "sequelize";

let sequelize = new Sequelize('postgresql://ajohn@localhost:5432/sequelize_intro_db')

class TestingTable extends Model {}
TestingTable.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        myNumber: {
            type: DataTypes.INTEGER,
            field: 'my_number'
        },

    },
    {
        sequelize: sequelize,  
        tableName: 'testing_table',
        timestamps: false
    }
)

await TestingTable.sync()

TestingTable.create({myNumber:42})

const allResults = await TestingTable.findAll({raw: true})

console.log(allResults)