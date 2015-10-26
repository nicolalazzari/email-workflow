// 
// Helper for Footer
//
module.exports.footer = function (params) {
  return '\
<table class="backgroundTable" align="center">\
    <tbody>\
        <tr>\
            <td align="center">\
                <table cellpadding="0" cellspacing="0" border="0" align="center" class="container" >\
                    <tbody>\
                        <tr>\
                            <td width="100%">\
                                <table cellpadding="0" cellspacing="0" border="0" align="center" class="container" >\
                                    <tbody>\
                                        <tr>\
                                            <td width="100%" height="20"></td>\
                                        </tr>\
                                        <tr>\
                                            <td align="center" valign="middle" style="font-family: Helvetica, arial, sans-serif; font-size: 14px;">Copyright ' + params.hash.year + ' | ' + params.hash.brand + ' is a Division of MVF</td>\
                                        </tr>\
                                        <tr>\
                                            <td width="100%" height="20"></td>\
                                        </tr>\
                                    </tbody>\
                                </table>\
                            </td>\
                        </tr>\
                        <tr>\
                            <td  height="15" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>\
                        </tr>\
                    </tbody>\
                </table>\
            </td>\
        </tr>\
    </tbody>\
</table>\
  '
};
