function radioClickQ(){
    hideAll();
   console.log('ClickedQ');
   const message = document.querySelector("textarea[name='Message']");
   message.classList.add('show');
   message.required = true;
};
function radioClickC(){
    hideAll();
    console.log('ClickedC');
    const message = document.querySelector("textarea[name='Message']");
    message.classList.add('show');
    message.required = true;
};

    function radioClickH(){
    hideAll();
    console.log('ClickedH');
    //document.getElementById('hiring');
    const rate = document.querySelector("input[name='Rate']");
    rate.classList.add('show');
    rate.required = true;
    console.log(rate);
};

function hideAll(){
    document.querySelector("input[name='Rate']").classList.remove('show');
    document.querySelector("input[name='Rate']").required = false;

    document.querySelector("textarea[name='Message']").classList.remove('show');
    document.querySelector("textarea[name='Message']").required = false;
}