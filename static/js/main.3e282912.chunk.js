(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n.n(i),s=n(4),o=n.n(s),r=(n(15),n(5)),l=n(6),u=n(7),d=n(9),b=n(8),j=(n(16),function(e){var t=e.options,n=e.onLeaveFeedback;return Object(c.jsx)("div",{children:t.map((function(e){return Object(c.jsx)("button",{type:"button",className:"button",onClick:function(){n(e)},children:[e]},[e])}))})}),h=function(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{className:"Section",children:[t,n]})},f=function(e){var t=e.good,n=e.neutral,i=e.bad,a=e.total,s=e.positivePercentage;return Object(c.jsxs)("ul",{className:"list",children:[Object(c.jsxs)("li",{className:"item",children:["Good:",t]}),Object(c.jsxs)("li",{className:"item",children:["Neutral:",n]}),Object(c.jsxs)("li",{className:"item",children:["Bad:",i]}),Object(c.jsxs)("li",{className:"item",children:["Total:",function(){a()}]}),Object(c.jsxs)("li",{className:"item",children:["Positive:",function(){s(t,a)},"%"]})]})},v=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={good:0,neutral:0,bad:0},e.updateStatistics=function(t){e.setState((function(e){return Object(r.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(e){Object.values(e).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){console.log("also we will count positive percentage")},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,i=e.bad,a=this.countTotalFeedback(this.state);console.log("this is const feedbackQuantity in render",a);var s=this.countPositiveFeedbackPercentage(this.state);return Object(c.jsxs)("div",{children:[Object(c.jsx)(h,{title:"Please leave your feedback",children:Object(c.jsx)(j,{options:["good","neutral","bad"],onLeaveFeedback:this.updateStatistics})}),Object(c.jsx)(h,{title:"Statistics",children:Object(c.jsx)(f,{good:t,neutral:n,bad:i,total:a,positivePercentage:s})})]})}}]),n}(i.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),O()}},[[25,1,2]]]);
//# sourceMappingURL=main.3e282912.chunk.js.map