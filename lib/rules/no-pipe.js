/**
 * @fileoverview Disables the use of the pipeline operator.
 * @author Arend van Beelen jr.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disables the use of the pipeline operator.",
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      BinaryExpression(node) {
        if (node.operator === "|>") {
          context.report(node, "Avoid the use of the pipeline operator");
        }
      },
    };
  },
};
