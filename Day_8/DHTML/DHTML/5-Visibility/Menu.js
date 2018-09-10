
function show()
{
	document.getElementById('ITEMS').style.display="block";
}
function hide()
{
	document.getElementById('ITEMS').style.display='none';
}

function  Menues(Menu,Menu_Item1,Menu_Item2,Menu_Item3)
{
	document.write("<div id=\"MENU\"  style=\"position:relative; width:80px; text-align:center;background-color:#DC60FF; color:#49FFFF; cursor:hand\" onmouseover=\"show()\" onmouseout=\"hide()\">");
	document.write( Menu);
	document.write("</div>");

	document.write();
	document.write("<div id=\"ITEMS\" style=\"display:none; width:80px; text-align:center; cursor:hand\" onmouseover=\"show()\"onmouseout=\"hide()\">");
	
	document.write(" <div id=\"M1\" style=\"background-color:#DEBF00\" onmouseover=\"this.style.backgroundColor='#9D4602'\" onmouseout=\"this.style.backgroundColor='#DEBF00'\" onclick=\"location='url'\">");
	document.write(     Menu_Item1);
	document.write(" </div>");
	
	
	document.write(" <div id=\"M2\" style=\"background-color:#DEBF00\" onmouseover=\"M2.style.backgroundColor='#9D4602'\"  onmouseout=\"M2.style.backgroundColor='#DEBF00'\"  onclick=\"location='url'\">");
	document.write( Menu_Item2);
	document.write("</div>");
  
	document.write("  <div id=\"M3\" style=\"background-color:#DEBF00\"  onmouseover=\"this.style.backgroundColor='#9D4602'\"  onmouseout=\"this.style.backgroundColor='#DEBF00'\" onclick=\"location='url'\">");
	document.write( Menu_Item3);
	document.write(" </div>");

	document.write("</div>");
}

