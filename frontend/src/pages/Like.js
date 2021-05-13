function enrollLike(id){
    var st=window.localStorage;
    var like_list=fetchLike();
    like_list.push(id);
    st.setItem('saveDogs', like_list.join());
}

function fetchLike(){
    var st=window.localStorage;
    var data=st.getItem('saveDogs');
    var like_list=[];
    if(data) like_list=data.split(',');
    return like_list;
}