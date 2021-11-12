var btn1 = document.getElementById("one");
var btn2 = document.getElementById("two");
var btn3 = document.getElementById("three");

btn1.addEventListener("click",function(){
    document.getElementById("ar").style.display = "block";
    document.getElementById("fs").style.display = "none";
    document.getElementById("od").style.display = "none";

})

btn2.addEventListener("click",function(){
    document.getElementById("ar").style.display = "none";
    document.getElementById("fs").style.display = "block";
    document.getElementById("od").style.display = "none";

})

btn3.addEventListener("click",function(){
    document.getElementById("ar").style.display = "none";
    document.getElementById("fs").style.display = "none";
    document.getElementById("od").style.display = "block";

})

function arFun(){
    window.open("https://relianceretail.com/INV_Doc/RRL_Annual_Rpt/RRL_Annual_Report_2020_21.pdf");
}

function od1(){
    window.open("https://relianceretail.com/INV_Doc/Other_Downloads/Annual_General_Meeting_September_28_2021_Consolidated_Scrutinizer_s_Report.pdf");
}

function od2(){
    window.open("https://relianceretail.com/INV_Doc/Other_Downloads/Circular_in_the_form_of_advertisement_inviting_deposits_September_28_2021_English.pdf");
}

function od3(){
    window.open("https://relianceretail.com/INV_Doc/Other_Downloads/45_Notice_of_22nd_AGM_and_information_on_E_voting_published_in_newspaper_Navshakti.pdf");
}

function od4(){
    window.open("https://relianceretail.com/INV_Doc/Other_Downloads/Annual_Return_2020_21.pdf");
}

function od5(){
    window.open("https://relianceretail.com/INV_Doc/Other_Downloads/42_Notice_of_22nd_AGM_Scheduled_on_September_28_2021_published_in_newspaper_Financial%20Express.pdf");
}