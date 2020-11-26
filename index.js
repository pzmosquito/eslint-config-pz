module.exports = {
    "extends": "airbnb",
    "rules": {
        // line length
        "max-len": ["warn", { "code": 250, "tabWidth": 4, "ignoreComments": true, "ignoreUrls": true }],
        // Allow double to be used for strings.
        "quotes": ["error", "double"],
        // four space indent
        "indent": ["error", 4, { "SwitchCase": 1 }],
        // Stroustrup brace style
        "brace-style": ["error", "stroustrup"],
        // just chain calls reasonably, don't make it hard to read
        "newline-per-chained-call": ["off"],
        // disallow trailing whitespace at the end of lines
        "no-trailing-spaces": ["error", { "skipBlankLines": true }],
        // use line breaks inside braces reasonably
        "object-curly-newline": ["error", { "consistent": true }],
        // warn unused variables, useful when playing around with UI components
        "no-unused-vars": ["warn"],

        // four space indent
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        
        // this rules isn't really making sense when using mobx @observable class properties.
        "react/sort-comp": ["off"],

        // too restrictive
        "class-methods-use-this": ["off"],
    }
};