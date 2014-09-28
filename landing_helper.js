$(document).ready(function () {

    WL.init({
        client_id: '000000004012F40E',
        redirect_uri: 'http://ec2-54-69-112-56.us-west-2.compute.amazonaws.com/landing.html'
    });

    $("#loadBtn").click(function () {
        console.log(WL.getSession());
        WL.api({
            path: 'me',
            method: 'GET',
            access_token: WL.getSession().access_token
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