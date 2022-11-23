<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
 <html>
    <head>
        <title>Codemia</title>
        <style>
            table td,table th{
                text-align:center;
                padding: 2rem;
            }
            table{
                margin-top:2rem;
                margin-left:8rem;
            }
           h1{
            text-align:center;  
            font-size:45px;
            margin-top:2rem;
            color:blue;
            }
        </style>
    </head>
    <body>
        <h1>Codemia Chat User Records</h1>
        <table border="1">
            <tr style="background-color:#eeff00; color:blue;">
                <th>UserID</th>
                <th>UserName</th>
                <th>UserPass</th>
                <th>Status</th>
                <th>Friends</th>
                <th>Lastseen</th>
                <th>FrequentChat</th>
                <th>mode</th>
            </tr>
            <xsl:for-each select="codemia/chat">
            <xsl:sort select="lastseen"/>
            <xsl:if test="friends &gt; 1">
            <tr style="background-color:#2288ee; color:white;">
                <td><xsl:value-of select="userid"/></td>
                <td><xsl:value-of select="username"/></td>
                <td><xsl:value-of select="userpass"/></td>
                <td><xsl:value-of select="status"/></td>
                <xsl:choose>
                    <xsl:when test="friends &gt; 20">
                        <td><xsl:value-of select="friends"/></td>
                    </xsl:when>
                    <xsl:otherwise>
                        <td style="background-color:#ff0000;"><xsl:value-of select="friends"/></td>
                    </xsl:otherwise>
                </xsl:choose>
                <td><xsl:value-of select="lastseen"/></td>
                <td><xsl:value-of select="frequentchat"/></td>
                <td><xsl:value-of select="mode"/></td>
            </tr>
           </xsl:if>
           </xsl:for-each>
        </table>
    </body>
</html>

</xsl:template>
</xsl:stylesheet>
