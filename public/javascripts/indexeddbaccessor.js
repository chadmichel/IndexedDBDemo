// From: https://developer.mozilla.org/en-US/docs/IndexedDB/Using_IndexedDB
// In the following line, you should include the prefixes of implementations you want to test.
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
// (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)

if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.")
}

var IndexedDbAccessor ;
(function (IndexedDbAccessor) {    
    
    IndexedDbAccessor.db = null;
    IndexedDbAccessor.dbName = "ChadsNotes";
    
    IndexedDbAccessor.deleteDb = function() {
        window.indexedDB.deleteDatabase(IndexedDbAccessor.dbName);        
    }
    
    IndexedDbAccessor.open = function(ready) {
        
        if (IndexedDbAccessor.db === null) {
            var request = window.indexedDB.open(IndexedDbAccessor.dbName, 2);      
            
            request.onupgradeneeded = function(event) {
    
                var db = event.target.result;
                IndexedDbAccessor.db = db;
    
                if (event.oldVersion <= 1) {
                    
                    var historyStore = db.createObjectStore("history", { keyPath: "id" });
                    historyStore.createIndex("date", "date", { unique: false });
                    historyStore.createIndex("noteId", "noteid", { unique: false });
                    
                    var notesStore = db.createObjectStore("notes", { keyPath: "id" });
                    notesStore.createIndex("date", "date", { unique: false });
                }
    
                if (event.oldVersion <= 1) {
                    var settingsStore = db.createObjectStore("settings", { keyPath: "key" });                            
                }
            };
        
            request.onerror = function(event) {
                // Do something with request.errorCode!
                alert(event);
            };
            request.onsuccess = function(event) {
                // Do something with request.result!
                IndexedDbAccessor.db = event.target.result;
                ready();            
            };
        }
                
    }
    
    IndexedDbAccessor.close = function() {
        if (IndexedDbAccessor.db !== null) {
            IndexedDbAccessor.db.close();
            IndexedDbAccessor.db = null;
        }
    };
    
    IndexedDbAccessor.HistoryAccessor = function() {    
        var self = this;          
        
        self.getAll = function() {

            
        };
        
    };

    IndexedDbAccessor.NotesAccessor = function() {    
        var self = this;
        
        SimpleStore.create(this, "notes", IndexedDbAccessor.db);
    };
    
})(IndexedDbAccessor || (IndexedDbAccessor = {}));


