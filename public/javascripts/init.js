
$(function() {

    var notesAccessor = new IndexedDbAccessor.NotesAccessor();

    var queryEngine = new QueryEngine.Engine(notesAccessor);
    var commandEngine = new CommandEngine.Engine(notesAccessor);

    var vm = new Notes.NotesVM(queryEngine, commandEngine);

    ko.applyBindings(vm);

});