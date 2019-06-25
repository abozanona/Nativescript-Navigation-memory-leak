var observableModule = require("tns-core-modules/data/observable");
const frameModule = require("ui/frame");

function OffersViewModel(page) {
    const viewModel = observableModule.fromObject({
        backButton_click:function(data){
			const frame = frameModule.topmost();
			frame.goBack();
		},
    });
    return viewModel;
}
module.exports = OffersViewModel;
