import { validationResult } from 'express-validator'

// In-memory storage for demonstration (in production, use a database)
const questions = []

export const submitQuestion = async (req, res, next) => {
  try {
    // Check for validation errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: 'Validation Error',
        details: errors.array()
      })
    }

    const { name, email, question } = req.body

    // Create question object
    const newQuestion = {
      id: Date.now().toString(),
      name,
      email,
      question,
      status: 'pending',
      createdAt: new Date().toISOString()
    }

    // Store question (in production, save to database)
    questions.push(newQuestion)

    // Log for monitoring
    console.log('📬 New question received:', {
      id: newQuestion.id,
      name: newQuestion.name,
      timestamp: newQuestion.createdAt
    })

    // Send success response
    res.status(201).json({
      success: true,
      message: 'Sua dúvida foi enviada com sucesso! Entraremos em contato em breve.',
      questionId: newQuestion.id
    })
  } catch (error) {
    console.error('Error submitting question:', error)
    next(error)
  }
}

// Get all questions (for admin panel in future)
export const getAllQuestions = async (req, res, next) => {
  try {
    res.json({
      success: true,
      count: questions.length,
      questions: questions
    })
  } catch (error) {
    next(error)
  }
}
