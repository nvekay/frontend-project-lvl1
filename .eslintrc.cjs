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
    "parser": "babel-eslint",
    'no-console': 'on',
    "import/no-named-as-default": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "import/no-named-as-default": 0,
        "js": "always",
        "jsx": "always",
        "ts": "always",
        "tsx": "always"
      }
   ]
}
}
