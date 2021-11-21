const createTestCafe = require("testcafe");
const yargs = require('yargs')
const fse = require('fs-extra')
const stream = fse.createWriteStream('result.xml');

const argv = yargs.options({
    'browser': {
        alias: 'b',
        describe: 'choose browser that you wanna run tests on',
        default: 'chrome'
    },
    'test': {
        alias: 't',
        describe: 'choose test folder for execution',
        default: 'tests/*.spec.js',
        choices: ['tests/smoke', 'tests/regression']
    }
}).help()
    .argv

const {
    ENVIRONMENT
} = process.env

async function runTest() {
    const testcafe = await createTestCafe(null, 1337, 1338);
    const runner = await testcafe.createRunner();
    console.log('Environment:', ENVIRONMENT)
    runner
        .src(argv.test)
        .browsers(argv.browser)
        //.reporter('spec')
        .reporter('xunit', stream)
        .screenshots('test-reports/screenshots', true)
        .run({
            selectorTimeout: 20000,
            assertionTimeout: 120000,
            pageLoadTimeout: 60000,
            speed: 0.5
        })
        .then(failed => {
            console.log(failed + " Tests failed");
            testcafe.close();
            process.exit(failed);
        });
};

runTest()