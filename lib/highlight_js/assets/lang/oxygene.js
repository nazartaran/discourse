hljs.registerLanguage("oxygene",function(e){var r="abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained",t=e.C("{","}",{r:0}),a=e.C("\\(\\*","\\*\\)",{r:10}),n={cN:"string",b:"'",e:"'",c:[{b:"''"}]},o={cN:"string",b:"(#\\d+)+"},i={cN:"function",bK:"function constructor destructor procedure method",e:"[:;]",k:"function constructor|10 destructor|10 procedure|10 method|10",c:[e.TM,{cN:"params",b:"\\(",e:"\\)",k:r,c:[n,o]},t,a]};return{cI:!0,k:r,i:'("|\\$[G-Zg-z]|\\/\\*|</|=>|->)',c:[t,a,e.CLCM,n,o,e.NM,i,{cN:"class",b:"=\\bclass\\b",e:"end;",k:r,c:[n,o,t,a,e.CLCM,i]}]}});