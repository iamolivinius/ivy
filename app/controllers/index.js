import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createWorkspace: function () {
            var properties = this.getProperties(['name', 'description']);
            var ws = this.store.createRecord('workspace', properties);
            ws.save();
        }
    }
});
