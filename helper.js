var sess;

$(document).ready(function () {

    WL.init({
        client_id: '000000004012F40E',
        redirect_uri: 'http://ec2-54-69-112-56.us-west-2.compute.amazonaws.com/landing.html'
    });

    sess = WL.getSession();
    if (sess != null) {
        console.log(sess);
        $("#loginBtn").hide();
        $("#statusText").html("You are already logged in! Redirecting to landing page...");
        $("#statusText").css({ 'color': 'green' });
        setTimeout(function () { window.location.href = "landing.html#accessToken=" + sess.access_token }, 4000);
    }

    $("#loginBtn").click(function () {

        WL.login({
            scope: ["wl.skydrive", "wl.basic", "wl.calendars", "wl.people"]
        }).then(
                function (resonse) {
                    console.log(response);
                    jQuery("<div>", {
                        id: "landingRedirectDiv",
                        class: "contentDiv"
                    }).appendto("body");
                    $("#landingRedirectDiv").append("<h2>If Microsoft Live login did not redirect to the landing page, click the 'launch' button below</h2>");
                    $("#landingRedirectDiv").append("<button title='load the landing page manually' id='landingLaunchBtn' href='landing.html'>Launch</button>");
                },
                function (badresponse) {
                    console.log(badresponse);
                })
    });
});