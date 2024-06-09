/**
 * @file Contains a JavaScript function that works both on
 * server side and client side.
 */

/** 
 * Count words using a regular expression and String methods.
 * @param {string} str Source value for couting words.
 * @return {number} The word count.
 */
function countWords(str = "Lorem ipsum dolor sit amet.") {
  return str.trim().match(/\S\s|.$/g).length
}