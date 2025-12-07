module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-prettier"
  ],
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    "no-empty-source": null,
    
    "selector-class-pattern": [
      // Expresión regular para BEM:
      // Permite bloque, bloque__elemento, bloque--modificador, y guiones internos
      "^[a-z]([a-z0-9-]+)?(__([a-z0-9]+(-[a-z0-9]+)*))?(--([a-z0-9]+(-[a-z0-9]+)*))?$",
      {
        "message": "Expected class selector to be BEM-compliant (block__element--modifier)",
        "resolveNestedSelectors": true
      }
    ],
    
    "scss/dollar-variable-pattern": null
  }
};