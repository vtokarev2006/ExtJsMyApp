Ext.define('MyApp.view.main.Panel', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainpanel',

    requires: [
        'Ext.panel.Panel'
    ],

    activeTab: 0,

    items: [
        {
            xtype: 'panel',
            iconCls: 'fa fa-home fa-lg tabIcon',
            closable: false,
            title: 'Home'

        }
    ]
});