Ext.define('MyApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onTextFieldSpecialKey: function(field, e, options){ }, // #4
    onTextFieldKeyPress: function(field, e, options){ }, // #5

    onButtonClickCancel: function(button, e, options){

        this.lookupReference('form').reset();

    }, // #6



    onButtonClickSubmit: function(button, e, options){

        var me = this;

        if (me.lookupReference('form').isValid){
            me.doLogin();
        }





    }, // #7

    doLogin: function() {

        var me = this,
            form = me.lookupReference('form');

        form.submit({

            clientValidation: true,
            url: 'php/security/admin.php',
            scope: me,
            success: 'onLoginSuccess',
            failure: 'onLoginFailure'

        })



    }, // #8



    onLoginFailure: function(form, action) { }, // #9
    onLoginSuccess: function(form, action) { },// #10

    init: function() {

    }
});