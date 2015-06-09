/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('MyApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'MyApp', //#4
        appName: 'DVD Rental Store', //#5
        appHeaderIcon: '<span class="fa fa-desktop fa-lg appheader-logo">', //#6
        footer: 'Mastering ExtJS book - Loiane Groner - http://packtpub.com' //#7
    }





});