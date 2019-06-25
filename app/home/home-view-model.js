var observableModule = require("tns-core-modules/data/observable");
var observableArray = require("data/observable-array");
var frameModule = require("tns-core-modules/ui/frame");
function HomeViewModel(page) {
	var viewModel = observableModule.fromObject({
		isLoggedIn: true,
		caroselIndex: 0,
		myChangeEvent:function(args){
		},
		lstGeneralAds_tap: function(args){
		},
		backButton_click: function (data) {
			const frame = frameModule.topmost();
			frame.goBack();
		},
		advbar_navigated: function(data){

		},
		textFieldValue: "",
		navigateToProfile: function (data) {
		},
		lytPopup_tap: function (args) {
		},
		lytPopup2_tap: function (args) {
		},
		lytQRBar_tap: function (args) {
		},
		show_qr_bar_lyt_click: function (args) {
		},
		btnToggleSideMenu_click: function (data) {
		},
		lytUsePoints_click: function (data) {
		},
		lytSearch_click: function (data) {
		},
		lytHistory_click: function (data) {
		},
		lytOffers_click: function (data) {
			const frame = frameModule.topmost();
			frame.navigate("offers/offers-page");
		},
		icon_show_notifications_click: function (data) {
		},
		btn_side_menu_help_click: function (data) {
		},
		btn_side_menu_my_profile_click: function (data) {
		},
		btn_side_menu_who_are_we_click: function (data) {
		},
		btn_side_menu_share_click: function (data) {
		},
		btn_side_menu_notifications_click: function (data) {
		},
		btn_side_menu_my_transactions_click: function (data) {
		},
		btn_side_menu_use_points_click: function (data) {

		},
		btn_side_menu_shared_stores_click: function (data) {
		},
		btn_side_menu_how_much_savings_click: function (data) {
		},
		side_menu_faq_click: function (data) {
		},
		side_menu_call_us_click: function (data) {
		},
		lstGeneralAds: new observableArray.ObservableArray(),
	});

	return viewModel;
}

module.exports = HomeViewModel;
