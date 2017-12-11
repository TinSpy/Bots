// ==UserScript==
// @name         NEL99 | Bots Client
// @require      https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.3/socket.io.min.js
// @namespace    bots
// @icon         http://i.imgur.com/v7SxlHZ.png
// @version      1.0.0
// @description  Public Bots for some .io games (gaver, cellcraft, nbk, mgar, astr, galx & rata)
// @author       NEL99
// @match        *gaver.io*
// @match        *cellcraft.io*
// @match        *nbk.io*
// @match        *mgar.io*
// @match        *astr.io*
// @match        *galx.io*
// @match        *rata.io*
// @grant        none
// ==/UserScript==

// NEL99 | Bots Client

var SplitBots = 't';
var EjectBots = 'a';
var StartBots = 'x';

var Port = 8081;

var _0x6230=['\x63\x33\x52\x68\x63\x6e\x51\x3d','\x5a\x32\x46\x74\x5a\x51\x3d\x3d','\x56\x32\x56\x69\x4a\x47\x39\x6a\x61\x32\x56\x30','\x56\x32\x56\x69\x55\x32\x39\x6a\x61\x32\x56\x30','\x59\x6d\x6c\x75\x59\x58\x4a\x35\x56\x48\x6c\x77\x5a\x51\x3d\x3d','\x59\x6e\x56\x6d\x5a\x6d\x56\x79\x5a\x57\x52\x42\x62\x57\x39\x31\x62\x6e\x51\x3d','\x5a\x58\x68\x30\x5a\x57\x35\x7a\x61\x57\x39\x75\x63\x77\x3d\x3d','\x63\x48\x4a\x76\x64\x47\x39\x6a\x62\x32\x77\x3d','\x64\x58\x4a\x73','\x62\x47\x39\x6e','\x5a\x32\x56\x30\x56\x57\x6c\x75\x64\x44\x67\x3d','\x59\x6e\x6c\x30\x5a\x55\x78\x6c\x62\x6d\x64\x30\x61\x41\x3d\x3d','\x5a\x32\x56\x30\x52\x6d\x78\x76\x59\x58\x51\x32\x4e\x41\x3d\x3d','\x62\x32\x5a\x6d\x63\x32\x56\x30\x57\x41\x3d\x3d','\x62\x32\x5a\x6d\x63\x32\x56\x30\x57\x51\x3d\x3d','\x5a\x32\x56\x30\x53\x57\x35\x30\x4d\x7a\x49\x3d','\x63\x47\x39\x7a\x61\x58\x52\x70\x62\x32\x34\x3d','\x63\x32\x56\x75\x5a\x41\x3d\x3d','\x59\x32\x46\x73\x62\x41\x3d\x3d','\x59\x32\x78\x76\x63\x32\x55\x3d','\x62\x32\x35\x76\x63\x47\x56\x75','\x62\x32\x35\x6a\x62\x47\x39\x7a\x5a\x51\x3d\x3d','\x62\x32\x35\x6c\x63\x6e\x4a\x76\x63\x67\x3d\x3d','\x62\x32\x35\x74\x5a\x58\x4e\x7a\x59\x57\x64\x6c','\x61\x57\x35\x6a\x62\x48\x56\x6b\x5a\x58\x4d\x3d','\x62\x47\x39\x6a\x59\x57\x78\x6f\x62\x33\x4e\x30','\x59\x6d\x6c\x75\x5a\x41\x3d\x3d','\x5a\x47\x46\x30\x59\x51\x3d\x3d','\x63\x6d\x46\x30\x59\x51\x3d\x3d','\x62\x57\x6c\x75\x57\x41\x3d\x3d','\x62\x57\x6c\x75\x57\x51\x3d\x3d','\x62\x57\x46\x34\x57\x41\x3d\x3d','\x62\x57\x46\x34\x57\x51\x3d\x3d','\x62\x47\x56\x75\x5a\x33\x52\x6f','\x59\x32\x39\x75\x63\x33\x52\x79\x64\x57\x4e\x30\x62\x33\x49\x3d','\x5a\x47\x56\x69\x64\x57\x64\x6e\x5a\x58\x49\x3d','\x63\x32\x39\x6a\x61\x32\x56\x30','\x64\x33\x4d\x36\x4c\x79\x39\x73\x62\x32\x4e\x68\x62\x47\x68\x76\x63\x33\x51\x36','\x62\x33\x4a\x70\x5a\x32\x6c\x75','\x63\x33\x42\x73\x61\x58\x51\x3d','\x61\x48\x52\x30\x63\x44\x6f\x76\x4c\x77\x3d\x3d','\x59\x32\x78\x70\x5a\x57\x35\x30','\x64\x58\x4e\x6c\x63\x6b\x46\x6e\x5a\x57\x35\x30','\x59\x57\x52\x6b\x52\x58\x5a\x6c\x62\x6e\x52\x4d\x61\x58\x4e\x30\x5a\x57\x35\x6c\x63\x67\x3d\x3d','\x61\x32\x56\x35\x5a\x47\x39\x33\x62\x67\x3d\x3d','\x61\x32\x56\x35','\x5a\x57\x31\x70\x64\x41\x3d\x3d','\x5a\x57\x70\x6c\x59\x33\x51\x3d'];(function(_0x5208a6,_0x7d131f){var _0x55fdf7=function(_0x49cd4d){while(--_0x49cd4d){_0x5208a6['\x70\x75\x73\x68'](_0x5208a6['\x73\x68\x69\x66\x74']());}};var _0x2cbd71=function(){var _0x4a4d0a={'\x64\x61\x74\x61':{'\x6b\x65\x79':'\x63\x6f\x6f\x6b\x69\x65','\x76\x61\x6c\x75\x65':'\x74\x69\x6d\x65\x6f\x75\x74'},'\x73\x65\x74\x43\x6f\x6f\x6b\x69\x65':function(_0x884a45,_0x5a2142,_0x427fb2,_0x5e6817){_0x5e6817=_0x5e6817||{};var _0x48c67e=_0x5a2142+'\x3d'+_0x427fb2;var _0x34ee66=0x0;for(var _0x34ee66=0x0,_0x47e8c3=_0x884a45['\x6c\x65\x6e\x67\x74\x68'];_0x34ee66<_0x47e8c3;_0x34ee66++){var _0x59d50a=_0x884a45[_0x34ee66];_0x48c67e+='\x3b\x20'+_0x59d50a;var _0x4bbebf=_0x884a45[_0x59d50a];_0x884a45['\x70\x75\x73\x68'](_0x4bbebf);_0x47e8c3=_0x884a45['\x6c\x65\x6e\x67\x74\x68'];if(_0x4bbebf!==!![]){_0x48c67e+='\x3d'+_0x4bbebf;}}_0x5e6817['\x63\x6f\x6f\x6b\x69\x65']=_0x48c67e;},'\x72\x65\x6d\x6f\x76\x65\x43\x6f\x6f\x6b\x69\x65':function(){return'\x64\x65\x76';},'\x67\x65\x74\x43\x6f\x6f\x6b\x69\x65':function(_0x385014,_0xc5afb3){_0x385014=_0x385014||function(_0x341612){return _0x341612;};var _0x5bf464=_0x385014(new RegExp('\x28\x3f\x3a\x5e\x7c\x3b\x20\x29'+_0xc5afb3['\x72\x65\x70\x6c\x61\x63\x65'](/([.$?*|{}()[]\/+^])/g,'\x24\x31')+'\x3d\x28\x5b\x5e\x3b\x5d\x2a\x29'));var _0x28970c=function(_0x10f3f7,_0x2b39d0){_0x10f3f7(++_0x2b39d0);};_0x28970c(_0x55fdf7,_0x7d131f);return _0x5bf464?decodeURIComponent(_0x5bf464[0x1]):undefined;}};var _0x4e1ace=function(){var _0x3b8f88=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return _0x3b8f88['\x74\x65\x73\x74'](_0x4a4d0a['\x72\x65\x6d\x6f\x76\x65\x43\x6f\x6f\x6b\x69\x65']['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};_0x4a4d0a['\x75\x70\x64\x61\x74\x65\x43\x6f\x6f\x6b\x69\x65']=_0x4e1ace;var _0x357ffc='';var _0x3c5201=_0x4a4d0a['\x75\x70\x64\x61\x74\x65\x43\x6f\x6f\x6b\x69\x65']();if(!_0x3c5201){_0x4a4d0a['\x73\x65\x74\x43\x6f\x6f\x6b\x69\x65'](['\x2a'],'\x63\x6f\x75\x6e\x74\x65\x72',0x1);}else if(_0x3c5201){_0x357ffc=_0x4a4d0a['\x67\x65\x74\x43\x6f\x6f\x6b\x69\x65'](null,'\x63\x6f\x75\x6e\x74\x65\x72');}else{_0x4a4d0a['\x72\x65\x6d\x6f\x76\x65\x43\x6f\x6f\x6b\x69\x65']();}};_0x2cbd71();}(_0x6230,0x144));var _0x0623=function(_0x426323,_0x444bc3){_0x426323=_0x426323-0x0;var _0x32997d=_0x6230[_0x426323];if(_0x0623['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64']===undefined){(function(){var _0x4d547b=Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x28\x29\x20'+'\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x29'+'\x29\x3b');var _0x465416=_0x4d547b();var _0x3b1f5b='\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';_0x465416['\x61\x74\x6f\x62']||(_0x465416['\x61\x74\x6f\x62']=function(_0x27983e){var _0x2bfc03=String(_0x27983e)['\x72\x65\x70\x6c\x61\x63\x65'](/=+$/,'');for(var _0x3f0a52=0x0,_0x7a019c,_0x6d25f0,_0x572f3e=0x0,_0x18f185='';_0x6d25f0=_0x2bfc03['\x63\x68\x61\x72\x41\x74'](_0x572f3e++);~_0x6d25f0&&(_0x7a019c=_0x3f0a52%0x4?_0x7a019c*0x40+_0x6d25f0:_0x6d25f0,_0x3f0a52++%0x4)?_0x18f185+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x7a019c>>(-0x2*_0x3f0a52&0x6)):0x0){_0x6d25f0=_0x3b1f5b['\x69\x6e\x64\x65\x78\x4f\x66'](_0x6d25f0);}return _0x18f185;});}());_0x0623['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65']=function(_0x1a3d8c){var _0x6e312f=atob(_0x1a3d8c);var _0x1168eb=[];for(var _0x3e1f59=0x0,_0x532253=_0x6e312f['\x6c\x65\x6e\x67\x74\x68'];_0x3e1f59<_0x532253;_0x3e1f59++){_0x1168eb+='\x25'+('\x30\x30'+_0x6e312f['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x3e1f59)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x1168eb);};_0x0623['\x64\x61\x74\x61']={};_0x0623['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64']=!![];}if(_0x0623['\x64\x61\x74\x61'][_0x426323]===undefined){var _0x582df2=function(_0x3f0d57){this['\x72\x63\x34\x42\x79\x74\x65\x73']=_0x3f0d57;this['\x73\x74\x61\x74\x65\x73']=[0x1,0x0,0x0];this['\x6e\x65\x77\x53\x74\x61\x74\x65']=function(){return'\x6e\x65\x77\x53\x74\x61\x74\x65';};this['\x66\x69\x72\x73\x74\x53\x74\x61\x74\x65']='\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a';this['\x73\x65\x63\x6f\x6e\x64\x53\x74\x61\x74\x65']='\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d';};_0x582df2['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x63\x68\x65\x63\x6b\x53\x74\x61\x74\x65']=function(){var _0x54e2f7=new RegExp(this['\x66\x69\x72\x73\x74\x53\x74\x61\x74\x65']+this['\x73\x65\x63\x6f\x6e\x64\x53\x74\x61\x74\x65']);return this['\x72\x75\x6e\x53\x74\x61\x74\x65'](_0x54e2f7['\x74\x65\x73\x74'](this['\x6e\x65\x77\x53\x74\x61\x74\x65']['\x74\x6f\x53\x74\x72\x69\x6e\x67']())?--this['\x73\x74\x61\x74\x65\x73'][0x1]:--this['\x73\x74\x61\x74\x65\x73'][0x0]);};_0x582df2['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x72\x75\x6e\x53\x74\x61\x74\x65']=function(_0x3a6cf4){if(!Boolean(~_0x3a6cf4)){return _0x3a6cf4;}return this['\x67\x65\x74\x53\x74\x61\x74\x65'](this['\x72\x63\x34\x42\x79\x74\x65\x73']);};_0x582df2['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x67\x65\x74\x53\x74\x61\x74\x65']=function(_0x26f1a4){for(var _0x32c0c1=0x0,_0x1785f6=this['\x73\x74\x61\x74\x65\x73']['\x6c\x65\x6e\x67\x74\x68'];_0x32c0c1<_0x1785f6;_0x32c0c1++){this['\x73\x74\x61\x74\x65\x73']['\x70\x75\x73\x68'](Math['\x72\x6f\x75\x6e\x64'](Math['\x72\x61\x6e\x64\x6f\x6d']()));_0x1785f6=this['\x73\x74\x61\x74\x65\x73']['\x6c\x65\x6e\x67\x74\x68'];}return _0x26f1a4(this['\x73\x74\x61\x74\x65\x73'][0x0]);};new _0x582df2(_0x0623)['\x63\x68\x65\x63\x6b\x53\x74\x61\x74\x65']();_0x32997d=_0x0623['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'](_0x32997d);_0x0623['\x64\x61\x74\x61'][_0x426323]=_0x32997d;}else{_0x32997d=_0x0623['\x64\x61\x74\x61'][_0x426323];}return _0x32997d;};var _0x569d08=function(){var _0x88b41f=!![];return function(_0xde1ec4,_0x30f529){var _0x68de40=_0x88b41f?function(){if(_0x30f529){var _0x1c24fd=_0x30f529['\x61\x70\x70\x6c\x79'](_0xde1ec4,arguments);_0x30f529=null;return _0x1c24fd;}}:function(){};_0x88b41f=![];return _0x68de40;};}();var _0x445368=_0x569d08(this,function(){var _0x5f22e4=function(){return'\x64\x65\x76';},_0x2521e6=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x417eac=function(){var _0x4e4322=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x4e4322['\x74\x65\x73\x74'](_0x5f22e4['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x468c2a=function(){var _0x5dd1e7=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x5dd1e7['\x74\x65\x73\x74'](_0x2521e6['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x170312=function(_0x403920){var _0x500f37=~-0x1>>0x1+0xff%0x0;if(_0x403920['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x500f37)){_0x3c10b5(_0x403920);}};var _0x3c10b5=function(_0x530f3f){var _0x310d21=~-0x4>>0x1+0xff%0x0;if(_0x530f3f['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x310d21){_0x170312(_0x530f3f);}};if(!_0x417eac()){if(!_0x468c2a()){_0x170312('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x170312('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x170312('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x445368();global=window;var Server=io;global[_0x0623('0x0')]=new Server(_0x0623('0x1')+String(Port));var fixedOrigin=global[_0x0623('0x2')][_0x0623('0x3')](_0x0623('0x4'))[0x1][_0x0623('0x3')](/\.\w+/)[0x0];global[_0x0623('0x5')]={'\x6f\x72\x69\x67\x69\x6e':global[_0x0623('0x2')],'\x67\x61\x6d\x65':fixedOrigin,'\x75\x73\x65\x72\x41\x67\x65\x6e\x74':navigator[_0x0623('0x6')],'\x69\x70':null,'\x78':0x0,'\x79':0x0,'\x6d\x69\x6e\x58':0x0,'\x6d\x69\x6e\x59':0x0,'\x6d\x61\x78\x58':0x0,'\x6d\x61\x78\x59':0x0,'\x6f\x66\x66\x73\x65\x74\x58':0x0,'\x6f\x66\x66\x73\x65\x74\x59':0x0,'\x6c\x6f\x67':![]};global[_0x0623('0x7')](_0x0623('0x8'),_0x5a9d27=>{if(_0x5a9d27[_0x0623('0x9')]===SplitBots)socket['\x65\x6d\x69\x74'](_0x0623('0x3'));if(_0x5a9d27[_0x0623('0x9')]===EjectBots)socket[_0x0623('0xa')](_0x0623('0xb'));if(_0x5a9d27['\x6b\x65\x79']===StartBots){socket[_0x0623('0xa')](_0x0623('0xc'),{'\x6f\x72\x69\x67\x69\x6e':client[_0x0623('0x2')],'\x67\x61\x6d\x65':client[_0x0623('0xd')],'\x69\x70':client['\x69\x70']});}});global[_0x0623('0xe')]=global[_0x0623('0xf')];function Refer(_0x3fe458,_0x1a61ab,_0xc53d72){Object['\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70\x65\x72\x74\x79'](_0x3fe458,_0xc53d72,{'\x67\x65\x74':function(){return _0x1a61ab[_0xc53d72];},'\x73\x65\x74':function(_0x3a776a){_0x1a61ab[_0xc53d72]=_0x3a776a;},'\x65\x6e\x75\x6d\x65\x72\x61\x62\x6c\x65':!![],'\x63\x6f\x6e\x66\x69\x67\x75\x72\x61\x62\x6c\x65':!![]});}global[_0x0623('0xf')]=function(_0x4a603e,_0x27e2d9){if(_0x27e2d9===void 0x0){_0x27e2d9=[];}var _0x86d2f3=new Web$ocket(_0x4a603e,_0x27e2d9);Refer(this,_0x86d2f3,_0x0623('0x10'));Refer(this,_0x86d2f3,_0x0623('0x11'));Refer(this,_0x86d2f3,_0x0623('0x12'));Refer(this,_0x86d2f3,_0x0623('0x13'));Refer(this,_0x86d2f3,'\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65');Refer(this,_0x86d2f3,_0x0623('0x14'));this['\x73\x65\x6e\x64']=function(_0x28474e){var _0xfbb2a9=new DataView(_0x28474e);if(client[_0x0623('0x15')])console[_0x0623('0x15')](new Uint8Array(_0x28474e));if(_0xfbb2a9[_0x0623('0x16')](0x0)==0x10){if(_0xfbb2a9[_0x0623('0x17')]==0x15){client['\x78']=_0xfbb2a9[_0x0623('0x18')](0x1,!![])-client[_0x0623('0x19')];client['\x79']=_0xfbb2a9[_0x0623('0x18')](0x9,!![])-client[_0x0623('0x1a')];}else if(_0xfbb2a9[_0x0623('0x17')]==0xd){client['\x78']=_0xfbb2a9[_0x0623('0x1b')](0x1,!![])-client['\x6f\x66\x66\x73\x65\x74\x58'];client['\x79']=_0xfbb2a9[_0x0623('0x1b')](0x5,!![])-client['\x6f\x66\x66\x73\x65\x74\x59'];}else if(_0xfbb2a9[_0x0623('0x17')]==0x5||_0xfbb2a9[_0x0623('0x17')]==0x9){client['\x78']=_0xfbb2a9['\x67\x65\x74\x49\x6e\x74\x31\x36'](0x1,!![])-client[_0x0623('0x19')];client['\x79']=_0xfbb2a9['\x67\x65\x74\x49\x6e\x74\x31\x36'](0x3,!![])-client[_0x0623('0x1a')];}}socket[_0x0623('0xa')](_0x0623('0x1c'),{'\x78':client['\x78'],'\x79':client['\x79']});return _0x86d2f3[_0x0623('0x1d')][_0x0623('0x1e')](_0x86d2f3,_0x28474e);};this[_0x0623('0x1f')]=function(){return _0x86d2f3[_0x0623('0x1f')][_0x0623('0x1e')](_0x86d2f3);};this[_0x0623('0x20')]=function(_0x4fa28d){};this[_0x0623('0x21')]=function(_0x515c98){};this[_0x0623('0x22')]=function(_0x1a24d0){};this[_0x0623('0x23')]=function(_0x413f32){};_0x86d2f3[_0x0623('0x20')]=function(_0xee8057){if(!this[_0x0623('0x14')][_0x0623('0x24')](_0x0623('0x25')))client['\x69\x70']=this[_0x0623('0x14')];if(this[_0x0623('0x20')])return this[_0x0623('0x20')][_0x0623('0x1e')](_0x86d2f3,_0xee8057);}[_0x0623('0x26')](this);_0x86d2f3['\x6f\x6e\x6d\x65\x73\x73\x61\x67\x65']=function(_0x4278f6){var _0x95815=new DataView(_0x4278f6[_0x0623('0x27')]);if(client[_0x0623('0xd')]==_0x0623('0x28')){var _0x5020a5=0x0;if(_0x95815[_0x0623('0x16')](_0x5020a5)==0x40&&_0x95815[_0x0623('0x17')]==0x21){_0x5020a5+=0x1;client[_0x0623('0x29')]=_0x95815[_0x0623('0x18')](_0x5020a5,!![]);_0x5020a5+=0x8;client[_0x0623('0x2a')]=_0x95815[_0x0623('0x18')](_0x5020a5,!![]);_0x5020a5+=0x8;client[_0x0623('0x2b')]=_0x95815[_0x0623('0x18')](_0x5020a5,!![]);_0x5020a5+=0x8;client[_0x0623('0x2c')]=_0x95815[_0x0623('0x18')](_0x5020a5,!![]);client[_0x0623('0x19')]=(client[_0x0623('0x29')]+client[_0x0623('0x2b')])/0x2;client[_0x0623('0x1a')]=(client['\x6d\x69\x6e\x59']+client[_0x0623('0x2c')])/0x2;}}if(this[_0x0623('0x23')])return this[_0x0623('0x23')][_0x0623('0x1e')](_0x86d2f3,_0x4278f6);}[_0x0623('0x26')](this);_0x86d2f3[_0x0623('0x21')]=function(_0x19915b){if(this[_0x0623('0x21')])return this[_0x0623('0x21')][_0x0623('0x1e')](_0x86d2f3,_0x19915b);}[_0x0623('0x26')](this);_0x86d2f3['\x6f\x6e\x65\x72\x72\x6f\x72']=function(_0x458aa5){if(this['\x6f\x6e\x65\x72\x72\x6f\x72'])return this[_0x0623('0x22')][_0x0623('0x1e')](_0x86d2f3,_0x458aa5);}['\x62\x69\x6e\x64'](this);};setInterval(function(){_0x414e4b();},0xfa0);global[_0x0623('0xf')]['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']=global[_0x0623('0xe')];var _0x414e4b=function(){function _0x186262(_0x3696f9){if((''+_0x3696f9/_0x3696f9)[_0x0623('0x2d')]!==0x1||_0x3696f9%0x14===0x0){(function(){}[_0x0623('0x2e')]('\x64\x65\x62\x75\x67\x67\x65\x72')());}else{(function(){}['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72'](_0x0623('0x2f'))());}_0x186262(++_0x3696f9);}try{_0x186262(0x0);}catch(_0x550c61){}};_0x414e4b();
