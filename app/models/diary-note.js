import DS from 'ember-data';

var DiaryNote = DS.Model.extend({
    text: DS.attr('string'),
    createdAt: DS.attr('date'),
    changedAt: DS.attr('date')
});

export default DiaryNote;
