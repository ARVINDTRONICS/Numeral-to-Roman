function convertToRoman(num) {

    let ans = [];
    let arr = [];
    let rem = 0;

    while (num >= 1) {

        rem = num % 10;
     
        num = Math.floor((num / 10));
        arr.push(rem);
 
    }

    
    for (let i = arr.length - 1; i >= 0; i--) {


        switch (arr[i]) {

            case 1:
                if (i == 0) {
                    ans.push('I')

                }
                else if (i == 1) {
                    ans.push('X');


                } else if (i == 2) {

                    ans.push('C')

                } else {
                    ans.push('M');
                }
                break;

            case 2:
                if (i == 0) {
                    ans.push('II')

                }
                else if (i == 1) {
                    ans.push('XX');

                } else if (i == 2) {
                    ans.push('CC')

                } else {
                    ans.push('MM');
                }


                break;

            case 3:
                if (i == 0) {
                    ans.push('III')

                }
                else if (i == 1) {
                    ans.push('XXX')

                } else if (i == 2) {
                    ans.push('CCC')

                } else {
                    ans.push('MMM')
                }

                break;

            case 4:
                if (i == 0) {
                    ans.push('IV');

                }
                else if (i == 1) {
                    ans.push('XL');

                } else if (i == 2) {
                    ans.push('CD');

                } else {
                    ans.push('IV');

                }

                break;

            case 5:
                if (i == 0) {
                    ans.push('V');

                }
                else if (i == 1) {
                    ans.push('L');

                } else if (i == 2) {
                    ans.push('D');

                } else {
                    ans.push('V');

                }

                break;

            case 6:
                if (i == 0) {
                    ans.push('VI');

                }
                else if (i == 1) {
                    ans.push('LX');

                } else if (i == 2) {
                    ans.push('DC');

                } else {
                    ans.push('VI');

                }

                break;

            case 7:
                if (i == 0) {
                    ans.push('VII')

                }
                else if (i == 1) {

                    ans.push('LXX');

                } else if (i == 2) {
                    ans.push('DCC')
                } else {
                    ans.push('VII');

                }

                break;

            case 8:
                if (i == 0) {

                    ans.push('VIII');
                }
                else if (i == 1) {

                    ans.push('LXXX');

                } else if (i == 2) {

                    ans.push('DCCC');

                } else {


                    ans.push('VIII');
                }

                break;

            case 9:
                if (i == 0) {

                    ans.push('IX');

                }
                else if (i == 1) {

                    ans.push('XC');

                } else if (i == 2) {

                    ans.push('CM');

                } else {


                    ans.push('IX');
                }

                break;



        }

    }

 
    return ans.join('');
}


const num=document.querySelector('form');
const out=document.querySelector('.output');

console.log(num);
num.addEventListener('submit',(e)=>{

e.preventDefault();

const parameter=num.number.value;

out.innerHTML=(convertToRoman(parameter));

})