/**
 * @file Contains the main function of the word counter.
 */

/**
 * Shows the word counter user interface using a modal dialog.
 */
function wordCounter() {
  const dialog = HtmlService.createTemplateFromFile('Word Counter/index').evaluate();
  SpreadsheetApp.getUi().showModalDialog(dialog,"Word Counter");
}
