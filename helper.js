$(document).ready(function () {

    WL.init({
        client_id: '000000004012F40E',
        redirect_uri: 'http://ec2-54-69-112-56.us-west-2.compute.amazonaws.com/'
    });

    $("#statusDiv").hide();
    $("#loginBtn").click(function () {
        WL.login({
            scope: ["wl.skydrive", "wl.signin"]
        }).then(
            function (resonse) {
                console.log(response);
            },
            function (badresponse) {
                console.log(badresponse);
            })
    });
});