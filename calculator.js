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
    _validate(n);
    total = n;
    return total
   }
  /**
   * Return the value of `total`
   * @return { Number }
   */
   function _getTotal() {
    return total
   }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
   function _add(n) {
    _validate(n);
    total = total + n;
    return total
   }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
   function _subtract(n) {
    _validate(n);
    total = total - n;
    return total
   }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   function _multiply(n) {
    _validate(n);
    total = total * n;
    return total
   }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   function _divide(n) {
    _validate(n);
    total = total / n;
    return total
   }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
   function _recallMemory() {
    return memory
   }

  /**
   * Stores the value of `total` to `memory`
   */
   function _saveMemory() {
    memory = total;
    return memory
   }

  /**
   * Clear the value stored at `memory`
   */
   function _clearMemory() {
    memory = 0;
    return memory
   }
  /**
   * Validation
   */
   function _validate(n) {
    if (typeof n !== 'number') {
      throw new Error("Not a valid number!");
    }
   }

   return {
    load: _load,
    getTotal: _getTotal,
    add: _add,
    subtract: _subtract,
    multiply: _multiply,
    divide: _divide,
    recallMemory: _recallMemory,
    saveMemory: _saveMemory,
    clearMemory: _clearMemory
   }
}
