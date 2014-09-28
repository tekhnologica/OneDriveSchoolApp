$(document).ready(function () {

    WL.init({
        client_id: '000000004012F40E',
        redirect_uri: 'http://ec2-54-69-112-56.us-west-2.compute.amazonaws.com/landing.html'
    });
    try {
        var sess = WL.getSession().access_token;
    }
    catch (err) {
        console.log('error: unable to get session data');
    }

    $("#loadBtn").click(function () {
        WL.api({
            path: 'me',
            method: 'GET',
            access_token: sess.access_token
        }).then(
            function (response) {
                console.log(response);
            },
            function (badresponse) {
                console.log(badresponse);
            }
        );
    });
});