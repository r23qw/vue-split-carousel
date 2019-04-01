module.exports = {
  extends: ["standard", "plugin:vue/strongly-recommended"],
  rules: {
    indent: ["error", 2]
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
};
