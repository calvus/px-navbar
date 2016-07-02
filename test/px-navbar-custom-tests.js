// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here
  suite('<px-navbar>', function () {
    var element = document.getElementById('fixture');
    test('it should have render', function () {
      assert.ok(element);
    });
    test('it should have title', function () {
      assert(element.title);
      assert.equal(element.title, 'WCT');
    });
    test('it should have sub-title', function () {
      element.subtitle = 'Unit Tests';
      assert.equal(element.subtitle, 'Unit Tests');
    });
    test('it should change title to current page title.', function () {
      element.title = 'Test Title';
      assert.equal(element.title, 'Test Title');
    });
    suite('Theme', function () {
      test('is should change theme to primary', function () {
        element.theme = 'primary';
        assert.equal(element.theme, 'primary');
      });
      test('is should change theme to chrome', function () {
        element.theme = 'chrome';
        assert.equal(element.theme, 'chrome');
      });
      test('is should change theme to dark', function () {
        element.theme = 'dark';
        assert.equal(element.theme, 'dark');
      });
    });
    suite('Back Button', function () {
      test('is not visible by default', function () {
        assert.equal(element.back, false);
      });
      test('it should be visible', function () {
        element.back = true;
        assert.equal(element.back, true);
      });
      test('it should change back button text', function () {
        element.backBtnLabel = 'Back to Settings';
        assert.equal(element.backBtnLabel, 'Back to Settings');
      });
    });

    suite('Methods', function () {
      test('attached() - Should add proper classes to element', function () {
        var shadowNavbar = document.getElementById('fixture_shadow');
        assert(shadowNavbar.$.navbar.classList.contains('navbar--shadow'));
        assert(shadowNavbar.shadow === true);
        var fixedNavbar = document.getElementById('fixture_fixed');
        assert(fixedNavbar.$.navbar.classList.contains('navbar--fixed'));
        assert(fixedNavbar.fixed === true);
      });
      test('hide() - hides element', function () {
        element.hide();
        assert(element.isHidden === true);
      });
      test('show() - shows element', function () {
        element.show();
        assert(element.isHidden === false);
      });
      test('toggle() - (hide) toggles visiblity of element', function () {
        element.toggle();
        assert(element.isHidden === true);
      });
      test('toggle() - (show) toggles visiblity of element', function () {
        element.toggle();
        assert(element.isHidden === false);
      });
      test('getHeight() - returns element height', function () {
        assert.ok(element.getHeight);
      });

      test('px-page should set reference on child navbar', function () {
        var page = document.getElementById('page1');
        assert(page);
        var navbar = page.navbar;
        assert(navbar);
        assert(document.getElementById('page1navbar') === navbar);
      });

      test('getCurrentPage() - returns the current px-page', function (done) {
        var pagesFixture = document.getElementById('pagesFixture');
        var currentPage = pagesFixture.getSelectedPage();
        setTimeout(function () {
          assert.equal(pagesFixture.getSelectedPage().id, currentPage.id);
          done();
        }, 500);
      });

    });
    suite('Events', function () {
      test('_handleBackClick() - fires px-navbar-back when back button is pressed', function (done) {
        element.addEventListener('px-navbar-back', function (event) {
          assert(event);
          done();
        });
        element._handleBackClick();
      });
      test('_handleNaviconClick() - dispatches px-navbar-toggle event', function (done) {
        element.addEventListener('px-navbar-toggle', function (event) {
          assert(event);
          done();
        });
        element._handleNaviconClick();
      });
    });

    suite('Back Button', function(){
      var pagesFixture = document.getElementById('pagesFixture');
      test('getCurrentPage() - returns the current px-page', function () {
        var currentPage = pagesFixture.getSelectedPage();
        var navbar = currentPage.navbar;
        assert(currentPage);
      });

      test('navbar should NOT show back button if on main page', function (done) {
        setTimeout(function () {
          var currentPage = pagesFixture.getSelectedPage();
          var navbar = currentPage.navbar;
          assert(currentPage.main);
          assert(navbar.back === false);
          done();
        }, 500);
      });

      test('navbar should show back button if not on main page', function (done) {
        pagesFixture.next();
        setTimeout(function () {
          var currentPage = pagesFixture.getSelectedPage();
          var navbar = currentPage.navbar;
          assert(!currentPage.main);
          assert.ok(navbar.back);
          done();
        }, 500);
      });

    });


  });
}
