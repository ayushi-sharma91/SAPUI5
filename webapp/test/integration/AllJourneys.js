sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./NavigationJourney"
], function (Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		viewNamespace: "com.yash.ptg.employee_dashboard.Assignment5.view.",
		autoWait: true,
		timeout: 30
	});
});

7718955555