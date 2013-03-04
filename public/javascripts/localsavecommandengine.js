var LocalSaveCommandEngine;
(function (LocalCommandEngine) {
    
    LocalSaveCommandEngine.Engine = function() {
        var self = this;
    
        self.PutNote = function(data) {
            
            alert("data added");
            
            IndexedDbAccessor.open(function () {       
             
                var notesAccessor = new IndexedDbAccessor.NotesAccessor();
                notesAccessor.put(data, function(err) {
                    IndexedDbAccessor.close();
                });        
            });  
            
        }
    
    }
    
})(LocalSaveCommandEngine || (LocalSaveCommandEngine = {}));