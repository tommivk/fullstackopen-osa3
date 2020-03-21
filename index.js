const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :postdata'))

morgan.token('postdata', function(req,res){return JSON.stringify(req.body)})


let persons = [
    {
      name: "Larry Page",
      number: "040-49382933",
      id: 1
    },
    {
        name: "Alan Turing",
        number: "050-4233232",
        id: 2
    },
    {
        name: "Bill Gates",
        number: "040-2342342332",
        id: 3
    },
    {
        name: "Steve Jobs",
        number: "040-24242222",
        id: 4
    }
  ]

  const generateId = () => Math.floor((Math.random() * 999999999999999999999) + 1)
  
  app.get('/api/persons', (req, res) => {
      res.json(persons)
  })

  app.get('/api/persons/:id', (req,res) => {
      const id = Number(req.params.id)
      const person = persons.find(p => p.id === id)
      if(person){
         return res.json(person)
      }
      
      res.status(404).end()

  })

  app.delete('/api/persons/:id', (req,res) => {
    console.log(persons.length)
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)
    console.log(persons.length)
    res.status(204).end()
  })

  app.get('/info', (req, res) => {
    const date = new Date()
   
    res.send(`<p>phonebook has info for ${persons.length} people</p> <p>${date}</p>`)
  })

  app.post('/api/persons', (req, res) => {
      const body = req.body
     
       if(!body.name){
           return res.status(400).json({error: 'Name is missing'})
       }
       if(!body.number){
        return res.status(400).json({error: 'Number is missing'})
       }
       if(persons.some(x => x.name === body.name.trim())){
        return res.status(400).json({error: 'Name must be unique'})
       }
     
      const person = {
          name: body.name,
          number: body.number,
          id: generateId(),
      }
      
      persons = persons.concat(person)
    
      res.json(person)
    

  })
  

  
  const PORT = 3001
  app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`)
      
  })

 