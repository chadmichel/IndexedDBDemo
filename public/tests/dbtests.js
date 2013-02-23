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
   
   var note = { id: guid(), title: "hi", body: "body" }
   
   IndexedDbAccessor.open(function () {       
             
       var notesAccessor = new IndexedDbAccessor.NotesAccessor();
       notesAccessor.put(note);

   });
      
   expect(0);
    
});
