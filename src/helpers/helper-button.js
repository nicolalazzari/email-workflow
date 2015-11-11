// 
// Helper for bullet proof buttons
// Type accepts 'primary' or 'secondary'
//
// Example:
// {{{ button type="primary" align="center" url="http://www.leemunroe.com" title="Call to action" }}}
//
module.exports.button = function (params) {
  return '\
<table align="' + params.hash.align + '" border="0" cellpadding="0" cellspacing="0" class="emailButton btn-' + params.hash.type + '">\
    <tr>\
        <td align="' + params.hash.align + '" valign="middle" class="emailButtonContent">\
            <a href="' + params.hash.url + '" target="_blank">' + params.hash.title + '</a>\
        </td>\
    </tr>\
</table>\
  '
};


