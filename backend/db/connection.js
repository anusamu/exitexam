const mongoose=require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.mongoDB_URL).then(()=>{
    console.log('CONNECTION OK');
}).catch(()=>{
    console.log('CONNECTION ERROR')
})