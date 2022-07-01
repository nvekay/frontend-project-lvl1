module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    "import/no-named-as-default": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "always",
        "jsx": "always",
        "ts": "always",
        "tsx": "always"
      }
   ]
}
}
