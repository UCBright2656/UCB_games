if(!Tonyu.load)Tonyu.load=(_,f)=>f();
Tonyu.load({"compiler":{"namespace":"user","defaultSuperClass":"kernel.Actor","dependingProjects":[{"namespace":"kernel"}],"noLoopCheck":false,"field_strict":false,"typeCheck":false,"compress":false},"run":{"mainClass":"user.Main","bootClass":"kernel.Boot","globals":{"$defaultFPS":60,"$imageSmoothingDisabled":true,"$soundLoadAndDecode":false}},"plugins":{"jquery_ui":1},"kernelEditable":false,"language":"tonyu","version":1718850616930}, ()=>{
Tonyu.klass.define({
  fullName: 'user.Card',
  shortName: 'Card',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Card_main() {
        var _this=this;
        
        _this.width=100;
        _this.height=100;
        _this.fillStyle="white";
        _this.shokai=0;
        _this.ax0=_this.x-_this.floor(_this.width/2);
        _this.ax1=_this.x+_this.floor(_this.width/2);
        _this.ay0=_this.y-_this.floor(_this.height/2);
        _this.ay1=_this.y+_this.floor(_this.height/2);
        _this.mj=new Tonyu.classes.user.Moji({x: _this.x,y: _this.y,text: _this.myOmote,y0: _this.y,width: 80,height: 80,size: 22,fillStyle: "pink",alpha: 255});
        _this.mjUra=new Tonyu.classes.user.Moji({x: _this.x,y: _this.y,text: _this.myUra,y0: _this.y,width: 80,height: 80,size: 22,fillStyle: "pink",alpha: 0});
        while (true) {
          Tonyu.checkLoop();
          if (Tonyu.globals.$touches[0].touched==1&&Tonyu.globals.$clickable) {
            _this.tx=Tonyu.globals.$touches[0].x;
            _this.ty=Tonyu.globals.$touches[0].y;
            if (_this.ax0<=_this.tx&&_this.ax1>=_this.tx&&_this.ay0<=_this.ty&&_this.ay1>=_this.ty&&_this.mode==2) {
              _this.mode=1;
              Tonyu.globals.$select.push(_this.pos);
              Tonyu.globals.$wikiWord=_this.myOmote;
              Tonyu.globals.$wikiSummary=_this.mySum;
              Tonyu.globals.$changeSum=1;
              
            }
            
          }
          if (_this.mode==1) {
            _this.mj.alpha=0;
            _this.mjUra.alpha=255;
            _this.mjUra.fillStyle="white";
            _this.fillStyle="blue";
            Tonyu.globals.$dur[_this.omote]++;
            
          } else {
            if (_this.mode==2) {
              _this.mj.alpha=255;
              _this.mj.fillStyle="black";
              _this.mjUra.alpha=0;
              _this.fillStyle="pink";
              
            } else {
              if (_this.mode==3) {
                _this.mj.alpha=255;
                _this.mj.fillStyle="black";
                _this.mj.text=_this.myOmote;
                _this.mjUra.text=_this.myUra;
                _this.mjUra.alpha=0;
                _this.fillStyle="pink";
                _this.mode=2;
                
              } else {
                if (_this.mode==4) {
                  _this.mj.die();
                  _this.mjUra.die();
                  if (_this.shokai==0) {
                    _this.aax=_this.floor((_this.vx-_this.x)/15);
                    _this.aay=_this.floor((_this.vy-_this.y)/15);
                    _this.shokai=1;
                    
                  }
                  _this.x+=_this.aax;
                  _this.y+=_this.aay;
                  if (_this.abs(_this.vx-_this.x)<5&&_this.abs(_this.vy-_this.y)<5) {
                    _this.mode=0;
                    
                  }
                  
                } else {
                  _this.mj.die();
                  _this.mjUra.die();
                  _this.die();
                  
                }
              }
            }
          }
          _this.update();
          
        }
      },
      fiber$main :function* _trc_Card_f_main(_thread) {
        var _this=this;
        
        _this.width=100;
        _this.height=100;
        _this.fillStyle="white";
        _this.shokai=0;
        _this.ax0=_this.x-_this.floor(_this.width/2);
        _this.ax1=_this.x+_this.floor(_this.width/2);
        _this.ay0=_this.y-_this.floor(_this.height/2);
        _this.ay1=_this.y+_this.floor(_this.height/2);
        _this.mj=new Tonyu.classes.user.Moji({x: _this.x,y: _this.y,text: _this.myOmote,y0: _this.y,width: 80,height: 80,size: 22,fillStyle: "pink",alpha: 255});
        _this.mjUra=new Tonyu.classes.user.Moji({x: _this.x,y: _this.y,text: _this.myUra,y0: _this.y,width: 80,height: 80,size: 22,fillStyle: "pink",alpha: 0});
        while (true) {
          yield null;
          if (Tonyu.globals.$touches[0].touched==1&&Tonyu.globals.$clickable) {
            _this.tx=Tonyu.globals.$touches[0].x;
            _this.ty=Tonyu.globals.$touches[0].y;
            if (_this.ax0<=_this.tx&&_this.ax1>=_this.tx&&_this.ay0<=_this.ty&&_this.ay1>=_this.ty&&_this.mode==2) {
              _this.mode=1;
              Tonyu.globals.$select.push(_this.pos);
              Tonyu.globals.$wikiWord=_this.myOmote;
              Tonyu.globals.$wikiSummary=_this.mySum;
              Tonyu.globals.$changeSum=1;
              
            }
            
          }
          if (_this.mode==1) {
            _this.mj.alpha=0;
            _this.mjUra.alpha=255;
            _this.mjUra.fillStyle="white";
            _this.fillStyle="blue";
            Tonyu.globals.$dur[_this.omote]++;
            
          } else {
            if (_this.mode==2) {
              _this.mj.alpha=255;
              _this.mj.fillStyle="black";
              _this.mjUra.alpha=0;
              _this.fillStyle="pink";
              
            } else {
              if (_this.mode==3) {
                _this.mj.alpha=255;
                _this.mj.fillStyle="black";
                _this.mj.text=_this.myOmote;
                _this.mjUra.text=_this.myUra;
                _this.mjUra.alpha=0;
                _this.fillStyle="pink";
                _this.mode=2;
                
              } else {
                if (_this.mode==4) {
                  _this.mj.die();
                  _this.mjUra.die();
                  if (_this.shokai==0) {
                    _this.aax=_this.floor((_this.vx-_this.x)/15);
                    _this.aay=_this.floor((_this.vy-_this.y)/15);
                    _this.shokai=1;
                    
                  }
                  _this.x+=_this.aax;
                  _this.y+=_this.aay;
                  if (_this.abs(_this.vx-_this.x)<5&&_this.abs(_this.vy-_this.y)<5) {
                    _this.mode=0;
                    
                  }
                  
                } else {
                  _this.mj.die();
                  _this.mjUra.die();
                  _this.die();
                  
                }
              }
            }
          }
          (yield* _this.fiber$update(_thread));
          
        }
        
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false,"isMain":true,"vtype":{"params":[],"returnValue":null}}},"fields":{"shokai":{},"ax0":{},"ax1":{},"ay0":{},"ay1":{},"mj":{},"myOmote":{},"mjUra":{},"myUra":{},"tx":{},"ty":{},"mode":{},"pos":{},"mySum":{},"omote":{},"aax":{},"vx":{},"aay":{},"vy":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Main',
  shortName: 'Main',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Main_main() {
        var _this=this;
        
        Tonyu.globals.$Screen.resize(540,810);
        Tonyu.globals.$Screen.setBGColor("#ddddaa");
        Tonyu.globals.$timeFrame=0;
        Tonyu.globals.$Boot.setFrameRate(60);
        Tonyu.globals.$turn=0;
        Tonyu.globals.$miss=0;
        Tonyu.globals.$time=0;
        Tonyu.globals.$changeSum=0;
        Tonyu.globals.$qnum=0;
        _this.clear=0;
        _this.setMessage();
        _this.today = new Date();
        
        _this.year = _this.today.getFullYear();
        
        _this.month = ('0'+(_this.today.getMonth()+1)).slice(- 2);
        
        _this.day = ('0'+_this.today.getDate()).slice(- 2);
        
        Tonyu.globals.$ymd=_this.year+''+_this.month+''+_this.day;
        Tonyu.globals.$fs=_this.file("../static/wikiMatch.csv");
        Tonyu.globals.$ymd="";
        if (Tonyu.globals.$repeat!=1) {
          _this.makeQ(Tonyu.globals.$ymd);
          
        }
        _this.setDay();
        Tonyu.globals.$wikiWord="Wikipedian神経衰弱";
        Tonyu.globals.$ft=_this.file("../static/setumei.txt");
        Tonyu.globals.$wikiSummary=Tonyu.globals.$ft.text();
        Tonyu.globals.$turnO=new Tonyu.classes.kernel.Label({x: 430,y: 20,size: 24,align: _this.left,fillStyle: "Black",template: "手数:$turn"});
        Tonyu.globals.$content=["div",{name: "summary",style: "background:white;overflow-y: scroll;"},["h3",Tonyu.globals.$wikiWord],["p",Tonyu.globals.$wikiSummary]];
        Tonyu.globals.$summay=new Tonyu.classes.kernel.HTMLUI({content: Tonyu.globals.$content,left: 40,top: 510,width: 462,height: 250});
        while (true) {
          Tonyu.checkLoop();
          _this.prepear();
          while (true) {
            Tonyu.checkLoop();
            Tonyu.globals.$timeFrame++;
            Tonyu.globals.$time=_this.floor(Tonyu.globals.$timeFrame/(Tonyu.globals.$Boot.getFrameRate()*0.5));
            if (Tonyu.globals.$select.length>=1&&Tonyu.globals.$changeSum==1) {
              Tonyu.globals.$summay.die();
              Tonyu.globals.$content=["div",{style: "background:white;overflow-y: scroll;"},["h3",Tonyu.globals.$wikiWord],["a",{href: "https://ja.wikipedia.org/wiki/"+Tonyu.globals.$wikiWord},"https://ja.wikipedia.org/wiki/"+Tonyu.globals.$wikiWord],["p",{name: "summary"},Tonyu.globals.$wikiSummary]];
              Tonyu.globals.$summay=new Tonyu.classes.kernel.HTMLUI({content: Tonyu.globals.$content,left: 29,top: 510,width: 462,height: 250});
              Tonyu.globals.$changeSum=0;
              
            }
            if (Tonyu.globals.$select.length==2&&Tonyu.globals.$clickable==1) {
              if (Tonyu.globals.$select[0]==Tonyu.globals.$select[1]) {
                Tonyu.globals.$select.length=1;
                
              } else {
                Tonyu.globals.$clickable=0;
                Tonyu.globals.$startFrame=Tonyu.globals.$timeFrame;
                
              }
              
            }
            if (Tonyu.globals.$clickable==0) {
              if (Tonyu.globals.$b[Tonyu.globals.$select[0]].myUra==Tonyu.globals.$b[Tonyu.globals.$select[1]].myUra) {
                Tonyu.globals.$b[Tonyu.globals.$select[0]].vx=Tonyu.globals.$b[Tonyu.globals.$select[1]].x;
                Tonyu.globals.$b[Tonyu.globals.$select[0]].vy=Tonyu.globals.$b[Tonyu.globals.$select[1]].y;
                Tonyu.globals.$b[Tonyu.globals.$select[0]].mode=4;
                Tonyu.globals.$b[Tonyu.globals.$select[0]].zOrder=- 1;
                
              }
              
            }
            if (Tonyu.globals.$timeFrame-Tonyu.globals.$startFrame>=0.5*Tonyu.globals.$Boot.getFrameRate()&&Tonyu.globals.$clickable==0) {
              if (Tonyu.globals.$b[Tonyu.globals.$select[0]].myUra!=Tonyu.globals.$b[Tonyu.globals.$select[1]].myUra) {
                Tonyu.globals.$b[Tonyu.globals.$select[0]].mode=2;
                Tonyu.globals.$b[Tonyu.globals.$select[1]].mode=2;
                Tonyu.globals.$miss+=1;
                
              } else {
                _this.nextOmote=Number(Tonyu.globals.$b[Tonyu.globals.$select[1]].ura)+(Tonyu.globals.$qnum*31);
                Tonyu.globals.$b[Tonyu.globals.$select[1]].omote=Tonyu.globals.$questions.get(_this.nextOmote,0);
                Tonyu.globals.$b[Tonyu.globals.$select[1]].ura=Tonyu.globals.$questions.get(_this.nextOmote,1);
                Tonyu.globals.$b[Tonyu.globals.$select[1]].myOmote=Tonyu.globals.$questions.get(_this.nextOmote,2);
                Tonyu.globals.$b[Tonyu.globals.$select[1]].myUra=Tonyu.globals.$questions.get(_this.nextOmote,3);
                Tonyu.globals.$b[Tonyu.globals.$select[1]].mySum=Tonyu.globals.$questions.get(_this.nextOmote,4);
                Tonyu.globals.$b[Tonyu.globals.$select[1]].mode=3;
                
              }
              Tonyu.globals.$clickable=1;
              Tonyu.globals.$select.length=[];
              Tonyu.globals.$select.length=0;
              Tonyu.globals.$turn++;
              
            }
            _this.a=_this.all(Tonyu.classes.user.Card);
            if (_this.a.length==1&&_this.a[0].mode==1&&Tonyu.globals.$clickable==1) {
              _this.a[0].vx=250;
              _this.a[0].vy=- 50;
              _this.a[0].mode=4;
              break;
              
              
            }
            _this.wait(1);
            
          }
          _this.maxv=Tonyu.globals.$dur[0];
          _this.maxi=0;
          for (_this.i=1; _this.i<31 ; _this.i++) {
            Tonyu.checkLoop();
            {
              if (_this.maxv<Tonyu.globals.$dur[_this.i]) {
                _this.maxv=Tonyu.globals.$dur[_this.i];
                _this.maxi=_this.i;
                
              }
            }
          }
          Tonyu.globals.$fav=Tonyu.globals.$questions.get(_this.maxi,2);
          Tonyu.globals.$cl=new Tonyu.classes.kernel.Label({template: "クリア：$turn手、ミス：$miss手\n\nあなたのお気に入りは\n「$fav」\n　でした。",x: 270,y: 150,size: 24,fillStyle: "Black"});
          Tonyu.globals.$cl=new Tonyu.classes.kernel.Label({template: "今回のお題は\n「$wikiWord」\nでした。",x: 270,y: 50,size: 32,fillStyle: "Black"});
          Tonyu.globals.$br=new Tonyu.classes.kernel.Button({text: "別の問題をする",top: 340,left: 30,onClick: Tonyu.bindFunc(_this,_this.goTitle)});
          Tonyu.globals.$br=new Tonyu.classes.kernel.Button({text: "もう一度同じ問題をする",top: 280,left: 30,onClick: Tonyu.bindFunc(_this,_this.goRepeatTitle)});
          Tonyu.globals.$mesg="ウィキペディアン神経衰弱を"+Tonyu.globals.$turn+"手でクリアしたよ。お題は「"+Tonyu.globals.$wikiWord+"」お気に入りは「"+Tonyu.globals.$fav+"」でした。";
          _this.bt=new Tonyu.classes.kernel.Button({text: "Tweet",top: 400,left: 30,onClick: Tonyu.bindFunc(_this,_this.tweet)});
          while (true) {
            Tonyu.checkLoop();
            
            
          }
          
        }
      },
      fiber$main :function* _trc_Main_f_main(_thread) {
        var _this=this;
        
        Tonyu.globals.$Screen.resize(540,810);
        Tonyu.globals.$Screen.setBGColor("#ddddaa");
        Tonyu.globals.$timeFrame=0;
        Tonyu.globals.$Boot.setFrameRate(60);
        Tonyu.globals.$turn=0;
        Tonyu.globals.$miss=0;
        Tonyu.globals.$time=0;
        Tonyu.globals.$changeSum=0;
        Tonyu.globals.$qnum=0;
        _this.clear=0;
        (yield* _this.fiber$setMessage(_thread));
        _this.today = new Date();
        
        _this.year = _this.today.getFullYear();
        
        _this.month = ('0'+(_this.today.getMonth()+1)).slice(- 2);
        
        _this.day = ('0'+_this.today.getDate()).slice(- 2);
        
        Tonyu.globals.$ymd=_this.year+''+_this.month+''+_this.day;
        Tonyu.globals.$fs=(yield* _this.fiber$file(_thread, "../static/wikiMatch.csv"));
        Tonyu.globals.$ymd="";
        if (Tonyu.globals.$repeat!=1) {
          (yield* _this.fiber$makeQ(_thread, Tonyu.globals.$ymd));
          
        }
        (yield* _this.fiber$setDay(_thread));
        Tonyu.globals.$wikiWord="Wikipedian神経衰弱";
        Tonyu.globals.$ft=(yield* _this.fiber$file(_thread, "../static/setumei.txt"));
        Tonyu.globals.$wikiSummary=Tonyu.globals.$ft.text();
        Tonyu.globals.$turnO=new Tonyu.classes.kernel.Label({x: 430,y: 20,size: 24,align: _this.left,fillStyle: "Black",template: "手数:$turn"});
        Tonyu.globals.$content=["div",{name: "summary",style: "background:white;overflow-y: scroll;"},["h3",Tonyu.globals.$wikiWord],["p",Tonyu.globals.$wikiSummary]];
        Tonyu.globals.$summay=new Tonyu.classes.kernel.HTMLUI({content: Tonyu.globals.$content,left: 40,top: 510,width: 462,height: 250});
        while (true) {
          yield null;
          (yield* _this.fiber$prepear(_thread));
          while (true) {
            yield null;
            Tonyu.globals.$timeFrame++;
            Tonyu.globals.$time=_this.floor(Tonyu.globals.$timeFrame/(Tonyu.globals.$Boot.getFrameRate()*0.5));
            if (Tonyu.globals.$select.length>=1&&Tonyu.globals.$changeSum==1) {
              Tonyu.globals.$summay.die();
              Tonyu.globals.$content=["div",{style: "background:white;overflow-y: scroll;"},["h3",Tonyu.globals.$wikiWord],["a",{href: "https://ja.wikipedia.org/wiki/"+Tonyu.globals.$wikiWord},"https://ja.wikipedia.org/wiki/"+Tonyu.globals.$wikiWord],["p",{name: "summary"},Tonyu.globals.$wikiSummary]];
              Tonyu.globals.$summay=new Tonyu.classes.kernel.HTMLUI({content: Tonyu.globals.$content,left: 29,top: 510,width: 462,height: 250});
              Tonyu.globals.$changeSum=0;
              
            }
            if (Tonyu.globals.$select.length==2&&Tonyu.globals.$clickable==1) {
              if (Tonyu.globals.$select[0]==Tonyu.globals.$select[1]) {
                Tonyu.globals.$select.length=1;
                
              } else {
                Tonyu.globals.$clickable=0;
                Tonyu.globals.$startFrame=Tonyu.globals.$timeFrame;
                
              }
              
            }
            if (Tonyu.globals.$clickable==0) {
              if (Tonyu.globals.$b[Tonyu.globals.$select[0]].myUra==Tonyu.globals.$b[Tonyu.globals.$select[1]].myUra) {
                Tonyu.globals.$b[Tonyu.globals.$select[0]].vx=Tonyu.globals.$b[Tonyu.globals.$select[1]].x;
                Tonyu.globals.$b[Tonyu.globals.$select[0]].vy=Tonyu.globals.$b[Tonyu.globals.$select[1]].y;
                Tonyu.globals.$b[Tonyu.globals.$select[0]].mode=4;
                Tonyu.globals.$b[Tonyu.globals.$select[0]].zOrder=- 1;
                
              }
              
            }
            if (Tonyu.globals.$timeFrame-Tonyu.globals.$startFrame>=0.5*Tonyu.globals.$Boot.getFrameRate()&&Tonyu.globals.$clickable==0) {
              if (Tonyu.globals.$b[Tonyu.globals.$select[0]].myUra!=Tonyu.globals.$b[Tonyu.globals.$select[1]].myUra) {
                Tonyu.globals.$b[Tonyu.globals.$select[0]].mode=2;
                Tonyu.globals.$b[Tonyu.globals.$select[1]].mode=2;
                Tonyu.globals.$miss+=1;
                
              } else {
                _this.nextOmote=Number(Tonyu.globals.$b[Tonyu.globals.$select[1]].ura)+(Tonyu.globals.$qnum*31);
                Tonyu.globals.$b[Tonyu.globals.$select[1]].omote=Tonyu.globals.$questions.get(_this.nextOmote,0);
                Tonyu.globals.$b[Tonyu.globals.$select[1]].ura=Tonyu.globals.$questions.get(_this.nextOmote,1);
                Tonyu.globals.$b[Tonyu.globals.$select[1]].myOmote=Tonyu.globals.$questions.get(_this.nextOmote,2);
                Tonyu.globals.$b[Tonyu.globals.$select[1]].myUra=Tonyu.globals.$questions.get(_this.nextOmote,3);
                Tonyu.globals.$b[Tonyu.globals.$select[1]].mySum=Tonyu.globals.$questions.get(_this.nextOmote,4);
                Tonyu.globals.$b[Tonyu.globals.$select[1]].mode=3;
                
              }
              Tonyu.globals.$clickable=1;
              Tonyu.globals.$select.length=[];
              Tonyu.globals.$select.length=0;
              Tonyu.globals.$turn++;
              
            }
            _this.a=_this.all(Tonyu.classes.user.Card);
            if (_this.a.length==1&&_this.a[0].mode==1&&Tonyu.globals.$clickable==1) {
              _this.a[0].vx=250;
              _this.a[0].vy=- 50;
              _this.a[0].mode=4;
              break;
              
              
            }
            (yield* _this.fiber$wait(_thread, 1));
            
          }
          _this.maxv=Tonyu.globals.$dur[0];
          _this.maxi=0;
          for (_this.i=1; _this.i<31 ; _this.i++) {
            yield null;
            {
              if (_this.maxv<Tonyu.globals.$dur[_this.i]) {
                _this.maxv=Tonyu.globals.$dur[_this.i];
                _this.maxi=_this.i;
                
              }
            }
          }
          Tonyu.globals.$fav=Tonyu.globals.$questions.get(_this.maxi,2);
          Tonyu.globals.$cl=new Tonyu.classes.kernel.Label({template: "クリア：$turn手、ミス：$miss手\n\nあなたのお気に入りは\n「$fav」\n　でした。",x: 270,y: 150,size: 24,fillStyle: "Black"});
          Tonyu.globals.$cl=new Tonyu.classes.kernel.Label({template: "今回のお題は\n「$wikiWord」\nでした。",x: 270,y: 50,size: 32,fillStyle: "Black"});
          Tonyu.globals.$br=new Tonyu.classes.kernel.Button({text: "別の問題をする",top: 340,left: 30,onClick: Tonyu.bindFunc(_this,_this.goTitle)});
          Tonyu.globals.$br=new Tonyu.classes.kernel.Button({text: "もう一度同じ問題をする",top: 280,left: 30,onClick: Tonyu.bindFunc(_this,_this.goRepeatTitle)});
          Tonyu.globals.$mesg="ウィキペディアン神経衰弱を"+Tonyu.globals.$turn+"手でクリアしたよ。お題は「"+Tonyu.globals.$wikiWord+"」お気に入りは「"+Tonyu.globals.$fav+"」でした。";
          _this.bt=new Tonyu.classes.kernel.Button({text: "Tweet",top: 400,left: 30,onClick: Tonyu.bindFunc(_this,_this.tweet)});
          while (true) {
            yield null;
            
            
          }
          
        }
        
      },
      goTitle :function _trc_Main_goTitle() {
        var _this=this;
        
        Tonyu.globals.$repeat=0;
        _this.clear=3;
        Tonyu.globals.$br.die();
        Tonyu.globals.$cl.die();
        _this.clear=0;
        _this.loadPage(Tonyu.classes.user.Main);
      },
      fiber$goTitle :function* _trc_Main_f_goTitle(_thread) {
        var _this=this;
        
        Tonyu.globals.$repeat=0;
        _this.clear=3;
        Tonyu.globals.$br.die();
        Tonyu.globals.$cl.die();
        _this.clear=0;
        (yield* _this.fiber$loadPage(_thread, Tonyu.classes.user.Main));
        
      },
      goRepeatTitle :function _trc_Main_goRepeatTitle() {
        var _this=this;
        
        Tonyu.globals.$repeat=1;
        _this.clear=3;
        Tonyu.globals.$br.die();
        Tonyu.globals.$cl.die();
        _this.clear=0;
        _this.loadPage(Tonyu.classes.user.Main);
      },
      fiber$goRepeatTitle :function* _trc_Main_f_goRepeatTitle(_thread) {
        var _this=this;
        
        Tonyu.globals.$repeat=1;
        _this.clear=3;
        Tonyu.globals.$br.die();
        Tonyu.globals.$cl.die();
        _this.clear=0;
        (yield* _this.fiber$loadPage(_thread, Tonyu.classes.user.Main));
        
      },
      tweet :function _trc_Main_tweet() {
        var _this=this;
        
        Tonyu.globals.$WebPage.openShareTweet(Tonyu.globals.$mesg,Tonyu.globals.$url,"Wiki神,tonyu2");
      },
      fiber$tweet :function* _trc_Main_f_tweet(_thread) {
        var _this=this;
        
        Tonyu.globals.$WebPage.openShareTweet(Tonyu.globals.$mesg,Tonyu.globals.$url,"Wiki神,tonyu2");
        
      },
      input :function _trc_Main_input() {
        var _this=this;
        
        _this.parallel(Tonyu.bindFunc(_this,_this.dialog));
      },
      fiber$input :function* _trc_Main_f_input(_thread) {
        var _this=this;
        
        _this.parallel(Tonyu.bindFunc(_this,_this.dialog));
        
      },
      dialog :function _trc_Main_dialog() {
        var _this=this;
        
        Tonyu.globals.$ymd1=_this.waitInput("","",Tonyu.globals.$ymd);
        Tonyu.globals.$ymd=Tonyu.globals.$InputBox.getText();
        _this.print(Tonyu.globals.$ymd);
        Tonyu.globals.$fs=_this.file("../static/wikiMatch"+Tonyu.globals.$ymd+".csv");
        if (Tonyu.globals.$fs.exists()==false) {
          _this.print("今日の問題がないので作成します");
          _this.makeQ(Tonyu.globals.$ymd);
          
        }
        _this.setDay();
        _this.all(Tonyu.classes.user.Card).die();
        _this.all(Tonyu.classes.user.Moji).die();
        _this.all(Tonyu.classes.user.MojiUra).die();
        _this.prepear();
      },
      fiber$dialog :function* _trc_Main_f_dialog(_thread) {
        var _this=this;
        
        Tonyu.globals.$ymd1=(yield* _this.fiber$waitInput(_thread, "", "", Tonyu.globals.$ymd));
        Tonyu.globals.$ymd=Tonyu.globals.$InputBox.getText();
        _this.print(Tonyu.globals.$ymd);
        Tonyu.globals.$fs=(yield* _this.fiber$file(_thread, "../static/wikiMatch"+Tonyu.globals.$ymd+".csv"));
        if (Tonyu.globals.$fs.exists()==false) {
          _this.print("今日の問題がないので作成します");
          (yield* _this.fiber$makeQ(_thread, Tonyu.globals.$ymd));
          
        }
        (yield* _this.fiber$setDay(_thread));
        _this.all(Tonyu.classes.user.Card).die();
        _this.all(Tonyu.classes.user.Moji).die();
        _this.all(Tonyu.classes.user.MojiUra).die();
        (yield* _this.fiber$prepear(_thread));
        
      },
      setDay :function _trc_Main_setDay() {
        var _this=this;
        
        _this.ctt=Tonyu.globals.$fs.text();
        Tonyu.globals.$questions=new Tonyu.classes.kernel.Matrix;
        _this.q=_this.ctt.split("\n");
        _this.l=0;
        for ([_this.line] of Tonyu.iterator2(_this.q,1)) {
          _this.c=0;
          _this.ln=_this.floor(_this.l/3);
          _this.words=_this.line.split(",");
          if (_this.words.length>4) {
            for (_this.i=5; _this.i<_this.words.length ; _this.i++) {
              Tonyu.checkLoop();
              _this.words[4]+=_this.words[_this.i];
            }
            
          }
          if (_this.words.length<1) {
            continue;
            
            
          }
          for ([_this.w] of Tonyu.iterator2(_this.words,1)) {
            if (_this.w.length<1) {
              continue;
              
              
            }
            Tonyu.globals.$questions.set(_this.ln,_this.c,_this.w);
            _this.c++;
            
          }
          _this.l++;
          
        }
        Tonyu.globals.$dur=[];
        for (_this.i=0; _this.i<31 ; _this.i++) {
          Tonyu.checkLoop();
          {
            Tonyu.globals.$questions.set(_this.i,0,_this.i);
            Tonyu.globals.$dur.push(0);
          }
        }
      },
      fiber$setDay :function* _trc_Main_f_setDay(_thread) {
        var _this=this;
        
        _this.ctt=Tonyu.globals.$fs.text();
        Tonyu.globals.$questions=new Tonyu.classes.kernel.Matrix;
        _this.q=_this.ctt.split("\n");
        _this.l=0;
        for ([_this.line] of Tonyu.iterator2(_this.q,1)) {
          _this.c=0;
          _this.ln=_this.floor(_this.l/3);
          _this.words=_this.line.split(",");
          if (_this.words.length>4) {
            for (_this.i=5; _this.i<_this.words.length ; _this.i++) {
              yield null;
              _this.words[4]+=_this.words[_this.i];
            }
            
          }
          if (_this.words.length<1) {
            continue;
            
            
          }
          for ([_this.w] of Tonyu.iterator2(_this.words,1)) {
            if (_this.w.length<1) {
              continue;
              
              
            }
            Tonyu.globals.$questions.set(_this.ln,_this.c,_this.w);
            _this.c++;
            
          }
          _this.l++;
          
        }
        Tonyu.globals.$dur=[];
        for (_this.i=0; _this.i<31 ; _this.i++) {
          yield null;
          {
            Tonyu.globals.$questions.set(_this.i,0,_this.i);
            Tonyu.globals.$dur.push(0);
          }
        }
        
      },
      prepear :function _trc_Main_prepear() {
        var _this=this;
        
        Tonyu.globals.$b=[];
        Tonyu.globals.$num=[14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
        Tonyu.globals.$select=[];
        Tonyu.globals.$clickable=1;
        Tonyu.globals.$turn=0;
        Tonyu.globals.$miss=0;
        Tonyu.globals.$time=0;
        Tonyu.globals.$timeFrame=0;
        Tonyu.globals.$changeSum=0;
        Tonyu.globals.$qnum=0;
        for (let i = 0;
         i<50 ; i++) {
          Tonyu.checkLoop();
          {
            _this.r=_this.rnd(16);
            _this.n=i%16;
            _this.t=Tonyu.globals.$num[_this.n];
            Tonyu.globals.$num[_this.n]=Tonyu.globals.$num[_this.r];
            Tonyu.globals.$num[_this.r]=_this.t;
          }
        }
        for (let i = 0;
         i<16 ; i++) {
          Tonyu.checkLoop();
          {
            _this.px=(i%4)*120+90;
            _this.py=_this.floor(i/4)*120+85;
            _this.ri=Tonyu.globals.$num[i]+1+(Tonyu.globals.$qnum*31);
            Tonyu.globals.$b[i]=new Tonyu.classes.user.Card({y: _this.py,x: _this.px,vy: _this.py,vx: _this.py,pos: i,omote: Tonyu.globals.$questions.get(_this.ri,0),ura: Tonyu.globals.$questions.get(_this.ri,1),myOmote: Tonyu.globals.$questions.get(_this.ri,2),myUra: Tonyu.globals.$questions.get(_this.ri,3),mySum: Tonyu.globals.$questions.get(_this.ri,4),mode: 2});
          }
        }
      },
      fiber$prepear :function* _trc_Main_f_prepear(_thread) {
        var _this=this;
        
        Tonyu.globals.$b=[];
        Tonyu.globals.$num=[14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
        Tonyu.globals.$select=[];
        Tonyu.globals.$clickable=1;
        Tonyu.globals.$turn=0;
        Tonyu.globals.$miss=0;
        Tonyu.globals.$time=0;
        Tonyu.globals.$timeFrame=0;
        Tonyu.globals.$changeSum=0;
        Tonyu.globals.$qnum=0;
        for (let i = 0;
         i<50 ; i++) {
          yield null;
          {
            _this.r=_this.rnd(16);
            _this.n=i%16;
            _this.t=Tonyu.globals.$num[_this.n];
            Tonyu.globals.$num[_this.n]=Tonyu.globals.$num[_this.r];
            Tonyu.globals.$num[_this.r]=_this.t;
          }
        }
        for (let i = 0;
         i<16 ; i++) {
          yield null;
          {
            _this.px=(i%4)*120+90;
            _this.py=_this.floor(i/4)*120+85;
            _this.ri=Tonyu.globals.$num[i]+1+(Tonyu.globals.$qnum*31);
            Tonyu.globals.$b[i]=new Tonyu.classes.user.Card({y: _this.py,x: _this.px,vy: _this.py,vx: _this.py,pos: i,omote: Tonyu.globals.$questions.get(_this.ri,0),ura: Tonyu.globals.$questions.get(_this.ri,1),myOmote: Tonyu.globals.$questions.get(_this.ri,2),myUra: Tonyu.globals.$questions.get(_this.ri,3),mySum: Tonyu.globals.$questions.get(_this.ri,4),mode: 2});
          }
        }
        
      },
      makeQ :function _trc_Main_makeQ($ymd) {
        var _this=this;
        
        while (true) {
          Tonyu.checkLoop();
          Tonyu.globals.$err=0;
          _this.KeyInput();
          if (Tonyu.globals.$err==0) {
            break;
            
            
          }
          
        }
      },
      fiber$makeQ :function* _trc_Main_f_makeQ(_thread,$ymd) {
        var _this=this;
        
        while (true) {
          yield null;
          Tonyu.globals.$err=0;
          (yield* _this.fiber$KeyInput(_thread));
          if (Tonyu.globals.$err==0) {
            break;
            
            
          }
          
        }
        
      },
      KeyInput :function _trc_Main_KeyInput() {
        var _this=this;
        
        _this.print("問題作成中。しばらくお待ちください。");
        Tonyu.globals.$messLengh=Tonyu.globals.$mess.length;
        Tonyu.globals.$wikiSummary00="";
        Tonyu.globals.$idnum=0;
        Tonyu.globals.$questions00=[];
        _this.sw=[31];
        _this.stext=_this.startWordSet();
        Tonyu.globals.$wikiSummary00=_this.WikiSummary(_this.stext);
        Tonyu.globals.$questions00.push([Tonyu.globals.$idnum,- 1,_this.stext,"WellDone",Tonyu.globals.$wikiSummary00]);
        _this.setWords(0,_this.stext);
        if (Tonyu.globals.$err==1) {
          return _this;
          
        }
        for (_this.i=1; _this.i<=2 ; _this.i++) {
          Tonyu.checkLoop();
          {
            _this.ss=Tonyu.globals.$questions00[_this.i][2];
            _this.setWords(_this.i,_this.ss);
            if (Tonyu.globals.$err==1) {
              return _this;
              
            }
          }
        }
        for (_this.i=1; _this.i<=4 ; _this.i++) {
          Tonyu.checkLoop();
          {
            _this.ss=Tonyu.globals.$questions00[_this.i+2][2];
            _this.setWords(_this.i+2,_this.ss);
            if (Tonyu.globals.$err==1) {
              return _this;
              
            }
          }
        }
        for (_this.i=1; _this.i<=8 ; _this.i++) {
          Tonyu.checkLoop();
          {
            _this.ss=Tonyu.globals.$questions00[_this.i+6][2];
            _this.setWords(_this.i+6,_this.ss);
            if (Tonyu.globals.$err==1) {
              return _this;
              
            }
          }
        }
        Tonyu.globals.$questions00String=[];
        Tonyu.globals.$qString="";
        for ([_this.lss] of Tonyu.iterator2(Tonyu.globals.$questions00,1)) {
          for ([_this.ls] of Tonyu.iterator2(_this.lss,1)) {
            Tonyu.globals.$qString+=_this.ls+",";
            
          }
          Tonyu.globals.$questions00String.push(Tonyu.globals.$qString);
          Tonyu.globals.$qString="";
          
        }
        _this.saveQuestion(Tonyu.globals.$questions00String);
      },
      fiber$KeyInput :function* _trc_Main_f_KeyInput(_thread) {
        var _this=this;
        
        _this.print("問題作成中。しばらくお待ちください。");
        Tonyu.globals.$messLengh=Tonyu.globals.$mess.length;
        Tonyu.globals.$wikiSummary00="";
        Tonyu.globals.$idnum=0;
        Tonyu.globals.$questions00=[];
        _this.sw=[31];
        _this.stext=(yield* _this.fiber$startWordSet(_thread));
        Tonyu.globals.$wikiSummary00=(yield* _this.fiber$WikiSummary(_thread, _this.stext));
        Tonyu.globals.$questions00.push([Tonyu.globals.$idnum,- 1,_this.stext,"WellDone",Tonyu.globals.$wikiSummary00]);
        (yield* _this.fiber$setWords(_thread, 0, _this.stext));
        if (Tonyu.globals.$err==1) {
          return _this;
          
        }
        for (_this.i=1; _this.i<=2 ; _this.i++) {
          yield null;
          {
            _this.ss=Tonyu.globals.$questions00[_this.i][2];
            (yield* _this.fiber$setWords(_thread, _this.i, _this.ss));
            if (Tonyu.globals.$err==1) {
              return _this;
              
            }
          }
        }
        for (_this.i=1; _this.i<=4 ; _this.i++) {
          yield null;
          {
            _this.ss=Tonyu.globals.$questions00[_this.i+2][2];
            (yield* _this.fiber$setWords(_thread, _this.i+2, _this.ss));
            if (Tonyu.globals.$err==1) {
              return _this;
              
            }
          }
        }
        for (_this.i=1; _this.i<=8 ; _this.i++) {
          yield null;
          {
            _this.ss=Tonyu.globals.$questions00[_this.i+6][2];
            (yield* _this.fiber$setWords(_thread, _this.i+6, _this.ss));
            if (Tonyu.globals.$err==1) {
              return _this;
              
            }
          }
        }
        Tonyu.globals.$questions00String=[];
        Tonyu.globals.$qString="";
        for ([_this.lss] of Tonyu.iterator2(Tonyu.globals.$questions00,1)) {
          for ([_this.ls] of Tonyu.iterator2(_this.lss,1)) {
            Tonyu.globals.$qString+=_this.ls+",";
            
          }
          Tonyu.globals.$questions00String.push(Tonyu.globals.$qString);
          Tonyu.globals.$qString="";
          
        }
        (yield* _this.fiber$saveQuestion(_thread, Tonyu.globals.$questions00String));
        
      },
      saveQuestion :function _trc_Main_saveQuestion(QS) {
        var _this=this;
        
        Tonyu.globals.$fsq=_this.file("../static/wikiMatch"+Tonyu.globals.$ymd+".csv");
        Tonyu.globals.$fsq.text("");
        for ([_this.qt] of Tonyu.iterator2(QS,1)) {
          Tonyu.globals.$fsq.appendText(_this.qt+"\n\n\n");
          
        }
        for (_this.i=0; _this.i<50 ; _this.i++) {
          Tonyu.checkLoop();
          {
            _this.print("");
          }
        }
      },
      fiber$saveQuestion :function* _trc_Main_f_saveQuestion(_thread,QS) {
        var _this=this;
        
        Tonyu.globals.$fsq=(yield* _this.fiber$file(_thread, "../static/wikiMatch"+Tonyu.globals.$ymd+".csv"));
        Tonyu.globals.$fsq.text("");
        for ([_this.qt] of Tonyu.iterator2(QS,1)) {
          Tonyu.globals.$fsq.appendText(_this.qt+"\n\n\n");
          
        }
        for (_this.i=0; _this.i<50 ; _this.i++) {
          yield null;
          {
            _this.print("");
          }
        }
        
      },
      HtmlDisp :function _trc_Main_HtmlDisp(wword,conte) {
        var _this=this;
        
        Tonyu.globals.$summay.die();
        Tonyu.globals.$content=["div",{style: "background:white;overflow-y: scroll;"},["h3",wword],["a",{href: "https://ja.wikipedia.org/wiki/"+wword},"https://ja.wikipedia.org/wiki/"+wword]];
        for ([_this.c] of Tonyu.iterator2(conte,1)) {
          Tonyu.globals.$content.push(["p",{name: "summary"},_this.c]);
          
        }
        Tonyu.globals.$summay=new Tonyu.classes.kernel.HTMLUI({content: Tonyu.globals.$content,left: 29,top: 10,width: 400,height: 250});
      },
      fiber$HtmlDisp :function* _trc_Main_f_HtmlDisp(_thread,wword,conte) {
        var _this=this;
        
        Tonyu.globals.$summay.die();
        Tonyu.globals.$content=["div",{style: "background:white;overflow-y: scroll;"},["h3",wword],["a",{href: "https://ja.wikipedia.org/wiki/"+wword},"https://ja.wikipedia.org/wiki/"+wword]];
        for ([_this.c] of Tonyu.iterator2(conte,1)) {
          Tonyu.globals.$content.push(["p",{name: "summary"},_this.c]);
          
        }
        Tonyu.globals.$summay=new Tonyu.classes.kernel.HTMLUI({content: Tonyu.globals.$content,left: 29,top: 10,width: 400,height: 250});
        
      },
      setWords :function _trc_Main_setWords(iinum,ss) {
        var _this=this;
        
        Tonyu.globals.$count=0;
        while (true) {
          Tonyu.checkLoop();
          Tonyu.globals.$count+=1;
          _this.erra=0;
          _this.errb=0;
          _this.sws=_this.selectWords(ss);
          if (_this.sws[0]=="err") {
            _this.sws=[];
            if (Tonyu.globals.$count>5) {
              Tonyu.globals.$err=1;
              return _this;
              
            }
            continue;
            
            
          }
          _this.wikiSummary0=_this.WikiSummary(_this.sws[0]);
          if (_this.wikiSummary0=="undefined") {
            _this.erra=1;
            _this.print("-");
            
          }
          for ([_this.q] of Tonyu.iterator2(Tonyu.globals.$questions00,1)) {
            if (String(_this.q[3])==String(_this.sws[0])) {
              _this.erra=1;
              _this.print("x");
              
            }
            
          }
          _this.wikiSummary1=_this.WikiSummary(_this.sws[1]);
          if (_this.wikiSummary1==="undefined") {
            _this.errb=1;
            _this.print("-");
            
          }
          for ([_this.q] of Tonyu.iterator2(Tonyu.globals.$questions00,1)) {
            if (String(_this.q[3])==String(_this.sws[0])) {
              _this.errb=1;
              _this.print("x");
              
            }
            
          }
          if (_this.erra==0&&_this.errb==0) {
            break;
            
            
          }
          if (Tonyu.globals.$count>20) {
            Tonyu.globals.$err=1;
            break;
            
            
          }
          
        }
        _this.print("o");
        Tonyu.globals.$idnum+=1;
        Tonyu.globals.$questions00.push([Tonyu.globals.$idnum,iinum,_this.sws[0],ss,_this.wikiSummary0]);
        Tonyu.globals.$idnum+=1;
        Tonyu.globals.$questions00.push([Tonyu.globals.$idnum,iinum,_this.sws[1],ss,_this.wikiSummary1]);
      },
      fiber$setWords :function* _trc_Main_f_setWords(_thread,iinum,ss) {
        var _this=this;
        
        Tonyu.globals.$count=0;
        while (true) {
          yield null;
          Tonyu.globals.$count+=1;
          _this.erra=0;
          _this.errb=0;
          _this.sws=(yield* _this.fiber$selectWords(_thread, ss));
          if (_this.sws[0]=="err") {
            _this.sws=[];
            if (Tonyu.globals.$count>5) {
              Tonyu.globals.$err=1;
              return _this;
              
            }
            continue;
            
            
          }
          _this.wikiSummary0=(yield* _this.fiber$WikiSummary(_thread, _this.sws[0]));
          if (_this.wikiSummary0=="undefined") {
            _this.erra=1;
            _this.print("-");
            
          }
          for ([_this.q] of Tonyu.iterator2(Tonyu.globals.$questions00,1)) {
            if (String(_this.q[3])==String(_this.sws[0])) {
              _this.erra=1;
              _this.print("x");
              
            }
            
          }
          _this.wikiSummary1=(yield* _this.fiber$WikiSummary(_thread, _this.sws[1]));
          if (_this.wikiSummary1==="undefined") {
            _this.errb=1;
            _this.print("-");
            
          }
          for ([_this.q] of Tonyu.iterator2(Tonyu.globals.$questions00,1)) {
            if (String(_this.q[3])==String(_this.sws[0])) {
              _this.errb=1;
              _this.print("x");
              
            }
            
          }
          if (_this.erra==0&&_this.errb==0) {
            break;
            
            
          }
          if (Tonyu.globals.$count>20) {
            Tonyu.globals.$err=1;
            break;
            
            
          }
          
        }
        _this.print("o");
        Tonyu.globals.$idnum+=1;
        Tonyu.globals.$questions00.push([Tonyu.globals.$idnum,iinum,_this.sws[0],ss,_this.wikiSummary0]);
        Tonyu.globals.$idnum+=1;
        Tonyu.globals.$questions00.push([Tonyu.globals.$idnum,iinum,_this.sws[1],ss,_this.wikiSummary1]);
        
      },
      selectWords :function _trc_Main_selectWords(stext) {
        var _this=this;
        
        _this.wLinks=_this.getWikiLinks(stext);
        Tonyu.globals.$wikiLinks=_this.FilterWords(_this.wLinks);
        if (Tonyu.globals.$wikiLinks.length<3) {
          return (["err","err"]);
          
        }
        Tonyu.globals.$SelectWord1=String(_this.RandomChoice(Tonyu.globals.$wikiLinks));
        _this.c=0;
        while (true) {
          Tonyu.checkLoop();
          _this.c+=1;
          Tonyu.globals.$SelectWord2=String(_this.RandomChoice(Tonyu.globals.$wikiLinks));
          if (Tonyu.globals.$SelectWord1.slice(0,2)!=Tonyu.globals.$SelectWord2.slice(0,2)&&(Tonyu.globals.$SelectWord1.slice(- 1)!=Tonyu.globals.$SelectWord2.slice(- 1))) {
            break;
            
            
          }
          if (_this.c>20) {
            break;
            
            
          }
          _this.print("●");
          
        }
        return ([Tonyu.globals.$SelectWord1,Tonyu.globals.$SelectWord2]);
      },
      fiber$selectWords :function* _trc_Main_f_selectWords(_thread,stext) {
        var _this=this;
        
        _this.wLinks=(yield* _this.fiber$getWikiLinks(_thread, stext));
        Tonyu.globals.$wikiLinks=(yield* _this.fiber$FilterWords(_thread, _this.wLinks));
        if (Tonyu.globals.$wikiLinks.length<3) {
          return (["err","err"]);
          
        }
        Tonyu.globals.$SelectWord1=String(_this.RandomChoice(Tonyu.globals.$wikiLinks));
        _this.c=0;
        while (true) {
          yield null;
          _this.c+=1;
          Tonyu.globals.$SelectWord2=String(_this.RandomChoice(Tonyu.globals.$wikiLinks));
          if (Tonyu.globals.$SelectWord1.slice(0,2)!=Tonyu.globals.$SelectWord2.slice(0,2)&&(Tonyu.globals.$SelectWord1.slice(- 1)!=Tonyu.globals.$SelectWord2.slice(- 1))) {
            break;
            
            
          }
          if (_this.c>20) {
            break;
            
            
          }
          _this.print("●");
          
        }
        return ([Tonyu.globals.$SelectWord1,Tonyu.globals.$SelectWord2]);
        
      },
      RandomChoice :function _trc_Main_RandomChoice(links) {
        var _this=this;
        
        _this.link="";
        _this.link=links[Math.floor(Math.random()*links.length)];
        return (_this.link);
      },
      fiber$RandomChoice :function* _trc_Main_f_RandomChoice(_thread,links) {
        var _this=this;
        
        _this.link="";
        _this.link=links[Math.floor(Math.random()*links.length)];
        return (_this.link);
        
      },
      FilterWords :function _trc_Main_FilterWords(wLinks) {
        var _this=this;
        
        Tonyu.globals.$wikiLinks=[];
        for ([_this.wi] of Tonyu.iterator2(wLinks,1)) {
          _this.lstr=_this.wi.title;
          if (/\d+/.test(_this.lstr)==false&&/識別子/.test(_this.lstr)==false&&/一覧/.test(_this.lstr)==false&&/回避/.test(_this.lstr)==false) {
            Tonyu.globals.$wikiLinks.push(_this.lstr);
            
          }
          
        }
        return (Tonyu.globals.$wikiLinks);
      },
      fiber$FilterWords :function* _trc_Main_f_FilterWords(_thread,wLinks) {
        var _this=this;
        
        Tonyu.globals.$wikiLinks=[];
        for ([_this.wi] of Tonyu.iterator2(wLinks,1)) {
          _this.lstr=_this.wi.title;
          if (/\d+/.test(_this.lstr)==false&&/識別子/.test(_this.lstr)==false&&/一覧/.test(_this.lstr)==false&&/回避/.test(_this.lstr)==false) {
            Tonyu.globals.$wikiLinks.push(_this.lstr);
            
          }
          
        }
        return (Tonyu.globals.$wikiLinks);
        
      },
      startWordSet :function _trc_Main_startWordSet() {
        var _this=this;
        
        Tonyu.globals.$wikiWord=_this.getRandomWord();
        return (Tonyu.globals.$wikiWord);
      },
      fiber$startWordSet :function* _trc_Main_f_startWordSet(_thread) {
        var _this=this;
        
        Tonyu.globals.$wikiWord=(yield* _this.fiber$getRandomWord(_thread));
        return (Tonyu.globals.$wikiWord);
        
      },
      getRandomWord :function _trc_Main_getRandomWord() {
        var _this=this;
        var response;
        
        _this.rword="";
        _this.url="https://ja.wikipedia.org/w/api.php?format=json&action=query&list=random&rnnamespace=0";
        _this.url+="&origin=*";
        response = _this.waitFor($.get(_this.url));
        
        _this.rword=response.query.random[0].title;
        return (_this.rword);
      },
      fiber$getRandomWord :function* _trc_Main_f_getRandomWord(_thread) {
        var _this=this;
        var response;
        
        _this.rword="";
        _this.url="https://ja.wikipedia.org/w/api.php?format=json&action=query&list=random&rnnamespace=0";
        _this.url+="&origin=*";
        response=yield* _this.fiber$waitFor(_thread, $.get(_this.url));
        
        _this.rword=response.query.random[0].title;
        return (_this.rword);
        
      },
      getWikiLinks :function _trc_Main_getWikiLinks(wword) {
        var _this=this;
        var response;
        
        _this.plc="";
        Tonyu.globals.$wikiLinks=[];
        while (true) {
          Tonyu.checkLoop();
          _this.url="https://ja.wikipedia.org/w/api.php?format=json&action=query&pllimit=500&plnamespace=0&prop=links&redirects=1&titles="+wword;
          if (_this.plc!="") {
            _this.url+="&plcontinue="+_this.plc;
            
          }
          _this.url+="&origin=*";
          response = _this.waitFor($.get(_this.url));
          
          for (let [id] of Tonyu.iterator2(response.query.pages,1)) {
            Array.prototype.push.apply(Tonyu.globals.$wikiLinks,response.query.pages[id].links);
            
          }
          if (response.hasOwnProperty('continue')) {
            if (response['continue'].hasOwnProperty('plcontinue')) {
              _this.plc=response['continue'].plcontinue;
              
            }
            
          } else {
            _this.plc="";
            
          }
          if (_this.plc=="") {
            break;
            
            
          }
          
        }
        return (Tonyu.globals.$wikiLinks);
      },
      fiber$getWikiLinks :function* _trc_Main_f_getWikiLinks(_thread,wword) {
        var _this=this;
        var response;
        
        _this.plc="";
        Tonyu.globals.$wikiLinks=[];
        while (true) {
          yield null;
          _this.url="https://ja.wikipedia.org/w/api.php?format=json&action=query&pllimit=500&plnamespace=0&prop=links&redirects=1&titles="+wword;
          if (_this.plc!="") {
            _this.url+="&plcontinue="+_this.plc;
            
          }
          _this.url+="&origin=*";
          response=yield* _this.fiber$waitFor(_thread, $.get(_this.url));
          
          for (let [id] of Tonyu.iterator2(response.query.pages,1)) {
            Array.prototype.push.apply(Tonyu.globals.$wikiLinks,response.query.pages[id].links);
            
          }
          if (response.hasOwnProperty('continue')) {
            if (response['continue'].hasOwnProperty('plcontinue')) {
              _this.plc=response['continue'].plcontinue;
              
            }
            
          } else {
            _this.plc="";
            
          }
          if (_this.plc=="") {
            break;
            
            
          }
          
        }
        return (Tonyu.globals.$wikiLinks);
        
      },
      WikiSummary :function _trc_Main_WikiSummary(wword) {
        var _this=this;
        var response;
        
        Tonyu.globals.$wikiSummary00="";
        _this.url="https://ja.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles="+wword;
        _this.url+="&origin=*";
        response = _this.waitFor($.get(_this.url));
        
        for (let [id] of Tonyu.iterator2(response.query.pages,1)) {
          _this.str00=String(response.query.pages[id].extract);
          
        }
        Tonyu.globals.$wikiSummary00=_this.str00.replace(/\n/g,' / ');
        return (Tonyu.globals.$wikiSummary00);
      },
      fiber$WikiSummary :function* _trc_Main_f_WikiSummary(_thread,wword) {
        var _this=this;
        var response;
        
        Tonyu.globals.$wikiSummary00="";
        _this.url="https://ja.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles="+wword;
        _this.url+="&origin=*";
        response=yield* _this.fiber$waitFor(_thread, $.get(_this.url));
        
        for (let [id] of Tonyu.iterator2(response.query.pages,1)) {
          _this.str00=String(response.query.pages[id].extract);
          
        }
        Tonyu.globals.$wikiSummary00=_this.str00.replace(/\n/g,' / ');
        return (Tonyu.globals.$wikiSummary00);
        
      },
      setMessage :function _trc_Main_setMessage() {
        var _this=this;
        
        Tonyu.globals.$mess=[];
        Tonyu.globals.$mess.push("Wikipedian神経衰弱の遊び方：");
        Tonyu.globals.$mess.push("画面上の四角（ピンク）をタッチすると裏面（青）になります");
        Tonyu.globals.$mess.push("２枚タッチして、裏面が同じ言葉だと、１枚消えます");
        Tonyu.globals.$mess.push("最後の１枚になったら終了です");
        Tonyu.globals.$mess.push("タッチした四角の言葉の簡単な説明が下の枠に表示されます");
        Tonyu.globals.$mess.push("最後の言葉はWikipediaからランダムに選ばれます");
        Tonyu.globals.$mess.push("ピンクの言葉は、裏面の言葉からのリンクです");
        Tonyu.globals.$mess.push("裏面の言葉が同じということは、Wikipediaの");
        Tonyu.globals.$mess.push("同じページの説明に使われている言葉ということです");
        Tonyu.globals.$mess.push("二つの言葉が、共通のページに使われているということを");
        Tonyu.globals.$mess.push("想像しながら、無駄な蘊蓄が溜まっていく教養ゲームです");
        Tonyu.globals.$mess.push("終わるとTweet(x)のボタンが出てきますので、");
        Tonyu.globals.$mess.push("ぜひポストしてみてください");
        Tonyu.globals.$mess.push("－－－－－－－－－－－－－－－－－－－－－－－－－");
        Tonyu.globals.$mess.push("毎回違う問題を作成しています。");
        Tonyu.globals.$mess.push("問題の作成に数分かかります。しばらくお待ちください。");
        Tonyu.globals.$mess.push("プレイ時間は５分ほどです");
        Tonyu.globals.$mess.push("－－－－－－－－－－－－－－－－－－－－－－－－－");
        Tonyu.globals.$mess.push("終わるとTweet(x)のボタンが出てきますので、");
      },
      fiber$setMessage :function* _trc_Main_f_setMessage(_thread) {
        var _this=this;
        
        Tonyu.globals.$mess=[];
        Tonyu.globals.$mess.push("Wikipedian神経衰弱の遊び方：");
        Tonyu.globals.$mess.push("画面上の四角（ピンク）をタッチすると裏面（青）になります");
        Tonyu.globals.$mess.push("２枚タッチして、裏面が同じ言葉だと、１枚消えます");
        Tonyu.globals.$mess.push("最後の１枚になったら終了です");
        Tonyu.globals.$mess.push("タッチした四角の言葉の簡単な説明が下の枠に表示されます");
        Tonyu.globals.$mess.push("最後の言葉はWikipediaからランダムに選ばれます");
        Tonyu.globals.$mess.push("ピンクの言葉は、裏面の言葉からのリンクです");
        Tonyu.globals.$mess.push("裏面の言葉が同じということは、Wikipediaの");
        Tonyu.globals.$mess.push("同じページの説明に使われている言葉ということです");
        Tonyu.globals.$mess.push("二つの言葉が、共通のページに使われているということを");
        Tonyu.globals.$mess.push("想像しながら、無駄な蘊蓄が溜まっていく教養ゲームです");
        Tonyu.globals.$mess.push("終わるとTweet(x)のボタンが出てきますので、");
        Tonyu.globals.$mess.push("ぜひポストしてみてください");
        Tonyu.globals.$mess.push("－－－－－－－－－－－－－－－－－－－－－－－－－");
        Tonyu.globals.$mess.push("毎回違う問題を作成しています。");
        Tonyu.globals.$mess.push("問題の作成に数分かかります。しばらくお待ちください。");
        Tonyu.globals.$mess.push("プレイ時間は５分ほどです");
        Tonyu.globals.$mess.push("－－－－－－－－－－－－－－－－－－－－－－－－－");
        Tonyu.globals.$mess.push("終わるとTweet(x)のボタンが出てきますので、");
        
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false,"isMain":true,"vtype":{"params":[],"returnValue":null}},"goTitle":{"nowait":false,"isMain":false,"vtype":{"params":[],"returnValue":null}},"goRepeatTitle":{"nowait":false,"isMain":false,"vtype":{"params":[],"returnValue":null}},"tweet":{"nowait":false,"isMain":false,"vtype":{"params":[],"returnValue":null}},"input":{"nowait":false,"isMain":false,"vtype":{"params":[],"returnValue":null}},"dialog":{"nowait":false,"isMain":false,"vtype":{"params":[],"returnValue":null}},"setDay":{"nowait":false,"isMain":false,"vtype":{"params":[],"returnValue":null}},"prepear":{"nowait":false,"isMain":false,"vtype":{"params":[],"returnValue":null}},"makeQ":{"nowait":false,"isMain":false,"vtype":{"params":[null],"returnValue":null}},"KeyInput":{"nowait":false,"isMain":false,"vtype":{"params":[],"returnValue":null}},"saveQuestion":{"nowait":false,"isMain":false,"vtype":{"params":[null],"returnValue":null}},"HtmlDisp":{"nowait":false,"isMain":false,"vtype":{"params":[null,null],"returnValue":null}},"setWords":{"nowait":false,"isMain":false,"vtype":{"params":[null,null],"returnValue":null}},"selectWords":{"nowait":false,"isMain":false,"vtype":{"params":[null],"returnValue":null}},"RandomChoice":{"nowait":false,"isMain":false,"vtype":{"params":[null],"returnValue":null}},"FilterWords":{"nowait":false,"isMain":false,"vtype":{"params":[null],"returnValue":null}},"startWordSet":{"nowait":false,"isMain":false,"vtype":{"params":[],"returnValue":null}},"getRandomWord":{"nowait":false,"isMain":false,"vtype":{"params":[],"returnValue":null}},"getWikiLinks":{"nowait":false,"isMain":false,"vtype":{"params":[null],"returnValue":null}},"WikiSummary":{"nowait":false,"isMain":false,"vtype":{"params":[null],"returnValue":null}},"setMessage":{"nowait":false,"isMain":false,"vtype":{"params":[],"returnValue":null}}},"fields":{"today":{},"year":{},"month":{},"day":{},"clear":{},"left":{},"nextOmote":{},"a":{},"maxv":{},"maxi":{},"i":{},"bt":{},"ctt":{},"q":{},"l":{},"line":{},"c":{},"ln":{},"words":{},"w":{},"r":{},"n":{},"t":{},"px":{},"py":{},"ri":{},"sw":{},"stext":{},"ss":{},"lss":{},"ls":{},"qt":{},"erra":{},"errb":{},"sws":{},"wikiSummary0":{},"wikiSummary1":{},"wLinks":{},"link":{},"wi":{},"lstr":{},"rword":{},"url":{},"plc":{},"str00":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Moji',
  shortName: 'Moji',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Moji_main() {
        var _this=this;
        
        while (true) {
          Tonyu.checkLoop();
          if (_this.text0!=_this.text) {
            _this.text0=_this.text;
            _this.t1=_this.text0.slice(0,4);
            _this.t2=_this.text0.slice(4,8);
            _this.t3=_this.text0.slice(8,12);
            _this.text=_this.t1+"\n"+_this.t2+"\n"+_this.t3;
            + "\n"+_this.text0.slice(8,13);
            _this.text0=_this.text0.slice(0,9);
            _this.y=_this.y0-(_this.floor(_this.text0.length/5)*20);
            _this.text0=_this.text;
            
          }
          _this.update();
          
        }
      },
      fiber$main :function* _trc_Moji_f_main(_thread) {
        var _this=this;
        
        while (true) {
          yield null;
          if (_this.text0!=_this.text) {
            _this.text0=_this.text;
            _this.t1=_this.text0.slice(0,4);
            _this.t2=_this.text0.slice(4,8);
            _this.t3=_this.text0.slice(8,12);
            _this.text=_this.t1+"\n"+_this.t2+"\n"+_this.t3;
            + "\n"+_this.text0.slice(8,13);
            _this.text0=_this.text0.slice(0,9);
            _this.y=_this.y0-(_this.floor(_this.text0.length/5)*20);
            _this.text0=_this.text;
            
          }
          (yield* _this.fiber$update(_thread));
          
        }
        
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false,"isMain":true,"vtype":{"params":[],"returnValue":null}}},"fields":{"text0":{},"t1":{},"t2":{},"t3":{},"y0":{}}}
});
Tonyu.klass.define({
  fullName: 'user.MojiUra',
  shortName: 'MojiUra',
  namespace: 'user',
  superclass: Tonyu.classes.user.Moji,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_MojiUra_main() {
        var _this=this;
        
      },
      fiber$main :function* _trc_MojiUra_f_main(_thread) {
        var _this=this;
        
        
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false,"isMain":true,"vtype":{"params":[],"returnValue":null}}},"fields":{}}
});

});

//# sourceMappingURL=concat.js.map