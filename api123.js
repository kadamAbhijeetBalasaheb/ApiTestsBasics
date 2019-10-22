const apiTests = function() {
    
    const request = require('supertest');

    request('http://restcountries.eu')
    .get('/rest/v2/name/aruba?fullText=true')
    .end(function (err, res) {
        if (err){
            console.log(res.body);
            return done(err);
        }
        console.log(res.body);

})
}


apiTests();