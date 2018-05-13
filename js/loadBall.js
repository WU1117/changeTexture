		function loadBallObjFile(url)
		{
		    var req = new XMLHttpRequest();
		    req.onreadystatechange = function () { processBallLoadObj(req) };
		    req.open("GET", url, true);
		    req.responseType = "text";
		    req.send(null);
		}
		
		function createBall(objDataIn)
		{
		   if(shaderProgArray[0]&&shaderProgArray[2])
		   {
		      //创建绘制用的物体
			ooTriEarth=new ObjObjectEarth(gl,objDataIn.vertices,objDataIn.normals,objDataIn.texcoords);
			ooTriMoon=new ObjObjectMoon(gl,objDataIn.vertices,objDataIn.normals,objDataIn.texcoords);
		   }
		   else
		   {
		      setTimeout(function(){createBall(objDataIn);},10); 
		   }
		}
		
		function processBallLoadObj(req)
		{
		    if (req.readyState == 4) 
		    {
		        var objStr = req.responseText;	       
		        var dataTemp=fromObjStrToObjectData(objStr);	
		        createBall(dataTemp);                     
		    }
		}
		function celestialInit(){
            if(shaderProgArray[1])
            {
                //创建绘制用的物体
                celestial=new Celestial(gl,500,shaderProgArray[1]);
                celestial1=new Celestial(gl,200,shaderProgArray[1]);
            }
            else
            {
                setTimeout(function(){celestialInit();},10);
            }
		}

