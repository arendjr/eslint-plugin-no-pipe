/**
 * @fileoverview Disables the use of the pipe operator.
 * @author Arend van Beelen jr.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-pipe");
const { RuleTester } = require("eslint");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parser: require.resolve("@babel/eslint-parser"),
});
ruleTester.run("no-pipe", rule, {
  valid: ['console.log("Hello, World!");'],

  invalid: [
    {
      code: '"Hello, World!" |> console.log(%);',
      errors: [
        {
          message: "Avoid the use of the pipeline operator",
          type: "BinaryExpression",
        },
      ],
    },
  ],
});
