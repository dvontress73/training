sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'tw.replytable.maintainreplytable',
            componentId: 'ReplyTableObjectPage',
            contextPath: '/ReplyTable'
        },
        CustomPageDefinitions
    );
});