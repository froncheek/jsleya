/**
 * Created by IntelliJ IDEA.
 * User: froncheek
 * Date: 9/23/12
 * Time: 3:29 PM
 * To change this template use File | Settings | File Templates.
 */

leya.createModel('Hello.User', {
    FirstName: ''
    ,LastName: ''
    ,FullName: function() {
        return [this.FirstName, ' ', this.LastName].join('');
    }
});

leya.createRecord('Hello.UserRecords', {
    model: leya.getModel('Hello.User')
});

leya.createController('Hello.UserCtrlr', {
    record: leya.getRecord('Hello.UserRecords')
    ,add: function() {

    }
});
