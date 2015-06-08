/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',

    requires: [
        'Ext.util.DelayedTask'
    ],

    name: 'MyApp',

    stores: [
    ],

    views: [
        'login.Login'

    ],

    launch: function () {

        var me = this;

        var task = new Ext.util.DelayedTask(function(){
            me.splashscreen.fadeOut({
                duration: 1000,
                listeners: {
                    afteranimate: function(){
                        console.log('launch');
                        //Ext.create('MyApp.view.login.Login');
                        Ext.widget('login-dialog');



                    }
                }

            });

        });

        task.delay(0);
   },

    init: function () {
        var me = this;
        me.splashscreen = Ext.getBody().mask('Loading application', 'splashscreen');
        me.splashscreen.addCls('splashscreen');

        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });


    }
});
