// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here
  suite('<px-navbar>', function() {
    var element = document.getElementById('fixture');

    test('it should have render', function() {
      assert.ok(element);
    });

    test('it should have title', function() {
      assert(element.title);
      assert.equal(element.title, 'WCT');
    });

    test('it should have sub-title', function() {
      element.subtitle = 'Unit Tests';
      assert.equal(element.subtitle, 'Unit Tests');
    });

    test('it should change title to current page title.', function() {
      element.title = 'Test Title';
      assert.equal(element.title, 'Test Title');
    });


    suite('Theme', function() {
      test('is should change theme to primary', function() {
        element.theme = 'primary';
        assert.equal(element.theme, 'primary');
      });

      test('is should change theme to chrome', function() {
        element.theme = 'chrome';
        assert.equal(element.theme, 'chrome');
      });

      test('is should change theme to dark', function() {
        element.theme = 'dark';
        assert.equal(element.theme, 'dark');
      });

    });

    suite('Back Button', function() {
      test('is not visible by default', function() {
        assert.equal(element.back, false);
      });

      test('it should be visible', function() {
        element.back = true;
        assert.equal(element.back, true);
      });

      test('it should change back button text', function() {
        element.backBtnLabel = 'Back to Settings';
        assert.equal(element.backBtnLabel, 'Back to Settings');
      });

    });
  });
  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases
  /*
	suite('Custom Automation Tests for px-navbar', function() {

    test('Check initial value of counter', function(done) {
			var counterEl = Polymer.dom(document).querySelector('px-navbar'),
				counterValueEl = Polymer.dom(counterEl.root).querySelector('span');
			assert.equal(counterValueEl.textContent, '0');
			done();
		});

		test('Clicking px-sample-component increments the counter', function(done) {
			var counterEl = Polymer.dom(document).querySelector('px-navbar'),
				counterValueEl = Polymer.dom(counterEl.root).querySelector('span');
			assert.equal(counterValueEl.textContent, '0');

			counterEl.click();
			flush(function() {
				assert.equal(counterValueEl.textContent, '1');
			});
			done();
		});
	});
  */
};
