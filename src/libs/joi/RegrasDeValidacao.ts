import Joi from "joi"

export class RegrasDeValidacao { 

    public static get opcoes() {
        return {
            messages: {
                'any.required': 'O campo {#label} é obrigatório.',
                'string.empty': 'O campo {#label} não pode estar vazio.',
                'string.base': 'O campo {#label} deve ser uma string.',
                'string.min': 'O campo {#label} deve conter pelo menos {#limit} caracteres.',
                'string.max': 'O campo {#label} deve conter no maximo {#limit} caracteres.'
            }
        }
    }

    private static regexParaCampoEspecial = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/)

    private static mensagensDeErroParaCampoEspecial = {
        'string.pattern.base': 'O campo {#label} deve conter pelo menos uma letra maiúscula, uma letra minúscula e um caractere especial.',
    }

    public static get nome() {
        return Joi.string().min(3).max(50).required()
    }

    public static get chave() {
        return Joi.string().min(4).max(255).pattern(this.regexParaCampoEspecial).messages(this.mensagensDeErroParaCampoEspecial).required()
    }

    public static get senha() {
        return Joi.string().min(8).max(255).pattern(this.regexParaCampoEspecial).messages(this.mensagensDeErroParaCampoEspecial).required()
    }
}