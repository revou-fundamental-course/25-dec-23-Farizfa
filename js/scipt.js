function luasSegitiga(){
    // get value
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);
    var luas;
    // operasi
    if (alas > 0 && tinggi > 0){ 
        luas = 0.5 * alas * tinggi;
    }else{
        document.getElementById('hasilLuas').textContent = 'Masukkan nilai alas dan tinggi yang valid!';}
    // post data
    document.getElementById('rumusLuas').textContent = `Luas = 1/2 x alas x tinggi` ;
    document.getElementById('step1Luas').textContent = `Luas = 1/2 x ${alas}  x  ${tinggi}` ;
    document.getElementById('hasilLuas').textContent = `Luas Segitiga: ${luas} ` ;

}
function kelilingSegitiga(){
    // get value
    var sisiA = parseFloat(document.getElementById('sisiA').value);
    var sisiB = parseFloat(document.getElementById('sisiB').value);
    var sisiC = parseFloat(document.getElementById('sisiC').value);
    var keliling;
    // operasi
    if (sisiA > 0 && sisiB > 0 && sisiC > 0){ 
        keliling = sisiA + sisiB + sisiC;
    }else{
        document.getElementById('hasilKeliling').textContent = 'Masukkan nilai alas dan tinggi yang valid!';}
    // post data
        document.getElementById('rumusKeliling').textContent = `Keliling = Sisi A x Sisi B x Sisi C` ;
        document.getElementById('step1Keliling').textContent = `Keliling = ${sisiA} x ${sisiB}  x  ${sisiC}` ;
        document.getElementById('hasilKeliling').textContent = `Keliling Segitiga: ${keliling} ` ;
}