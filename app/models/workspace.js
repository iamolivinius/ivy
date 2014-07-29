import DS from 'ember-data';

var Workspace = DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    probands: DS.hasMany('proband'),

    createdAt: DS.attr('date', {
        defaultValue: function () { return new Date(); }
    }),
});

Workspace.reopenClass({
    FIXTURES: [
        {id: 1, name: 'Workspace1'},
        {id: 2, name: 'Workspace2'},
        {id: 3, name: 'Workspace3'},
        {id: 4, name: 'Workspace4'},
        {id: 5, name: 'Workspace5'},
    ]
});

export default Workspace;
