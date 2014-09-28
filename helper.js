$(document).ready(function () {

    WL.init({
        client_id: '000000004012F40E',
        redirect_uri: 'http://ec2-54-69-112-56.us-west-2.compute.amazonaws.com/landing.html'
    });

    var sess = WL.getSession();
    if (sess != null) {
        $("#loginBtn").hide();
        $("#statusText").html("You are already logged in! Redirecting to landing page...");
        $("#statusText").css({ 'color': 'green' });
        setTimeout(function (sess) { window.location.href = "landing.html#accessToken=" + sess.access_token }, 4000);
    }

    $("#loginBtn").click(function () {

        WL.login({
            scope: ["wl.skydrive", "wl.basic"]
        }).then(
                function (resonse) {
                    console.log(response);
                },
                function (badresponse) {
                    console.log(badresponse);
                })
    });
});