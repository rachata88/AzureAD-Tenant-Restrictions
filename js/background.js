function httpHeaderInsertion(e) {

    e.requestHeaders.push({
        name: "Restrict-Access-To-Tenants",
        value: ""
    });

    e.requestHeaders.push({
        name: "Restrict-Access-Context", 
        value: ""
    });

    return {requestHeaders: e.requestHeaders};
}

function addEventListener(browserObject){
    browserObject.webRequest.onBeforeSendHeaders.addListener(
        httpHeaderInsertion,
        {
            urls: [
            "*://login.microsoftonline.com/*",
            "*://login.microsoft.com/*",
            "*://login.windows.net/*"]
        },
        ["blocking", "requestHeaders"]
    );
}

if (typeof browser !== "undefined") {
    addEventListener(browser);
} else if (typeof chrome !== "undefined") {
    addEventListener(chrome);
}