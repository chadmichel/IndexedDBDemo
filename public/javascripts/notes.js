var Notes;
(function (Notes) {

    Notes.Note = function (id, title, body) {
        if (id == null)
            id = UUID.generate();            
        this.id = ko.observable(id);
        if (title == null)
            title = "";            
        this.title = ko.observable(title);
        if (body == null)
            body = "";
        this.body = ko.observable(body);
    }

    Notes.NotesVM = function (queryEngine, saveCommandEngine) {        
        var self = this;

        self.queryEngine = queryEngine;
        self.saveCommandEngine = saveCommandEngine;

        self.active = new Notes.Note();

        self.activeTitle = ko.observable("");
        self.activeBody = ko.observable("");
        self.createMode = ko.observable(true);
        self.showdata = ko.observable(false);

        self.notes = ko.observableArray([           
        ]);
        
        self.getAll = function() {
            self.queryEngine.forEach(
                function(item) {
                    self.notes.push(new Notes.Note(null, item.title, item.body));          
                }
            );                    
        };
        
        self.getAll();

        self.isSaveEnabled = ko.computed(function() {
            return (self.active.title() != self.activeTitle() || self.active.body() != self.activeBody());
        }, self);

        self.isNewEnabled = ko.computed(function() {
            return (!self.isSaveEnabled() && !self.createMode());
        }, self);

        self.save = function() {
            if (self.createMode()) {
                var note = new Notes.Note(null, self.activeTitle(), self.activeBody());
                self.notes.push(note);                
                self.createMode(false);
                self.active.title(self.activeTitle());
                self.active.body(self.activeBody());                
            }
            else {
                self.active.title(self.activeTitle());
                self.active.body(self.activeBody());
            }
            self.saveCommandEngine.PutNote({
                id: self.active.id(),
                title: self.active.title(),
                body: self.active.body()    
            });
        };

        self.create = function() {
            self.active = new Notes.Note();
            self.activeTitle("");
            self.activeBody("");
            self.createMode(true);
        };

        self.load = function(note) {
            self.active = note;
            self.activeTitle(note.title());
            self.activeBody(note.body());            
        };

        self.isLoggedIn = ko.computed(function() {
            var result = false;
            if (self.loginStatus != null) {
                result = self.loginStatus.isLoggedIn;
            }
           return result;
        });
    };


})(Notes || (Notes = {}));

