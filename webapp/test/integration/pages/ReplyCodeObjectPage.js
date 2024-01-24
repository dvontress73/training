sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'tw.replytable.maintainreplytable',
            componentId: 'ReplyCodeObjectPage',
            contextPath: '/ReplyTable/_replycode'
        },
        CustomPageDefinitions
    );
});