
var SimpleStore;
(function (SimpleStore) {
    
    SimpleStore.create = function(self, store_name, db) {
            
        self.put = function(note, callback) {
            var tx = db.transaction(store_name, "readwrite");
            var store = tx.objectStore(store_name);
            var req = store.put(note);
            
            if (callback !== null) {
                req.onsuccess = function(event) {
                    callback();
                }
                req.onerror = function(event) {
                    callback(event);
                }
            }
        };
        
        self.forEach = function(callback, itemCallback) {
            
            var tx = db.transaction(store_name, "readwrite");
            var store = tx.objectStore(store_name);            
            
            var req = store.openCursor();
            req.onsuccess = function(event) {
                if (event !== null && event.target !== null) {
                    var cursor = event.target.result;
                    if (cursor !== null) {
                        if (itemCallback !== null)
                            itemCallback(cursor);
                        cursor.continue();
                    }
                    else {
                        if (callback !== null)
                            callback(null);
                    }
                }
            };
            req.onerror = function(event) {  
                if (callback !== null)
                    callback(event);
            };
        };
    
        self.getAll = function(callback) {
            if (callback === null)
                return;
            
            var result = [];
            
            self.forEach(
                function(err) {
                    callback(err, result);    
                },
                function(cursor) {
                    result.push(cursor.value);
                }               
            );                        
        };
        
        self.removeAll = function(callback) {            
            self.forEach(
                function(err) {
                    callback(err);
                },
                function(cursor) {
                    cursor.delete();
                }
            );                
        };    
    }

}) (SimpleStore || (SimpleStore = {}));
