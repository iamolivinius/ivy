import Ember from 'ember';

var Router = Ember.Router.extend({
    location: IvyENV.locationType
});

Router.map(function() {
    this.resource('workspaces', function() {
        this.route('new');
    });
    this.resource('workspace', { path: '/workspace/:workspace_id' }, function() {
        this.route('edit');
        this.resource('probands', function() {
            this.route('new');
        });
        this.resource('proband', { path: '/proband/:proband_id' }, function() {
            this.resource('comments');
            this.resource('comment', { path: '/comment/:comment_id' });
            this.resource('diary_notes');
            this.resource('diary_note', { path: '/diary_note/:diary_note_id' });
            this.resource('interactions');
            this.resource('interaction', { path: '/interaction/:interaction_id' });
        });
    });
});

export default Router;
