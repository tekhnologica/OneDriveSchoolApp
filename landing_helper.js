function parseURLParams() {
    paramStart = window.location.href.indexOf('#');
    if (paramStart != -1) {
        var split = window.location.href.slice(paramStart + 1);
        console.log(split);
    }
    console.log(split);
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
                jQuery("<div>", {
                    id: "meDiv"
                }).appendTo("#accountInfoDiv");

                $.each(response, function (key, value) {
                    $("#meDiv").append("<p'><strong>" + key + " </strong>: " + value + "</p>");
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
                    count += 1;
                    jQuery('<div>', {
                        id: "contactDiv" + String(count),
                        class: "contactDiv"
                    }).appendTo("#contactsDiv");

                    console.log(response.data[i]);
                    $.each(response.data[i], function (key, val) {
                        var name = "#contactDiv" + String(count);
                        $(name).append("<p><strong> " + key + " :</strong> " + val + " </p>");
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
                console.log(response.data)
                if (!response.data || response.data.length === 0) {
                    jQuery("<div>", {
                        id: "friendDiv0",
                        class: "friendDiv"
                    }).appendTo("#friendsDiv");
                    $("#friendDiv0").append("<h3>No Friends Found...</h3>");
                    $("#friendDiv0").append("<p>Maybe this account does not use Xbox Live?</p>");
                }
                else {
                    var count = 0;
                    for (var i = 0; i < response.data.length; i++) {
                        count += 1;
                        jQuery("<div>", {
                            id: "friendDiv" + String(count),
                            class: "friendDiv"
                        }).appendTo("#friendsDiv");
                        $.each(response.data[i], function (key, val) {
                            $("#friendDiv" + String(count)).append("<p><strong>" + key + " :</strong> " + val + "</p>");
                        });
                    }
                }
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
                console.log(response.data);
                var count = 0;
                if (!response.data || response.data.length === 0) {
                    jQuery("<div>", {
                        id: "eventDiv0",
                        class: "eventDiv"
                    }).appendTo("#eventsDiv");
                    $("#eventDiv0").append("<h3>No events found...");
                    $("#eventDiv0").append("<p>This user either has no calendar events or they are all set to 'private'</p>");
                }
                else {
                    for (var i = 0; i < response.data.length; i++) {
                        count++;
                        jQuery("<div>", {
                            id: "eventDiv" + String(count),
                            class: "eventDiv"
                        }).appendTo("#eventsDiv");
                        $.each(response.data[i], function (key, val) {
                            $("#eventDiv" + String(count)).append("<p><strong>" + key + " :</strong> " + val + "</p>");
                        });
                    }
                }

            },
            function (badresponse) {
                console.log(badresponse.error);
            }
        );
    });

    $("#calendarsBtn").click(function () {
        WL.api({
            path: '/me/calendars',
            method: 'GET',
            access_token: sess.access_token
        }).then(
            function (response) {
                console.log(response.data);
                var count = 0;
                if (!response.data || response.data.length === 0) {
                    jQuery("<div>", {
                        id: "calendarDiv0",
                        class: "calendarDiv"
                    }).appendTo("#calendarsDiv");
                    $("#calendarDiv0").append("<h3>No calendars found...");
                    $("#calendarDiv0").append("<p>This user has no calendars</p>");
                }
                else {
                    for (var i = 0; i < response.data.length; i++) {
                        count++;
                        jQuery("<div>", {
                            id: "calendarDiv" + String(count),
                            class: "calendarDiv"
                        }).appendTo("#calendarsDiv");
                        $.each(response.data[i], function (key, val) {
                            $("#calendarDiv" + String(count)).append("<p class='" + key + "'><strong>" + key + " :</strong> " + val + "</p>");
                        });
                    }
                }

            },
            function (badresponse) {
                console.log(badresponse.error);
            }
        );
    });

    $(".calendarDiv").click(function () {
        alert('you clicked on a calendar!');
    })

    $(".contentDiv").dblclick(function () {

    });
});