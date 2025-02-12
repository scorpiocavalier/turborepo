module.exports = {
  root: true,
  extends: ["@repo/esling-config/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname
  }
};
