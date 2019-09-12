


const configErrorChecker= function(error){

    return function(req,res,next){
        console.log('reporting missing keys...')
        if (errors && errors.errors>0){
            res.contentType("text/html");
            res.write('<h1>Error Starting APP</h1>');
            res.write(`<p>Import config elements missing </p>`);
            res.write('<hr/>');
            res.write(`<ul>`);
            for(const key in errors.keys){
                res.write(`<li>${key}:${errors.keys[key]}</li>`);
            }
            res.write(`</ul>`);
            res.write('<hr/>');
            res.write(`APP can't start`);
            res.write(`ADD These keys as <strong>ENVIRONMENT VARIABLES</strong> or <strong>.env</strong>`);
            res.end();
        } else{
            console.log('no missing keys')
            next()
        }
    }
};

module.exports.configErrorChecker=configErrorChecker;

