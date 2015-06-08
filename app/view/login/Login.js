Ext.define('MyApp.view.login.Login', {

    extend: 'Ext.window.Window',

    xtype: 'login-dialog', // #3

    requires: [
        'Ext.button.Button',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.layout.container.Fit',
        'Ext.toolbar.Fill',
        'MyApp.view.login.LoginController'
    ],

    controller: 'login',

    autoShow: true, // #4
    height: 170, // #5
    width: 360,
    layout: {
        type: 'fit' // #7
    },
    iconCls: 'fa fa-key fa-lg', // #8
    title: 'Login', // #9
    closeAction: 'hide', // #10
    closable: false, // #11
    draggable: false, // #12
    resizable: false, // #13

    items: [{
        xtype: 'form',
        reference: 'form',
        bodyPadding: 15,
        defaults: {
            xtype: 'textfield',
            anchor: '100%',
            labelWidth: 60,
            allowBlank: false, // #21
            msgTarget: 'side' // #24


        },

        items: [{
            name: 'user',
            fieldLabel: 'User',
            vtype: 'alphanum', // #22
            minLength: 3, // #23
            maxLength: 25
        }, {
            inputType: 'password',
            name: 'password',
            fieldLabel: 'Password',
            maxLength: 25,
            vtype: 'customPass'
        }],
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'bottom',

            items: [
                {
                    xtype: 'tbfill' //#25
                },
                {
                    xtype: 'button', //#26
                    iconCls: 'fa fa-times fa-lg',
                    text: 'Cancel',
                    listeners: {
                        click: 'onButtonClickCancel'
                    }
                },
                {
                    xtype: 'button', //#27
                    formBind: true, //#28
                    iconCls: 'fa fa-sign-in fa-lg',
                    text: 'Submit',
                    listeners: {
                        click: 'onButtonClickSubmit'

                    }
                }

            ]
        }
        ]


    }]

});