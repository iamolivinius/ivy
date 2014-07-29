import DS from 'ember-data';

var Interaction = DS.Model.extend({
    createdAt: DS.attr('date'),
    type: DS.attr('string'),
});

export default Interaction;
