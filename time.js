Date.prototype.myMet = function() {
    if (this.getMonth() == 0){this.myProp = "January"};
    if (this.getMonth() == 1){this.myProp = "February"};
    if (this.getMonth() == 2){this.myProp = "March"};
    if (this.getMonth() == 3){this.myProp = "April"};
    if (this.getMonth() == 4){this.myProp = "May"};
    if (this.getMonth() == 5){this.myProp = "June"};
    if (this.getMonth() == 6){this.myProp = "July"};
    if (this.getMonth() == 7){this.myProp = "August"};
    if (this.getMonth() == 8){this.myProp = "September"};
    if (this.getMonth() == 9){this.myProp = "October"};
    if (this.getMonth() == 10){this.myProp = "November"};
    if (this.getMonth() == 11){this.myProp = "December"};
};
function time(x,y) {
  this.unix = x,
  this.natural = y
}
module.exports = function(str) {
    if(Number.isInteger(Number(str))){
      var x = new Date(str*1000)
      x.myMet()
      var day = x.myProp+ " " + x.getDate() + ", " + x.getFullYear()
      var obj = new time(str,day)
      return obj
    }
    else if(!isNaN(Date.parse(str))){
      var y = Date.parse(str)
      var x = new Date(y)
      x.myMet()
      var day = x.myProp+ " " + x.getDate() + ", " + x.getFullYear()
      var obj = new time(y/1000,day)
      return obj
    }
    else {
      var obj = new time(null,null)
      return obj
    }
  
}