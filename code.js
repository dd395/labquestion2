$(document).ready(function(){
    $("form").submit(placeOrder);

    function placeOrder(event) {
        //prevent form from flashing and resetting
        event.preventDefault();

        console.log("entering placeOrder");

        var prodLJ = parseFloat(document.getElementById('#prodLJ').value);


       console.log(prodLJ);

        var prodDon = parseFloat(document.getElementById('#prodDon').value);

        console.log(prodDon);

        var prodLJTotal = prodLJ * 39.99;
        var prodDonTotal = prodDon * 14.99;
        var grandTotal = prodLJTotal + prodDonTotal;
        var qt1 = prodLJ;
        var qt2 = prodDon;
        console.log("exiting placeOrder");

        $("#qt1").text(qt1.toFixed(0));
        $("#qt2").text(qt2.toFixed(0));
        $("#prodLJTotal").text(prodLJTotal.toFixed(2));
        $("#prodDonTotal").text(prodDonTotal.toFixed(2));
        $("#grandTotal").text(grandTotal.toFixed(2));





    }
});










