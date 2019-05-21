const express = require('express');
const app = express();

app.get('/api/users',(req,res)=>{

    res.json([
        {
            id:1,
            username:'Bearka'
        },
        {
            id:2,
            username:'Panda'
        }
    ])

})

app.get('/api/cars',(req,res)=>{

    res.json([
        {
            id:1,
            brand:'VW'
        },
        {
            id:2,
            brand:'Nissan'
        }
    ])

})

const port = process.env.port || 3001;
app.listen(3001)