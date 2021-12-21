module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@types": "./src/@types",
          "@controllers": "./src/controllers",
          "@database": "./src/database",
          "@models": "./src/models",
          "@services": "./src/services",
          "@middlewares": "./src/middlewares",
          "@repositories": "./src/repositories",
          "@routes": "./src/routes",
          "@utils": "./src/utils",
        },
      },
    ],
    ["@babel/plugin-transform-flow-strip-types"],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties"],
  ],
  ignore: ["__tests__"],
};
