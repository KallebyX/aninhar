import express from 'express'
import { submitQuestion } from '../controllers/questionController.js'
import { validateQuestion } from '../middleware/validation.js'

const router = express.Router()

// Questions/Contact endpoint
router.post('/questions', validateQuestion, submitQuestion)

// Info endpoints
router.get('/info/home', (req, res) => {
  res.json({
    title: 'Projeto Aninhar',
    message: 'Apoio e orientação para cuidados com recém-nascidos'
  })
})

router.get('/info/statistics', (req, res) => {
  res.json({
    visitorsHelped: 1000,
    articlesPublished: 3,
    partnerHospitals: 1
  })
})

export default router
