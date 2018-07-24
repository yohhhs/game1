function GetQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) {
        return r[2]
    } else {
        return null
    }
}
var memberType = GetQueryString('memberType')
var giftId = GetQueryString('giftId')
$('#goStart').on('click', function() {
    if ($('#name').val() !== '' && $('#tel').val() !== '') {
        $.post('https://www.topasst.com/web/game/submitInfo', {
            name: $('#name').val(),
            mobile: $('#tel').val(),
            memberType: 1,
            giftId: giftId
        }, function(res) {
            if (res.statusCode == 200) {
                window.location.href = res.data
            } else {
                alert(res.msg)
            }
        })
    }
})