function parseURLParams() {
    paramStart = window.location.href.indexOf('#');
    if (paramStart != -1) {
        var split = window.location.href.slice(paramStart + 1);
        console.log(split);
    }
    console.log(sliced);
}

$(document).ready(function () {

    WL.init({
        client_id: '000000004012F40E',
        redirect_uri: 'http://ec2-54-69-112-56.us-west-2.compute.amazonaws.com/landing.html'
    });
    var sess = WL.getSession();
    if (sess != null) {
        console.log(sess);
    }
    else {
        parseURLParams();
    }

    $("#accountBtn").click(function () {
        WL.api({
            path: 'me',
            method: 'GET',
            access_token: sess.access_token
        }).then(
            function (response) {
                console.log(response);
                $.each(response, function (key, value) {
                    $("#accountInfoDiv").append("<p class='inline-p'><strong>" + key + " </strong>: " + "</p>");
                    $("#accountInfoDiv").append("<p class='inline-p'>" + value + "</p>");
                    $("#accountInfoDiv").append("<br>");
                });
                if (response.id) {
                    $("#netShareLink").html("Your network share mapping is: https://d.docs.live.net/" + response.id);
                    $("#netShareLink").css({ 'color': 'green' });
                }
                else {
                    $("#netShareLink").html("Response back did not include the user id...");
                    $("#netShareLink").css({ 'color': 'red' });
                }
            },
            function (badresponse) {
                console.log(badresponse);
            }
        );
    });

    $("#contactsBtn").click(function () {
        WL.api({
            path: '/me/contacts',
            method: 'GET',
            access_token: sess.access_token
        }).then(
            function (response) {
                console.log(response.data);
                var count = 0;

                for (var i = 0; i < response.data.length; i++) {
                    $("#contactsDiv").append("<div id=contact" + String(count) + "></div>");
                    count += 1;
                    console.log(response.data[i]);
                    $.each(response.data[i], function (key, val) {
                        $("#contact" + String(count)).append("<p class='inline-p'><strong> " + key + " : " + val + " </p>");
                    });

                }
                $("contactsBtn").hide();
            },
            function (badresponse) {
                console.log(badresponse.error);
            }
        );
    });

    $("#friendsBtn").click(function () {
        WL.api({
            path: '/me/friends',
            method: 'GET',
            access_token: sess.access_token
        }).then(
            function (response) {
                console.log(response)
            },
            function (badresponse) {
                console.log(badresponse.error)
            }
        );
    });

    $("#eventsBtn").click(function () {
        WL.api({
            path: '/me/events',
            method: 'GET',
            access_token: sess.access_token
        }).then(
            function (response) {
                console.log(response);
            },
            function (badresponse) {
                console.log(badresponse.error);
            }
        );
    });

    $(".contentDiv").dblclick(function () {

    });
});