# rustictest
A ridiculously lightweight, dependency-free, in-browser JavaScript testing suite.

## Usage
* Step 1.) Instantiate the RusticTest class (var tests = new RusticTest()).
* Step 2.) Run your tests (tests.assertEquals('1+1=2',2,'1+1')).
* Step 3.) Display the results (tests.testResults()).

## Methods
### Tests
**assert(testName, value, info = '')**

Test if the passed value is true.
* @param {string} testName Name of your test (i.e. 'multiplicationTest').
* @param {any} value Value to be tested for truthiness (i.e. false).
* @param {string} info Optional human-readable information to display in test logs (i.e. 'Does 4 * 3 = 12?').

**assertEquals(testName, expected, actual, info = '')**

Test if the passed value is equal to the expected value.
* @param {string} testName Name of your test (i.e. 'multiplicationTest').
* @param {any} expected What the value should be (i.e. 7).
* @param {any} actual The value to be tested (i.e. 8).
* @param {string} info Optional human-readable information to display in test logs (i.e. 'Does 4 * 3 = 12?').

**assertStrictEquals(testName, expected, actual, info = '')**

Test if the passed value is equal to and of the same type as the expected value.
* @param {string} testName Name of your test (i.e. 'multiplicationTest').
* @param {any} expected What the value should be (i.e. 7).
* @param {any} actual The value to be tested (i.e. 8).
* @param {string} info Optional human-readable information to display in test logs (i.e. 'Does 4 * 3 = 12?').

### Directly pass or fail without a test
**pass(testName, testType, msg)**

Log a success directly without using a test method.
* @param {string} testName Name of your test (i.e. 'multiplicationTest').
* @param {string} testType Type of test (i.e. 'assertEquals').
* @param {string} msg Informational message about what the test did (i.e. '7 != 6').

**fail(testName, testType, msg)**

Log a failure directly without using a test method.
* @param {string} testName Name of your test (i.e. 'multiplicationTest').
* @param {string} testType Type of test (i.e. 'assertEquals').
* @param {string} msg Informational message about what the test did (i.e. '7 != 6').

### Process results
**testResults(silent = false)**

Display the results of the tests that were performed.
* @param {boolean} silent If true, displays results in console only. If false, displays a summary in HTML.

### Misc
**initData()**

Reset test data back to default.

## License
rustictest is licensed under the MIT License. Please see the attached license file for more information.
