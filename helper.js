$(document).ready(function () {

    WL.init({
        client_id: '000000004012F40E',
        redirect_uri: "https://login.live.com/oauth20_desktop.srf"
    });

    $("#statusDiv").hide();
    $("#loginBtn").click(function () {
        WL.login({
            scope: ["wl.skydrive", "wl.signin"]
        }).then(
            function (resonse) {
                console.log(response);
                $("#statusText").html("Login Succeeded!");
                $("#statusText").css({ 'color': 'green' });
            },
            function (badresponse) {
                console.log(badresponse);
                $("#statusText").html("Login Failed...");
                $("#statusText").css({ 'color': 'red' });
                $("#statusText").html("Not Logged In").delay(3000);
                $("#statusText").css({ 'color': 'blue' }).delay(3000);
            })
    });
});