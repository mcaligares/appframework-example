var app = {
    initialize: function() {
        console.log('app init...');
        $.afui.autoLaunch = false;
        $.afui.ready(this.onAfuiReady);
        $(document).ready(this.onJQueryReady);
    },
    onJQueryReady: function() {
        console.log('jquery ready');
        document.addEventListener("deviceready", app.onCordovaReady, false);
        if (testingOnBrowser()) {
            app.onCordovaReady();
        }
    },
    onCordovaReady: function() {;
        console.log('cordova ready');
        $.afui.launch();
    },
    onAfuiReady: function() {
        console.log('afui ready');
        app.loadControllers();
    },
    loadControllers: function() {
        console.log('loading controllers...');
        loginController.initialize();
        timelineController.initialize();
        aboutController.initialize();
    }
};

app.initialize();

function testingOnBrowser() {
    return !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/);
}
