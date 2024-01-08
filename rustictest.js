/**
 * RusticTest.js
 * v1.0.0
 * https://github.com/gar-mil/rustictest
 * 
 * A ridiculously lightweight, no dependencies, in-browser JavaScript testing suite.
 * 
 * Usage:
 * Step 1.) Instantiate the RusticTest class (var tests = new RusticTest()).
 * Step 2.) Run your tests (tests.assertEquals('1+1=2',2,'1+1')).
 * Step 3.) Display the results (tests.testResults()).
 */
export class RusticTest
{
    constructor()
    {
        // Set the default test data.
        this.failNum = 0;
        this.passNum = 0;
        this.failInfo = [];
        this.passInfo = [];
    }

    initData()
    {
        // Reset test data back to default.
        this.failNum = 0;
        this.passNum = 0;
        this.failInfo = [];
        this.passInfo = [];
    }

    /**
     * Log a failure directly without using a test method.
     * @param {string} testName Name of your test (i.e. 'multiplicationTest').
     * @param {string} testType Type of test (i.e. 'assertEquals').
     * @param {string} msg Informational message about what the test did (i.e. '7 != 6').
     */
    fail(testName, testType, msg) 
    {
        this.failNum++;
        let fullMsg = 'FAIL '+testName+' - '+testType+': '+msg;
        this.failInfo.push(fullMsg);
        console.error(fullMsg);
    }

    /**
     * Log a success directly without using a test method.
     * @param {string} testName Name of your test (i.e. 'multiplicationTest').
     * @param {string} testType Type of test (i.e. 'assertEquals').
     * @param {string} msg Informational message about what the test did (i.e. '7 != 6').
     */
    pass(testName, testType, msg)
    {
        this.passNum++;
        let fullMsg = 'PASS '+testName+' - '+testType+': '+msg;
        this.passInfo.push(fullMsg);
        console.log(fullMsg);
    }

    /**
     * Test if the passed value is true.
     * @param {string} testName Name of your test (i.e. 'multiplicationTest').
     * @param {any} value Value to be tested (i.e. false)
     * @param {string} info Informational message about what the test did (i.e. 'Does element 7 exist?').
     */
    assert(testName, value, info = '') 
    {
        if (!value) 
        {
            this.fail(testName, 'assert', info);
        }
        else
        {
            this.pass(testName, 'assert', info);
        }
    }

    /**
     * Test if passed value is equal to the expected value.
     * @param {string} testName Name of your test (i.e. 'multiplicationTest').
     * @param {any} expected What the value should be if the test passes (i.e. 7).
     * @param {any} actual The value to be tested (i.e. 8).
     * @param {string} info Optional information to display in test logs.
     */
    assertEquals(testName, expected, actual, info = '') 
    {
        if (expected != actual) 
        {
            this.fail(testName, 'assertEquals', expected + ' != ' + actual + ' ' + info);
        }
        else
        {
            this.pass(testName, 'assertEquals', expected + ' == ' + actual + ' ' + info);
        }
    }

    /**
     * Test if passed value is equal to and of the same type as the expected value.
     * @param {string} testName Name of your test (i.e. 'multiplicationTest').
     * @param {any} expected What the value should be if the test passes (i.e. 7).
     * @param {any} actual The value to be tested (i.e. 8).
     * @param {string} info Optional information to display in test logs.
     */
    assertStrictEquals(testName, expected, actual, info = '') 
    {
        if (expected !== actual) 
        {
            this.fail(testName, 'assertStrictEquals', expected + ' !== ' + actual + ' ' + info);
        }
        else
        {
            this.pass(testName, 'assertStrictEquals', expected + ' === ' + actual + ' ' + info);
        }
    }

    /**
     * Display the results of the tests that were performed.
     * @param {boolean} silent If true, displays results in console only. If false, displays a summary in HTML.
     */
    testResults(silent = false)
    {
        var passBold = '';
        var failBold = '';
        var passDesc = '';
        var failDesc = '';
        var totalNum = this.passNum+this.failNum;
        if (silent === true)
        {
            console.log('Passed tests: '+this.passNum);
            console.log('Failed tests: '+this.failNum);
            console.log('Total tests: '+totalNum);
        }
        else
        {
            this.passNum > 0 ? passBold='font-weight:bold;':passBold='';
            this.failNum > 0 ? failBold='font-weight:bold;':failBold='';
            var passHtml = '<div style="color:green;'+passBold+'">Passed tests: '+this.passNum+'</div>';
            var failHtml = '<div style="color:red;'+failBold+'">Failed tests: '+this.failNum+'</div>';
            var totalHtml = '<div style="color:black;font-weight:bold;">Total tests: '+totalNum+'</div>';
            this.passInfo.length > 0 ? this.passInfo.forEach((ele) => {passDesc = passDesc+'<div>'+ele+'</div>'}) : '';
            this.failInfo.length > 0 ? this.failInfo.forEach((ele) => {failDesc = failDesc+'<div style="color:red;font-weight:bold;">'+ele+'</div>'}) : '';
            var combinedResults = passHtml+failHtml+totalHtml+'<hr />'+passDesc+failDesc;
            document.body.innerHTML = combinedResults;
        }
    }
}
