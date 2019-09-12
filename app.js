const express=require('express');
const {PORT,ERRORS}=require('./config');
const {configErrorChecker}=require('./config-error-middleware');
let app=express();


app.use(configErrorChecker(ERRORS));

app.use(express.static('public'));



app.listen(PORT, err=>{
    if(err)
        console.log(`Error Starting Server on PORT ${PORT}`);
    else
        console.log( `Server started on PORT ${PORT}`);
});


