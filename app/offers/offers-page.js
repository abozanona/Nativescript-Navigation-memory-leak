const OffersViewModel = require("./offers-view-model");
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new OffersViewModel(page);
}

exports.onNavigatingTo = onNavigatingTo;
