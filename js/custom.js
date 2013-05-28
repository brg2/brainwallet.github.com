function toggleShow(ctlHide) {
	var ctlSec = document.getElementById('txSec');
	var blnHide = ctlHide.checked;
	if(!blnHide) {
		if(confirm("Are you sure you want to reveal the current private key or passphrase?")) {
			ctlSec.setAttribute("type", "text");
		} else {
			ctlHide.checked = true;
		}
	} else {
		ctlSec.setAttribute("type", "password");
	}
}