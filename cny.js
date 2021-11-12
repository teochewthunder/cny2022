function cny(year)
{
	var animalNames = ["pig", "rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog"];
	var yearStart = 2019;
	var yearIndex = (year - yearStart) % animalNames.length;

	var overlay = createOverlay();
	var caption = createCaption();
	var animal = createAnimal(animalNames[yearIndex]);
	var body = document.getElementsByTagName("body");

	overlay.appendChild(caption);
	overlay.appendChild(animal);
	body[0].appendChild(overlay);

	animal.onclick = function()
	{
		if (caption.style.visibility == "hidden")
		{
			caption.style.visibility = "visible";
			getNumbers();
		}
		else
		{
			caption.style.visibility = "hidden";
		}
	}

	if (animalNames[yearIndex] == "pig") 
	{
		setInterval
		(
			function()
			{
				var eyes = document.getElementsByClassName("cny_eyes");

				eyes[0].innerHTML = "-&nbsp;&nbsp;-";

				setTimeout
				(
					function() 
					{
						eyes[0].innerHTML = "&bull;&nbsp;&nbsp;&bull;";
					},
					500
				);
			},
			5000
		);

		setInterval
		(
			function()
			{
				var tail = document.getElementsByClassName("cny_tail");

				tail[0].style.transform = "rotate(-185deg)";

				setTimeout
				(
					function() 
					{
						tail[0].style.transform = "rotate(-175deg)";
					},
					500
				);
			},
			1000
		);		
	}

	if (animalNames[yearIndex] == "tiger") 
	{
		setInterval
		(
			function()
			{
				var mouth = document.getElementsByClassName("cny_mouth");
				mouth[0].style.height = "5px";

				setTimeout
				(
					function() 
					{
						mouth[0].style.height = "10px";
					},
					500
				);
			},
			1000
		);		
	}

	function createOverlay()
	{
		var div = document.createElement("div");
		div.style.width = "100px";
		div.style.height = "400px";
		div.style.position = "fixed";
		div.style.padding = "10px";
		div.style.right = "0";
		div.style.bottom = "0";
		return div;
	}

	function createAnimal(animalName)
	{
		if (animalName == "pig")
		{
			function createLeg()
			{
				var leg = document.createElement("div");
				leg.style.position = "relative";
				leg.style.width = "8px";
				leg.style.height = "15px";
				leg.style.borderRadius = "50%";
				leg.style.backgroundColor = "rgba(255, 100, 100, 1)";

				return leg;
			}

			var torso = document.createElement("div");
			torso.style.width = "80px";
			torso.style.height = "70px";
			torso.style.borderRadius = "50%";
			torso.style.position = "relative";
			torso.style.backgroundColor = "rgba(255, 100, 100, 1)";
			torso.style.float = "right";
			torso.style.cursor = "pointer";

			var tail = document.createElement("div");
			tail.className = "cny_tail";
			tail.style.width = "80px";
			tail.style.height = "10px";
			tail.style.position = "relative";
			tail.style.margin = "10px auto 0 auto";
			tail.style.fontSize = "20px";
			tail.style.fontWeight = "bold";
			tail.style.textAlign = "center";
			tail.style.color = "rgba(255, 100, 100, 1)";
			tail.innerHTML = "&zeta;";
			tail.style.webkitTransformOrigin = "50% 0";
			tail.style.transformOrigin = "50% 0";
			tail.style.webkitTransform = "rotate(-180deg)";
			tail.style.transform = "rotate(-180deg)";
			tail.style.webkitTransition = "all 0.5s";
			tail.style.transition = "all 0.5s";
		
			var eyes = document.createElement("div");
			eyes.className = "cny_eyes";
			eyes.style.width = "80px";
			eyes.style.height = "20px";
			eyes.style.position = "relative";
			eyes.style.margin = "15px auto 0 auto";
			eyes.style.fontSize = "15px";
			eyes.style.fontWeight = "bold";
			eyes.style.textAlign = "center";
			eyes.style.color = "rgba(0, 0, 0, 1)";
			eyes.innerHTML = "&bull;&nbsp;&nbsp;&bull;";

			var snout = document.createElement("div");
			snout.style.width = "20px";
			snout.style.height = "15px";
			snout.style.borderRadius = "50%";
			snout.style.position = "relative";
			snout.style.backgroundColor = "rgba(200, 50, 50, 1)";
			snout.style.margin = "0 auto 0 auto";
			snout.style.fontSize = "10px";
			snout.style.fontWeight = "bold";
			snout.style.textAlign = "center";
			snout.style.color = "rgba(100, 20, 20, 1)";
			snout.innerHTML = "&bull;&bull;";
		
			var legs = document.createElement("div");
			legs.style.width = "70px";
			legs.style.height = "16px";
			legs.style.position = "relative";
			legs.style.margin = "-17px auto 0 auto";
				
			var leg1 = createLeg();
			leg1.style.float = "left";
			leg1.style.margin = "5px 0 0 5px";
			
			var leg2 = createLeg();
			leg2.style.float = "right";
			leg2.style.margin = "5px 5px 0 0";

			var leg3 = createLeg();
			leg3.style.float = "left";
			leg3.style.margin = "-8px 0 0 0px";
			
			var leg4 = createLeg();
			leg4.style.float = "right";
			leg4.style.margin = "-8px 0px 0 0";
			
			legs.appendChild(leg3);
			legs.appendChild(leg1);
			legs.appendChild(leg4);
			legs.appendChild(leg2);	
			
			torso.appendChild(tail);
			torso.appendChild(eyes);
			torso.appendChild(snout);
			torso.appendChild(legs);
			
			return torso;			
		}

		if (animalName == "tiger")
		{
			function createStripe()
			{
				var stripe = document.createElement("div");
				stripe.style.position = "relative";
				stripe.style.width = "5px";
				stripe.style.height = "20px";
				stripe.style.borderRadius = "50%";
				stripe.style.backgroundColor = "rgba(0, 0, 0, 1)";
				stripe.style.float = "left";

				return stripe;
			}

			var face = document.createElement("div");
			face.style.width = "80px";
			face.style.height = "70px";
			face.style.borderRadius = "50%";
			face.style.position = "relative";
			face.style.backgroundColor = "rgba(255, 100, 0, 1)";
			face.style.borderBottom = "5px solid white";
			face.style.float = "right";
			face.style.cursor = "pointer";

			var ears = document.createElement("div");
			ears.style.width = "100%";
			ears.style.height = "35px";
			ears.style.position = "relative";

			var leftEar = document.createElement("div");
			leftEar.style.width = "15px";
			leftEar.style.height = "35px";
			leftEar.style.float = "left";
			leftEar.style.backgroundColor = "rgba(255, 100, 0, 1)";
			leftEar.style.borderRadius = "50%";

			var rightEar = document.createElement("div");
			rightEar.style.width = "15px";
			rightEar.style.height = "35px";
			rightEar.style.float = "right";
			rightEar.style.backgroundColor = "rgba(255, 100, 0, 1)";
			rightEar.style.borderRadius = "50%";

			ears.appendChild(leftEar);	
			ears.appendChild(rightEar);

			var stripes = document.createElement("div");
			stripes.style.width = "100%";
			stripes.style.height = "100%";
			stripes.style.borderRadius = "50%";
			stripes.style.position = "relative";
			stripes.style.color = "rgba(0, 0, 0, 1)";
			stripes.style.float = "left";
			stripes.style.overflow = "hidden";
			stripes.style.marginTop = "-35px";
			stripes.style.fontSize = "2em";
			stripes.style.fontWeight = "bold";
			stripes.style.lineHeight = "0.5em";
			stripes.style.textAlign = "center";
			stripes.innerHTML = "|||";

			var stripes2 = document.createElement("div");
			stripes2.style.width = "100%";
			stripes2.style.height = "100%";
			stripes2.style.borderRadius = "50%";
			stripes2.style.position = "relative";
			stripes2.style.color = "rgba(0, 0, 0, 1)";
			stripes2.style.float = "left";
			stripes2.style.overflow = "hidden";
			stripes2.style.marginTop = "-70px";
			stripes2.style.fontSize = "2em";
			stripes2.style.fontWeight = "bold";
			stripes2.style.lineHeight = "0.5em";
			stripes2.style.textAlign = "center";
			stripes2.innerHTML = "<br /><br />===<br />===";

			var eyes = document.createElement("div");
			eyes.style.width = "80px";
			eyes.style.height = "20px";
			eyes.style.float = "left";
			eyes.style.margin = "-45px auto 0 auto";
			eyes.style.fontSize = "15px";
			eyes.style.fontWeight = "bold";
			eyes.style.color = "rgba(0, 0, 0, 1)";

			var leftEye = document.createElement("div");
			leftEye.style.width = "20px";
			leftEye.style.height = "5px";
			leftEye.style.float = "left";
			leftEye.style.border = "3px solid rgba(0, 0, 0, 1)";
			leftEye.style.borderRadius = "50%";
			leftEye.style.backgroundColor = "rgba(255, 100, 0, 1)";
			leftEye.style.transform = "rotate(20deg)";
			leftEye.style.marginLeft = "10px";

			var rightEye = document.createElement("div");
			rightEye.style.width = "20px";
			rightEye.style.height = "5px";
			rightEye.style.float = "right";
			rightEye.style.border = "3px solid rgba(0, 0, 0, 1)";
			rightEye.style.borderRadius = "50%";
			rightEye.style.backgroundColor = "rgba(255, 100, 0, 1)";
			rightEye.style.transform = "rotate(-20deg)";
			rightEye.style.marginRight = "10px";

			eyes.appendChild(leftEye);	
			eyes.appendChild(rightEye);	

			var snout = document.createElement("div");
			snout.style.width = "50px";
			snout.style.height = "40px";
			snout.style.borderRadius = "50%";
			snout.style.position = "relative";
			snout.style.float = "left";
			snout.style.margin = "-35px 0 0 15px";
			snout.style.fontSize = "15px";
			snout.style.textAlign = "center";
			snout.style.fontWeight = "bold";
			snout.style.backgroundColor = "rgba(255, 100, 0, 1)";
			snout.style.borderBottom = "5px solid white";
			snout.style.color = "rgba(0, 0, 0, 1)";	
			snout.innerHTML = "Y";

			var mouth = document.createElement("div");
			mouth.className = "cny_mouth";
			mouth.style.width = "40px";
			mouth.style.height = "10px";
			mouth.style.borderRadius = "5px";
			mouth.style.position = "relative";
			mouth.style.float = "left";
			mouth.style.overflow = "hidden";
			mouth.style.margin = "-20px 0 0 20px";
			mouth.style.fontSize = "15px";
			mouth.style.textAlign = "center";
			mouth.style.backgroundColor = "rgba(255, 255, 255, 1)";
			mouth.style.color = "rgba(0, 0, 0, 1)";	
			mouth.style.lineHeight = "0.7em";
			mouth.style.letterSpacing = "-0.05em";
			mouth.style.transition = "all 0.1s";
			mouth.innerHTML = "VVVVV";

			face.appendChild(ears);
			face.appendChild(stripes);
			face.appendChild(stripes2);
			face.appendChild(eyes);
			face.appendChild(snout);
			face.appendChild(mouth);

			return face;
		}
	}

	function createCaption()
	{
		var caption = document.createElement("div");
		caption.style.visibility = "hidden";
		caption.style.position = "relative";
		caption.style.width = "60%";
		caption.style.margin = "0 auto 50px auto";

		var leftcol = document.createElement("div");
		leftcol.style.position = "relative";
		leftcol.style.float = "left";
		leftcol.style.width = "40%";
		leftcol.style.color = "#FF9900";
		leftcol.style.fontSize = "30px";
		leftcol.style.textAlign = "center";
		leftcol.fontWeight = "bold";
		leftcol.style.textShadow = "2px 2px 20px #FF0000, 0px 0px 20px #FF0000, 0px 2px 20px #FF0000, 2px 0px 20px #FF0000";
		leftcol.innerHTML = "祝<br />你<br />恭<br />喜<br />发<br />财<br />!<br />";

		var rightcol = document.createElement("div");
		rightcol.className = "cny_numbers";
		rightcol.style.position = "relative";
		rightcol.style.float = "right";
		rightcol.style.width = "40%";
		rightcol.style.color = "#FFFF00";
		rightcol.style.fontSize = "20px";
		rightcol.style.textAlign = "center";
		rightcol.fontWeight = "bold";
		rightcol.style.textShadow = "2px 2px 20px #FF0000, 0px 0px 20px #FF0000, 0px 2px 20px #FF0000, 2px 0px 20px #FF0000";

		caption.appendChild(leftcol);
		caption.appendChild(rightcol);

		return caption;
	}

	function getNumbers()
	{
		var numbers = 
		[
			generateRandomNo(0, 9),
			generateRandomNo(0, 9),
			generateRandomNo(0, 9),
			generateRandomNo(0, 9)
		];

		var rightcol = document.getElementsByClassName("cny_numbers");
		rightcol[0].innerHTML = "幸<br />运<br />号<br />码<br />" + numbers[0] + "<br />" + numbers[1] + "<br />" + numbers[2] + "<br />" + numbers[3];
	}

	function generateRandomNo(varmin, varmax)
	{
		return Math.floor((Math.random() * (varmax-varmin+1)) + varmin);
	}
}
