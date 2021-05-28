const express = require("express")
const fs = require('fs');

const app = express()



app.use(express.json())
app.get("/",(req,res)=>{
    fs.readdir('../../../../../../guvi_course', function (err, files) {
    
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        let finalString = ""
        files.forEach(function (file) {
            
            if(file.includes('.')) {
                console.log('file '+file)
                finalString+=`<br><label for=""><img src="https://img.icons8.com/bubbles/50/000000/file.png"/>${file}</label>`
                
            }
            else{
                console.log('folder '+file)
                finalString+=`<br><label for=""><img src="https://img.icons8.com/emoji/50/000000/open-file-folder-emoji.png"/>${file}</label>`
            }
        });
        res.send(finalString)
    });
})

app.listen(4000)