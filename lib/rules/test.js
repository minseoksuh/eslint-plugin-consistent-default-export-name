/**
 * @fileoverview Rule to disallow unnecessary semicolons
 * @author Nicholas C. Zakas
 */

 "use strict";

 //------------------------------------------------------------------------------
 // Rule Definition
 //------------------------------------------------------------------------------
 
 module.exports = {
     meta: {
         type: "suggestion",
 
         docs: {
             description: "disallow unnecessary semicolons",
             category: "Possible Errors",
             recommended: true,
             url: "https://eslint.org/docs/rules/no-extra-semi"
         },
         fixable: "code",
         schema: [] // no options
     },
     create: function(context) {
         console.log({context})
         return {
             // callback functions

         };
     }
 };
 