var loginController = {
    initialize: function() {
        console.log('login controller init...');
        $('#login').bind('panelload', this.onReady);
        $('#loginForm').submit(this.onSubmit);
    },
    onReady: function() {
        console.log('login controller READY');
    },
    onSubmit: function() {;
        console.log('on submit');
        $.afui.loadContent('#timeline');
        return false;
    }
};
