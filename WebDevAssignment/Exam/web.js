function bang() {
   
    var Ten = document.getElementById("Ten").value;
    var email = document.getElementById("email").value;
    var Tin = document.getElementById("Tin").value;
    var bao="";
    if (Ten === "" || email === "" || Tin === "") {
        bao="Vui lòng điền đầy đủ thông tin";
    } else{
        bao="Gửi thành công!"
        
    }


    document.getElementById("Thongbao").textContent = bao;
    
}