module.exports = function(config) {
	"use strict";
	const puppeteer = require('puppeteer');
	process.env.CHROME_BIN = puppeteer.executablePath();
	config.set({
        frameworks: ["ui5","qunit","sinon"],
		ui5: {
		  url: "https://sapui5.hana.ondemand.com",
		  mode: "script",
		  config: {
			async: true,
			resourceRoots: {
			  "com.yash.ptg.employee_dashboard.Assignment5": "./base/webapp"
			}
		  },
		  tests: [
			"com/yash/ptg/employee_dashboard/Assignment5/test/integration/AllJourneys",
			"com/yash/ptg/employee_dashboard/Assignment5/test/unit/AllTests"
			//"com/yash/ptg/employee_dashboard/Assignment5/test/integration/opaTests.qunit",
		  ]
		},
		preprocessors: {
			"{webapp,webapp/!(test)}/!(mock*).js": ["coverage"]
		},
		coverageReporter: {
			includeAllSources: true,
			reporters: [
				{
					type: "html",
					dir: "coverage"
				},
				{
					type: "text"
				}
			],
			check: {
				each: {
					statements: 100,
					branches: 100,
					functions: 100,
					lines: 100
				}
			}
		},
		reporters: ["progress", "coverage"],

        //browsers: ["ChromiumHeadless"],
		browsers: ['ChromeHeadlessCI'],
		customLaunchers: {
			ChromeHeadlessCI: {
				base: 'ChromeHeadless',
				flags: ['--no-sandbox']
			}
		},
        browserConsoleLogOptions: {
			level: "error"
        },

		singleRun: true
	});
};
