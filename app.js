const express=require('express');
const {PORT,ERRORS}=require('./config');
const {configErrorChecker}=require('./config-error-middleware');
let app=express();


app.use(configErrorChecker(ERRORS));



app.use((req,res)=>{
    
    res.send(`<h1>Under Construction!</h1>`);
});

app.listen(PORT, err=>{
    if(err)
        console.log(`Error Starting Server on PORT ${PORT}`);
    else
        console.log( `Server started on PORT ${PORT}`);
});


