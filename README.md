# accounts-merge

On June 21, 2022, Samantha White at [Fevo](https://fevo.com) challenged [Matt Berti](https://brti.dev) to a coding feat of strength. This is his answer.

## Run

The root folder includes only source files, compiled for execution in the `dist` folder. The easiest way is to run these with node:

`node ./dist/run.js`

### Recompile

To recompile scripts from source, run, `tsc`, which uses config at `tsconfig.json` to emit executable CJS scripts.

## Considerations

### Type safety

Input and output objects are typed based on the instructions to minimize errors prior to deployment (or code review by the Fevo Talent Team).

### Resolve conflicting types

The [instructions](instructions.txt) defined the `application` parameter on both objects as a string or a list of strings, but in the [model](accounts.json) `application` is a numerical ID. The type definitions accommodate inputs of both possibilities.

## Contributing and feedback

Please feel free to improve upon this code by sending a PR, or any direct suggestions to [mat.berti@gmail.com](email:mat.berti@gmail.com). Thank you!
