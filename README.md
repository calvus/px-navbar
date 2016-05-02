# px navbar
This repository contains the web components for px navbar.


## Usage
To use this component simply use the following example:

```
<px-navbar id="navbar1" title="Navbar Title">
	<div class="navbar__left">
		
	</div>
	<div class="navbar__center">
  		
  </div>
	<div class="navbar__right">
		
	</div>
</px-navbar>
```


### Options
You can customize the appearance of the component by changing the following properties:

1. `title` - This represents the title of the navbar.
2. `subtitle` - This represents the sub-title of the navbar.
3. `theme` - This is the default color theme to apply. (white, dark, primary, chrome, transparent)

> There are more options available as the documentation page defines.

## Customizing
To add custom contents inside the navbar you can do something like below:

```
<div class="navbar__left">
	<button class="navbar__button" onclick="document.getElementById('myLeftDrawer').toggle()">
		<i class="fa fa-lg fa-bars"></i>
	</button>
</div>
<div class="navbar__right">
	<button class="navbar__button" onclick="document.getElementById('myOtherDrawer').toggle()">
		<i class="fa fa-lg fa-ellipsis-v"></i>
	</button>
</div>
```


## Example
The following is an example of using the `px-navbar` component with the `px-drawer` component to create an off-canvas navigation experience.

### Usage with Sidebar

```
<link rel="import" href="../px-sidebar/px-sidebar.html">
<px-navbar id="myNavbar" sidebar-container="mySidebar" title="px-navbar demo">
	<px-button class="navbar__button"
		icon="navicon"
		theme="tertiary"
		onclick="document.getElementById('mySidebar').toggle()"></px-button>
</px-navbar>
<px-sidebar id="mySidebar"
	menu='[
		{"label":"Alerts","icon":"fa fa-exclamation-triangle","path":"#alerts"},
		{"label":"Cases","icon":"fa fa-briefcase","path":"#cases"},
		{"label":"Analysis","icon":"fa fa-bar-chart","path":"#analysis"},
		{"label":"Dashboards","icon":"fa fa-dashboard","path":"#dashboards"}
	]'></px-sidebar>
<section>
	<p>The px-navbar and px-sidebar component is a responsive component that can be used for navigation.</p>
</section>
```


### Usage with Action Button and More

```
	<div class="position-relative">
	  <px-navbar id="navbar4-3" title="Navbar Title" subtitle="Sub Title" theme="primary">
	    <div>
	      <button class="navbar__button">Action</button>
	    </div>
	    <div>
	      <button class="navbar__button">
	      	<i class="fa fa-ellipsis-v"></i>
	      </button>
	    </div>
	  </px-navbar>
	</div>
```





## Unit Tests
To run the tests simply invoke the `npm test` command:

### Latest Specs

```
chrome 49                ✓ test.html » <px-navbar> » it should have render
chrome 49                ✓ test.html » <px-navbar> » it should have title
chrome 49                ✓ test.html » <px-navbar> » it should have sub-title
chrome 49                ✓ test.html » <px-navbar> » it should change title to current page title.
chrome 49                ✓ test.html » <px-navbar> » is can be hidden
chrome 49                ✓ test.html » <px-navbar> » Theme » is should change theme to primary
chrome 49                ✓ test.html » <px-navbar> » Theme » is should change theme to chrome
chrome 49                ✓ test.html » <px-navbar> » Theme » is should change theme to dark
chrome 49                ✓ test.html » <px-navbar> » Theme » is should change theme alt
chrome 49                ✓ test.html » <px-navbar> » Back Button » is not visibile by default
chrome 49                ✓ test.html » <px-navbar> » Back Button » it should be visible
chrome 49                ✓ test.html » <px-navbar> » Back Button » it should change back button text
chrome 49                Tests passed

firefox 45               ✓ test.html » <px-navbar> » it should have render
firefox 45               ✓ test.html » <px-navbar> » it should have title
firefox 45               ✓ test.html » <px-navbar> » it should have sub-title
firefox 45               ✓ test.html » <px-navbar> » it should change title to current page title.
firefox 45               ✓ test.html » <px-navbar> » is can be hidden
firefox 45               ✓ test.html » <px-navbar> » Theme » is should change theme to primary
firefox 45               ✓ test.html » <px-navbar> » Theme » is should change theme to chrome
firefox 45               ✓ test.html » <px-navbar> » Theme » is should change theme to dark
firefox 45               ✓ test.html » <px-navbar> » Theme » is should change theme alt
firefox 45               ✓ test.html » <px-navbar> » Back Button » is not visibile by default
firefox 45               ✓ test.html » <px-navbar> » Back Button » it should be visible
firefox 45               ✓ test.html » <px-navbar> » Back Button » it should change back button text
firefox 45               Tests passed

safari 9.1               ✓ test.html » <px-navbar> » it should have render
safari 9.1               ✓ test.html » <px-navbar> » it should have title
safari 9.1               ✓ test.html » <px-navbar> » it should have sub-title
safari 9.1               ✓ test.html » <px-navbar> » it should change title to current page title.
safari 9.1               ✓ test.html » <px-navbar> » is can be hidden
safari 9.1               ✓ test.html » <px-navbar> » Theme » is should change theme to primary
safari 9.1               ✓ test.html » <px-navbar> » Theme » is should change theme to chrome
safari 9.1               ✓ test.html » <px-navbar> » Theme » is should change theme to dark
safari 9.1               ✓ test.html » <px-navbar> » Theme » is should change theme alt
safari 9.1               ✓ test.html » <px-navbar> » Back Button » is not visibile by default
safari 9.1               ✓ test.html » <px-navbar> » Back Button » it should be visible
safari 9.1               ✓ test.html » <px-navbar> » Back Button » it should change back button text
safari 9.1               Tests passed
```
