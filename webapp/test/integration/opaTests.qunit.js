sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'tw/replytable/maintainreplytable/test/integration/FirstJourney',
		'tw/replytable/maintainreplytable/test/integration/pages/ReplyTableList',
		'tw/replytable/maintainreplytable/test/integration/pages/ReplyTableObjectPage',
		'tw/replytable/maintainreplytable/test/integration/pages/ReplyCodeObjectPage'
    ],
    function(JourneyRunner, opaJourney, ReplyTableList, ReplyTableObjectPage, ReplyCodeObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('tw/replytable/maintainreplytable') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheReplyTableList: ReplyTableList,
					onTheReplyTableObjectPage: ReplyTableObjectPage,
					onTheReplyCodeObjectPage: ReplyCodeObjectPage
                }
            },
            opaJourney.run
        );
    }
);