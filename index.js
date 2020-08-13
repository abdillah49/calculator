// const calculate = (n1, operator, n2) => {
//     let result = '';
//     if(operator === '+') result = parseFloat(n1) + parseFloat(n2);
//     else if(operator === '-') result = parseFloat(n1) - parseFloat(n2);
//     if(operator === '*') result = parseFloat(n1) * parseFloat(n2);
//     if(operator === '/') result = parseFloat(n1) / parseFloat(n2);

//     return result;
// }

$(function() {
    var inputAngka = $('#inputAngka').val();
    $('.operand').on('click', function(){
        inputAngka += $(this).text();
        $('#inputAngka').val(inputAngka);
    });

    $('.operator').on('click', function(){
        inputAngka += ' '+$(this).text()+' ';
        $('#inputAngka').val(inputAngka);
    });

    $(".clear").click(function() {$('#inputAngka').val('')});   

    $(".equals").click(function() {
        $('#inputAngka').val(eval(inputAngka));
    }); 
});