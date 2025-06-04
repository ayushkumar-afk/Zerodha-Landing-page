const express = require('express')
const app = express()
const port = 3000;

app.use(express.json())

const users = [{
  name:"Ayush",
  kidneys:[{
    healthof1 : false
  },
  {healthof2 : true}]
}]

//Users can check how many of the kindneys they are having with them
//JSON.stringify to Print the json one 


app.post('/',(req,res)=>{
  const NewUserDetail = req.body
  users.push(NewUserDetail)
  res.send("The new user has been added successfully")
  
})
app.get('/',(req,res)=>{
  
  res.send(`User name:- ${users[0].name},${users[1].name} <br> KidneyHeath :-${JSON.stringify(users[0].kidneys)},${JSON.stringify(users[1].kindneys)} `)
})

app.put('/',(req,res)=>{
    const UpdateKidney = req.query.howitis;
    users[0].kidneys[0].healthof1 = UpdateKidney;

    res.send("Kindney Health has been Updated Successfully")
    })

    app.delete('/',(req,res)=>{
    const whichkidney = parseInt(req.query.whichkidney);
    users[0].kidneys.splice(whichkidney,1)
    
    res.send(`${JSON.stringify(users[0])}, the no ${whichkidney}Kindney has been Deleted Successfully`)
    })







app.listen(port,()=>{
  console.log(`The port is running on the ${port}`)
})