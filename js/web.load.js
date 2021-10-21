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
        kind_name: "学习",
    },
    {
        title: "人生重开模拟器",
        href: "http://liferestart.syaro.io/view/",
        slogan: "这垃圾人生一秒也不想呆了",
        kind_name: "娱乐",
    },
    {
        title: "文件转换器",
        href: "https://convertio.co/zh/",
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
    {
        title: "便携小空调",
        href: "https://ac.yunyoujun.cn/",
        slogan: "为你的夏日带去清凉",
        kind_name: "实用工具",
    },
    {
        title: "动态壁纸网页",
        href: "https://zu60.cn/",
        slogan: "",
        kind_name: "个人网站",
    },
    {
        title: "ioDraw",
        href: "https://www.iodraw.com/",
        slogan: "免费在线画图，无需注册，流程图、思维导图、拓扑图等",
        kind_name: "工具",
    },
    {
        title: "Windows 的键盘快捷方式",
        href: "https://support.microsoft.com/zh-cn/windows/windows-%E7%9A%84%E9%94%AE%E7%9B%98%E5%BF%AB%E6%8D%B7%E6%96%B9%E5%BC%8F-dcc61a57-8ff0-cffe-9796-cb9706c75eec",
        slogan: "",
        kind_name: "工具",
    },
    {
        title: "wikiHow",
        href: "https://zh.wikihow.com/%E9%A6%96%E9%A1%B5",
        slogan: "互联网上最值得信赖的指南网站",
        kind_name: "工具",
    },
    {
        title: "国家哲学社会科学文献中心",
        href: "http://www.ncpssd.org/",
        slogan: "[需要注册] 社会科学类期刊文论资源库",
        kind_name: "资源",
    },
    {
        title:     "Hello Github",
        href:      "https://hellogithub.com/",
        slogan:    "分享 GitHub 上有趣、入门级的开源项目",
        kind_name: "编程学习",
    },
    {
        title:     "智能法律咨询",
        href:      "https://ai.12348.gov.cn/pc/",
        slogan:    "根据问卷提示填写相关信息，在线为您免费出具法律意见书，供您参考",
        kind_name: "工具",
    },
    {
        title:     "标准地图服务",
        href:      "http://bzdt.ch.mnr.gov.cn/",
        slogan:    "使用标准地图时需要标注审图号",
        kind_name: "工具",
    },
    {
        title:     "花火数图Hanabi",
        href:      "https://hanabi.data-viz.cn/index?lang=zh-CN",
        slogan:    "[需要注册] 在线数据可视化工具",
        kind_name: "工具",
    },
    //{
    //    title:     "",
    //    href:      "",
    //    slogan:    "",
    //    kind_name: "",
    //},
];
web_list_html = '';
web_list.forEach(function (t) { web_list_html += `<div class="col-lg-3 col-md-4 col-xs-12"><div class="card"><a href="${t.href}" target="_blank"><div class="card-body"><h4 class="card-title">${t.title}</h4><p>${t.slogan}<span class="float-right">${t.kind_name}</span></p></a></div></div></div></div></div>` });
$(".web-list").html(web_list_html);
console.log("GitHub: https://github.com/funhuman/funhuman.github.io")
console.log("Reference: https://gitee.com/xiangjianan/lks/")
