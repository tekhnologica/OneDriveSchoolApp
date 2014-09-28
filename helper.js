function loadLanding() {
    window.location.href = "landing.html";
};

$(document).ready(function () {

    WL.init({
        client_id: '000000004012F40E',
        redirect_uri: 'http://ec2-54-69-112-56.us-west-2.compute.amazonaws.com/landing.html'
    });

    var sess;
    try {
        sess = WL.getSession();
        $("#statusText").html("You are already logged in! Redirecting to landing page...");
        $("#statusText").css({ 'color': 'green' });
        setTimeout(loadLanding(), 4000);
    }
    catch (err) {
        sess = null;
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