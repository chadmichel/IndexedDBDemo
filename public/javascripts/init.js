
$(function() {

    var notesAccessor = new IndexedDbAccessor.NotesAccessor();

    var queryEngine = new LocalQueryEngine.Engine(notesAccessor);
    var commandEngine = new LocalSaveCommandEngine.Engine(notesAccessor);

    var vm = new Notes.NotesVM(queryEngine, commandEngine);

    ko.applyBindings(vm);

});