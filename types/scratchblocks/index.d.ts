// Typescript doesn't know anything about scratchblocks. Usually the compiler would
// go investigate for itself in the node_modules directory, but it can't because
// scratchblocks is a peer dependency (so that users can load locales).

// To keep the compiler calm, we tell it that scratchblocks is a module that exists.
// We don't give any *useful* type information, but that's okay. Typescript will just
// treat everything as "any".

declare module "scratchblocks"
