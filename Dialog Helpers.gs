/**
 * Retuns the content of project file. Helpful
 * for using a the Google Apps Script editor 
 * for writing and debugging JavaScript
 * 
 * @param {string} filename The name of the file without the extension.
 */
function includeJS(filename = 'Word Counter/countWords'){
  return ScriptApp.getResource(filename).getDataAsString();
}
