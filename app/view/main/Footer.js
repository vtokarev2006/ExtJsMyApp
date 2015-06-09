Ext.define('MyApp.view.main.Footer', {
    extend: 'Ext.container.Container',
    xtype: 'appfooter',

    requires: [
        'Ext.Component',
        'Ext.layout.container.Center'
    ],

    cls: 'app-footer', //#3
    height: 30, //#4
    layout: 'center', //#5
    items: [
        {
            xtype: 'component', //#6
            width: 350, //#7
            componentCls: 'app-footer-title', //#8
            bind: {
                html: '{footer}' //#9
            }
        }
    ]




});