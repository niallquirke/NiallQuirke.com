// doT.js
// 2011, Laura Doktorova, https://github.com/olado/doT
// Licensed under the MIT license.
(function(){function p(){var a={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},b=/&(?!#?\w+;)|<|>|"|'|\//g;return function(){return this?this.replace(b,function(b){return a[b]||b}):this}}function q(a,b,d){return("string"===typeof b?b:b.toString()).replace(a.define||g,function(b,c,e,f){0===c.indexOf("def.")&&(c=c.substring(4));c in d||(":"===e?(a.defineParams&&f.replace(a.defineParams,function(b,a,l){d[c]={arg:a,text:l}}),c in d||(d[c]=f)):(new Function("def","def['"+c+"']="+
f))(d));return""}).replace(a.use||g,function(b,c){a.useParams&&(c=c.replace(a.useParams,function(b,a,c,l){if(d[c]&&d[c].arg&&l)return b=(c+":"+l).replace(/'|\\/g,"_"),d.__exp=d.__exp||{},d.__exp[b]=d[c].text.replace(new RegExp("(^|[^\\w$])"+d[c].arg+"([^\\w$])","g"),"$1"+l+"$2"),a+"def.__exp['"+b+"']"}));var e=(new Function("def","return "+c))(d);return e?q(a,e,d):e})}function k(a){return a.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}var h={version:"1.0.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,
interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1},template:void 0,compile:void 0},
n;"undefined"!==typeof module&&module.exports?module.exports=h:"function"===typeof define&&define.amd?define(function(){return h}):(n=function(){return this||(0,eval)("this")}(),n.doT=h);String.prototype.encodeHTML=p();var r={start:"'+(",end:")+'",endencode:"||'').toString().encodeHTML()+'"},t={start:"';out+=(",end:");out+='",endencode:"||'').toString().encodeHTML();out+='"},g=/$^/;h.template=function(a,b,d){b=b||h.templateSettings;var m=b.append?r:t,c,e=0,f;a=b.use||b.define?q(b,a,d||{}):a;a=("var out='"+
(b.strip?a.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):a).replace(/'|\\/g,"\\$&").replace(b.interpolate||g,function(b,a){return m.start+k(a)+m.end}).replace(b.encode||g,function(b,a){c=!0;return m.start+k(a)+m.endencode}).replace(b.conditional||g,function(b,a,c){return a?c?"';}else if("+k(c)+"){out+='":"';}else{out+='":c?"';if("+k(c)+"){out+='":"';}out+='"}).replace(b.iterate||g,function(b,a,c,d){if(!a)return"';} } out+='";e+=1;f=d||"i"+e;a=k(a);return"';var arr"+
e+"="+a+";if(arr"+e+"){var "+c+","+f+"=-1,l"+e+"=arr"+e+".length-1;while("+f+"<l"+e+"){"+c+"=arr"+e+"["+f+"+=1];out+='"}).replace(b.evaluate||g,function(a,b){return"';"+k(b)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,"").replace(/(\s|;|\}|^|\{)out\+=''\+/g,"$1out+=");c&&b.selfcontained&&(a="String.prototype.encodeHTML=("+p.toString()+"());"+a);try{return new Function(b.varname,a)}catch(n){throw"undefined"!==
typeof console&&console.log("Could not create a template function: "+a),n;}};h.compile=function(a,b){return h.template(a,null,b)}})();