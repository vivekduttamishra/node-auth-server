require('dotenv').config();

let port=5000;
if (process.env.PORT)
    port=+process.env.PORT

const Errors=function(){
    this.errors=0; 
    this.keys={ 

    }
    this.add=function(key,message){
        this.keys[key]=message;
        this.errors++;
    }
}

errors=new Errors();

if(!process.env.CONSTR)
    errors.add('CONSTR', 'Required for connecting to MONGO DB');

if(!process.env.ADMIN_PASSWORD)
errors.add('ADMIN_PASSWORD','Required for site administration');


module.exports={
    PORT:  port,
    ERRORS:errors
};

