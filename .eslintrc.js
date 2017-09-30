module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module",
    },
    "settings": {
      "import/resolver": "webpack"
    },
    "parser": "babel-eslint",
    "ecmaFeatures": {
        "classes": true,
        "jsx": true
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "strict": 0,
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "no-unused-vars": [2, {vars: "local"}]
    }
};
