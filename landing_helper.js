function parseURLParams() {
    var sliced = window.location.href.slice(window.location.href.indexOf('#') + 1)[0].split('&');
    console.log(sliced);
}

$(document).ready(function () {

    WL.init({
        client_id: '000000004012F40E',
        redirect_uri: 'http://ec2-54-69-112-56.us-west-2.compute.amazonaws.com/landing.html'
    });
    var sess = WL.getSession();
    parseURLParams();
    console.log(sess);

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