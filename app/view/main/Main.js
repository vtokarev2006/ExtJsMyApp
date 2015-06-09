/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.container.Container',
    plugins: 'viewport',

    requires: [
        'Ext.container.Container',
        'Ext.layout.container.Border',
        'Ext.plugin.Viewport',
        'MyApp.view.main.Footer',
        'MyApp.view.main.Header',

        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',

        'MyApp.view.main.Panel'
    ],

    xtype: 'app-main',

    controller: 'main',

    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [
        {
            region: 'north',
            xtype: 'appheader'
        },
        {
            region: 'west',
            xtype: 'container',
            width: 200,
            split: true
        },

        {
            region: 'south',
            xtype: 'appfooter'
        },
        {
            region: 'center',
            xtype: 'mainpanel'
        }

    ]
});
