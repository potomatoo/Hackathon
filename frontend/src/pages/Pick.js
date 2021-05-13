import axios from 'axios';

const dog_feat = ['갓난이', '개구쟁이', '까망이', '까칠이', '듬직이', '황검이', '바둑이', '사나이', '더벅이', '온순이', '쪼꼬미', '쫑긋이', '인절미', '허숙희', '황구', '흰둥이'];

const dog_cate = [];
var dog_part=[], dog_total=[];
var left=-2, right=-1;

async function fetchDogs (){
    var data=[];
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    data=res.data;
    // 서버에서 가져온 거 배열에 넣음.
    for(var i=0; i<data.length; i++){
        dog_cate.push({name:dog_feat[data[i].id-1], url:data[i].email});
    }
}

function shuffle(arr){
    arr.sort(()=> Math.random()-0.5);
}

// 다음 매치 시작 전, 셋팅
function init(){
    // 16강 완전 시작일 때
    if(dog_part.length===0) {
        fetchDogs();
        dog_part=dog_cate;
        // 섞음!
        shuffle(dog_part);
    }
    // 어떤 매치가 시작일 때
    dog_total=dog_part;
    dog_part=[];
    left=-2;
    right=-1;
}

// 얘만 계속 호출하면 된다. 매번 매치가 이루어질 때마다!
export function pick(){
    // 이전 매치 후 다음으로 넘어갈 때, 변수에 이전 매치의 값들이 있다.
    if(dog_part.length===dog_total.length/2) init();
    left+=2; right+=2;
    console.log(dog_total);
    return [dog_total[left], dog_total[right]];
}
