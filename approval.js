$(document).ready(function(){

    var myRules =
        {
            salary: {
                required: true,
                min: 1,
                max: 999999,
                digits: true
            },
            creditScore: {
                required: true,
                min: 300,
                max: 850,
                digits: true
            },
            monthsAtJob: {
                required: true,
                min: 1,
                max: 600,
                digits: true
            }
        };

    var myMessages =
        {
            salary: {
                required: "Salary required!",
                min: "Please enter a number",
                max: "Please enter a number",
                digits: "Please enter a number"
            },
            creditScore: {
                required: "Credit score required!",
                min: "Please enter a number",
                max: "Please enter a number",
                digits: "Please enter a number"
            },
            monthsAtJob: {
                required: "Number of months at Job required!",
                min: "Please enter a number",
                max: "Please enter a number",
                digits: "Please enter a number"
            }
        };

    $("form").validate({
        submitHandler: loanApproval,
        rules: myRules,
        messages: myMessages
    });

    function loanApproval()
    {
        var salary = $("#salary").val();
        var creditScore = $("#creditScore").val();
        var monthsAtJob = $("#monthsAtJob").val();

        if ((salary <= 40000) && (creditScore >= 600) && (monthsAtJob > 12))
        {
            $("#output").text("Your loan has been approved")
        }
        else if ((salary >= 40000) && (creditScore >= 600) && (monthsAtJob > 12))
        {
            $("#output").text("Your loan has been approved")
        }
        else if ((salary >= 40000) && (creditScore >= 1) && (monthsAtJob > 12))
        {
            $("#output").text("Your loan has been approved")
        }
        else if ((salary >= 40000) && (creditScore >= 600) && (monthsAtJob > 1))
        {
            $("#output").text("Your loan has been approved")
        }
        else
        {
            $("#output").text("We are sorry you application has been denied")
        }

    }

});
