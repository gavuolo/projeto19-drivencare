import joi from "joi"

export const signUp = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    phone: joi.number(11).required(),
    confirmPassword: joi.string().required(),
    cpf: joi.number(11).required()
})

export const signIn = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
})