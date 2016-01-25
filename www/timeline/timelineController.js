var timelineController = {
    initialize: function() {
        console.log('timeline controller init...');
        $('#timeline').on('panelload', this.onReady);
    },
    onReady: function() {
        console.log('timeline controller ready');
    }
};
