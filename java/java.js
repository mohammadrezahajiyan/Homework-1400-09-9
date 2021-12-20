      function InnerChange(id){
                    var element = document.getElementById(id);
                    var value = element.value;
                    document.getElementById('work').innerHTML = value;
                    }
document.getElementById("send").style.color = "green";
document.getElementById("send").style.fontSize = "25px";
document.getElementById("work").style.color = "red";
document.getElementById("work").style.fontSize = "25px";
document.getElementById("send").innerHTML = "پیشنهاد شما با موفقیت ارسال شد";