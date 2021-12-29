import { DataTypes, Model, ModelStatic, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface IngredientAttributes {
    id: number;
    name: string;
    phoneNumber?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface IngredientInput extends Optional<IngredientAttributes, 'id' | 'phoneNumber'> {}

export interface IngredientOuput extends Required<IngredientAttributes> {}

class Ingredient extends Model<IngredientAttributes, IngredientInput> implements IngredientAttributes {
    public id!: number
    public name!: string
    public phoneNumber!: string
    
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Ingredient.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING
    }
}, {
  sequelize: sequelizeConnection,
  paranoid: true
})

export default Ingredient