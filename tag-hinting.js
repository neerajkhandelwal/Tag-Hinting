// JavaScript Document
var last;
var arr = new Array();
function hint(me, e)
{
		var key = e.keyCode;
		if(key == 38 || key == 40)
		{
			var firstchild = document.getElementById('hintwords').firstChild;
			//alert(firstchild);
			//alert(firstchild.nextSibling.nextSibling.nodeValue);
			if(key == 40)
			{
				if(typeof(current) == 'object')
				{
					current.style.backgroundColor = '#fff';
					current = current.nextSibling.nextSibling;
					current.style.backgroundColor = '#ccc';
					displayhints(current, me);
					last = key;				
				}
				else
				{
					firstchild.style.backgroundColor = '#ccc';
					current = firstchild;
					displayhints(current, me);
					last = key;
				}
			}
			
			else if(key == 38)
			{
				if(typeof(current) == 'object')
				{
					current.style.backgroundColor = '#fff';
					current = current.previousSibling.previousSibling;
					current.style.backgroundColor = '#ccc';
					displayhints(current, me);
					last = key;
				}
			}
			
		}
		else if(key == 13)
			hidehint();
		else
		{
			current = '';
			last = '';
			var iter = 0;
			var mat = new Array();
			var val = me.value.split(",");
			var lenval = val.length;
			if(lenval == 1)
			{
				val = me.value.replace(" ","");
			}
			else
			{
				val = val[lenval - 1].replace(" ","");
			}
			var len = val.length;
			if(len>0)
			{
				for(iter=0 ; iter < arr.length; iter++)
				{
					var patt = new RegExp( val ,'gi');
					var result = patt.exec(arr[iter]);
					
					if(result == val)
					{
						mat.push(arr[iter]);
					}
				}
				var str = '';
				for(iter = 0; iter < mat.length ; iter++)
				{
					if(str == '')
					{
						str = str + '<span>' + mat[iter] + '</span>';
					}
					else
					{
						str = str + '<br>' + '<span>' + mat[iter] + '</span>';
					}
				}
				document.getElementById('hintwords').style.display = 'block';
				document.getElementById('hintwords').innerHTML = str;
			}
			else
			{
				document.getElementById('hintwords').innerHTML = '';
			}
		}
}

function displayhints(current, me)
{
	val = me.value.split(",");
	lenval = val.length;
	if(lenval == 1)
		me.value = current.innerHTML;
	else
	{
		i =0;
		hints = '';
		while(i < lenval-1)
		{
			hints += val[i]+','; 
			i++;
		}
		hints += current.innerHTML;
		me.value = hints;
	}
}
function hidehint()
{
	document.getElementById('hintwords').style.display = 'none';
	document.getElementById('hintwords').innerHTML = '';
}