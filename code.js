$(document).ready(function(){
    $("#prodLJ").change(placeOrder);
    $("#prodDon").change(placeOrder);



    function placeOrder() {
        //prevent form from flashing and resetting


        console.log("entering placeOrder");

       var prodLJ = parseFloat($("#prodLJ").val());

        console.log(prodLJ);

        var prodDon = parseFloat($("#prodDon").val());

        console.log(prodDon);

        var prodLJTotal = prodLJ * 39.99;
        var prodDonTotal = prodDon * 14.99;
        var grandTotal = prodLJTotal + prodDonTotal;

        console.log("exiting placeOrder");


        $("#prodLJTotal").text(prodLJTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
        $("#prodDonTotal").text(prodDonTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
        $("#grandTotal").text(grandTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));






    }
});










