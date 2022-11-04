var puerta=0
var reader=A0

function setup() {
	pinMode(puerta, OUTPUT);
	pinMode(reader, INPUT);
	
	Serial.println("Blinking");
}

function loop() {
//customWrite(puerta,1);
	if (analogRead(reader)===0){
		customWrite(puerta,1);
	}
	else{
		customWrite(puerta,0);	
		}
	}