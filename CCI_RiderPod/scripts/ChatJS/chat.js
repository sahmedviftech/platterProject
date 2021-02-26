//var appId = 'B2B25309-3243-400F-9E29-0BC89B7F5C56';
var appId = '8355AD72-4081-4FF6-90E5-C371ADEB465F';
var currScrollHeight = 0;
var MESSAGE_TEXT_HEIGHT = 27;

var nickname = null;
var userId = '';
var channelListPage = 0;
var currChannelUrl = null;
var currChannelInfo = null;
var leaveChannelUrl = '';
var leaveMessagingChannelUrl = '';
var hideChannelUrl = '';
var userListToken = '';
var userListNext = 0;
var targetAddGroupChannel = null;

var isOpenChat = false;
var memberList = [];

// 3.0.x
var currentUser;

$('#guide_create').click(function () {
    $('.modal-guide-create').hide();
});

/***********************************************
 *                OPEN CHAT
 **********************************************/
$('#btn_open_chat').click(function () {
    popupInit();
    $('.modal-guide-create').hide();
    $('.left-nav-button-guide').hide();
    $('.modal-messaging').hide();
    $('#btn_messaging_chat').removeClass('left-nav-messaging--active');

    if ($(this).hasClass('left-nav-open--active')) {
        $('.right-section__modal-bg').hide();
        $(this).removeClass('left-nav-open--active');
        $('.modal-open-chat').hide();
    } else {
        $('.right-section__modal-bg').show();
        $(this).addClass('left-nav-open--active');
        getChannelList(true);
    }
});

$('.modal-open-chat-more').click(function () {
    getChannelList(false);
});

// Create OpenChannel
$('#btn_create_open_channel').click(function () {
    modalInput("Create Open Channel", "", function (channelName) {
        sb.OpenChannel.createChannel(channelName, '', '', function (channel, error) {
            joinChannel(channel.url);
        });
    });
});

$(document).on('click', '.chat-canvas__list-name', function (e) {
    var userId = $(this).data('userid');
    if (isCurrentUser(userId)) {
        console.log('can not block, current user');
        return;
    }

    modalConfirm('Are you Sure?', 'Do you want to block this user?', function () {
        sb.blockUserWithUserId(userId, function (response, error) {
            console.log(response, error);
        });
    });
});


$(document).on('click', '.chat-canvas__list-text', function (e) {
    var userId = $(this).prev().prev().data('userid');
    var messageId = $(this).data('messageid');
    var channelUrl = currChannelInfo.url;
    var messageObject = $(this);

    modalConfirm('Are you Sure?', 'Do you want to delete message?', function () {
        currChannelInfo.deleteMessage(channelMessageList[channelUrl][messageId]['message'], function (response, error) {
            if (!error) {
                delete (channelMessageList[channelUrl][messageId]);
                messageObject.parent().remove();
            }
        });
    });
});


function modalConfirm(title, desc, submit, close) {
    $('.modal-confirm-title').html(title);
    $('.modal-confirm-desc').html(desc);

    // $('.modal-confirm-submit').unbind('click');
    // $('.modal-confirm-close').unbind('click');

    $('.modal-confirm-close').click(function () {
        if (close) {
            close();
        }
        $('.modal-confirm').hide();
        $('.modal-confirm-close').unbind('click');
    });

    $('.modal-confirm-submit').click(function () {
        if (submit) {
            submit();
        }
        $('.modal-confirm').hide();
        $('.modal-confirm-submit').unbind('click');
    });

    $('.modal-confirm').show();
}

function modalInput(title, desc, submit, close) {
    $('.modal-input-title').html(title);
    $('.modal-input-desc').html(desc);

    // $('.modal-confirm-submit').unbind('click');
    // $('.modal-confirm-close').unbind('click');

    $('.modal-input-box-elem').keydown(function (e) {
        var keyCode = e.which;
        switch (keyCode) {
            case 13: // enter
                if (submit) {
                    submit($('.modal-input-box-elem').val());
                }
                $('.modal-input').hide();
                $('.modal-input-close').unbind('click');
                $('.modal-input-box-elem').unbind('keydown');
                break;
            case 27: // esc
                if (close) {
                    close();
                }
                $('.modal-input').hide();
                $('.modal-input-close').unbind('click');
                $('.modal-input-box-elem').unbind('keydown');
                break;
        }
    });

    $('.modal-input-close').click(function () {
        if (close) {
            close();
        }
        $('.modal-input').hide();
        $('.modal-input-close').unbind('click');
    });

    $('.modal-input-submit').click(function () {
        if (submit) {
            submit($('.modal-input-box-elem').val());
        }
        $('.modal-input').hide();
        $('.modal-input-submit').unbind('click');
    });

    $('.modal-input').show(0, function () {
        $('.modal-input-box-elem').focus();
    });
}



function getChannelList(isFirstPage) {
    if (isFirstPage) {
        $('.modal-open-chat-list').html('');
        OpenChannelListQuery = sb.OpenChannel.createOpenChannelListQuery();
    }

    if (OpenChannelListQuery.hasNext) {
        OpenChannelListQuery.next(function (channels, error) {
            if (error) {
                return;
            }

            $('.modal-open-chat-list').append(createChannelList(channels));
            channelListPage = channels['page'];
            if (channels['next'] != 0) {
                $('.modal-open-chat-more').show();
            } else {
                $('.modal-open-chat-more').hide();
            }
            $('.modal-open-chat').show();
        });
    }
}

function createChannelList(channels) {
    var channelListHtml = '';

    for (var i in channels) {
        var channel = channels[i];
        var item = '<div class="modal-open-chat-list__item" onclick="joinChannel(\'%channelUrl%\')">%channelImage% &nbsp;%channelName%</div>';
        item = item.replace(/%channelUrl%/, channel.url).replace(/%channelName%/, xssEscape(channel.name));
        item = item.replace(/%channelImage%/, '<img src="' + channel.coverUrl + '" /> ');

        channelListHtml += item;
    }
    return channelListHtml;
}

function joinChannel(channelUrl) {
    if (channelUrl == currChannelUrl) {
        navInit();
        popupInit();
        return false;
    }

    PreviousMessageListQuery = null;
    sb.OpenChannel.getChannel(channelUrl, function (channel, error) {
        if (error) {
            return;
        }

        channel.enter(function (response, error) {
            if (error) {
                if (error.code == 900100) {
                    alert('Oops...You got banned out from this channel.');
                }
                return;
            }

            $('.chat-top__button-hide').hide();

            currChannelInfo = channel;
            currChannelUrl = channelUrl;

            $('.chat-empty').hide();
            initChatTitle(xssEscape(currChannelInfo.name), 0);

            $('.chat-canvas').html('');
            $('.chat-input-text__field').val('');
            $('.chat').show();

            navInit();
            popupInit();

            isOpenChat = true;
            loadMoreChatMessage(scrollPositionBottom);
            setWelcomeMessage(xssEscape(currChannelInfo.name));
            addChannel();
            $('.chat-input-text__field').attr('disabled', false);

        });
    });
}

function addChannel() {
    if ($('.left-nav-channel-open').length == 0) {
        $('.left-nav-channel-empty').hide();
    }

    $.each($('.left-nav-channel'), function (index, channel) {
        $(channel).removeClass('left-nav-channel-open--active');
        $(channel).removeClass('left-nav-channel-messaging--active');
        $(channel).removeClass('left-nav-channel-group--active');
    });

    var addFlag = true;
    $.each($('.left-nav-channel-open'), function (index, channel) {
        if (currChannelUrl == $(channel).data('channel-url')) {
            $(channel).addClass('left-nav-channel-open--active');
            addFlag = false;
        }
    });

    if (addFlag) {
        $('#open_channel_list').append(
            '<div class="left-nav-channel left-nav-channel-open left-nav-channel-open--active" ' +
            '     onclick="joinChannel(\'' + currChannelInfo.url + '\')"' +
            '     data-channel-url="' + currChannelInfo.url + '"' +
            '>' +
            (currChannelInfo.name.length > 12 ? xssEscape(currChannelInfo.name.substring(0, 12)) + '...' : xssEscape(currChannelInfo["name"])) +
            '</div>'
        );
    }

    $('.modal-guide-create').hide();
    $('.left-nav-button-guide').hide();
}

function leaveChannel(channel, obj) {
    popupInit();

    leaveChannelUrl = channel['channel_url'];

    if ($('.chat-top__button-invite').is(':visible')) {
        $('.modal-leave-channel-desc').html('Do you want to leave this messaging channel?');
    } else {
        $('.modal-leave-channel-desc').html('Do you want to leave this channel?');
    }

    $('.modal-leave-channel').show();
    return false;
}

$('.chat-top__button-leave').click(function () {
    if ($('.chat-top__button-invite').is(':visible')) {
        endMessaging(currChannelInfo, $(this))
    } else {
        leaveChannel(currChannelInfo, $(this));
    }
});

$('.chat-top__button-hide').click(function () {
    if (currChannelInfo.isOpenChannel()) {
        return;
    }

    hideChannel(currChannelInfo);
});

$('.chat-top__button-member').click(function () {
    if ($('.modal-member').is(":visible")) {
        $(this).removeClass('chat-top__button-member--active');
        $('.modal-member').hide();
    } else {
        popupInit();
        $(this).addClass('chat-top__button-member--active');
        getMemberList(currChannelInfo);
        $('.modal-member').show();
    }
});

$('.chat-top__button-invite').click(function () {
    if ($('.modal-invite').is(":visible")) {
        $(this).removeClass('chat-top__button-invite--active');
        $('.modal-invite').hide();
    } else {
        popupInit();
        $(this).addClass('chat-top__button-invite--active');
        getUserList();
        $('.modal-invite').show();
    }
});

function getMemberList(channel) {
    if (channel.isOpenChannel()) {
        OpenChannelParticipantListQuery = channel.createParticipantListQuery(channel);
        OpenChannelParticipantListQuery.next(function (members, error) {
            if (error) {
                return;
            }

            $('.modal-member-list').html('');
            var memberListHtml = '';
            members.forEach(function (member) {
                memberListHtml += '' +
                    '<div class="modal-member-list__item">' +
                    '<div class="modal-member-list__icon modal-member-list__icon--online"></div>' +
                    '  <div class="modal-member-list__name">' +
                    (member.nickname.length > 13 ? xssEscape(member.nickname.substring(0, 12)) + '...' : xssEscape(member.nickname)) +
                    '  </div>' +
                    '</div>';
            });
            $('.modal-member-list').html(memberListHtml);
        });
    }

    if (channel.isGroupChannel()) {
        var members = channel.members;
        $('.modal-member-list').html('');

        var memberListHtml = '';
        members.forEach(function (member) {
            if (member.connectionStatus == 'online') {
                var isOnline = 'online';
                var dateTimeString = '';
            } else {
                var isOnline = '';
                var dateTime = new Date(member.lastSeenAt);
                var dateTimeString = (dateTime.getMonth() + 1) + '/' + dateTime.getDate() + ' ' + dateTime.getHours() + ':' + dateTime.getMinutes();
            }


            memberListHtml += '' +
                '<div class="modal-member-list__item">' +
                '<div class="modal-member-list__icon"><img src="' + member.profileUrl + '" /></div>' +
                '  <div class="modal-member-list__name ' + isOnline + '">' +
                (member.nickname.length > 13 ? xssEscape(member.nickname.substring(0, 12)) + '...' : xssEscape(member.nickname)) +
                '  </div>' +
                '<div class="modal-member-list__lastseenat">' + dateTimeString + '</div>' +
                '</div>';
        });
        $('.modal-member-list').html(memberListHtml);
    }
}

$('.modal-leave-channel-close').click(function () {
    $('.modal-leave-channel').hide();
    leaveChannelUrl = '';
    return false;
});

$('.modal-leave-channel-submit').click(function () {
    $('#open_channel_list').removeClass('chat-top__button-leave--active');

    leaveCurrChannel();
});

$('.modal-hide-channel-close').click(function () {
    $('.modal-hide-channel').hide();
    leaveChannelUrl = '';
    return false;
});

$('.modal-hide-channel-submit').click(function () {
    // $('#open_channel_list').removeClass('chat-top__button-leave--active');
    // leaveCurrChannel();
    hideCurrChannel();
});
/***********************************************
 *              // END OPEN CHAT
 **********************************************/


/***********************************************
 *                MESSAGING
 **********************************************/
$('#btn_messaging_chat').click(function () {
    popupInit();
    $('.modal-guide-create').hide();
    $('.left-nav-button-guide').hide();
    $('.modal-open-chat').hide();
    $('#btn_open_chat').removeClass('left-nav-open--active');

    if ($(this).hasClass('left-nav-messaging--active')) {
        $('.right-section__modal-bg').hide();
        $(this).removeClass('left-nav-messaging--active');
        $('.modal-messaging').hide();
    } else {
        $('.right-section__modal-bg').show();
        $(this).addClass('left-nav-messaging--active');
        userListToken = '';
        userListNext = 0;
        $('.modal-messaging-list').html('');
        getUserList(true);
        $('.modal-messaging').show();
    }
});

function getUserList(isFirstPage) {

    if (isFirstPage) {
        $('.modal-messaging-list').html('');
        UserListQuery = sb.createUserListQuery();
    }

    if (UserListQuery.hasNext) {

        UserListQuery.next(function (userList, error) {
            if (error) {
                return;
            }

            var users = userList;
            $('.modal-messaging-more').remove();
            $.each(users, function (index, user) {
                UserList[user.userId] = user;
                if (!isCurrentUser(user.userId)) {
                    $('.modal-messaging-list').append(
                        '<div class="modal-messaging-list__item" onclick="userClick($(this))">' +
                        (user.nickname.length > 12 ? xssEscape(user.nickname.substring(0, 12)) + '...' : xssEscape(user.nickname)) +
                        '  <div class="modal-messaging-list__icon" data-guest-id="' + user.userId + '"></div>' +
                        '</div>'
                    );
                }
            });

            if (UserListQuery.hasNext) {
                $('.modal-messaging-list').append(
                    '<div class="modal-messaging-more" onclick="userListLoadMore()">MORE<div class="modal-messaging-more__icon"></div></div>'
                );
            } else {
                $('.modal-messaging-more').remove();
            }
        });
    }

}

function userListLoadMore() {
    getUserList(false);
}

function userClick(obj) {

    var el = obj.find('div');
    $(".modal-messaging-list__item").each(function (index) {
        $(this).removeClass('modal-messaging-list__icon--select');
    });

    $('.modal-messaging-list__icon--select').removeClass('modal-messaging-list__icon--select');

    if (el.hasClass('modal-messaging-list__icon--select')) {
        el.removeClass('modal-messaging-list__icon--select');
    } else {
        el.addClass('modal-messaging-list__icon--select');
    }

    var selectCount = $('.modal-messaging-list__icon--select').length;
    if (selectCount > 1) {
        $('.modal-messaging-top__title').html('Group Chat ({})'.format(selectCount));
    } else {
        $('.modal-messaging-top__title').html('Group Channel');
    }
}

function startMessaging() {

    if ($('.modal-messaging-list__icon--select').length == 0) {
        alert('Please select user');
        return false;
    }

    var startMessagingProcess = function () {

        var users = [];
        $.each($('.modal-messaging-list__icon--select'), function (index, user) {
            users.push(UserList[$(user).data("guest-id")]);
        });

        PreviousMessageListQuery = null;
        sb.GroupChannel.createChannel(users, isDistinct, 'test_name', '', '', function (channel, error) {
            if (error) {
                return;
            }

            currChannelInfo = channel;
            currChannelUrl = channel.url;

            var members = channel.members;
            var channelTitle = '';

            $.each(members, function (index, member) {

                if (!isCurrentUser(member.userId)) {
                    channelTitle += xssEscape(member.nickname) + ', ';
                }
            });

            channelTitle = channelTitle.slice(0, -2);
            var channelMemberList = channelTitle;
            if (channelTitle.length > 20) {
                channelTitle = channelTitle.substring(0, 20);
                channelTitle += '...'
            }
            var titleType = 1;
            var isGroup = true;
            if (members.length > 2) {
                channelTitle += '({})'.format(members.length);
                titleType = 2;
            }

            $('.chat-empty').hide();
            initChatTitle(channelTitle, titleType);
            $('.chat-canvas').html('');
            $('.chat-input-text__field').val('');
            $('.chat').show();

            navInit();
            popupInit();
            makeMemberList(members);

            isOpenChat = false;
            loadMoreChatMessage(scrollPositionBottom);
            setWelcomeMessage('Messaging Channel');
            addGroupChannel(members, true, channelMemberList, currChannelInfo);
            $('.chat-input-text__field').attr('disabled', false);
        });
    };

    var isDistinct;
    modalConfirm('Create Channel', 'Do you want to create distinct channel?', function () {
        isDistinct = true;
        startMessagingProcess();
    }, function () {
        isDistinct = false;
        startMessagingProcess();
    });

    return;
}

function deleteChannel(channel) {
    var channelUrl = channel.url;

    if (channel.isGroupChannel()) {
        $('.left-nav-channel-group[data-channel-url=' + channelUrl + ']').remove();
        delete (groupChannelLastMessageList[channelUrl]);
    }

    if (channel.isOpenChannel()) {
        $('.left-nav-channel-open[data-channel-url=' + channelUrl + ']').remove();
    }

    try {
        delete (channelMessageList[channelUrl]);
    } catch (e) {
        // pass
    }

    if (channel == currChannelInfo) {
        leaveCurrChannel();
    }
}

function hideCurrChannel() {
    console.log('hideCurrChannel called');
    if (currChannelInfo.isGroupChannel()) {
        currChannelInfo.hide(function (response, error) {
            if (error) {
                return;
            }

            $('.chat-canvas').html('');
            $('.chat-input-text__field').val('');
            $('.chat').hide();
            initChatTitle('', -1);
            $('.chat-empty').show();

            $('.left-nav-channel-messaging--active').remove();
            $('.left-nav-channel-group--active').remove();

            $('.modal-hide-channel').hide();
            channelListPage = 0;
            currChannelUrl = null;
            currChannelInfo = null;
            leaveMessagingChannelUrl = '';

            $('.chat-input-text__field').attr('disabled', true);
        });
    }
}

function leaveCurrChannel() {
    console.log('leaveCurrChannel called');
    if (currChannelInfo.isOpenChannel()) {
        currChannelInfo.exit(function (response, error) {
            if (error) {
                return;
            }
            $('.chat-canvas').html('');
            $('.chat-input-text__field').val('');
            $('.chat').hide();
            initChatTitle('', -1);
            $('.chat-empty').show();

            $('.left-nav-channel-open--active').remove();

            if ($('.left-nav-channel-open').length == 0) {
                $('.left-nav-channel-empty').show();
            }

            $('.modal-leave-channel').hide();
            channelListPage = 0;
            currChannelUrl = null;
            currChannelInfo = null;
            leaveChannelUrl = '';

            $('.chat-input-text__field').attr('disabled', true);
        });
    } else if (currChannelInfo.isGroupChannel()) {
        currChannelInfo.leave(function (response, error) {
            if (error) {
                return;
            }

            $('.chat-canvas').html('');
            $('.chat-input-text__field').val('');
            $('.chat').hide();
            initChatTitle('', -1);
            $('.chat-empty').show();

            $('.left-nav-channel-messaging--active').remove();
            $('.left-nav-channel-group--active').remove();

            $('.modal-leave-channel').hide();
            channelListPage = 0;
            currChannelUrl = null;
            currChannelInfo = null;
            leaveMessagingChannelUrl = '';

            $('.chat-input-text__field').attr('disabled', true);
        });
    }
}


function moveToTopGroupChat(channelUrl) {
    $('.left-nav-channel-group[data-channel-url=' + channelUrl + ']').prependTo('#messaging_channel_list');
}

function updateGroupChannelLastMessage(message) {
    var lastMessage = '';
    var lastMessageDateString = '';
    if (message) {
        lastMessage = xssEscape(message.message);
        var calcSeconds = (new Date().getTime() - message.createdAt) / 1000;
        var parsedValue;

        if (calcSeconds < 60) {
            parsedValue = parseInt(calcSeconds);
            if (parsedValue == 1) {
                lastMessageDateString = parsedValue + ' sec ago';
            } else {
                lastMessageDateString = parsedValue + ' secs ago';
            }
        } else if (calcSeconds / 60 < 60) {
            parsedValue = parseInt(calcSeconds / 60);
            if (parsedValue == 1) {
                lastMessageDateString = parsedValue + ' min ago';
            } else {
                lastMessageDateString = parsedValue + ' mins ago';
            }
        } else if (calcSeconds / (60 * 60) < 24) {
            parsedValue = parseInt(calcSeconds / (60 * 60));
            if (parsedValue == 1) {
                lastMessageDateString = parsedValue + ' hour ago';
            } else {
                lastMessageDateString = parsedValue + ' hours ago';
            }
        } else {
            parsedValue = parseInt(calcSeconds / (60 * 60 * 24));
            if (parsedValue == 1) {
                lastMessageDateString = parsedValue + ' day ago';
            } else {
                lastMessageDateString = parsedValue + ' days ago';
            }
        }

        if (lastMessageDateString) {
            //lastMessageDateString = '<div><img src="/images/ChatImages/icon-time.png" style="vertical-align: moddle; padding-bottom: 2px;" /> <span> ' + lastMessageDateString + '</span></div>';
        }

        $('.left-nav-channel-group[data-channel-url=' + message.channelUrl + '] .left-nav-channel-lastmessage').html(lastMessage);
        $('.left-nav-channel-group[data-channel-url=' + message.channelUrl + '] .left-nav-channel-lastmessagetime').html(lastMessageDateString);
    }
}

function updateGroupChannelListAll() {
    for (var i in groupChannelLastMessageList) {
        var message = groupChannelLastMessageList[i];
        updateGroupChannelLastMessage(message);
    }
}

var count = 0;
function addGroupChannel(user, isGroup, channelMemberList, targetChannel) {

    if (isGroup) {
        groupChannelLastMessageList[targetChannel.url] = targetChannel.lastMessage;
    }

    $.each($('.left-nav-channel'), function (index, channel) {
        $(channel).removeClass('left-nav-channel-open--active');
        $(channel).removeClass('left-nav-channel-messaging--active');
        $(channel).removeClass('left-nav-channel-group--active');
    });

    var addFlag = true;
    $.each($('.left-nav-channel-messaging'), function (index, channel) {
        if (currChannelUrl == $(channel).data('channel-url')) {
            $(channel).addClass('left-nav-channel-messaging--active');
            $(channel).find('div[class="left-nav-channel__unread"]').remove();
            addFlag = false;
        }
    });
    $.each($('.left-nav-channel-group'), function (index, channel) {
        if (currChannelUrl == $(channel).data('channel-url')) {
            $(channel).addClass('left-nav-channel-group--active');
            $(channel).find('div[class="left-nav-channel__unread"]').remove();
            addFlag = false;
        }
    });

    if (channelMemberList.length > 9) {
        channelMemberList = channelMemberList.substring(0, 9) + '...';
    }

    targetAddGroupChannel = targetChannel;
    if (addFlag && !isGroup) {
        $('#messaging_channel_list').append(
            '<div class="left-nav-channel left-nav-channel-messaging left-nav-channel-messaging--active" ' +
            '     onclick="joinGroupChannel(\'' + targetChannel.url + '\')"' +
            '     data-channel-url="' + targetChannel.url + '"' +
            '>' +
            channelMemberList +
            '</div>'
        );

        groupChannelListMembersAndProfileImageUpdate(targetChannel);
    } else if (addFlag && isGroup) {
        /*
        *Edited for Custom Group Name
        *=============================
        */
        var usernamechat = $('#usernamechat').val();
        var UserRolechat = parseInt($('#UserRolechat').val());
        var ChannelName = targetChannel.name;
        var NametoShow = "";
        //if (UserRolechat == 1) {

        //    if (usernamechat !== undefined) {
        //        var string = usernamechat;
        //        if (string.indexOf(" ") > -1) {
        //            // Contains a space
        //            var username = $('#usernamechat').val();
        //            var firstname = username.charAt(0).toUpperCase();
        //            var lastname = username.substr(username.indexOf(' ') + 1).charAt(0).toUpperCase();
        //            var intials = firstname + lastname;
        //            usernamechat = intials;
        //            //$('#initialName').text(intials);
        //            //var profileImage = $('#person').html(intials);
        //            //var profileImage = $('#person1').html(intials);

        //        } else {
        //            var username = $('#usernamechat').val();
        //            var firstname = username.charAt(0).toUpperCase();
        //            var intials = firstname;
        //            usernamechat = intials;
        //            //$('#initialName').text(intials);
        //            //var profileImage = $('#person').html(intials);
        //            //var profileImage = $('#person1').html(intials);
        //        }
        //    }
        //}

        var msgcall = targetChannel.memberMap[userId];
        if (UserRolechat == 1 || UserRolechat == 4) {
            NametoShow = ChannelName.substring(0, ChannelName.indexOf(' ~'));
            if (usernamechat == NametoShow) {
                NametoShow = ChannelName.substring(ChannelName.indexOf('~') + 2, ChannelName.length);
            }
        }
        else {
            NametoShow = ChannelName.substring(ChannelName.indexOf('~') + 2, ChannelName.length);
            if (NametoShow != "Homii Admin") {
                var namecheck = ChannelName.substring(ChannelName.indexOf('~') + 2, ChannelName.length);
                if (NametoShow !== undefined) {
                    var string = NametoShow;
                    if (string.indexOf(" ") > -1) {
                        // Contains a space
                        var username = NametoShow;//$('#usernamechat').val();
                        //var firstname = username.charAt(0).toUpperCase();                        
                        //var firstname = username.substr(username);
                        var firstname = username.split(' ')[0];
                        var lastname = username.substr(username.indexOf(' ') + 1).charAt(0).toUpperCase();
                        var intials = firstname + ' ' + lastname;
                        NametoShow = intials;
                        //$('#initialName').text(intials);
                        //var profileImage = $('#person').html(intials);
                        //var profileImage = $('#person1').html(intials);

                    } else {
                        var username = NametoShow;//$('#usernamechat').val();
                        var firstname = username.charAt(0).toUpperCase();
                        var intials = firstname;
                        NametoShow = intials;
                        //$('#initialName').text(intials);
                        //var profileImage = $('#person').html(intials);
                        //var profileImage = $('#person1').html(intials);
                    }
                }
            }
            if (usernamechat == NametoShow) {
                NametoShow = ChannelName.substring(ChannelName.indexOf('~') + 2, ChannelName.length);

            }
        }

        //if (1 == 1) {
        //    NametoShow = ChannelName.substring(ChannelName.indexOf('~') + 2, ChannelName.length);
        //}
        //else {
        //    NametoShow = ChannelName.substring(0, ChannelName.indexOf(' ~'));
        //}

        count++;
        $('#messaging_channel_list').append(
            '<div id="Channel' + count + '" class="left-nav-channel left-nav-channel-group left-nav-channel-group--active" ' +
            '     onclick="joinGroupChannel(\'' + targetChannel.url + "__" + count + '\')"' +
            '     data-channel-url="' + targetChannel.url + '"' +
            '>' +
            '<div class="left-nav-channel-members">' + NametoShow + '</div>' +
            '<div class="left-nav-channel-lastmessage"></div>' +
            '<div class="left-nav-channel-lastmessagetime"></div>' +
            '</div>'
        );

        targetAddGroupChannel = null;
        groupChannelListMembersAndProfileImageUpdate(targetChannel);
    }

    $('.modal-guide-create').hide();
    $('.left-nav-button-guide').hide();

}

function groupChannelListMembersAndProfileImageUpdate(targetChannel) {
    // select profileImage
    var members = targetChannel.members;
    // console.log(members);

    var membersProfileImageUrl = [];
    var membersNickname = '';
    for (var i in members) {
        var member = members[i];
        if (sb.currentUser.userId != member.userId) {
            membersProfileImageUrl.push(member.profileUrl);
        }

        membersNickname += xssEscape(member.nickname) + ', ';
    }
    membersNickname = membersNickname.substring(0, membersNickname.length - 2);

    if (membersNickname.length > 22) {
        membersNickname = membersNickname.substring(0, 22) + '...';
    }

    // console.log(membersProfileImageUrl);
    var selectSequence = parseInt(Math.random() * membersProfileImageUrl.length);
    // console.log(selectSequence);
    var selectedProfileImageUrl = membersProfileImageUrl[selectSequence];
    // console.log(selectedProfileImageUrl);

    var targetElem = $('.left-nav-channel-group[data-channel-url=' + targetChannel.url + ']');
    // $('.left-nav-channel-group[data-channel-url='+targetChannel.url+']')

    targetElem.css('background-image', 'url(' + selectedProfileImageUrl + ')');

    // member nickname update
    //targetElem.find('.left-nav-channel-members').html(membersNickname);
}

function joinGroupChannel(channelUrl, callback) {

    var id = "Channel" + channelUrl.split("__")[1];
    channelUrl = channelUrl.split("__")[0];
    //id = id.parseInt(id) - 1;
    //id =  +  id.toString();
    //$('.left-nav-channel-group').click(function (event) {
    //    
    //    alert($(this).index());
    //});
    i = 0;
    //var id = $('.left-nav-channel-group').attr('id');
    //var idArray = [];
    //$('.left-nav-channel-group').each(function () {
    //    idArray.push(this.id);
    //});
    //id = id.charAt(id.length - 1);
    CurrentUserimageUrl = $('#' + id).css('background-image');
    //CurrentUserimageUrl = CurrentUserimageUrl.replace('url(', '').replace(')', '').replace(/\"/gi, "");
    if (CurrentUserimageUrl == "Undefined" || CurrentUserimageUrl == null) {
    } else {
        CurrentUserimageUrl = CurrentUserimageUrl.replace('url(', '').replace(')', '').replace(/\"/gi, "");
    }
    // console.log('joinGroupChannel:', channelUrl);
    if (channelUrl == currChannelUrl) {
        navInit();
        popupInit();
        $.each($('.left-nav-channel'), function (index, channel) {
            if ($(channel).data('channel-url') == channelUrl) {
                $(channel).find('div[class="left-nav-channel__unread"]').remove();
            }
        });
        //$('.chat-canvas__list').prepend('<img src="' + CurrentUserimageUrl + '" hight="60px" width="60px"/>');
        ShowmsgLeftChatss();
        return false;
    }

    PreviousMessageListQuery = null;
    sb.GroupChannel.getChannel(channelUrl, function (channel, error) {
        if (error) {
            console.error(error);
            return;
        }

        channel.markAsRead();

        currChannelInfo = channel;
        currChannelUrl = channelUrl;

        var members = channel.members;
        var channelTitle = '';

        channel.refresh(function () {
            // TODO
        });

        $.each(members, function (index, member) {
            if (!isCurrentUser(member.userId)) {
                channelTitle += xssEscape(member.nickname) + ', ';
            }
        });

        channelTitle = channelTitle.slice(0, -2);
        var channelMemberList = channelTitle;
        if (channelTitle.length > 20) {
            channelTitle = channelTitle.substring(0, 20);
            channelTitle += '...';
        }
        var titleType = 1;
        var isGroup = false;
        if (members.length > 2) {
            channelTitle += '({})'.format(members.length);
            titleType = 2;
            isGroup = true;
        }

        $('.chat-empty').hide();
        initChatTitle(channelTitle, titleType);
        $('.chat-canvas').html('');
        $('.chat-input-text__field').val('');
        $('.chat').show();

        navInit();
        popupInit();
        makeMemberList(members);

        isOpenChat = false;
        loadMoreChatMessage(scrollPositionBottom);
        setWelcomeMessage('Group Channel');
        addGroupChannel(members, isGroup, channelMemberList, currChannelInfo);
        $('.chat-input-text__field').attr('disabled', false);

        $('.chat-top__button-hide').show();
        if (callback) {
            callback();
        }
    });

    //CurrentUserimageUrl = $('.left-nav-channel-group').css('background-image')
    //CurrentUserimageUrl = CurrentUserimageUrl.replace('url(', '').replace(')', '').replace(/\"/gi, "");
    //$('.othermsgdiv').append('<img src="' + CurrentUserimageUrl + '" hight="60px" width="60px"/>');

    //$('.othermsgdiv').append('<img src="' + CurrentUserimageUrl + '" hight="60px" width="60px"/>');

    return;

}
var CurrentUserimageUrl = "";
function endMessaging(channel, obj) {
    popupInit();
    leaveMessagingChannelUrl = channel.url;
    $('.modal-leave-channel-desc').html('Do you want to leave this messaging channel?');
    $('.modal-leave-channel').show();
    return false;
}

function hideChannel(channel) {
    popupInit();
    hideChannelUrl = channel.url;
    $('.modal-hide-channel-desc').html('Do you want to hide this channel?');
    $('.modal-hide-channel').show();
    return false;
}

function inviteMember() {
    if ($('.modal-messaging-list__icon--select').length == 0) {
        alert('Please select user');
        return false;
    }

    var userIds = [];
    $.each($('.modal-messaging-list__icon--select'), function (index, user) {
        if ($(user).data("guest-id")) {
            userIds.push($(user).data("guest-id"));
        }
    });

    currChannelInfo.inviteWithUserIds(userIds, function (response, error) {
        if (error) {
            return;
        }

        popupInit();
    });

}

function getGroupChannelList() {
    GroupChannelListQuery.next(function (channels, error) {
        if (error) {
            return;
        }

        channels.forEach(function (channel) {
            var channelMemberList = '';
            var members = channel.members;

            members.forEach(function (member) {
                if (currentUser.userId != member.userId) {
                    channelMemberList += xssEscape(member.nickname) + ', ';
                }
            });

            channelMemberList = channelMemberList.slice(0, -2);
            addGroupChannel(members, true, channelMemberList, channel);

            $.each($('.left-nav-channel'), function (index, item) {
                $(item).removeClass('left-nav-channel-messaging--active');
                $(item).removeClass('left-nav-channel-group--active');
            });

            var targetUrl = channel.url;
            var unread = channel.unreadMessageCount > 9 ? '9+' : channel.unreadMessageCount;
            if (unread != 0) {
                $.each($('.left-nav-channel'), function (index, item) {
                    if ($(item).data("channel-url") == targetUrl) {
                        addUnreadCount(item, unread, targetUrl);
                    }
                });
            }
        });

    });

}

function makeMemberList(members) {
    var item = {};
    //Clear memberList before updating it
    memberList = [];
    $.each(members, function (index, member) {
        item = {};
        if (!isCurrentUser(member['user_id'])) {
            item["user_id"] = member["user_id"];
            item["name"] = xssEscape(member["name"]);
            memberList.push(item);
        }
    });
}
/***********************************************
 *            // END MESSAGING
 **********************************************/


/***********************************************
 *            SendBird Settings
 **********************************************/
var sb;

var GroupChannelListQuery;
var OpenChannelListQuery;
var OpenChannelParticipantListQuery;

var UserListQuery;
var SendMessageHandler;

var UserList = {};
var isInit = false;

var channelMessageList = {};
var groupChannelLastMessageList = {};

function startSendBird(userId, redchannelurl) {
    //function startSendBird(userId, nickName) {
    //sb = new SendBird({
    //  appId: appId
    //});

    //sb.connect(userId, function (user, error) {
    //  if (error) {
    //    return;
    //  } else {
    //    initPage(user);
    //  }
    //});

    sb = new SendBird({
        appId: appId
    });

    //var userIds = ['01'];

    sb.connect(userId, function (user, error) {
        console.log(error);
        var usname = $('.user-name').text();
        //$('.left-nav-user-nickname').html(xssEscape(user.nickname));
        $('.left-nav-user-nickname').html(xssEscape(usname));

        if (user) {
            initPage(user)
        }
    });

    var initPage = function (user) {
        //;
        isInit = true;
        $('.init-check').hide();

        currentUser = user;
        //sb.updateCurrentUserInfo(nickName, '', function (response, error) {
        //  // console.log(response, error);
        //});

        GroupChannelListQuery = sb.GroupChannel.createMyGroupChannelListQuery();
        OpenChannelListQuery = sb.OpenChannel.createOpenChannelListQuery();
        UserListQuery = sb.createUserListQuery();

        GroupChannelListQuery.limit = 100;
        GroupChannelListQuery.includeEmpty = true;
        OpenChannelListQuery.limit = 100;

        UserListQuery.limit = 100;

        getGroupChannelList();
        if (redchannelurl != null) {
            joinGroupChannel(redchannelurl)
        }
        setTimeout(function () {
            updateGroupChannelListAll();
            setInterval(function () {
                updateGroupChannelListAll();
            }, 1000);
        }, 500);
    };

    var ConnectionHandler = new sb.ConnectionHandler();
    ConnectionHandler.onReconnectStarted = function (id) {
        console.log('onReconnectStarted');
    };

    ConnectionHandler.onReconnectSucceeded = function (id) {
        console.log('onReconnectSucceeded');
        if (!isInit) {
            initPage();
        }

        // OpenChannel list reset
        if ($('.right-section__modal-bg').is(':visible')) {
            var withoutCache = true;
            getChannelList(withoutCache);
        }

        // GroupChannel list reset
        GroupChannelListQuery = sb.GroupChannel.createMyGroupChannelListQuery();
        $('#messaging_channel_list').html('');
        getGroupChannelList();

        setTimeout(function () {
            updateGroupChannelListAll();
            setInterval(function () {
                updateGroupChannelListAll();
            }, 1000);
        }, 500);
    };

    ConnectionHandler.onReconnectFailed = function (id) {
        console.log('onReconnectFailed');
    };
    sb.addConnectionHandler('uniqueID', ConnectionHandler);

    var ChannelHandler = new sb.ChannelHandler();
    ChannelHandler.onMessageReceived = function (channel, message) {
        var isCurrentChannel = false;

        if (currChannelInfo == channel) {
            isCurrentChannel = true;
        }

        channel.refresh(function () { });

        // update last message
        if (channel.isGroupChannel()) {
            groupChannelLastMessageList[channel.url] = message;
            updateGroupChannelLastMessage(message);
            moveToTopGroupChat(channel.url);
        }

        if (isCurrentChannel && channel.isGroupChannel()) {
            channel.markAsRead();
        } else {
            if (channel.isGroupChannel()) {
                unreadCountUpdate(channel);
            }
        }

        if (!document.hasFocus()) {
            notifyMessage(channel, xssEscape(message.message));
        }

        if (message.isUserMessage() && isCurrentChannel) {
            setChatMessage(message);
        }

        if (message.isFileMessage() && isCurrentChannel) {
            $('.chat-input-file').removeClass('file-upload');
            $('#chat_file_input').val('');

            if (message.type.match(/^image\/.+$/)) {
                setImageMessage(message);
            } else {
                setFileMessage(message);
            }
        }



        if (message.isAdminMessage() && isCurrentChannel) {
            setBroadcastMessage(message);
        }
    };

    SendMessageHandler = function (message, error) {
        if (error) {
            if (error.code == 900050) {
                setSysMessage({
                    'message': 'This channel is freeze.'
                });
                return;
            } else if (error.code == 900041) {
                setSysMessage({
                    'message': 'You are muted.'
                });
                return;
            }
        }

        // update last message
        if (groupChannelLastMessageList.hasOwnProperty(message.channelUrl)) {
            groupChannelLastMessageList[message.channelUrl] = message;
            updateGroupChannelLastMessage(message);
        }


        if (message.isUserMessage()) {
            setChatMessage(message);
        }

        if (message.isFileMessage()) {
            $('.chat-input-file').removeClass('file-upload');
            $('#chat_file_input').val('');

            if (message.type.match(/^image\/.+$/)) {
                setImageMessage(message);
            } else {
                setFileMessage(message);
            }
        }

    };

    ChannelHandler.onMessageDeleted = function (channel, messageId) {
        console.log('ChannelHandler.onMessageDeleted: ', channel, messageId);
    };

    ChannelHandler.onReadReceiptUpdated = function (channel) {
        console.log('ChannelHandler.onReadReceiptUpdated: ', channel);
        updateChannelMessageCacheAll(channel);
    };

    ChannelHandler.onTypingStatusUpdated = function (channel) {
        console.log('ChannelHandler.onTypingStatusUpdated: ', channel);

        if (channel == currChannelInfo) {
            showTypingUser(channel);
        }
    };

    ChannelHandler.onUserJoined = function (channel, user) {
        console.log('ChannelHandler.onUserJoined: ', channel, user);
    };

    ChannelHandler.onUserLeft = function (channel, user) {
        console.log('ChannelHandler.onUserLeft: ', channel, user);
        setSysMessage({
            'message': '"' + xssEscape(user.nickname) + '" user is left.'
        });

        if (channel.isGroupChannel()) {
            groupChannelListMembersAndProfileImageUpdate(channel);
        }
    };

    ChannelHandler.onUserEntered = function (channel, user) {
        console.log('ChannelHandler.onUserEntered: ', channel, user);
    };

    ChannelHandler.onUserExited = function (channel, user) {
        console.log('ChannelHandler.onUserExited: ', channel, user);
    };

    ChannelHandler.onUserMuted = function (channel, user) {
        console.log('ChannelHandler.onUserMuted: ', channel, user);
    };

    ChannelHandler.onUserUnmuted = function (channel, user) {
        console.log('ChannelHandler.onUserUnmuted: ', channel, user);
    };

    ChannelHandler.onUserBanned = function (channel, user) {
        console.log('ChannelHandler.onUserBanned: ', channel, user);
        if (isCurrentUser(user.userId)) {
            alert('Oops...You got banned out from this channel.');
            navInit();
            popupInit();
        } else {
            setSysMessage({
                'message': '"' + xssEscape(user.nickname) + '" user is banned.'
            });
        }
    };

    ChannelHandler.onUserUnbanned = function (channel, user) {
        console.log('ChannelHandler.onUserUnbanned: ', channel, user);
        setSysMessage({
            'message': '"' + xssEscape(user.nickname) + '" user is unbanned.'
        });
    };

    ChannelHandler.onChannelFrozen = function (channel) {
        console.log('ChannelHandler.onChannelFrozen: ', channel);
    };

    ChannelHandler.onChannelUnfrozen = function (channel) {
        console.log('ChannelHandler.onChannelUnfrozen: ', channel);
    };

    ChannelHandler.onChannelChanged = function (channel) {
        console.log('ChannelHandler.onChannelChanged: ', channel);
        if (channel.isGroupChannel()) {
            groupChannelListMembersAndProfileImageUpdate(channel);
        }
    };

    ChannelHandler.onChannelDeleted = function (channel) {
        console.log('ChannelHandler.onChannelDeleted: ', channel);
        deleteChannel(channel);
    };

    sb.addChannelHandler('channel', ChannelHandler);

}

var showTypingUser = function (channel) {
    if (!channel.isGroupChannel()) {
        return;
    }

    if (!channel.isTyping()) {
        $('.chat-input-typing').hide();
        $('.chat-input-typing').html('');
        return;
    }

    var typingUser = channel.getTypingMembers();

    var nicknames = '';
    for (var i in typingUser) {
        var nickname = xssEscape(typingUser[i].nickname);
        nicknames += nickname + ', ';
    }
    if (nicknames.length > 2) {
        nicknames = nicknames.substring(0, nicknames.length - 2);
        $('.chat-input-typing').html('{} typing...'.format(nicknames));
        $('.chat-input-typing').show();
    } else {
        $('.chat-input-typing').hide();
        $('.chat-input-typing').html('');
    }
};


/***********************************************
 *          // END SendBird Settings
 **********************************************/


/***********************************************
 *              Common Function
 **********************************************/
function initChatTitle(title, index) {
    $('.chat-top__title').html(title);
    $('.chat-top__title').show();
    $('.chat-top-button').show();
    $('.chat-top__button-invite').hide();
    $('.chat-top__title').removeClass('chat-top__title--messaging');
    $('.chat-top__title').removeClass('chat-top__title--group');
    if (index == -1) {
        $('.chat-top__title').hide();
        $('.chat-top-button').hide();
    } else if (index == 0) {
        $('.chat-top__button-member').removeClass('chat-top__button-member__all');
        $('.chat-top__button-member').addClass('chat-top__button-member__right');
    } else {
        if (index == 1) {
            $('.chat-top__title').addClass('chat-top__title--messaging');
        } else {
            $('.chat-top__title').addClass('chat-top__title--group');
        }
        $('.chat-top__button-member').removeClass('chat-top__button-member__right');
        $('.chat-top__button-member').addClass('chat-top__button-member__all');
        $('.chat-top__button-invite').show();
    }
}

var scrollPositionBottom = function () {
    var scrollHeight = $('.chat-canvas')[0].scrollHeight;
    $('.chat-canvas')[0].scrollTop = scrollHeight;
    currScrollHeight = scrollHeight;
};

function afterImageLoad(obj) {
    $('.chat-canvas')[0].scrollTop = $('.chat-canvas')[0].scrollTop + obj.height + $('.chat-canvas__list').height();

}

function setChatMessage(message) {
    if (message.MESSAGE_TYPE == "file") {
        $('.chat-canvas').append(fileMessageList(message));
    } else {
        $('.chat-canvas').append(messageList(message));
    }


    updateChannelMessageCache(currChannelInfo, message);
    scrollPositionBottom();
    //$('.chat-canvas__list').prepend('<img src="' + CurrentUserimageUrl + '" hight="60px" width="60px"/>');
    //ShowmsgLeftChatss();
}

var PreviousMessageListQuery = null;

function loadMoreChatMessage(func) {
    if (!PreviousMessageListQuery) {
        PreviousMessageListQuery = currChannelInfo.createPreviousMessageListQuery();
    }

    PreviousMessageListQuery.load(30, false, function (messages, error) {
        if (error) {
            return;
        }

        var moreMessage = messages;
        var msgList = '';
        messages.forEach(function (message) {
            if (message.messageType == "file") {
                $('.chat-input-file').removeClass('file-upload');
                $('#chat_file_input').val('');
                if (message.type.match(/^image\/.+$/)) {
                    msgList += imageMessageList(message);
                } else {
                    msgList += fileMessageList(message);
                }
            }
            else {
                msgList += messageList(message);
            }
            //switch (message.MESSAGE_TYPE) {
            //    case message.MESSAGE_TYPE_USER:
            //        msgList += messageList(message);
            //        break;
            //    case message.MESSAGE_TYPE_FILE:
            //        $('.chat-input-file').removeClass('file-upload');
            //        $('#chat_file_input').val('');

            //        if (message.type.match(/^image\/.+$/)) {
            //            msgList += imageMessageList(message);
            //        } else {
            //            msgList += fileMessageList(message);
            //        }
            //        break;
            //    default:
            //}
        });

        $('.chat-canvas').prepend(msgList);
        $('.chat-canvas')[0].scrollTop = (moreMessage.length * MESSAGE_TEXT_HEIGHT);

        for (var i in messages) {
            var message = messages[i];
            updateChannelMessageCache(currChannelInfo, message);
        }

        if (func) {
            //window.location.reload();
            func();
        }
    });
    //$('.chat-canvas__list').prepend('<img src="' + CurrentUserimageUrl + '" hight="60px" width="60px"/>');
    //ShowmsgLeftChatss();
}

function messageList(message) {
    var msgList = '';
    var user = message.sender;
    var channel = currChannelInfo;

    if (message.isAdminMessage()) {
        console.log(message);
    } else {
        if (isCurrentUser(user.userId)) {
            var readReceiptHtml = '  <label class="chat-canvas__list-readreceipt"></label>';

            var msg = '' +
                '<div class="chat-canvas__list">' +

                '  <label class="chat-canvas__list-name chat-canvas__list-name__user" data-userid="%userid%">' +
                xssEscape(user.nickname) +
                '  </label>' +
                '  <label class="chat-canvas__list-separator">:</label>' +
                '  <label class="chat-canvas__list-text" data-messageid="%messageid%">%message%</label>' +
                readReceiptHtml +
                '</div>';
            msg = msg.replace('%message%', convertLinkMessage(xssEscape(message.message)));
            msg = msg.replace('%userid%', user.userId).replace('%messageid%', message.messageId);

            msgList += msg;
        }
        else {
            var msg = '' +
                '<div class="chat-canvas__list">' +
                '<img src="' + currChannelInfo.inviter.profileUrl + '" class="imgIcon" hight="40px" width="40px"/>' +
                '  <label class="chat-canvas__list-name chat-canvas__list-name__other" data-userid="%userid%" data-nickname="%nickname%">' +
                xssEscape(user.nickname) +
                '  </label>' +
                '  <label class="chat-canvas__list-separator">:</label>' +
                '  <label class="chat-canvas__list-text" data-messageid="%messageid%">' +
                convertLinkMessage(xssEscape(message.message)) +
                '  </label>' +
                '</div>';
            msgList += msg.replace('%userid%', user.userId).replace('%nickname%', xssEscape(user.nickname)).replace('%messageid%', message.messageId);
        }
    }

    $('.chat-canvas__list-name__user').parent().addClass('mymsgdiv');
    //ShowmsgLeftChatss();
    //$('.chat-canvas__list').prepend('<img src="' + CurrentUserimageUrl + '" hight="60px" width="60px"/>');

    return msgList;
}
var i = 0;
function updateChannelMessageCache(channel, message) {
    //
    //$('.othermsgdiv').prepend('<img src="' + CurrentUserimageUrl + '" hight="40px" width="40px"/>');



    var readReceipt = -1;
    if (channel.isGroupChannel()) {
        readReceipt = channel.getReadReceipt(message);
    }
    if (!channelMessageList.hasOwnProperty(channel.url)) {
        channelMessageList[channel.url] = {};
    }

    if (!channelMessageList[channel.url].hasOwnProperty(message.messageId)) {
        channelMessageList[channel.url][message.messageId] = {};
    }

    channelMessageList[channel.url][message.messageId]['message'] = message;

    if (channel.isGroupChannel() && readReceipt >= 0) {
        channelMessageList[channel.url][message.messageId]['readReceipt'] = readReceipt;

        var elemString = '.chat-canvas__list-text[data-messageid=' + message.messageId + ']';
        var elem = $(elemString).next();
        if (readReceipt == 0) {
            elem.html('').hide();
        } else {
            elem.html(readReceipt);
            if (!elem.is(':visible')) {
                elem.show();
            }
        }
        ShowmsgLeftChatss();

        //if (i == 0) {
        //    $('.othermsgdiv').prepend('<img src="' + CurrentUserimageUrl + '" class="imgIcon" hight="40px" width="40px"/>');
        //    i++;
        //}



    } else {
        //$('.chat-canvas__list').prepend('<img src="' + CurrentUserimageUrl + '" hight="60px" width="60px"/>');
        ShowmsgLeftChatss();
        return;
    }
}

function updateChannelMessageCacheAll(channel) {
    for (var i in channelMessageList[channel.url]) {
        var message = channelMessageList[channel.url][i]['message'];
        updateChannelMessageCache(channel, message);
    }


}

function fileMessageList(message) {
    var msgList = '';
    var user = message.sender;
    if (isCurrentUser(user.userId)) {
        msgList += '' +
            '<div class="chat-canvas__list">' +

            '  <label class="chat-canvas__list-name chat-canvas__list-name__user">' +
            xssEscape(user.nickname) +
            '  </label>' +
            '  <label class="chat-canvas__list-separator">:</label>' +
            '  <label class="chat-canvas__list-text" data-messageid="%messageid%">'.replace('%messageid%', message.messageId) +
            '    <label class="chat-canvas__list-text-file">FILE</label>' +
            '    <a href="' + xssEscape(message.url) + '" target="_blank">' + xssEscape(message.name) + '</a>' +
            '  </label>' +
            '</div>';
    } else {
        msgList += '' +
            '<div class="chat-canvas__list">' +
            '  <label class="chat-canvas__list-name" data-userid="%userid%" data-nickname="%nickname%">'.replace('%userid%', user.userId).replace('%nickname%', xssEscape(user.nickname)) +
            xssEscape(user.nickname) +
            '  </label>' +
            '  <label class="chat-canvas__list-separator">:</label>' +
            '  <label class="chat-canvas__list-text" data-messageid="%messageid%">'.replace('%messageid%', message.messageId) +
            '    <label class="chat-canvas__list-text-file">FILE</label>' +
            '    <a href="' + xssEscape(message.url) + '" target="_blank">' + xssEscape(message.name) + '</a>' +
            '  </label>' +
            '</div>';
    }

    // var channel = currChannelInfo;
    // updateChannelMessageCache(channel, message);

    return msgList;
}

function imageMessageList(obj) {
    var msgList = '';
    var message = obj;
    var user = message.sender;
    if (isCurrentUser(user.userId)) {
        msgList += '' +
            '<div class="chat-canvas__list">' +
            '  <label class="chat-canvas__list-name chat-canvas__list-name__user">' +
            //xssEscape(user.nickanme) +
            '  </label>' +
            '  <label class="chat-canvas__list-separator"></label>' +
            '  <label class="chat-canvas__list-text" data-messageid="%messageid%">'.replace('%messageid%', message.messageId) +
            //xssEscape(message.name) +
            '  </label>' +
            //'  <div class="chat-canvas__list-file" onclick="window.open(\'' + xssEscape(message.url) + '\', \'_blank\');">' +
            '    <img src="' + xssEscape(message.url) + '" hidden class="chat-canvas__list-file-img" onload="afterImageLoad(this)">' +
            //  '  </div>' +
            '<div class="chat-canvas__list-file" onclick="window.open(\'' + xssEscape(message.url) + '\', \'_blank\');">' +
            '<img src="' + xssEscape(message.url) + '" class="chat-canvas__list-file-img" onload="afterImageLoad(this)">' +
            '</div > ' +
            '</div>';
    } else {
        msgList += '' +
            '<div class="chat-canvas__list">' +
            '<div class="imgmsgdiv"><img src="https://static.sendbird.com/sample/profiles/profile_32_512px.png" class="imgIcon" hight="40px" width="40px"/></div>' +

            '  <label class="chat-canvas__list-name" data-userid="%userid%" data-nickname="%nickname%">'.replace('%userid%', user.userId).replace('%nickname%', xssEscape(user.nickname)) +
            //xssEscape(user.nickanme) +
            '  </label>' +
            '  <label class="chat-canvas__list-separator"></label>' +
            '  <label class="chat-canvas__list-text" data-messageid="%messageid%">'.replace('%messageid%', message.messageId) +
            //xssEscape(message.name) +
            '  </label>' +
            '    <img src="' + xssEscape(message.url) + '" hidden class="chat-canvas__list-file-img" onload="afterImageLoad(this)">' +

            //'  <div class="chat-canvas__list-file" onclick="window.open(\'' + xssEscape(message.url) + '\', \'_blank\');">' +
            //'    <img src="' + xssEscape(message.url) + '" class="chat-canvas__list-file-img" onload="afterImageLoad(this)">' +
            //  '  </div>' +
            '<div class="chat-canvas__list-file" onclick="window.open(\'' + xssEscape(message.url) + '\', \'_blank\');">' +
            '<img src="' + xssEscape(message.url) + '" class="chat-canvas__list-file-img" onload="afterImageLoad(this)">' +
            '</div > ' +
            '</div>';
    }

    return msgList;
}

function setWelcomeMessage(name) {
    $('.chat-canvas').append(
        '<div class="chat-canvas__list-notice">' +
        '  <label class="chat-canvas__list-system">' +
        'Welcome to the {}!'.format(name) +
        '  </label>' +
        '</div>'
    );

}

$('.chat-input-text__field').keydown(function (event) {

    if (event.keyCode == 13 && !event.shiftKey) {
        event.preventDefault();
        if (!$.trim(this.value).isEmpty()) {
            event.preventDefault();
            this.value = $.trim(this.value);
            currChannelInfo.sendUserMessage($.trim(this.value), '', SendMessageHandler);
            scrollPositionBottom();
            var msg = $('.chat-input-text__field').val();
            $.each(currChannelInfo.members, function (key, value) {
                ;
                if (value.userId !== 'Admin') {
                    $.getJSON('/SendBird/ChatNotification?msg=' + msg + '&Id=' + value.userId + '&Status=' + value.connectionStatus, function (index) {
                        console.log('Message successfully notified!');
                    });
                };
            });
        }
        this.value = "";
    } else {
        if (!$.trim(this.value).isEmpty()) {
            if (!currChannelInfo.isOpenChannel()) {
                currChannelInfo.startTyping();
            }
        }
    }
});
//Send message button
$('#btnSendMessage').click(function () {

    event.preventDefault();
    if (!$.trim('#ddd').isEmpty()) {
        event.preventDefault();
        this.value = $('#ddd').val().trim();
        currChannelInfo.sendUserMessage(this.value, '', SendMessageHandler);
        scrollPositionBottom();
        var msg = $('.chat-input-text__field').val();
        $.each(currChannelInfo.members, function (key, value) {
            ;
            if (value.userId !== 'Admin') {
                $.getJSON('/SendBird/ChatNotification?msg=' + msg + '&Id=' + value.userId + '&Status=' + value.connectionStatus, function (index) {
                    console.log('Message successfully notified!');
                });
            };
        });
    }
    this.value = "";

    if (!$.trim(this.value).isEmpty()) {
        if (!currChannelInfo.isOpenChannel()) {
            currChannelInfo.startTyping();
        }
    }
    $('#ddd').val("");
});


$('#chat_file_input').change(function () {
    if ($('#chat_file_input').val().trim().length == 0) return;
    var file = $('#chat_file_input')[0].files[0];
    $('.chat-input-file').addClass('file-upload');

    currChannelInfo.sendFileMessage(file, SendMessageHandler);
});

function setImageMessage(obj) {
    $('.chat-canvas').append(imageMessageList(obj));
    scrollPositionBottom();

}

function setFileMessage(obj) {
    $('.chat-canvas').append(fileMessageList(obj));
    scrollPositionBottom();
}

$('.chat-canvas').on('scroll', function () {
    setTimeout(function () {
        var currHeight = $('.chat-canvas').scrollTop();
        if (currHeight == 0) {
            if ($('.chat-canvas')[0].scrollHeight > $('.chat-canvas').height()) {
                loadMoreChatMessage();
            }
        }
    }, 200);
});

function setSysMessage(obj) {
    $('.chat-canvas').append(
        '<div class="chat-canvas__list-notice">' +
        '  <label class="chat-canvas__list-system">' +
        xssEscape(obj['message']) +
        '  </label>' +
        '</div>'
    );
    scrollPositionBottom();
}

function setBroadcastMessage(obj) {
    $('.chat-canvas').append(
        '<div class="chat-canvas__list">' +
        '  <label class="chat-canvas__list-broadcast">' +
        xssEscape(obj['message']) +
        '  </label>' +
        '</div>'
    );
    scrollPositionBottom();
}

function unreadCountUpdate(channel) {
    var targetUrl = channel.url;

    var callAdd = true;
    var unread = channel.unreadMessageCount > 9 ? '9+' : channel.unreadMessageCount;
    if (unread > 0 || unread == '9+') {
        $.each($('.left-nav-channel'), function (index, item) {
            if ($(item).data("channel-url") == targetUrl) {
                addUnreadCount(item, unread, targetUrl);
                callAdd = false;
            }
        });

        if (callAdd) {
            showChannel(channel, unread, targetUrl);
        }
    } else {
        showChannel(channel, unread, targetUrl);
    }
}

function addUnreadCount(item, unread, targetUrl) {
    if (targetUrl == currChannelUrl) {
        if (document.hasFocus()) {
            return;
        }
    }

    if ($(item).find('div[class="left-nav-channel__unread"]').length != 0) {
        $(item).find('div[class="left-nav-channel__unread"]').html(unread);
    } else {
        $('<div class="left-nav-channel__unread">' + unread + '</div>')
            .prependTo('.left-nav-channel-group[data-channel-url=' + targetUrl + ']');
    }

}

function showChannel(channel, unread, targetUrl) {
    var members = channel.members;
    var channelMemberList = '';
    $.each(members, function (index, member) {
        if (currentUser.userId != member.userId) {
            channelMemberList += xssEscape(member.nickname) + ', ';
        }
    });
    channelMemberList = channelMemberList.slice(0, -2);
    addGroupChannel(members, true, channelMemberList, channel);

    if (unread != 0) {
        $.each($('.left-nav-channel'), function (index, item) {
            if ($(item).data("channel-url") == targetUrl) {
                addUnreadCount(item, unread, targetUrl);
            }
        });
    }

}
/***********************************************
 *          // END Common Function
 **********************************************/


$('.right-section__modal-bg').click(function () {
    navInit();
    popupInit();
});

function navInit() {
    $('.right-section__modal-bg').hide();

    // OPEN CHAT
    $('#btn_open_chat').removeClass('left-nav-open--active');
    $('.modal-open-chat').hide();

    // MESSAGING
    $('#btn_messaging_chat').removeClass('left-nav-messaging--active');
    $('.modal-messaging').hide();
}

function popupInit() {
    $('.modal-member').hide();
    $('.chat-top__button-member').removeClass('chat-top__button-member--active');
    $('.modal-invite').hide();
    $('.chat-top__button-invite').removeClass('chat-top__button-invite--active');


}

function initChats(redchannelurl) {
    userId = decodeURI(decodeURIComponent(getUrlVars()['userid']));
    userId = checkUserId(userId);
    //nickname = decodeURI(decodeURIComponent(getUrlVars()['nickname']));

    $('.init-check').show();
    startSendBird(userId, redchannelurl);

    //startSendBird(userId, nickname);
    //$('.left-nav-user-nickname').html(xssEscape(nickname));
}

function ShowmsgLeftChatss() {
    //alert("this is tool msg Left");
    $('.chat-canvas__list-name__user').parent().addClass('mymsgdiv');
    $('.chat-canvas__list-name__other').parent().addClass('othermsgdiv');
    var msgsLength = $('.chat-canvas__list').length;
    if (msgsLength > 0) {
        $('.chat-canvas__list-system').hide();
    }

}

$(document).ready(function () {

    $('#messaging_channel_list').css("display", "none");

    var redchannelurl = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[2];

    //notifyMe();
    initChats(redchannelurl);
    //ShowmsgLeftChatss();
    $('.loader').css("display", "none");
    //if (count == 0) {

    //    setTimeout(
    //    function () {
    //        RemoveUnnecessaryUsers();
    //    }, 1000);
    //    count++;
    //}
    $('#messaging_channel_list').css("display", "block");

});

window.onfocus = function () {
    if (currChannelInfo && !currChannelInfo.isOpenChannel()) {
        currChannelInfo.markAsRead();
    }
    $.each($('.left-nav-channel'), function (index, item) {
        if ($(item).data("channel-url") == currChannelUrl) {
            $(item).find('div[class="left-nav-channel__unread"]').remove();
        }
    });
};
//$('body').click(function () {
//    
//    ShowmsgLeftChatss();
//})
//setTimeout(function () { ShowmsgLeftChatss(); }, 5000);
//var count = 0;
//function RemoveUnnecessaryUsers() {
//    
//    var length = $('#messaging_channel_list').children().length / 2;
//    for (var i = 0; i < length; i++) {

//        $('#messaging_channel_list').children()[i].remove();
//    }

//    $('#messaging_channel_list').css("display", "block");
//}





















