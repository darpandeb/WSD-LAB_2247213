<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
    <head>
        <style>
            table td,table th{
                padding:2rem;
            }
            h1{
                text-align:center;
            }
            table
            {
                width: 50%;
                margin-left:13rem;
            }
        </style>
    </head>
  <body>
    <h1>Employee Management System</h1>
    <table border="1">
      <tr bgcolor="maroon" style ="color:white;">
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>Salary</th>
        <th>Email</th>
        <th>MobileNum</th>
        <th>Designation</th>
        <th>Promotion</th>
      </tr>
      <xsl:for-each select="company/employee">
        <tr>
          <td><xsl:value-of select="empid"/></td>
          <td ><xsl:value-of select="empname"/></td>
          <td><xsl:value-of select="empage"/></td>
          <td><xsl:value-of select="empsalary"/></td>
          <td><xsl:value-of select="empmail"/></td>
          <td><xsl:value-of select="empphn"/></td>
          <td><xsl:value-of select="empdesg"/></td>
          <td><xsl:value-of select="promo"/></td>
          <!--<xsl:choose>
                <xsl:when test="empage &gt=; 50">
                    <td>Associate Project Manager</td>
                </xsl:when>
                <xsl:when test="(empage &gt=; 40) and (empage &lt=; 49)">
                    <td>Team Leader</td>
                </xsl:when>
                <xsl:otherwise>
                    <td>Developer</td>
                </xsl:otherwise>
            </xsl:choose>-->
        </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>