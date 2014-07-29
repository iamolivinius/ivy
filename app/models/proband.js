import DS from 'ember-data';

var Proband = DS.Model.extend({
    name: DS.attr('string'),
    comments: DS.hasMany('comments'),
    diaryNotes: DS.hasMany('diaryNote'),
    interactions: DS.hasMany('interaction')
});

export default Proband;
