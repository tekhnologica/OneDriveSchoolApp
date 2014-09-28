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
                    $("#accountInfoDiv").append("<p class='inline-p'>" + key + " : </p>");
                    $("#accountInfoDiv").append("<p class='inline-p'>" + value + "</p>");
                    $("#accountInfoDiv").append("<br>");
                })
            },
            function (badresponse) {
                console.log(badresponse);
            }
        );
    });
});