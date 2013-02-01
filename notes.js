var Notes;
(function (Notes) {

    Notes.Note = function (title) {
        this.title = title;            
    }

    Notes.NotesVM = function () {        
        var self = this;
    
        self.notes = ko.observableArray([
            new Note("Do Something"),
            new Note("Another note"),
            new Note("yet another")
        ]);
        
        self.click = function() {
            alert('click');    
        }
        
        self.isSaveEnabled = ko.observable(true);                            
    };

})(Notes || (Notes = {}));

$(function() {

    var vm = new Notes.NotesVM();

    ko.applyBindings(vm);

});
