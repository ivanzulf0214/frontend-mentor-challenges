$(document).ready(function() {

    $('.notification_list').on('click', '.notification_item', function() {
        const isRead = $(this).data('read')

        if (isRead) return

        markAsRead($(this))
    })

    $('#read_all_btn').click(function() {
        markAsRead($('.notification_item[data-read="false"]'))
    });

    function markAsRead(element) {
        element.attr('data-read', true)
        setUnreadCount()
    }

    function getUnreadCount() {
        return $('.notification_item[data-read="false"]').length
    }

    function setUnreadCount() {
        const unreadCount = getUnreadCount()

        if (unreadCount > 0) {
            $('#notification_badge').text(unreadCount)
        } else {
            $('#notification_badge').hide()
        }
    }

})