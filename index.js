module.exports = function(content) {

  this.cacheable && this.cacheable();

  // Escape backticks and backslashes: “`” ⇒ “\`”, “\” ⇒ “\\”
  var escapedContent = content.replace(/[`\\]/g, function(match) {
    return "\\" + match;
  });

  var scope = ""; /// Scoped
  if (escapedContent.startsWith("/* @styled-jsx=global */")) {
    scope = ".global";
  }
  else if (escapedContent.startsWith("/* @styled-jsx=resolve */")) {
    scope = ".resolve";
  }

  return "import css from 'styled-jsx/css';\n\nexport default css" + scope + "`" + escapedContent + "`;";

};
