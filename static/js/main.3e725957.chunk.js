(this["webpackJsonpreact-router-practice"]=this["webpackJsonpreact-router-practice"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports={form:"QuoteForm_form__1dJyd",loading:"QuoteForm_loading__3Jvxt",control:"QuoteForm_control__11LXW",actions:"QuoteForm_actions__2uvjZ"}},function(e,t,n){e.exports={header:"MainNavigation_header__Jz6-J",logo:"MainNavigation_logo__1WHFv",nav:"MainNavigation_nav__37ye8",active:"MainNavigation_active__2R8fL"}},,,function(e,t,n){e.exports={form:"NewCommentForm_form__1dIFA",loading:"NewCommentForm_loading___8QJF",control:"NewCommentForm_control__3yGe4",actions:"NewCommentForm_actions__UmjBQ"}},,,function(e,t,n){e.exports={list:"QuoteList_list__3C1Hr",sorting:"QuoteList_sorting__1bftj"}},,,function(e,t,n){e.exports={item:"QuoteItem_item__37LAe"}},,function(e,t,n){e.exports={card:"Card_card__36NGt"}},function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__15qt3"}},function(e,t,n){e.exports={quote:"HighlightedQuote_quote__3d4eD"}},function(e,t,n){e.exports={comments:"Comments_comments__3qpDL"}},function(e,t,n){e.exports={main:"Layout_main__1nQyE"}},,,,,,,,,function(e,t,n){},,,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(18),s=n(6),r=(n(34),n(2)),o=n(1),a=n(19),i=n.n(a),j=n(0),u=function(e){return Object(j.jsxs)("li",{className:i.a.item,children:[Object(j.jsxs)("figure",{children:[Object(j.jsx)("blockquote",{children:Object(j.jsx)("p",{children:e.text})}),Object(j.jsx)("figcaption",{children:e.author})]}),Object(j.jsx)(s.b,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},l=n(16),d=n.n(l),b=function(e){var t,n,c=Object(r.h)(),s=Object(r.i)(),o="asc"===new URLSearchParams(s.search).get("sort"),a=(t=e.quotes,n=o,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:d.a.sorting,children:Object(j.jsxs)("button",{onClick:function(){c.push("/quotes?sort="+(o?"desc":"asc"))},children:["Sort ",o?"Descending":"Ascending"]})}),Object(j.jsx)("ul",{className:d.a.list,children:a.map((function(e){return Object(j.jsx)(u,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},x=[{id:"q1",author:"Max",text:"Learning React is fun!"},{id:"q2",author:"Gaga",text:"Learning React is great!"}],h=function(){return Object(j.jsx)(b,{quotes:x})},m=n(12),O=n(21),f=n.n(O),_=function(e){return Object(j.jsx)("div",{className:f.a.card,children:e.children})},g=n(22),p=n.n(g),v=function(){return Object(j.jsx)("div",{className:p.a.spinner})},N=n(9),q=n.n(N),F=function(e){var t=Object(o.useState)(!1),n=Object(m.a)(t,2),c=n[0],s=n[1],a=Object(o.useRef)(),i=Object(o.useRef)();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(r.a,{when:c,message:function(e){return"Are you sure you want to leave? All your entered data will be lost!"}}),Object(j.jsx)(_,{children:Object(j.jsxs)("form",{onFocus:function(){s(!0)},className:q.a.form,onSubmit:function(t){t.preventDefault();var n=a.current.value,c=i.current.value;e.onAddQuote({author:n,text:c})},children:[e.isLoading&&Object(j.jsx)("div",{className:q.a.loading,children:Object(j.jsx)(v,{})}),Object(j.jsxs)("div",{className:q.a.control,children:[Object(j.jsx)("label",{htmlFor:"author",children:"Author"}),Object(j.jsx)("input",{type:"text",id:"author",ref:a})]}),Object(j.jsxs)("div",{className:q.a.control,children:[Object(j.jsx)("label",{htmlFor:"text",children:"Text"}),Object(j.jsx)("textarea",{id:"text",rows:"5",ref:i})]}),Object(j.jsx)("div",{className:q.a.actions,children:Object(j.jsx)("button",{onClick:function(){s(!1)},className:"btn",children:"Add Quote"})})]})})]})},C=function(){var e=Object(r.h)();return Object(j.jsx)(F,{onAddQuote:function(t){console.log(t),e.push("/quotes")}})},Q=n(23),w=n.n(Q),L=function(e){return Object(j.jsxs)("figure",{className:w.a.quote,children:[Object(j.jsx)("p",{children:e.text}),Object(j.jsx)("figcaption",{children:e.author})]})},A=n(24),y=n.n(A),R=n(13),S=n.n(R),J=function(e){var t=Object(o.useRef)(),n=function(e){e.preventDefault()};return Object(j.jsxs)("form",{className:S.a.form,onSubmit:n,children:[Object(j.jsxs)("div",{className:S.a.control,onSubmit:n,children:[Object(j.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(j.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(j.jsx)("div",{className:S.a.actions,children:Object(j.jsx)("button",{className:"btn",children:"Add Comment"})})]})},k=function(){var e=Object(o.useState)(!1),t=Object(m.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)("section",{className:y.a.comments,children:[Object(j.jsx)("h2",{children:"User Comments"}),!n&&Object(j.jsx)("button",{className:"btn",onClick:function(){c(!0)},children:"Add a Comment"}),n&&Object(j.jsx)(J,{}),Object(j.jsx)("p",{children:"Comments..."})]})},I=[{id:"q1",author:"Max",text:"Learning React is fun!"},{id:"q2",author:"Gaga",text:"Learning React is great!"}],M=function(){var e=Object(r.j)(),t=I.find((function(t){return t.id===e.quoteId}));return t?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(L,{text:t.text,author:t.author}),Object(j.jsx)(r.c,{path:"/quotes/".concat(e.quoteId,"/comments"),children:Object(j.jsx)(k,{})})]}):Object(j.jsx)("p",{children:"No quote found!"})},D=function(){return Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)("p",{children:"Page not found!"})})},G=n(25),H=n.n(G),U=n(10),B=n.n(U),E=function(){return Object(j.jsxs)("header",{className:B.a.header,children:[Object(j.jsx)("div",{className:B.a.logo,children:"Great Quotes"}),Object(j.jsx)("nav",{className:B.a.nav,children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.c,{to:"/quotes",activeClassName:B.a.active,children:"AllQuotes"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.c,{to:"/new-quote",activeClassName:B.a.active,children:"Add a Quote"})})]})})]})},P=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(E,{}),Object(j.jsx)("main",{className:H.a.main,children:e.children})]})};var W=function(){return Object(j.jsx)(P,{children:Object(j.jsxs)(r.e,{children:[Object(j.jsx)(r.c,{path:"/",exact:!0,children:Object(j.jsx)(r.b,{to:"/quotes"})}),Object(j.jsx)(r.c,{path:"/quotes",exact:!0,children:Object(j.jsx)(h,{})}),Object(j.jsx)(r.c,{path:"/quotes/:quoteId",children:Object(j.jsx)(M,{})}),Object(j.jsx)(r.c,{path:"/new-quote",children:Object(j.jsx)(C,{})}),Object(j.jsx)(r.c,{path:"*",children:Object(j.jsx)(D,{})})]})})};Object(c.createRoot)(document.getElementById("root")).render(Object(j.jsx)(s.a,{children:Object(j.jsx)(W,{})}))}],[[43,1,2]]]);
//# sourceMappingURL=main.3e725957.chunk.js.map