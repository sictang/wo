/*

^https:\/\/www\.rrys2020\.com\/User\/login\/ajaxLogin url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/Bilibili-DailyBonus/Manga.js
*/

function getkey(key){
    for(let i=0 ; i<key.length ; i++){
        if(key[i] ===';'){
           const c = key.slice(0,i)
           return c
           break
        }
        
    }
   
}

const GINFO = response.headers["cookie"][2]
const GKEY = response.headers["cookie"][3]
console.log(GINFO);
console.log(GKEY);
$notify("", GINFO, GKEY); // Success!
$done();
