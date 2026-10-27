
class CustomReporter {
  onTestEnd(test, result) {
    console.log(
      `[TEST] ${test.title} | ${result.status.toUpperCase()} | ${result.duration} ms`
    );
  }
}

module.exports = CustomReporter;
