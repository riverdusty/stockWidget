var sym = 'IRON.L';
var marq = document.createElement('Marquee');
marq.className = 'marquee';
var marqdiv = document.createElement('div');
$.ajax({
    type: 'GET',
    url: "http://query.yahooapis.com/v1/public/yql",
    data: "q=select * from yahoo.finance.quotes where symbol in ('"+sym+"')&env=http://datatables.org/alltables.env",
   success:function(data){
    arr = data.childNodes[0].childNodes[0].childNodes[0].childNodes
    $.each(arr, function(num, elem){
    	var txtdiv = document.createElement('div')
    	txtdiv.className = elem.tagName;
    	txtdiv.appendChild(document.createTextNode(' | ' 
    		+ elem.tagName.replace(/([a-z])([A-Z])/g, '$1 $2') 
    		+ ' : ' 
    		+ elem.textContent))
    	if (elem.textContent !== undefined) {
    	if (elem.textContent.substr(0,1) == '+'){
        txtdiv.className = 'green'
    			}
    		else if (elem.textContent.substr(0,1) == '-') {
    	txtdiv.className = 'red'
    		}}
    	marqdiv.appendChild(txtdiv)
        })
   }
});
window.onload = function () {
document.getElementById('stockWidget').appendChild(marq).appendChild(marqdiv);
var t = setTimeout(function(){ $('marquee').attr('behavior', 'scroll')},3000)}
