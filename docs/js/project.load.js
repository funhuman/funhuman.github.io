let web_list=[
{title:"员工管理系统",href:"http://106.15.94.52:8080/hssx4/index",slogan:"",kind_name:"",},
{title:"iban网",href:"http://106.15.94.52:10323",slogan:"",kind_name:"",},
];
web_list_html='';
web_list.forEach(function (t) { web_list_html += `<div class="col-lg-3 col-md-4 col-xs-12"><div class="card"><a href="${t.href}" target="_blank"><div class="card-body"><h4 class="card-title">${t.title}</h4><p>${t.slogan}<span class="float-right">${t.kind_name}</span></p></a></div></div></div></div></div>` });
$(".web-list").html(web_list_html);
console.log("GitHub: https://github.com/funhuman/funhuman.github.io")
