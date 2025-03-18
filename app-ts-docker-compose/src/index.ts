import express from 'express';

const app = express();


app.get('/',(req,res)=>{
    res.json({
        message: 'Hello from ts docker!'
    })
})

app.listen(3000,()=>{
    console.log(`app is running http://localhost:3000`);
})