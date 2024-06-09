/**
 * The result parameter and the expected parameter are strictly equal.
 * @param {*} result
 * @param {*} expected
 * @return {string} Returns Success or Failure
 */
function assert_(result, expected){
    if(result === expected) {
      return 'Success';
    } else {
      return 'Failure';
    }
  }
