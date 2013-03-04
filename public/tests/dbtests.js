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
        IndexedDbAccessor.close();
   });
   
   expect(0);
    
});

asyncTest("indexdbaccessor notes put", function() {
   
   var note = { id: UUID.generate(), title: "hi", body: "body" }
   
   IndexedDbAccessor.open(function () {       
             
        var notesAccessor = new IndexedDbAccessor.NotesAccessor();
        notesAccessor.put(note, function(err) {
            ok(err == null);
            start();
            IndexedDbAccessor.close();
        });        
   });             
});


asyncTest("indexdbaccessor notes getAll", function() {
   
   var note = { id: UUID.generate(), title: "hi", body: "body" }
   
   IndexedDbAccessor.open(function () {       
             
        var notesAccessor = new IndexedDbAccessor.NotesAccessor();
        notesAccessor.put(note, function(err) {
            notesAccessor.getAll(function(err, result) {                
                ok(err == null);
                start();
                IndexedDbAccessor.close();
            })
            
        });        
   });             
});

asyncTest("indexdbaccessor notes removeAll", function() {
   
   var note = { id: UUID.generate(), title: "hi", body: "body" }
   
   IndexedDbAccessor.open(function () {       
             
        var notesAccessor = new IndexedDbAccessor.NotesAccessor();
        notesAccessor.put(note, function(err) {
            notesAccessor.removeAll(function(err) {                
                ok(err == null);
                start();
                IndexedDbAccessor.close();
            });            
        });        
   });             
});

