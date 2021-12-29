import {Ingredient} from '../../interfaces'
import {IngredientOuput} from '../../../db/models/Ingredient'

export const toIngredient = (ingredient: IngredientOuput): Ingredient => {
    return {
        id: ingredient.id,
        name: ingredient.name,
        phoneNumber: ingredient.phoneNumber,
        createdAt: ingredient.createdAt,
        updatedAt: ingredient.updatedAt,
        deletedAt: ingredient.deletedAt,
    }
}
