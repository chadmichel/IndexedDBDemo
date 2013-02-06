var Notes;
(function (Notes) {

    Notes.Note = function (title, body) {
        this.title = title;
        this.body = body;
    }

    Notes.NotesVM = function () {        
        var self = this;

        self.activeTitle = ko.observable("title");
        self.activeBody = ko.observable("body");

        self.notes = ko.observableArray([
            new Notes.Note("Do Something"),
            new Notes.Note("Another note"),
            new Notes.Note("yet another")
        ]);
        
        self.save = function() {
            alert('click');    
        }

        self.create = function() {
            self.activeTitle("");
            self.activeBody("");
        }
        
        self.isSaveEnabled = ko.observable(false);

        self.isNewEnabled = ko.observable(true);
    };

})(Notes || (Notes = {}));

$(function() {

    var vm = new Notes.NotesVM();

    ko.applyBindings(vm);

});
