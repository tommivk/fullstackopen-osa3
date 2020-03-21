const mongoose = require('mongoose')
if (process.argv.length<3) {
    console.log('give password as argument')
    process.exit(1)
  }
  
  const password = process.argv[2]
  
  const url =
    `mongodb+srv://fullstack:${password}@cluster0-avadt.mongodb.net/phonebook?retryWrites=true&w=majority`
  
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  
  const noteSchema = new mongoose.Schema({
    name: String,
    number: String

  })
  
  const Person = mongoose.model('Person', noteSchema)
  
  if(process.argv[3] && process.argv[4]){
  const person = new Person({
      name: process.argv[3],
      number: process.argv[4]
  })

  person.save().then(response =>{
      console.log(`added ${process.argv[3]} number ${process.argv[4]} to phonebook`)
      mongoose.connection.close()
  })
}
  if(process.argv.length === 3){
      Person.find({}).then(persons =>{
          console.log(persons)
          mongoose.connection.close()
      })
  }

