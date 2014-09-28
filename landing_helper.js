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

    $("#loadBtn").click(function () {
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
});