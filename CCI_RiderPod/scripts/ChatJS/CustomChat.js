//var APP_ID = "B2B25309-3243-400F-9E29-0BC89B7F5C56";
var APP_ID = "8355AD72-4081-4FF6-90E5-C371ADEB465F";
//var USER_ID = "usamaahmed@gmail.com";
//var Tocken_Api = "ebbc16b4c72d469764a617c40d821cea5007dacc";
var CHANNEL_URL = "";
var sb = new SendBird({ appId: APP_ID });

sb.connect(USER_ID, function (user, error) {
    if (error) {
        return;
    }
});



/*
* This code will execute on Chat button Click
* =============================================
*/

//var userIds = ['usamaahmed@gmail.com', 'Owais.Javed@gmail.com'];
//var IS_DISTINCT = true;
//var NAME = "Usama Ahmed - Owasi Jawed";
//var COVER_IMAGE_OR_URL = "";
//var DATA = "Owasi Jawed";
//var CUSTOM_TYPE = "";
//sb.GroupChannel.createChannelWithUserIds(userIds, IS_DISTINCT, NAME, COVER_IMAGE_OR_URL, DATA, CUSTOM_TYPE, function (groupChannel, error) {
//    if (error) {
//        return;
//    }
//    console.log(groupChannel);
//});

/*
* Retreive Channels List
* =======================
*/

var channelListQuery = sb.GroupChannel.createMyGroupChannelListQuery();
channelListQuery.includeEmpty = true;
channelListQuery.order = 'latest_last_message'; // 'chronological', 'latest_last_message', 'channel_name_alphabetical', and 'metadata_value_alphabetical'
channelListQuery.limit = 100;    // The value of pagination limit could be set up to 100.

if (channelListQuery.hasNext) {
    channelListQuery.next(function (channelList, error) {
        if (error) {
            return;
        }

        $(channelList).eac

        $.each(channelList, function (index, value) {
            ;
            var ChannelName = value.name;
            var NametoShow = "";
            if (1 == 1) {
                NametoShow = ChannelName.substring(0, ChannelName.indexOf(' ~'));
            }
            else {
                NametoShow = ChannelName.substring(ChannelName.indexOf('~') + 2, ChannelName.length);
            }

            var link = '<a href="" class="channel-link" >' + NametoShow + '</a>';

            $('#channel-list').append(link);
        });


        console.log(channelList);
    });
}



/*
sb.OpenChannel.createChannel(function (openChannel, error) {
    if (error) {
        return;
    }
});
sb.OpenChannel.getChannel(CHANNEL_URL, function (openChannel, error) {
    if (error) {
        return;
    }

    openChannel.enter(function (response, error) {
        if (error) {
            return;
        }
    })
});
*/