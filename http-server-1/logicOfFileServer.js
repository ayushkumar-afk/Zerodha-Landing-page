const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();
const port = 3001;
app.use(express.json())

app.get('/:foldername/:filename',(req,res)=>{
  // const HowManyFilesIneed = 5;
  //THIS IS HERE HOW I HAVE CREATED THE DIRECTORY WHICH IS FILES

//  fs.mkdir(path.join(__dirname,`./files`),{recursive: true},(err)=>{
//   if(err){
//     res.send(`we found an ${err}`)
//   }else{
//     res.send("The folder has been Created Successfully")
//   }
//  })
//THIS IS HOW I HAVE CREATED THE FILES FROM 1 TO 5

// for( let i =1; i<=HowManyFilesIneed;i++){
//   fs.writeFile(`./files/FirstFile100xdev${i}.txt`,"This is the start only",(err)=>{
  
//   const filename = path.basename(`./files/FirstFile100xdev.txt`)
//   if(err){
//     if(err.code == 'EEXIT'){
//       res.send(`Caught the EEXIT error check the Syntax  again`)
//     }else{
//       res.send(`The file :- ${filename} has been Created Successfully`)
//     }
//   }
//  })
//   }

//SHOW THE FILES OF THE DIRECTORY AND PRINT THEN THEM IN THE JSON FORMAT


const foldername = req.params['foldername'];
const filename = req.params['filename']

//const DirectoryLength = fs.readdirSync(DirectoryName).length;
// fs.readdir(DirectoryName,(err,files)=>{
//   var DirectoryLength = files.length;
// })

if(typeof foldername !== 'string' || typeof filename !== "string"){

   res.status(500).send(`Please provide a correct format of ${foldername} and ${filename}`)
   } 

   const FullPathofFilename = path.join(__dirname,foldername,filename)
   const fullpathOfFolder = path.join(__dirname,foldername)


   fs.readFile(FullPathofFilename,"utf-8",(err,data)=>{
    if(err){
      console.error(`There is an ${err}`);
      return res.status(404).send('File not Found')
    }

    fs.readdir(fullpathOfFolder,(err,files)=>{
    if(err){
      return res.status(404).send('Directory not Found')
    }


    res.json({
          message:"File was read Successfully",
          content:data,
          filesInFolder:files,
        });
    
   })
   
   })

   
  
   


 
})

app.listen(port,()=>{
  console.log(`The post is listining at ${port}`)
})






