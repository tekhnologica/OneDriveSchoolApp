$(document).ready(function () {

    WL.init({
        client_id: '000000004012F40E',
        redirect_uri: 'http://ec2-54-69-112-56.us-west-2.compute.amazonaws.com/landing.html'
    });

    $("#statusDiv").hide();
    $("#loginBtn").click(function () {
        var sess;
        try {
            sess = WL.getSession();
        }
        catch (err) {
            sess = null;
        }

        if (!sess) {
            WL.login({
                scope: ["wl.skydrive", "wl.basic"]
            }).then(
                function (resonse) {
                    console.log(response);
                },
                function (badresponse) {
                    console.log(badresponse);
                })
        }
        else {
            console.log('you are already logged in');
            console.log('session info:');
            console.log(sess);
            function loadLanding() {
                window.location.href = "landing.html";
            }
            loadLanding().delay(3000);
        }
    });
});