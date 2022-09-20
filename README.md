# eslint-plugin-no-pipe

An [ESLint](https://eslint.org/) plugin to disable the use of the pipe operator.

# Rule Details

Examples of **incorrect** code for this rule:

```js
"Hello, World!" |> console.log(%);
```

Examples of **correct** code for this rule:

```js
console.log("Hello, World!");
```

# Motivation

The pipeline operator currently sits at Stage 2 as an ECMAScript proposal:
https://github.com/tc39/proposal-pipeline-operator

While this proposal was started with the best of intentions, the current
iteration (also known as the _Hack_ proposal) is a far stretch from what many
people had hoped the pipeline operator would bring. In fact, the proposal is so
far-stretched that many people (including me) believe it would be better to have
_no_ pipeline operator at all, than the one proposed right now.

This lint rule has two purposes:

- It serves to raise awareness so we can hopefully prevent the proposal from
  reaching Stage 3 (at which point the proposal can no longer be reversed unless
  there are serious implementation difficulties).
- If the proposal _is_ accepted, this lint rule will be an unfortunate necessity
  for people who wish to avoid the pipeline operator in their codebases.

## Why you might want to avoid the pipeline operator

The pipeline operator is a potentially useful operator that enables functional
composition, and can indeed be used to make a series of operations (a
_pipeline_) more readable in code.

**Unfortunately, that's not what the Hack proposal is.** Instead, the current
proposal is _yet another_ method of doing _expression_ composition. The
difference is that Hack is applicable _everywhere_ in the language where
expressions can be used, which is indeed almost everywhere. Because of this
broad scope, it allows you not only to rewrite `console.log("Hello, World!");`
as `"Hello, World!" |> console.log(%);`, but also `a[0]` as `a |> %[0]` or
`0 |> a[%]`.

Does it matter? As tools such as Prettier have shown, developers like to avoid
bikeshedding over style arguments by delegating such choices to tools. And this
is great; by forcing a certain amount of uniformity over code, people have fewer
issues reading each other's code. Unfortunately, Hack is about to undo this
progress by inventing an alternative expression syntax that permeates the entire
language.

How do you define which usages of the pipeline operator are sensible, and which
are obviously undesirable? With an operator that is restricted to functional
composition, this question can be reasonable scoped. But with the Hack proposal,
I see no better way to avoid these arguments than to avoid the operator
entirely.

**Do you want your child to learn to code using `"Hello, World!" |> console.log(%);`?**

I didn't think so! Please star this repository, and hopefully we can stop the
Hack proposal ;)

## Further reading

- [Effect of Hack proposal on code readability](https://github.com/tc39/proposal-pipeline-operator/issues/225)
- [JavaScript Pipe Operator Proposal: A Battle of Perspectives](https://arendjr.nl/2021/09/js-pipe-proposal-battle-of-perspectives.html)

# Installation

```sh
yarn add -D eslint-plugin-no-pipe
```

Or:

```sh
npm install eslint-plugin-no-pipe --save-dev
```

## Usage

Add `no-pipe` to the plugins section of your `.eslintrc` configuration file. You
can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["no-pipe"]
}
```

Then add the rule under the rules section:

```json
{
  "rules": {
    "no-pipe/no-pipe": 2
  }
}
```
