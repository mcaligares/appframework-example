var aboutController = {
    initialize: function() {
        console.log('about controller init...');
        $('#about').on('panelload', this.onReady);
        $('#aboutButton').on('tap', this.showAbout);
    },
    onReady: function() {
        console.log('about controller ready');
    },
    showAbout: function() {
         $.afui.popup("I'm replacing an alert box");
    }
};
