var Notes;
(function (Notes) {

    var Note = (function () {
        function Note(title) {
            this.title = title;
        }

        return Note;
    })();


    var NotesVM = (function () {
        function NotesVM() {
            this.notes = ko.observableArray([
                new Note("Do Something"),
                new Note("Another note"),
                new Note("yet another")
            ]);
        }

        return NotesVM;
    })();

    Notes.NotesVM = NotesVM;

})(Notes || (Notes = {}));

$(function() {

    var vm = new Notes.NotesVM();

    ko.applyBindings(vm);

});
