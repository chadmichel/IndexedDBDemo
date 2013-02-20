var CommandEngine;
(function (CommandEngine) {
    
    CommandEngine.Engine = function() {
        var self = this;
    
        self.Put = function(data) {
            
            alert("data added");
        
        }
    
    }
    
})(CommandEngine || (CommandEngine = {}));