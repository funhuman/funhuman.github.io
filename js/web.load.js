let web_list = [
    {
        title: "LKs - 良心网站推荐",
        href: "https://xiangjianan.github.io/lks/",
        slogan: "良心到难以置信的网站推荐",
        kind_name: "网页收藏",
    },
    {
        title: "免费素材图片",
        href: "https://picrew.me/",
        slogan: "才华横溢的摄影作者在这里免费分享最精彩的素材图片和视频。",
        kind_name: "图片",
    },
    {
        title: "国家云网课",
        href: "https://ykt.eduyun.cn/",
        slogan: "国家中小学网络云平台",
        kind_name: "",
    },
    {
        title: "人生重开模拟器",
        href: "https://convertio.co/zh/",
        slogan: "这垃圾人生一秒也不想呆了",
        kind_name: "娱乐",
    },
    {
        title: "文件转换器",
        href: "http://liferestart.syaro.io/view/",
        slogan: "将您的文件转换成任意格式",
        kind_name: "工具",
    },
    {
        title: "黑客模式",
        href: "https://www.webhek.com/post/hackertyper.html",
        slogan: "",
        kind_name: "娱乐",
    },
    {
        title: "全国移动电话卡“一证通查”",
        href: "https://getsimnum.caict.ac.cn/m/#/index",
        slogan: "防范诈骗 保护你我",
        kind_name: "工具",
    },
    {
        title: "渐变色",
        href: "https://webgradients.com/",
        slogan: "Free for commercial or personal use",
        kind_name: "工具",
    },
    {
        title: "现代 JavaScript 教程",
        href: "https://zh.javascript.info/",
        slogan: "从基础到高阶的 JavaScript 相关知识",
        kind_name: "编程学习",
    },
];
web_list_html = '';
web_list.forEach(function (t) { web_list_html += `<div class="col-lg-3 col-md-4 col-xs-12"><a href="${t.href}" target="_blank"><div class="card"><div class="card-body"><h4 class="card-title">${t.title}</h4><p>${t.slogan}<span class="float-right">${t.kind_name}</span></p></div></a></div></div></div></div>` });
$(".web-list").html(web_list_html);
console.log("GitHub: https://github.com/funhuman/funhuman.github.io")
console.log("Reference: https://gitee.com/xiangjianan/lks/")
