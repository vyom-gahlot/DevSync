import express from 'express';



const app = express();


app.get('/',(req,res)=>(res.send('API is working')))

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log('server is listening on port' + PORT)
})