/**
 * Postman test_api_fl@g@di_v2.js
 * Script file : test_api_fl@g@di_v2.js
 * Version : 1.0
 * Description: API fl@g@di V1 BDD Test via NPM
 * Collection : Few data are available in the directory resources-test
 * Method: GET
*/


'use stricts'
let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

/**
 * Define constants (const)
 */

const url= 'http://localhost:3000';
const ApiVersion = '/api/v2/';
const app = require('../controllers/api');
const request = require('supertest');
const expect = require('chai').expect;

/**
 * Define values for path
 */
var path_for_flag = "/api/v2/flag/";
var path_for_capital = "/api/v2/capital/";
var path_for_language = "/api/v2/language/";
var path_for_tld = "/api/v2/tld/"
var path_for_area = "/api/v2/area/";
var path_for_borders = "/api/v2/name/";

/* FUNCTIONS AND VALUES */


/**
 * Testing get the country flag
 */
    var data_flag = require("../resources-test/flags_data_sample.postman_sample_data.json");
    function itShouldTestFlags(i, path) {
               it(' flag should be deep equal ' + data_flag[i].guid, function(done) {
                chai.request(url)
                .get(''+path+''+data_flag[i].guid+'')
                .end( function(err,res){
                
                // DEBUG 
                // console.log(res.body)
                
                expect(res.body).to.have.property('flag');
                expect(res.body.flag[0]).to.deep.equal(data_flag[i].guid);
                expect(res).to.have.status(200);
                done();
                });
            });
        }
/**
 * Testing get the country capital
 */
    var data_capital = require("../resources-test/capital_data_sample.postman_sample_data.json");
    function itShouldTestCapitals(i, path) {
           it(' capital should be deep equal ' + data_capital[i].guid, function(done) {
            chai.request(url)
            .get(''+path+''+data_capital[i].guid+'')
            .end( function(err,res){

            // DEBUG            
            // console.log('res.body[0].capital => '+res.body[0].capital+'')
            // console.log('data_capital[i].guid => '+data_capital[i].guid+'')

            expect(res.body[0]).to.have.property('capital');
            expect(res.body[0].capital).to.deep.equal(data_capital[i].guid);
            expect(res).to.have.status(200);
            done();
            });
        });
    }

 /**
 * Testing get the country by language
 */
    var data_languages = require("../resources-test/languages_data_sample.postman_sample_data.json");
    function itShouldTestLanguages(i, path) {
           it(' nativeLanguage should be deep equal ' + data_languages[i].guid, function(done) {
            chai.request(url)
            .get(''+path+''+data_languages[i].guid+'')
            .end( function(err,res){
            
            // DEBUG            
            // console.log('res.body[0].nativeLanguage => '+res.body[0].nativeLanguage+'')
            // console.log('data_languages[i].guid => '+data_languages[i].guid+'')
            
            expect(res.body[0]).to.have.property('nativeLanguage');
            expect(res.body[0].nativeLanguage).to.deep.equal(data_languages[i].guid);
            expect(res.body[0].nativeLanguage.length).to.equal(3);
            expect(res).to.have.status(200);
            done();
            });
        });
    }

 /**
 * Testing get the country by tld (top level domain)
 */
    var data_tld = require("../resources-test/tld_data_sample.postman_sample_data.json");
    function itShouldTestTld(i, path) {
               it(' tld should be deep equal ' + data_tld[i].guid, function(done) {
                chai.request(url)
                .get(''+path+''+data_tld[i].guid+'')
                .end( function(err,res){

                // DEBUG            
                // console.log('res.body.tld[0] => '+res.body.tld[0]+'')
                // console.log('data_tld[i].guid => '+data_tld[i].guid+'')


                expect(res.body).to.have.property('tld');
                expect(res.body.tld[0]).to.deep.equal(data_tld[i].guid);
                expect(res.body.tld[0].length).to.equal(3);
                expect(res.body.tld[0]).to.be.a("string").and.not.empty;
                expect(res).to.have.status(200);
                done();
                });
            });
        }
/**
 * Testing get the country by area
 */
 var data_area = require("../resources-test/area_data_sample.postman_sample_data.json");
    function itShouldTestArea(i, path) {
               it(' area for '+data_area[i].cca3+' should be deep equal '+data_area[i].guid+' ', function(done) {
                chai.request(url)
                .get(''+path+''+data_area[i].guid+'')
                .end( function(err,res){

                // DEBUG            
                // console.log('res.body.area => '+res.body.area+'');
                // console.log('data_area[i].guid => '+data_area[i].guid+'')

                expect(res.body).to.have.property('area');
                expect(res.body.area).to.deep.equal(data_area[i].guid);
                expect(res.body.area).to.be.a("string").and.not.empty;
                expect(res).to.have.status(200);
                done();
                });
            });
        }

/**
 * Testing get the country by borders
 */

 var data_borders = require("../resources-test/borders_data_sample.postman_sample_data.json");
    function itShouldTestBorders(i, path) {


               it(' DATA borders for '+data_borders[i].guid+' should be deep equal to API borders for '+data_borders[i].guid+' ', function(done) {
                chai.request(url)
                .get(''+path+''+data_borders[i].guid+'')
                .end( function(err,res){

                // DEBUG            
                // console.log('res.body.borders => '+res.body.borders+'');
                // console.log('data_borders[i].borders => '+data_borders[i].borders+'')

                expect(res.body).to.have.property('borders');
                expect(res.body.borders).to.deep.equal(data_borders[i].borders);
                expect(res).to.have.status(200);
                done();
                });
            });
        }


/* // FUNCTIONS AND VALUES */

/**
 * Testing get all countries endpoint
 */


/**
 * Testing get the country flag
 */
 
    describe('Get the country with flag', function() {
        describe('For each flag ()', function() {
            for(i = 0; i < data_flag.length; i++) {
            var path=path_for_flag;
            itShouldTestFlags(i, path);
            }
        });
    });


/**
 * Testing get the country capital
 */
 
    describe('Get the country with capital', function() {
        describe('For each capital ()', function() {
            for(i = 0; i < data_capital.length; i++) {
            var path=path_for_capital;
            itShouldTestCapitals(i, path);
            }
        });
    });


 /**
 * Testing get the country by language
 */
 
    describe('Get the countries with language', function() {
        describe('For each language ()', function() {
            for(i = 0; i < data_languages.length; i++) {
            var path=path_for_language;
            itShouldTestLanguages(i, path);
            }
        });
    });


 /**
 * Testing get the country by tld (top level domain)
 */

    describe('Get the countries with tld', function() {
        describe('For each tld ()', function() {
            for(i = 0; i < data_tld.length; i++) {
            var path=path_for_tld;
            itShouldTestTld(i, path);
            }
        });
    });

/**
 * Testing get the country by area (number)
 */

 describe('Get the countries with area', function() {
        describe('For each area ()', function() {
            for(i = 0; i < data_area.length; i++) {
            var path=path_for_area;
            itShouldTestArea(i, path);
            }
        });
    });


/**
 * Testing get the country by area (number)
 */

 describe('Get the countries with borders', function() {
        describe('For each country the borders should be ()', function() {
            for(i = 0; i < data_borders.length; i++) {
            var path=path_for_borders;
            itShouldTestBorders(i, path);
            }
        });
    });


/* // TESTS */
