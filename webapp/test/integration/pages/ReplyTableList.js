sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'tw.replytable.maintainreplytable',
            componentId: 'ReplyTableList',
            contextPath: '/ReplyTable'
        },
        CustomPageDefinitions
    );
});