document.getElementById('nutCopylink').addEventListener('click', function() {
    const link = window.location.href;
    navigator.clipboard.writeText(link).then(function() {
 
        const button = document.getElementById('nutCopylink');
        const originalText = button.textContent;
        button.textContent = 'Đã  copy link!';
    // debounce cua copy button set bang 2 giay
        setTimeout(function() {
            button.textContent = originalText;
        }, 2000);
    // debug code khi ma khong the copy ra link
    }).catch(function(err) {
        console.error('khong the copy: ', err);
    });
});
