/**
 * @file 
 * 
 * Contains onOpen simple trigger responsible of
 * creating a custom menu
 */
function onOpen(e) {
  SpreadsheetApp.getUi().createMenu('Utilities')
  .addItem('Word Counter', 'wordCounter')
  .addToUi()
}

