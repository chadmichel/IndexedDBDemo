var LoginStatusQueryEngine;
(function (LoginStatusQueryEngine) {

    LoginStatusQueryEngine.Engine = function() {
        var self = this;

        self.sessionId = function() {
            var sid = $.cookie("connect.sid");
            return sid;
        }

        self.username = function() {
            var user = $.cookie("username");
            return user;
        }

        self.isLoggedIn = function() {
            var user = self.username();
            return user != null && user.length > 0;
        }
    }

})(LoginStatusQueryEngine || (LoginStatusQueryEngine = {}));

