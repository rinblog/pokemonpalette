function readFirst(){
  //プルダウンリストをループ処理で値を取り出してセレクトボックスにセットする
  for(var i=0;i<list.length;i++){
    let opt = document.createElement("option");
    opt.value = list[i].val;
    opt.text = list[i].txt;
    document.getElementById("pullDownList").appendChild(opt);
  }
};
