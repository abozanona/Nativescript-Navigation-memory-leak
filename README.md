# Memory leak on navigation [#7409](https://github.com/NativeScript/NativeScript/issues/7409)

**Environment**
 - CLI: 5.4.2
 - [`package.json` file link](https://github.com/abozanona/Nativescript-Navigation-memory-leak/blob/master/package.json).

**Describe the bug**
We have a big Nativescript Application that runs on ios. We've recently found that Navigating in application increases the memory and doesn't release it. We created a minified version of the application for reproducing the issue on [github](https://github.com/abozanona/Nativescript-Navigation-memory-leak). The application is built with JS, and contains two pages ([home](https://github.com/abozanona/Nativescript-Navigation-memory-leak/tree/master/app/home) & [offers](https://github.com/abozanona/Nativescript-Navigation-memory-leak/tree/master/app/offers)). The sample application has no plugins installed.

Home page has two functions, the [`pageLoaded`](https://github.com/abozanona/Nativescript-Navigation-memory-leak/blob/master/app/home/home-page.js#L4) makes sure to free memory every time the page is loaded by calling `GC`. and the [`lytOffers_click`](https://github.com/abozanona/Nativescript-Navigation-memory-leak/blob/master/app/home/home-view-model.js#L38) function navigates to the offers page.

Offers page has one function [`backButton_click`](https://github.com/abozanona/Nativescript-Navigation-memory-leak/blob/master/app/offers/offers-view-model.js#L6), which navigates back to home page.

We noticed that navigating between the two pages increases the used memory incredibly.

**To Reproduce**

 - Clone the sample project on this [repository](https://github.com/abozanona/Nativescript-Navigation-memory-leak), and build the application for ios.
 - When the application starts, click on the `HOT DEAL` button located in the middle right of the screen, that will call `lytOffers_click` open the offers page[Empty page with yellow NavBar], and will also increase the memory usage.
 - When in the offers page, click the back button located in the top right of the screen with arrow pointing to the left. At this point the application will call `backButton_click` & `pageLoaded`, and will navigate back to the home page without releasing the memory.
 - Keep opening the offers page and going back to the home page over and over, the memory will keep increasing and not getting released.

This image shows the memory usage when the application was started.
![Memory leak on navigation](https://i.imgur.com/yVaup5f.png)

This image shows the memory usage after 10 times opening and closing the offers page.
![Memory leak on navigation](https://i.imgur.com/gPRqzmL.png)

This image shows the memory usage after 30 times opening and closing the offers page.
![Memory leak on navigation](https://i.imgur.com/r1PwGcor.png)

This image shows the memory usage after 50 times opening and closing the offers page.
![Memory leak on navigation](https://i.imgur.com/krciDiB.png)

The above images are taken for the sample application, while in the original bigger application the increase in memory is about 3 times bigger than the sample application. The sample application has only two pages and 3 functions.

We noticed that the same issue happens when we Navigate from any page in the application `Page A` to any other page `Page B` and then going back to `Page A` by calling `frameModule.topmost().goBack();`. and That's very annoying, because in the original application suddenly closes because the application reserved a lot portion of the device memory.

I can't also use `clearHistory` in my application, because If user navigates to page `A` and from page `A` he navigates to page `B`, and from page `B` he navigates to page `C`, I need to get him back from page `C` to `B` then to `A` when he clicks the back button.

**Expected behavior**
When I go back to the home page and call `GC`, memory should release the previous page after a while, but in the sample application memory is not releases after going back to home page and calling `GC`. It's not released even if you waited more than 5 minutes and we don't think it's ever released.

I've seen other closed issues talking about the same problem, and they almost all say that it's been fixed in the latest tns versions, but the problem still exist on my application.

**Sample project**
[Nativescript Navigation memory leak](https://github.com/abozanona/Nativescript-Navigation-memory-leak)
