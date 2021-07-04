
var qrcode = {};
var qrcode2 = {};
  
function init(){
    qrcode = new QRCode(document.getElementById("qrcode"), {
      width : 250,
      height : 250,
      useSVG: true,
	  correctLevel: 1
    });
    	
  }

function generateQR(){
    var vCard = "BEGIN:VCARD \nVERSION:3.0\n";
    vCard = vCard + "FN:" + $("#vorname").val() + " " + $("#nachname").val() + "\n";
	vCard = vCard + "N:" + $("#nachname").val() + ";" + $("#vorname").val() + ";;;\n";
    if($("#email").val() !== '') vCard = vCard + "EMAIL;TYPE=WORK:"+ $("#email").val() + "\n";
    if($("#telefon").val() !== '') vCard = vCard + "TEL;TYPE=WORK:"+ $("#telefon").val() + "\n";
    if($("#mobil").val() !== '') vCard = vCard + "TEL;TYPE=CELL:"+ $("#mobil").val() + "\n";
    if($("#firma").val() !== '') vCard = vCard + "ORG:"+ $("#firma").val() + "\n";
    if($("#ort").val() !== '') vCard = vCard + "ADR;TYPE=WORK:;;"+ $("#strasse").val() + ";" + $("#ort").val() + ";;" + $("#plz").val() + ";" + "\n";
    if($("#website").val() !== '') vCard = vCard + "URL:"+ $("#website").val() + "\n";
    vCard = vCard + "END:VCARD";

	
	
    qrcode.makeCode(vCard); 
	
}


function downloadQR1(){
	generateQR();
	var svgString = document.getElementById('svg').innerHTML;
	a = document.createElement('a');
	a.download = 'QRCode_' + $("#nachname").val() + '_' + $("#vorname").val() + '.svg';
	a.type = 'image/svg+xml';
	blob = new Blob([svgString], {"type": "image/svg+xml"});
	a.href = (window.URL || webkitURL).createObjectURL(blob);
	a.click();
}


	

