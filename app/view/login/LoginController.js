Ext.define('MyApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    requires: [
        'Ext.form.action.Action',
        'MyApp.util.Util',
        'MyApp.view.main.Main',
        'MyApp.view.login.CapsLockTooltip'
    ],

    onTextFieldSpecialKey: function (field, e, options) {

        if (e.getKey() === e.ENTER ) {

            this.doLogin();

        }





    }, // #4
    onTextFieldKeyPress: function (field, e, options) {


        var charCode = e.getCharCode(),
            me = this;
        console.log(e.getCharCode());

        if((e.shiftKey && charCode >= 97 && charCode <= 122) || //#2
            (!e.shiftKey && charCode >= 65 && charCode <= 90)){
            if(me.capslockTooltip === undefined){ //#3
                me.capslockTooltip = Ext.widget('capslocktooltip'); //#4

            }
            me.capslockTooltip.show(); //#5
        } else {
            if(me.capslockTooltip !== undefined){ //#6
                me.capslockTooltip.hide(); //#7
            }
        }


    }, // #5

    onButtonClickCancel: function (button, e, options) {

        this.lookupReference('form').reset();

    }, // #6


    onButtonClickSubmit: function (button, e, options) {

        var me = this;

        if (me.lookupReference('form').isValid) {
            me.doLogin();
        }


    }, // #7

    doLogin: function () {

        console.log('doLogin');

        var me = this;
        var form = me.lookupReference('form');

        if (form.isValid()) {

            me.getView().mask('Authenticating... Please wait...');

            form.submit({

                clientValidation: true,
                url: 'php/security/login.php',
                scope: me,
                success: 'onLoginSuccess',
                failure: 'onLoginFailure'

            })

        }

    }, // #8


    onLoginFailure: function (form, action) {
        var me = this;

        me.getView().unmask();

        console.log(action);



        var result = MyApp.util.Util.decodeJSON(action.response.responseText);

        switch (action.failureType) {

            case Ext.form.action.Action.CLIENT_INVALID:
                MyApp.util.Util.showErrorMsg('Form fields may not be submitted with invalid values');
                break;

            case Ext.form.action.Action.CONNECT_FAILURE:

                MyApp.util.Util.showErrorMsg(result.msg);
                break;

            case Ext.form.action.Action.SERVER_INVALID:

                MyApp.util.Util.showErrorMsg(result.msg);

        }


    }, // #9
    onLoginSuccess: function (form, action) {

        var me = this;

        me.getView().unmask();


        me.getView().close(); //#1
        Ext.create('MyApp.view.main.Main'); //#2

    },// #10

    init: function () {

    }
});