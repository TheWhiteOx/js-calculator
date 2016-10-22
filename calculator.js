/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

var calculatorModule = function () {
  let calculator = {};
  let memory     = 0;
  let total      = 0;
  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
   function _load(n) {

   }
  /**
   * Return the value of `total`
   * @return { Number }
   */
   function _getTotal() {

   }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
   function _add(n) {

   }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
   function _subtract(n) {

   }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   function _multiply(n) {

   }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   function _divide(n) {

   }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
   function _recallMemory() {

   }

  /**
   * Stores the value of `total` to `memory`
   */
   function _saveMemory() {

   }

  /**
   * Clear the value stored at `memory`
   */
   function _clearMemory() {

   }
  /**
   * Validation
   */
   function _validate(n) {

   }

   return {
    load: _load,
    add: _add,
    subtract: _subtract,
    multiply: _multiply,
    divide: _divide,
    recallMemory: _recallMemory,
    saveMemory: _saveMemory,
    clearMemory: _clearMemory
   }
}
