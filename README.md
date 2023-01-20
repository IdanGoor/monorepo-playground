# Monorepo Playground
We have 3 packages:
- utils (internal)
- ui (external)
- components (external)


The ui package is deopended on the utils, and the components package depended on the ui and utils packages.

Only the ui and components package should be published to NPM, so they can be cosumed by others. The utils package, on the other hand, is meant to be used only in this repository, hence "internal".