require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const Person = require('./models/person')

app.use(express.static('build'))

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :postdata'))
app.use(cors())

morgan.token('postdata', function(req,res){return JSON.stringify(req.body)})



  
  app.get('/api/persons', (req, res, next) => {
      console.log(req.body)
      Person.find({}).then(persons =>{
          
          res.json(persons.map(person => person.toJSON()))
          
      }).catch(error => next(error))
  })

  app.get('/api/persons/:id', (req,res, next) => {
         
         Person.findById(req.params.id).then(person=>{
             if(person){
          res.json(person.toJSON())
             }else{
                 response.status(404).end()
             }
      }).catch(error => {
          next(error)
      })
    

  })

  app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
      .then(result => {
        response.status(204).end()
      })
      .catch(error => next(error))
  })



  
  app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body
  
    const newNumber = {
      name: body.name,
      number: body.number,
    }
  
    Person.findByIdAndUpdate(request.params.id, newNumber, { new: true })
      .then(updatedPerson => {
        response.json(updatedPerson.toJSON())
      })
      .catch(error => next(error))
  })

  app.get('/info', (req, res, next) => {
    const date = new Date()
    
    Person.collection.count().then(count => 
        res.send(`<p>phonebook has info for ${count} people</p> <p>${date}</p>`)).catch(error => next(error))
    
  })

  app.post('/api/persons', (req, res, next) => {
  
    const body = req.body
     
 
      const person = new Person({
          name: body.name,
          number: body.number   
      })
      
      
      
      person.save().then(newPerson =>{
          res.json(newPerson.toJSON())
      }).catch(error => next(error))

  })
  
  const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError' && error.kind == 'ObjectId') {
      return response.status(400).send({ error: 'malformatted id' })
    }
    if(error.name === 'ValidationError'){
       
        return response.status(400).json({error: error.message})
    }
  
    next(error)
  }
  
  app.use(errorHandler)
  
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`)
      
  })

 