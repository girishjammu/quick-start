const context = require('aws-lambda-mock-context');
var expect = require('chai').expect;
var index = require('../src/index');

const ctx = context();

describe("Testing an intent", function(){
    var speechResponse = null;
    var speechError = null;

    before(function(done){
        index.Handler({},ctx);
        ctx.Promise.then(response => {speechResponse = response; console.log(speechResponse); done();})
        .catch(error => {speechError = error; done();})
    });
})