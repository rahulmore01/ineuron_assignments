// enter your year
let year = 2200;

//leap years are any year that can be exactly devied by 4 (eg.. 2016,2020) 
// AND if it can not be exactly devided by 100(eg..2100,2200 are still not leap years cause they are not devisible  by 400)
// AND EXCEPT if it can be exactly divided by 400(eg..2000)

if(year % 4==0 && year % 100 !=0 || year % 400===0 ){
    console.log(`${year} is a leap year.`);
    }
else
    console.log(`${year} is not a leap year.`)
    

    

