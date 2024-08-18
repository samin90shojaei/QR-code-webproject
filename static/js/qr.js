// alert ('به وبسایت ساخت کيو آر کد خوش آمديد')

function getSelectValue() {
    var selectElement = document.getElementById('select');
    var selectedValue = selectElement.options[selectElement.selectedIndex].value;
    var selectedText = selectElement.options[selectElement.selectedIndex].text;
    
    // نمایش مقدار انتخاب شده در صفحه
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "مقدار انتخاب شده: " + selectedValue + "<br>متن انتخاب شده: " + selectedText;
    
    // اینجا می‌توانید کدهای اضافی برای پردازش انتخاب کاربر را اضافه کنید
    console.log("مقدار انتخاب شده: " + selectedValue);
    console.log("متن انتخاب شده: " + selectedText);
}