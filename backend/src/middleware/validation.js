import { body } from 'express-validator'

export const validateQuestion = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Nome é obrigatório')
    .isLength({ min: 2, max: 100 })
    .withMessage('Nome deve ter entre 2 e 100 caracteres'),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email é obrigatório')
    .isEmail()
    .withMessage('Email inválido')
    .normalizeEmail(),

  body('question')
    .trim()
    .notEmpty()
    .withMessage('Pergunta é obrigatória')
    .isLength({ min: 10, max: 1000 })
    .withMessage('Pergunta deve ter entre 10 e 1000 caracteres')
]
