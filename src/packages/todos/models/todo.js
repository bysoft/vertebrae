// Todo Model
// ----------
// Our basic **Todo** model has `content`, `order`, and `done` attributes.

// Requires define  
// Return {TodoModel} model constructor object  

define(['models'], function (models) {

    var WelcomeModel,
        BaseModel = models.BaseModel;

    TodoModel = BaseModel.extend({

        // Default attributes for the todo.
        defaults: {
            content: "empty todo...",
            done: false
        },

        // Ensure that each todo created has `content`.
        initialize: function() {
            if (!this.get("content")) {
                this.set({"content": this.defaults.content});
            }
        },

        // Toggle the `done` state of this todo item.
        toggle: function() {
            this.save({done: !this.get("done")});
        },

        // Remove this Todo from *localStorage* and delete its view.
        clear: function() {
            this.destroy();
        }

    });

    return TodoModel;
});