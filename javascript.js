$(function(){
  let time = new Date();
  let year = time.getFullYear();
  for(let i = year; i >= 1900; i--){
      if (year === i) {
        $("#year").append("<option value="+ i + " selected>"+ i +"</option>");
      } else {
        $("#year").append("<option value="+ i + ">"+ i +"</option>");
      }
  }

  let month = time.getMonth();
  let day = time.getDate();
  for(let i = 1; i <= 12; i++){
      if (month === (i - 1 )){
        $("#month").append("<option value=" + i + " selected>" + i +"</option>");
      } else {
        $("#month").append("<option value=" + i + ">" + i +"</option>");
      }
  }
  for(let i = 1; i <= 31; i++){
      if(day === i){
        $("#day").append("<option value=" + i + " selected>" + i + "</option>");
      } else {
        $("#day").append("<option value=" + i + ">" + i + "</option>");
      }
  }

  function getAge(year, month, day){
    let now = new Date();
    let birthday = new Date(now.getFullYear(), month-1, day)
    let age = now.getFullYear() - Number(year);
    let dif = birthday - now;
    if(dif > 0){
      if(age === 0){
        return 0;
      }else{
        return age - 1;
      }
    } else {
      return age;
    }
  }
  $("#age").innerText = 10;
  $('#year, #month, #day').change(function(){
    let birth_year = $("#year").val();
    let birth_month = $("#month").val();
    let birth_day = $("#day").val();
    let age = getAge(birth_year, birth_month, birth_day);
    $("#age").text(age+"歳");
    $("#under-sixty").focus();
  });


});

$(document).on('turbolinks:load', function() {
  // 処理内容
 });