import express from 'express'

const app=express();

app.use('/api/test',(req,res)=>{
    res.send('hello here')
})
app.listen(8800,()=>{
    console.log('successfully connected!');
    
})