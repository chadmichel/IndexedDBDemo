var LoginStatusQueryEngine;
(function (LoginStatusQueryEngine) {

    LoginStatusQueryEngine.Engine = function() {
        var self = this;

        self.sessionId = function() {
            return $("#sessionid").val();
        }

        self.isLoggedIn = function() {
            var session = $("#sessionid").val();
            return session != null && session.length > 0;
        }
    }

})(LoginStatusQueryEngine || (LoginStatusQueryEngine = {}));

