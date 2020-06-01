function createCard(title,description,author_name) {
      const htmlstring='<div class="column"><div class="card"><h3 class="title">'+title+'</h3><p class="content">'+description+'</p><p class="author">'+author_name+'</p></div></div>';
        return htmlstring;
}
$(function load() {
      var mydata =data;
      var main= document.getElementById("content");
      for(var i = 0;i < data.length; i++)
        {
          var htmlstr=createCard(data[i].title,data[i].description,data[i].authorname);
          main.innerHTML += htmlstr;
        }
})


