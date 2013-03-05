var LocalQueryEngine;
(function (LocalQueryEngine) {
    
    LocalQueryEngine.Engine = function() {
        var self = this;
        
        self.GetAll = function(callback) {

            IndexedDbAccessor.open(function () {       
                     
                var notesAccessor = new IndexedDbAccessor.NotesAccessor();
                
                notesAccessor.getAll(function(err, result) {                
                    IndexedDbAccessor.close();
                    callback(null, result);
                });
                
            });      
           
        };
        
        self.forEach = function(callback) {
            IndexedDbAccessor.open(function () {       
                     
                var notesAccessor = new IndexedDbAccessor.NotesAccessor();
                
                notesAccessor.forEach(
                    function() {
                        IndexedDbAccessor.close();
                    },
                    function(result) {                                        
                        callback(result.value);
                    }
                );
                
            }); 
        };
    
    }
    
})(LocalQueryEngine || (LocalQueryEngine = {}));

