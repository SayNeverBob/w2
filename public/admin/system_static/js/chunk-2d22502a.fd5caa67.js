(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d22502a"],{e328:function(e,t,n){"use strict";n.r(t),n.d(t,"setupTypeScript",(function(){return me})),n.d(t,"setupJavaScript",(function(){return be})),n.d(t,"getJavaScriptWorker",(function(){return ve})),n.d(t,"getTypeScriptWorker",(function(){return ye}));var r=n("bf44"),i=function(e,t,n,r){return new(n=n||Promise)((function(i,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?i(e.value):((t=e.value)instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))},s=function(e,t){var n,r,i,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},o={next:a(0),throw:a(1),return:a(2)};return"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){var u=[o,a];if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,(u=i?[2&u[0],i.value]:u)[0]){case 0:case 1:i=u;break;case 4:return s.label++,{value:u[1],done:!1};case 5:s.label++,r=u[1],u=[0];continue;case 7:u=s.ops.pop(),s.trys.pop();continue;default:if(!(i=0<(i=s.trys).length&&i[i.length-1])&&(6===u[0]||2===u[0])){s=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3]))s.label=u[1];else if(6===u[0]&&s.label<i[1])s.label=i[1],i=u;else{if(!(i&&s.label<i[2])){i[2]&&s.ops.pop(),s.trys.pop();continue}s.label=i[2],s.ops.push(u)}}u=t.call(e,s)}catch(a){u=[6,a],r=0}finally{n=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}},o=(a.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},a.prototype.dispose=function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()},a.prototype._updateExtraLibs=function(){return i(this,void 0,void 0,(function(){var e,t;return s(this,(function(n){switch(n.label){case 0:return this._worker?(e=++this._updateExtraLibsToken,[4,this._worker.getProxy()]):[2];case 1:return t=n.sent(),this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs()),[2]}}))}))},a.prototype._getClient=function(){var e,t=this;return this._client||(this._worker=r.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),e=this._worker.getProxy(),this._defaults.getEagerModelSync()&&(e=e.then((function(e){return t._worker?t._worker.withSyncedResources(r.editor.getModels().filter((function(e){return e.getModeId()===t._modeId})).map((function(e){return e.uri}))):e}))),this._client=e),this._client},a.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return this._getClient().then((function(t){e=t})).then((function(e){if(t._worker)return t._worker.withSyncedResources(n)})).then((function(t){return e}))},a);function a(e,t){var n=this;this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((function(){return n._stopWorker()})),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((function(){return n._updateExtraLibs()}))}var u,l,c=n("cf78"),d={"lib.d.ts":!0,"lib.dom.d.ts":!0,"lib.dom.iterable.d.ts":!0,"lib.es2015.collection.d.ts":!0,"lib.es2015.core.d.ts":!0,"lib.es2015.d.ts":!0,"lib.es2015.generator.d.ts":!0,"lib.es2015.iterable.d.ts":!0,"lib.es2015.promise.d.ts":!0,"lib.es2015.proxy.d.ts":!0,"lib.es2015.reflect.d.ts":!0,"lib.es2015.symbol.d.ts":!0,"lib.es2015.symbol.wellknown.d.ts":!0,"lib.es2016.array.include.d.ts":!0,"lib.es2016.d.ts":!0,"lib.es2016.full.d.ts":!0,"lib.es2017.d.ts":!0,"lib.es2017.full.d.ts":!0,"lib.es2017.intl.d.ts":!0,"lib.es2017.object.d.ts":!0,"lib.es2017.sharedmemory.d.ts":!0,"lib.es2017.string.d.ts":!0,"lib.es2017.typedarrays.d.ts":!0,"lib.es2018.asyncgenerator.d.ts":!0,"lib.es2018.asynciterable.d.ts":!0,"lib.es2018.d.ts":!0,"lib.es2018.full.d.ts":!0,"lib.es2018.intl.d.ts":!0,"lib.es2018.promise.d.ts":!0,"lib.es2018.regexp.d.ts":!0,"lib.es2019.array.d.ts":!0,"lib.es2019.d.ts":!0,"lib.es2019.full.d.ts":!0,"lib.es2019.object.d.ts":!0,"lib.es2019.string.d.ts":!0,"lib.es2019.symbol.d.ts":!0,"lib.es2020.bigint.d.ts":!0,"lib.es2020.d.ts":!0,"lib.es2020.full.d.ts":!0,"lib.es2020.intl.d.ts":!0,"lib.es2020.promise.d.ts":!0,"lib.es2020.sharedmemory.d.ts":!0,"lib.es2020.string.d.ts":!0,"lib.es2020.symbol.wellknown.d.ts":!0,"lib.es2021.d.ts":!0,"lib.es2021.full.d.ts":!0,"lib.es2021.promise.d.ts":!0,"lib.es2021.string.d.ts":!0,"lib.es2021.weakref.d.ts":!0,"lib.es5.d.ts":!0,"lib.es6.d.ts":!0,"lib.esnext.d.ts":!0,"lib.esnext.full.d.ts":!0,"lib.esnext.intl.d.ts":!0,"lib.esnext.promise.d.ts":!0,"lib.esnext.string.d.ts":!0,"lib.esnext.weakref.d.ts":!0,"lib.scripthost.d.ts":!0,"lib.webworker.d.ts":!0,"lib.webworker.importscripts.d.ts":!0,"lib.webworker.iterable.d.ts":!0},p=(t=(u=function(e,t){return(u=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}))(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}u(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),function(){return(p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)}),g=function(e,t,n,r){return new(n=n||Promise)((function(i,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?i(e.value):((t=e.value)instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))},f=function(e,t){var n,r,i,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},o={next:a(0),throw:a(1),return:a(2)};return"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){var u=[o,a];if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,(u=i?[2&u[0],i.value]:u)[0]){case 0:case 1:i=u;break;case 4:return s.label++,{value:u[1],done:!1};case 5:s.label++,r=u[1],u=[0];continue;case 7:u=s.ops.pop(),s.trys.pop();continue;default:if(!(i=0<(i=s.trys).length&&i[i.length-1])&&(6===u[0]||2===u[0])){s=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3]))s.label=u[1];else if(6===u[0]&&s.label<i[1])s.label=i[1],i=u;else{if(!(i&&s.label<i[2])){i[2]&&s.ops.pop(),s.trys.pop();continue}s.label=i[2],s.ops.push(u)}}u=t.call(e,s)}catch(a){u=[6,a],r=0}finally{n=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}};function h(e,t,n){if("string"==typeof e)return e;if(void 0===e)return"";var r="";if(n=void 0===n?0:n){r+=t;for(var i=0;i<n;i++)r+="  "}if(r+=e.messageText,n++,e.next)for(var s=0,o=e.next;s<o.length;s++)r+=h(o[s],t,n);return r}function m(e){return e?e.map((function(e){return e.text})).join(""):""}function b(e){this._worker=e}(n=l=l||{})[n.None=0]="None",n[n.Block=1]="Block",n[n.Smart=2]="Smart",b.prototype._textSpanToRange=function(e,t){var n=e.getPositionAt(t.start);e=e.getPositionAt(t.start+t.length);return{startLineNumber:n.lineNumber,startColumn:n.column,endLineNumber:e.lineNumber,endColumn:e.column}},n=b,w.prototype.isLibFile=function(e){return!!e&&0===e.path.indexOf("/lib.")&&!!d[e.path.slice(1)]},w.prototype.getOrCreateModel=function(e){var t=r.editor.getModel(e);return t||(this.isLibFile(e)&&this._hasFetchedLibFiles?r.editor.createModel(this._libFiles[e.path.slice(1)],"typescript",e):null)},w.prototype._containsLibFile=function(e){for(var t=0,n=e;t<n.length;t++){var r=n[t];if(this.isLibFile(r))return!0}return!1},w.prototype.fetchLibFilesIfNecessary=function(e){return g(this,void 0,void 0,(function(){return f(this,(function(t){switch(t.label){case 0:return this._containsLibFile(e)?[4,this._fetchLibFiles()]:[2];case 1:return t.sent(),[2]}}))}))},w.prototype._fetchLibFiles=function(){var e=this;return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((function(e){return e.getLibFiles()})).then((function(t){e._hasFetchedLibFiles=!0,e._libFiles=t}))),this._fetchLibFilesPromise};var v,y,_=w;function w(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}(y=v=v||{})[y.Warning=0]="Warning",y[y.Error=1]="Error",y[y.Suggestion=2]="Suggestion",y[y.Message=3]="Message",t(x,S=n),x.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},x.prototype._doValidate=function(e){return g(this,void 0,void 0,(function(){var t,n,i,s,o,a,u=this;return f(this,(function(l){switch(l.label){case 0:return[4,this._worker(e.uri)];case 1:return t=l.sent(),e.isDisposed()?[2]:(n=[],i=this._defaults.getDiagnosticsOptions(),s=i.noSyntaxValidation,a=i.noSemanticValidation,i=i.noSuggestionDiagnostics,s||n.push(t.getSyntacticDiagnostics(e.uri.toString())),a||n.push(t.getSemanticDiagnostics(e.uri.toString())),i||n.push(t.getSuggestionDiagnostics(e.uri.toString())),[4,Promise.all(n)]);case 2:return!(s=l.sent())||e.isDisposed()?[2]:(o=s.reduce((function(e,t){return t.concat(e)}),[]).filter((function(e){return-1===(u._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code)})),a=o.map((function(e){return e.relatedInformation||[]})).reduce((function(e,t){return t.concat(e)}),[]).map((function(e){return e.file?r.Uri.parse(e.file.fileName):null})),[4,this._libFiles.fetchLibFilesIfNecessary(a)]);case 3:return l.sent(),e.isDisposed()||r.editor.setModelMarkers(e,this._selector,o.map((function(t){return u._convertDiagnostics(e,t)}))),[2]}}))}))},x.prototype._convertDiagnostics=function(e,t){var n=t.start||0,i=t.length||1,s=e.getPositionAt(n),o=s.lineNumber,a=(s=s.column,n=e.getPositionAt(n+i),i=n.lineNumber,n=n.column,[]);return t.reportsUnnecessary&&a.push(r.MarkerTag.Unnecessary),t.reportsDeprecated&&a.push(r.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:o,startColumn:s,endLineNumber:i,endColumn:n,message:h(t.messageText,"\n"),code:t.code.toString(),tags:a,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}},x.prototype._convertRelatedInformation=function(e,t){var n,i=this;return t?(n=[],t.forEach((function(t){var s,o,a,u,l=e;t.file&&(u=r.Uri.parse(t.file.fileName),l=i._libFiles.getOrCreateModel(u)),l&&(u=t.start||0,a=t.length||1,s=(o=l.getPositionAt(u)).lineNumber,o=o.column,a=(u=l.getPositionAt(u+a)).lineNumber,u=u.column,n.push({resource:l.uri,startLineNumber:s,startColumn:o,endLineNumber:a,endColumn:u,message:h(t.messageText,"\n")}))})),n):[]},x.prototype._tsDiagnosticCategoryToMarkerSeverity=function(e){switch(e){case v.Error:return r.MarkerSeverity.Error;case v.Message:return r.MarkerSeverity.Info;case v.Warning:return r.MarkerSeverity.Warning;case v.Suggestion:return r.MarkerSeverity.Hint}return r.MarkerSeverity.Info};var S,k=x;function x(e,t,n,i){function s(){for(var e=0,t=r.editor.getModels();e<t.length;e++){var n=t[e];u(n),a(n)}}var o=S.call(this,i)||this,a=(o._libFiles=e,o._defaults=t,o._selector=n,o._disposables=[],o._listener=Object.create(null),function(e){var t,i,s,a;e.getModeId()===n&&(t=function(){o._defaults.getDiagnosticsOptions().onlyVisible&&!e.isAttachedToEditor()||o._doValidate(e)},s=e.onDidChangeContent((function(){clearTimeout(i),i=setTimeout(t,500)})),a=e.onDidChangeAttached((function(){o._defaults.getDiagnosticsOptions().onlyVisible&&(e.isAttachedToEditor()?t():r.editor.setModelMarkers(e,o._selector,[]))})),o._listener[e.uri.toString()]={dispose:function(){s.dispose(),a.dispose(),clearTimeout(i)}},t())}),u=function(e){r.editor.setModelMarkers(e,o._selector,[]),e=e.uri.toString(),o._listener[e]&&(o._listener[e].dispose(),delete o._listener[e])};return o._disposables.push(r.editor.onDidCreateModel((function(e){return a(e)}))),o._disposables.push(r.editor.onWillDisposeModel(u)),o._disposables.push(r.editor.onDidChangeModelLanguage((function(e){u(e.model),a(e.model)}))),o._disposables.push({dispose:function(){for(var e=0,t=r.editor.getModels();e<t.length;e++){var n=t[e];u(n)}}}),o._disposables.push(o._defaults.onDidChange(s)),o._disposables.push(o._defaults.onDidExtraLibsChange(s)),r.editor.getModels().forEach((function(e){return a(e)})),o}t(I,C=n),Object.defineProperty(I.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!1,configurable:!0}),I.prototype.provideCompletionItems=function(e,t,n,i){return g(this,void 0,void 0,(function(){var n,i,s,o,a;return f(this,(function(u){switch(u.label){case 0:return o=e.getWordUntilPosition(t),n=new r.Range(t.lineNumber,o.startColumn,t.lineNumber,o.endColumn),i=e.uri,s=e.getOffsetAt(t),[4,this._worker(i)];case 1:return o=u.sent(),e.isDisposed()?[2]:[4,o.getCompletionsAtPosition(i.toString(),s)];case 2:return!(a=u.sent())||e.isDisposed()?[2]:[2,{suggestions:a.entries.map((function(o){var a,u=n,l=(o.replacementSpan&&(l=e.getPositionAt(o.replacementSpan.start),a=e.getPositionAt(o.replacementSpan.start+o.replacementSpan.length),u=new r.Range(l.lineNumber,l.column,a.lineNumber,a.column)),[]);return-1!==(null==(a=o.kindModifiers)?void 0:a.indexOf("deprecated"))&&l.push(r.languages.CompletionItemTag.Deprecated),{uri:i,position:t,offset:s,range:u,label:o.name,insertText:o.name,sortText:o.sortText,kind:I.convertKind(o.kind),tags:l}}))}]}}))}))},I.prototype.resolveCompletionItem=function(e,t){return g(this,void 0,void 0,(function(){var t,n,r,i,s;return f(this,(function(o){switch(o.label){case 0:return n=(t=e).uri,r=t.position,i=t.offset,[4,this._worker(n)];case 1:return[4,o.sent().getCompletionEntryDetails(n.toString(),i,t.label)];case 2:return(s=o.sent())?[2,{uri:n,position:r,label:s.name,kind:I.convertKind(s.kind),detail:m(s.displayParts),documentation:{value:I.createDocumentationString(s)}}]:[2,t]}}))}))},I.convertKind=function(e){switch(e){case J.primitiveType:case J.keyword:return r.languages.CompletionItemKind.Keyword;case J.variable:case J.localVariable:return r.languages.CompletionItemKind.Variable;case J.memberVariable:case J.memberGetAccessor:case J.memberSetAccessor:return r.languages.CompletionItemKind.Field;case J.function:case J.memberFunction:case J.constructSignature:case J.callSignature:case J.indexSignature:return r.languages.CompletionItemKind.Function;case J.enum:return r.languages.CompletionItemKind.Enum;case J.module:return r.languages.CompletionItemKind.Module;case J.class:return r.languages.CompletionItemKind.Class;case J.interface:return r.languages.CompletionItemKind.Interface;case J.warning:return r.languages.CompletionItemKind.File}return r.languages.CompletionItemKind.Property},I.createDocumentationString=function(e){var t=m(e.documentation);if(e.tags)for(var n=0,r=e.tags;n<r.length;n++)t+="\n\n"+T(r[n]);return t};var C,D=I;function I(){return null!==C&&C.apply(this,arguments)||this}function T(e){var t,n,r="*@"+e.name+"*";return"param"===e.name&&e.text?(t=(n=e.text)[0],n=n.slice(1),r+="`"+t.text+"`",0<n.length&&(r+=" — "+n.map((function(e){return e.text})).join(" "))):Array.isArray(e.text)?r+=" — "+e.text.map((function(e){return e.text})).join(" "):e.text&&(r+=" — "+e.text),r}t(A,F=n),A._toSignatureHelpTriggerReason=function(e){switch(e.triggerKind){case r.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case r.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};default:return r.languages.SignatureHelpTriggerKind.Invoke,{kind:"invoked"}}},A.prototype.provideSignatureHelp=function(e,t,n,r){return g(this,void 0,void 0,(function(){var n,i,s,o;return f(this,(function(a){switch(a.label){case 0:return n=e.uri,i=e.getOffsetAt(t),[4,this._worker(n)];case 1:return s=a.sent(),e.isDisposed()?[2]:[4,s.getSignatureHelpItems(n.toString(),i,{triggerReason:A._toSignatureHelpTriggerReason(r)})];case 2:return!(s=a.sent())||e.isDisposed()?[2]:(o={activeSignature:s.selectedItemIndex,activeParameter:s.argumentIndex,signatures:[]},s.items.forEach((function(e){var t={label:"",parameters:[]};t.documentation={value:m(e.documentation)},t.label+=m(e.prefixDisplayParts),e.parameters.forEach((function(n,r,i){var s=m(n.displayParts);n={label:s,documentation:{value:m(n.documentation)}};t.label+=s,t.parameters.push(n),r<i.length-1&&(t.label+=m(e.separatorDisplayParts))})),t.label+=m(e.suffixDisplayParts),o.signatures.push(t)})),[2,{value:o,dispose:function(){}}])}}))}))};var F,P=A;function A(){var e=null!==F&&F.apply(this,arguments)||this;return e.signatureHelpTriggerCharacters=["(",","],e}t(N,O=n),N.prototype.provideHover=function(e,t,n){return g(this,void 0,void 0,(function(){var n,r,i,s,o,a;return f(this,(function(u){switch(u.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return i=u.sent(),e.isDisposed()?[2]:[4,i.getQuickInfoAtPosition(n.toString(),r)];case 2:return!(i=u.sent())||e.isDisposed()?[2]:(s=m(i.documentation),o=i.tags?i.tags.map(T).join("  \n\n"):"",a=m(i.displayParts),[2,{range:this._textSpanToRange(e,i.textSpan),contents:[{value:"```typescript\n"+a+"\n```\n"},{value:s+(o?"\n\n"+o:"")}]}])}}))}))};var O,L=N;function N(){return null!==O&&O.apply(this,arguments)||this}t(E,M=n),E.prototype.provideDocumentHighlights=function(e,t,n){return g(this,void 0,void 0,(function(){var n,i,s,o=this;return f(this,(function(a){switch(a.label){case 0:return n=e.uri,i=e.getOffsetAt(t),[4,this._worker(n)];case 1:return s=a.sent(),e.isDisposed()?[2]:[4,s.getOccurrencesAtPosition(n.toString(),i)];case 2:return!(s=a.sent())||e.isDisposed()?[2]:[2,s.map((function(t){return{range:o._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?r.languages.DocumentHighlightKind.Write:r.languages.DocumentHighlightKind.Text}}))]}}))}))};var M,K=E;function E(){return null!==M&&M.apply(this,arguments)||this}t(W,R=n),W.prototype.provideDefinition=function(e,t,n){return g(this,void 0,void 0,(function(){var n,i,s,o,a,u,l,d,p,g;return f(this,(function(f){switch(f.label){case 0:return n=e.uri,i=e.getOffsetAt(t),[4,this._worker(n)];case 1:return s=f.sent(),e.isDisposed()?[2]:[4,s.getDefinitionAtPosition(n.toString(),i)];case 2:return!(o=f.sent())||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(o.map((function(e){return r.Uri.parse(e.fileName)})))];case 3:if(f.sent(),e.isDisposed())return[2];for(a=[],u=0,l=o;u<l.length;u++)if(d=l[u],p=r.Uri.parse(d.fileName),g=this._libFiles.getOrCreateModel(p))a.push({uri:p,range:this._textSpanToRange(g,d.textSpan)});else if(g=c.typescriptDefaults.getExtraLibs()[d.fileName])return g=r.editor.createModel(g.content,"typescript",p),[2,{uri:p,range:this._textSpanToRange(g,d.textSpan)}];return[2,a]}}))}))};var R,H=W;function W(e,t){return t=R.call(this,t)||this,t._libFiles=e,t}t(B,V=n),B.prototype.provideReferences=function(e,t,n,i){return g(this,void 0,void 0,(function(){var n,i,s,o,a,u,l,c,d,p;return f(this,(function(g){switch(g.label){case 0:return n=e.uri,i=e.getOffsetAt(t),[4,this._worker(n)];case 1:return s=g.sent(),e.isDisposed()?[2]:[4,s.getReferencesAtPosition(n.toString(),i)];case 2:return!(o=g.sent())||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(o.map((function(e){return r.Uri.parse(e.fileName)})))];case 3:if(g.sent(),e.isDisposed())return[2];for(a=[],u=0,l=o;u<l.length;u++)c=l[u],d=r.Uri.parse(c.fileName),(p=this._libFiles.getOrCreateModel(d))&&a.push({uri:d,range:this._textSpanToRange(p,c.textSpan)});return[2,a]}}))}))};var V,j=B;function B(e,t){return t=V.call(this,t)||this,t._libFiles=e,t}t(G,U=n),G.prototype.provideDocumentSymbols=function(e,t){return g(this,void 0,void 0,(function(){var t,n,i,s,o=this;return f(this,(function(a){switch(a.label){case 0:return t=e.uri,[4,this._worker(t)];case 1:return n=a.sent(),e.isDisposed()?[2]:[4,n.getNavigationBarItems(t.toString())];case 2:return!(n=a.sent())||e.isDisposed()?[2]:(i=function(t,n,s){var a={name:n.text,detail:"",kind:X[n.kind]||r.languages.SymbolKind.Variable,range:o._textSpanToRange(e,n.spans[0]),selectionRange:o._textSpanToRange(e,n.spans[0]),tags:[]};if(s&&(a.containerName=s),n.childItems&&0<n.childItems.length)for(var u=0,l=n.childItems;u<l.length;u++){var c=l[u];i(t,c,a.name)}t.push(a)},s=[],n.forEach((function(e){return i(s,e)})),[2,s])}}))}))};var U,z=G;function G(){return null!==U&&U.apply(this,arguments)||this}q.unknown="",q.keyword="keyword",q.script="script",q.module="module",q.class="class",q.interface="interface",q.type="type",q.enum="enum",q.variable="var",q.localVariable="local var",q.function="function",q.localFunction="local function",q.memberFunction="method",q.memberGetAccessor="getter",q.memberSetAccessor="setter",q.memberVariable="property",q.constructorImplementation="constructor",q.callSignature="call",q.indexSignature="index",q.constructSignature="construct",q.parameter="parameter",q.typeParameter="type parameter",q.primitiveType="primitive type",q.label="label",q.alias="alias",q.const="const",q.let="let",q.warning="warning";var J=q;function q(){}var Q,X=Object.create(null),Y=(X[J.module]=r.languages.SymbolKind.Module,X[J.class]=r.languages.SymbolKind.Class,X[J.enum]=r.languages.SymbolKind.Enum,X[J.interface]=r.languages.SymbolKind.Interface,X[J.memberFunction]=r.languages.SymbolKind.Method,X[J.memberVariable]=r.languages.SymbolKind.Property,X[J.memberGetAccessor]=r.languages.SymbolKind.Property,X[J.memberSetAccessor]=r.languages.SymbolKind.Property,X[J.variable]=r.languages.SymbolKind.Variable,X[J.const]=r.languages.SymbolKind.Variable,X[J.localVariable]=r.languages.SymbolKind.Variable,X[J.variable]=r.languages.SymbolKind.Variable,X[J.function]=r.languages.SymbolKind.Function,X[J.localFunction]=r.languages.SymbolKind.Function,t(Z,Q=n),Z._convertOptions=function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:l.Smart,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},Z.prototype._convertTextChanges=function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}},Z);function Z(){return null!==Q&&Q.apply(this,arguments)||this}t(te,$=Y),te.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){return g(this,void 0,void 0,(function(){var r,i,s,o,a=this;return f(this,(function(u){switch(u.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),s=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),[4,this._worker(r)];case 1:return o=u.sent(),e.isDisposed()?[2]:[4,o.getFormattingEditsForRange(r.toString(),i,s,Y._convertOptions(n))];case 2:return!(o=u.sent())||e.isDisposed()?[2]:[2,o.map((function(t){return a._convertTextChanges(e,t)}))]}}))}))};var $,ee=te;function te(){return null!==$&&$.apply(this,arguments)||this}t(ie,ne=Y),Object.defineProperty(ie.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}","\n"]},enumerable:!1,configurable:!0}),ie.prototype.provideOnTypeFormattingEdits=function(e,t,n,r,i){return g(this,void 0,void 0,(function(){var i,s,o,a=this;return f(this,(function(u){switch(u.label){case 0:return i=e.uri,s=e.getOffsetAt(t),[4,this._worker(i)];case 1:return o=u.sent(),e.isDisposed()?[2]:[4,o.getFormattingEditsAfterKeystroke(i.toString(),s,n,Y._convertOptions(r))];case 2:return!(o=u.sent())||e.isDisposed()?[2]:[2,o.map((function(t){return a._convertTextChanges(e,t)}))]}}))}))};var ne,re=ie;function ie(){return null!==ne&&ne.apply(this,arguments)||this}t(ae,se=Y),ae.prototype.provideCodeActions=function(e,t,n,r){return g(this,void 0,void 0,(function(){var r,i,s,o,a,u,l=this;return f(this,(function(c){switch(c.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),s=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=Y._convertOptions(e.getOptions()),a=n.markers.filter((function(e){return e.code})).map((function(e){return e.code})).map(Number),[4,this._worker(r)];case 1:return u=c.sent(),e.isDisposed()?[2]:[4,u.getCodeFixesAtPosition(r.toString(),i,s,a,o)];case 2:return!(u=c.sent())||e.isDisposed()?[2,{actions:[],dispose:function(){}}]:[2,{actions:u.filter((function(e){return 0===e.changes.filter((function(e){return e.isNewFile})).length})).map((function(t){return l._tsCodeFixActionToMonacoCodeAction(e,n,t)})),dispose:function(){}}]}}))}))},ae.prototype._tsCodeFixActionToMonacoCodeAction=function(e,t,n){for(var r=[],i=0,s=n.changes;i<s.length;i++)for(var o=0,a=s[i].textChanges;o<a.length;o++){var u=a[o];r.push({resource:e.uri,edit:{range:this._textSpanToRange(e,u.span),text:u.newText}})}return{title:n.description,edit:{edits:r},diagnostics:t.markers,kind:"quickfix"}};var se,oe=ae;function ae(){return null!==se&&se.apply(this,arguments)||this}t(ce,ue=n),ce.prototype.provideRenameEdits=function(e,t,n,i){return g(this,void 0,void 0,(function(){var i,s,o,a,u,l,c,d,p,g,h;return f(this,(function(f){switch(f.label){case 0:return a=e.uri,i=a.toString(),s=e.getOffsetAt(t),[4,this._worker(a)];case 1:return o=f.sent(),e.isDisposed()?[2]:[4,o.getRenameInfo(i,s,{allowRenameOfImportPath:!1})];case 2:if(!1===(a=f.sent()).canRename)return[2,{edits:[],rejectReason:a.localizedErrorMessage}];if(void 0!==a.fileToRename)throw new Error("Renaming files is not supported.");return[4,o.findRenameLocations(i,s,!1,!1,!1)];case 3:if(!(u=f.sent())||e.isDisposed())return[2];for(l=[],c=0,d=u;c<d.length;c++){if(p=d[c],g=r.Uri.parse(p.fileName),!(h=r.editor.getModel(g)))throw new Error("Unknown URI "+g+".");l.push({resource:g,edit:{range:this._textSpanToRange(h,p.textSpan),text:n}})}return[2,{edits:l}]}}))}))};var ue,le=ce;function ce(){return null!==ue&&ue.apply(this,arguments)||this}t(he,de=n),he.prototype.provideInlayHints=function(e,t,n){return g(this,void 0,void 0,(function(){var n,r,i,s,o=this;return f(this,(function(a){switch(a.label){case 0:return s=e.uri,n=s.toString(),r=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),i=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),[4,this._worker(s)];case 1:return s=a.sent(),e.isDisposed()?[2,[]]:[4,s.provideInlayHints(n,r,i)];case 2:return[2,a.sent().map((function(t){return p(p({},t),{position:e.getPositionAt(t.position),kind:o._convertHintKind(t.kind)})}))]}}))}))},he.prototype._convertHintKind=function(e){switch(e){case"Parameter":return r.languages.InlayHintKind.Parameter;case"Type":return r.languages.InlayHintKind.Type;default:return r.languages.InlayHintKind.Other}};var de,pe,ge,fe=he;function he(){return null!==de&&de.apply(this,arguments)||this}function me(e){ge=_e(e,"typescript")}function be(e){pe=_e(e,"javascript")}function ve(){return new Promise((function(e,t){if(!pe)return t("JavaScript not registered!");e(pe)}))}function ye(){return new Promise((function(e,t){if(!ge)return t("TypeScript not registered!");e(ge)}))}function _e(e,t){function n(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i.getLanguageServiceWorker.apply(i,e)}var i=new o(t,e),s=new _(n);return r.languages.registerCompletionItemProvider(t,new D(n)),r.languages.registerSignatureHelpProvider(t,new P(n)),r.languages.registerHoverProvider(t,new L(n)),r.languages.registerDocumentHighlightProvider(t,new K(n)),r.languages.registerDefinitionProvider(t,new H(s,n)),r.languages.registerReferenceProvider(t,new j(s,n)),r.languages.registerDocumentSymbolProvider(t,new z(n)),r.languages.registerDocumentRangeFormattingEditProvider(t,new ee(n)),r.languages.registerOnTypeFormattingEditProvider(t,new re(n)),r.languages.registerCodeActionProvider(t,new oe(n)),r.languages.registerRenameProvider(t,new le(n)),r.languages.registerInlayHintsProvider(t,new fe(n)),new k(s,e,t,n),n}}}]);