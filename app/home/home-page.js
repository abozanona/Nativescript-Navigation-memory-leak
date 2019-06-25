var HomeViewModel = require("./home-view-model");
var utils = require('utils/utils');

function pageLoaded(args) {

	utils.GC();
	var page = args.object;
	
	var homeViewModel = new HomeViewModel(page);

	page.bindingContext = homeViewModel;
}

exports.pageLoaded = pageLoaded;
