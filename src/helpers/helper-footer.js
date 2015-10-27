//
// Helper for Footer
//
module.exports.footer = function (params) {
return '\
<table class="backgroundTable" align="center" cellpadding="0" cellspacing="0" border="0">\
    <tbody>\
        <tr>\
            <td align="center">\
                <table cellpadding="0" cellspacing="0" border="0" align="center" class="container" >\
                    <tbody>\
                        <tr>\
                            <td width="100%" height="20"></td>\
                        </tr>\
                        <tr>\
                            <td align="center" valign="middle"><h4>Copyright ' + params.hash.year + ' | ' + params.hash.brand + ' is a Division of MVF</h4></td>\
                        </tr>\
                        <tr>\
                            <td width="100%" height="20"></td>\
                        </tr>\
                    </tbody>\
                </table>\
            </td>\
        </tr>\
    </tbody>\
</table>\
'
};