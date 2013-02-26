test( "blank", function() {
  ok( 1 == "1", "Passed!" );
});

test("indexdbaccessor init", function() {
   
   var notesAccessor = new IndexedDbAccessor.NotesAccessor();
   
   expect(0);
    
});

asyncTest("indexdbaccessor open", function() {
      
   var notesAccessor = IndexedDbAccessor.open(function () {       
        start();
   });
   
   expect(0);
    
});

asyncTest("indexdbaccessor put", function() {
   
   var note = { id: UUID.generate(), title: "hi", body: "body" }
   
   IndexedDbAccessor.open(function () {       
             
        var notesAccessor = new IndexedDbAccessor.NotesAccessor();
        notesAccessor.put(note, function(err) {
            ok(err == null);
            start();
        });        
   });             
});


asyncTest("indexdbaccessor getAll", function() {
   
   var note = { id: UUID.generate(), title: "hi", body: "body" }
   
   IndexedDbAccessor.open(function () {       
             
        var notesAccessor = new IndexedDbAccessor.NotesAccessor();
        notesAccessor.put(note, function(err) {
            notesAccessor.getAll(function(err, result) {                
                ok(err == null);
                start();
            })
            
        });        
   });             
});

asyncTest("indexdbaccessor removeAll", function() {
   
   var note = { id: UUID.generate(), title: "hi", body: "body" }
   
   IndexedDbAccessor.open(function () {       
             
        var notesAccessor = new IndexedDbAccessor.NotesAccessor();
        notesAccessor.put(note, function(err) {
            notesAccessor.removeAll(function(err) {                
                ok(err == null);
                start();
            });            
        });        
   });             
});

