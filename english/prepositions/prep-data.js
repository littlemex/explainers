/* 前置詞シリーズの全データ。1 枚のカード = 1 つのイメージ。
   同じ語で絵が変わるものは sense を付けて別カードにしている (for の「期間」と「目指す先」など)。
   語形や語調だけが違う仲間は also にまとめ、note で使い分けを書く。 */

var CAT_NOTE={
  "一点・面・空間":"広がりをどう捉えるか。ここが全部の土台",
  "境界を出入りする":"線をまたぐ動きと、またいだ後の状態",
  "内と外を言い分ける":"枠の内側を強調するか、外側を指すか",
  "複数のあいだ":"数えるか、群れとして扱うか",
  "着く・出る・目指す":"矢印の先と根っこ、どちらを見ているか",
  "通る道すじ":"どこを通って行くか",
  "上下の向き":"高さが変わる方向",
  "上のほう":"接触するか、覆うか、ただ高いか",
  "下のほう":"真下で覆われるか、ただ低いか",
  "前と後ろ":"視点から見て、どちら側にあるか",
  "横と近さ":"どれだけ近いかの目盛り",
  "接触と境界":"押し合うか、越えた先か",
  "線の上の前後":"時間の線は左から右へ流れる",
  "期間の中と長さ":"「いつ」を言うか「どれだけ」を言うか",
  "起点と終点":"線の端をどう扱うか",
  "一緒とその欠け":"くっついているか、空いているか",
  "所属と話題":"全体の一部か、まわりの話か",
  "割り算と比べる":"目盛りで割る、ほかと並べる",
  "含める・除く・置きかえる":"足すのか、抜くのか、入れ替えるのか",
  "原因と理由":"矢印の根っこにあるもの",
  "目的と交換":"差し出すものと、得るもの",
  "手段と根拠":"何を使って、何に乗って成り立つか",
  "状態におかれる":"位置の絵が、そのまま状態になる",
  "譲歩と無関係":"邪魔や条件を、どう扱うか"
};

var DATA=[
{page:"01",cat:"一点・面・空間",w:"at",sense:"一点",core:"地図の上の、ひとつの点",
 svg:'<rect x="10" y="10" width="200" height="120" rx="10" fill="#f0f7f3" stroke="#dcece4"/>'+
   '<g opacity=".45">'+
   '<line x1="10" y1="46" x2="210" y2="46" stroke="'+GREEN+'" stroke-width="2"/>'+
   '<line x1="10" y1="98" x2="210" y2="98" stroke="'+GREEN+'" stroke-width="2"/>'+
   '<line x1="62" y1="10" x2="62" y2="130" stroke="'+GREEN+'" stroke-width="2"/>'+
   '<line x1="158" y1="10" x2="158" y2="130" stroke="'+GREEN+'" stroke-width="2"/></g>'+
   '<line x1="10" y1="72" x2="210" y2="72" stroke="'+GREEN+'" stroke-width="6" opacity=".8"/>'+
   '<line x1="110" y1="10" x2="110" y2="130" stroke="'+GREEN+'" stroke-width="6" opacity=".8"/>'+
   '<circle cx="110" cy="72" r="19" fill="none" stroke="'+ORANGE+'" stroke-width="2.5" stroke-dasharray="6 5"/>'+
   dot(110,72,9)+t(110,36,"ここ",{c:ORANGE,size:14}),
 ex:[["I'm at the station.","駅という一点にいる。建物の中か外かは問題にしていない"],
     ["Turn left at the corner.","角という一点で曲がる"]],
 note:"広さや中身を無視して、地図に打つ画びょうのように扱うのが at です。だから at 3 o'clock（時刻という一点）にも伸びます。"},
{page:"01",cat:"一点・面・空間",w:"in",sense:"囲まれる",core:"まわりを囲まれている",
 svg:gbox(46,26,128,88,{r:12})+
   dot(110,70,11)+
   arrow(60,42,86,58,{color:GREEN,w:2.5,hs:7})+
   arrow(160,42,134,58,{color:GREEN,w:2.5,hs:7})+
   arrow(60,98,86,82,{color:GREEN,w:2.5,hs:7})+
   arrow(160,98,134,82,{color:GREEN,w:2.5,hs:7})+
   t(110,20,"境界の内側",{size:13}),
 ex:[["The keys are in the drawer.","引き出しの中、四方を囲まれている"],
     ["in Tokyo / in the rain","東京という広がりの中、雨に囲まれている"]],
 note:"三方でも囲まれていれば in です。in trouble（困りごとに囲まれている）や in a hurry も同じ絵で、抜け出せない感じが出ます。"},
{page:"01",cat:"一点・面・空間",w:"on",sense:"接触",core:"面にくっついて、支えられている",
 svg:ground(104)+
   gbox(80,62,62,42,{r:6})+
   arrow(111,44,111,58,{color:ORANGE,w:3,hs:8})+
   t(111,36,"重み",{c:ORANGE,size:12})+
   arrow(111,124,111,110,{color:GREEN,w:3,hs:8})+
   t(111,138,"支える力",{size:12})+
   '<line x1="76" y1="104" x2="146" y2="104" stroke="'+ORANGE+'" stroke-width="5" stroke-linecap="round"/>',
 ex:[["The cup is on the table.","面に接して、下から支えられている"],
     ["a picture on the wall","壁でも天井でも、接していれば on"]],
 note:"上下は関係ありません。大事なのは接触と支え。だから on Monday（曜日という面に乗る）、depend on（支えにする）へつながります。"},
{page:"01",cat:"境界を出入りする",w:"into",core:"外から中へ、境界を越えて入る",
 svg:gbox(112,30,88,80,{r:10})+
   arrow(22,70,150,70)+
   '<line x1="112" y1="30" x2="112" y2="110" stroke="#fafdfb" stroke-width="9"/>'+
   '<line x1="112" y1="30" x2="112" y2="52" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<line x1="112" y1="88" x2="112" y2="110" stroke="'+GREEN+'" stroke-width="3"/>'+
   t(58,50,"外",{size:13})+t(160,110,"中",{size:13}),
 ex:[["He walked into the room.","部屋の外から中へ移動した"],
     ["translate into Japanese","日本語という形の中へ変わる"]],
 note:"in が「もう中にいる状態」、into は「中に入る動き」です。変化を表すときにも into を使います（turn into ice）。"},
{page:"01",cat:"境界を出入りする",w:"out of",sense:"外へ出る",core:"中から外へ、境界を出る",
 svg:gbox(20,30,88,80,{r:10})+
   arrow(70,70,198,70)+
   '<line x1="108" y1="30" x2="108" y2="110" stroke="#fafdfb" stroke-width="9"/>'+
   '<line x1="108" y1="30" x2="108" y2="52" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<line x1="108" y1="88" x2="108" y2="110" stroke="'+GREEN+'" stroke-width="3"/>'+
   t(60,110,"中",{size:13})+t(166,50,"外",{size:13}),
 ex:[["She ran out of the building.","建物の中から外へ出た"],
     ["We're out of milk.","牛乳が在庫という枠の外に出た、つまり切れた"]],
 note:"out of stock、out of control のように「あるべき枠の外に出た」= 手に入らない、制御できない、へ伸びます。"},
{page:"01",cat:"境界を出入りする",w:"onto",core:"面の上へ、乗り上がる",
 svg:ground(110)+
   qarrow(24,44,96,34,152,102)+
   '<line x1="132" y1="110" x2="182" y2="110" stroke="'+ORANGE+'" stroke-width="5" stroke-linecap="round"/>'+
   t(160,132,"着地して接触",{c:ORANGE,size:12}),
 ex:[["The cat jumped onto the table.","テーブルの上に着地した"],
     ["Move the file onto the desktop.","デスクトップという面に乗せる"]],
 note:"on が結果の状態、onto はそこへ乗る動き。into と on の関係とまったく同じ作りです。"},
{page:"01",cat:"境界を出入りする",w:"off",core:"接していた面から離れる",
 svg:ground(110)+
   '<line x1="30" y1="110" x2="80" y2="110" stroke="'+GREEN+'" stroke-width="5" stroke-linecap="round" opacity=".5"/>'+
   qarrow(54,100,120,30,190,52)+
   t(54,132,"ここに接していた",{size:12}),
 ex:[["Take your feet off the sofa.","ソファに接している足を離す"],
     ["The lights are off.","電気が回路という接触から離れている"]],
 note:"on の反対です。接触が切れる絵なので、電源が切れる、休みに入る（day off）まで同じ 1 枚で説明できます。"},
{page:"01",cat:"内と外を言い分ける",w:"within",core:"範囲の内側から出ない",
 svg:'<circle cx="110" cy="70" r="56" fill="#f6faf8" stroke="'+GREEN+'" stroke-width="3" stroke-dasharray="7 6"/>'+
   '<path d="M74 84 Q92 40 110 74 Q128 106 146 62" fill="none" stroke="'+ORANGE+
   '" stroke-width="3.5" stroke-linecap="round"/>'+dot(146,62,7)+dot(74,84,7)+
   t(110,142,"境界を一度も越えない",{size:12}),
 ex:[["within walking distance","歩ける距離の内側におさまる"],
     ["within three days","3 日という枠の内側で終わる"]],
 note:"in は「中にある」だけですが、within は「枠を越えない」ことを強調します。締め切りや予算の話で好まれるのはそのためです。"},
{page:"01",cat:"複数のあいだ",w:"between",core:"はっきりした 2 つのあいだ",
 svg:gbox(20,44,46,54,{r:6})+gbox(154,44,46,54,{r:6})+
   dot(110,71,11)+
   arrow(102,71,72,71,{color:ORANGE,w:2,hs:7})+
   arrow(118,71,148,71,{color:ORANGE,w:2,hs:7})+
   t(43,116,"A",{c:GREEN,size:14})+t(177,116,"B",{c:GREEN,size:14})+
   t(110,30,"両方が見える",{size:12}),
 ex:[["between the bank and the post office","銀行と郵便局にはさまれた場所"],
     ["between 2 and 3 p.m.","2 時と 3 時という 2 点のあいだ"]],
 note:"3 つ以上でも、一つひとつを別々のものとして意識しているなら between が使えます（between the four countries）。"},
{page:"01",cat:"複数のあいだ",w:"among",also:"amid",core:"たくさんの中にまぎれている",
 svg:'<path d="M28 62 Q64 18 126 26 Q196 36 190 82 Q182 122 110 120 Q34 118 28 62 Z" fill="#f6faf8" stroke="'+GREEN+'" stroke-width="2.5" stroke-dasharray="7 6"/>'+
   dot(56,72,8,GREEN)+dot(84,44,8,GREEN)+dot(88,98,8,GREEN)+dot(132,50,8,GREEN)+
   dot(146,92,8,GREEN)+dot(174,66,8,GREEN)+dot(112,116,8,GREEN)+
   dot(112,76,11)+
   t(110,16,"ひとつずつは数えない",{size:12}),
 ex:[["He was among the crowd.","群れの中にまぎれていた"],
     ["popular among students","学生という集団の中で人気だ"]],
 note:"between は 2 点を線で結ぶ絵、among は輪郭のない群れに浸かる絵です。個々を区別しないときは among を選びます。amid はやや文語で、同じ絵のまま「〜のさなかに」と響きます。"},
{page:"02",cat:"着く・出る・目指す",w:"to",core:"矢印の先が着きたい場所に触れる",
 svg:'<circle cx="34" cy="70" r="11" fill="none" stroke="'+SUB+'" stroke-width="3"/>'+
   arrow(50,70,158,70)+
   '<circle cx="176" cy="70" r="18" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   t(34,110,"出発",{size:12})+t(176,110,"到着",{c:GREEN,size:13})+
   t(104,44,"ここまで届く",{c:ORANGE,size:12}),
 ex:[["I go to school.","学校という到達点に着く"],
     ["from 9 to 5","9 時から 5 時まで、終点に触れる"]],
 note:"to は必ず終点に届きます。届かない可能性を残すのが toward です。give to、say to のように「相手に届く」場面でも同じ絵です。"},
{page:"02",cat:"着く・出る・目指す",w:"from",sense:"起点",core:"出どころを指さす",
 svg:'<circle cx="40" cy="70" r="18" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   arrow(62,70,186,70)+
   t(40,110,"起点",{c:GREEN,size:13})+
   t(130,44,"どこから来たか",{c:ORANGE,size:12}),
 ex:[["I'm from Osaka.","出どころが大阪だ"],
     ["It's made from wood.","木という材料から出てきた"]],
 note:"注目しているのは矢印の根っこだけです。だから differ from、prevent A from B のように「離れる、遠ざける」意味に広がります。"},
{page:"02",cat:"着く・出る・目指す",w:"toward",also:"towards",core:"向きだけ。着くとは言っていない",
 svg:arrow(24,70,116,70)+
   '<line x1="124" y1="70" x2="176" y2="70" stroke="'+ORANGE+'" stroke-width="2.5" stroke-dasharray="6 6" opacity=".6"/>'+
   '<circle cx="190" cy="70" r="16" fill="none" stroke="'+GREEN+'" stroke-width="3" stroke-dasharray="6 5"/>'+
   t(70,44,"進んでいる向き",{c:ORANGE,size:12})+t(160,110,"着くかは不明",{size:12}),
 ex:[["He walked toward the door.","ドアの方へ歩いた。着いたとは言っていない"],
     ["a step toward peace","平和という方向への一歩"]],
 note:"到着を約束しない点が to との唯一の違いです。進行中の努力や態度を語るときに便利です。"},
{page:"02",cat:"通る道すじ",w:"through",sense:"中を貫く",core:"中を通り抜ける",
 svg:'<rect x="52" y="42" width="116" height="56" rx="10" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<line x1="52" y1="42" x2="52" y2="98" stroke="#fafdfb" stroke-width="8"/>'+
   '<line x1="168" y1="42" x2="168" y2="98" stroke="#fafdfb" stroke-width="8"/>'+
   arrow(16,70,204,70)+
   t(110,26,"入口と出口がある",{size:12})+t(110,124,"内側を貫く",{c:ORANGE,size:12}),
 ex:[["The train went through the tunnel.","トンネルの内部を通り抜けた"],
     ["through the night","夜という時間の中を通り抜ける"]],
 note:"三次元の中を貫く絵です。get through（困難を抜ける）、go through（経験する）も、内側を通り抜けたという同じ感覚です。"},
{page:"02",cat:"通る道すじ",w:"across",core:"面を横切って反対側へ",
 svg:'<rect x="76" y="30" width="66" height="82" fill="'+GLIGHT+'" stroke="none"/>'+
   '<line x1="76" y1="30" x2="76" y2="112" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<line x1="142" y1="30" x2="142" y2="112" stroke="'+GREEN+'" stroke-width="3"/>'+
   arrow(20,70,198,70)+
   t(109,22,"川や道路",{c:GREEN,size:12})+t(109,138,"表面をなぞって渡る",{c:ORANGE,size:12}),
 ex:[["walk across the street","道路の表面を横切って反対側へ"],
     ["across the country","国土の表面いっぱいに広がって"]],
 note:"through は中を貫き、across は面をなでます。橋を渡るのは across、森を抜けるのは through です。"},
{page:"02",cat:"通る道すじ",w:"along",core:"細長いものに沿って進む",
 svg:'<path d="M14 96 Q66 40 110 74 Q156 110 206 52" fill="none" stroke="'+GREEN+
   '" stroke-width="14" stroke-linecap="round" opacity=".28"/>'+
   '<path d="M14 96 Q66 40 110 74 Q156 110 206 52" fill="none" stroke="'+GREEN+
   '" stroke-width="3" stroke-dasharray="9 9"/>'+
   qarrow(30,88,90,52,124,82)+
   dot(160,96,7)+dot(186,72,7)+
   t(110,128,"線から外れない",{size:12}),
 ex:[["walk along the river","川に沿って歩く"],
     ["trees along the road","道に沿って並ぶ木"]],
 note:"道、川、壁のように「長さがあるもの」が相棒です。get along（人生の道を並んで進む）もこの絵の延長です。"},
{page:"02",cat:"通る道すじ",w:"around",also:"round",core:"まわりをぐるっと",
 svg:'<circle cx="110" cy="70" r="46" fill="none" stroke="'+GREEN+'" stroke-width="3" stroke-dasharray="7 6"/>'+
   gbox(94,54,32,32,{r:5})+
   '<path d="M110 18 A52 52 0 1 1 63 96" fill="none" stroke="'+ORANGE+
   '" stroke-width="3.5" stroke-linecap="round"/>'+head(63,96,2.6,10,ORANGE)+
   t(110,134,"中心を囲んで回る",{size:12}),
 ex:[["walk around the lake","湖のまわりを回る"],
     ["around 10 o'clock","10 時のあたり、ぴったりではない"]],
 note:"中心の周囲をなぞる絵なので、数字につくと「そのあたり」というぼかしになります。look around（周囲を見る）も同じです。"},
{page:"02",cat:"通る道すじ",w:"past",sense:"通り過ぎる",core:"横を通り過ぎて、先へ行く",
 svg:gbox(96,44,36,54,{r:6})+
   arrow(18,116,196,116,{hs:11})+
   '<line x1="114" y1="98" x2="114" y2="112" stroke="'+SUB+'" stroke-width="2" stroke-dasharray="4 4"/>'+
   t(114,32,"通り過ぎる相手",{c:GREEN,size:12})+
   t(110,142,"横を通って止まらず先へ",{c:ORANGE,size:12}),
 ex:[["He walked past me.","私の横を通り過ぎていった"],
     ["half past six","6 時を過ぎて半分"]],
 note:"止まらないのが肝です。時計の針が目印を過ぎていく絵から、時刻の「〜時を過ぎて」になります。"},
{page:"02",cat:"上下の向き",w:"up",core:"低いところから高いところへ",
 svg:'<path d="M22 122 L198 34" fill="none" stroke="'+GREEN+'" stroke-width="4" stroke-linecap="round"/>'+
   '<line x1="22" y1="122" x2="198" y2="122" stroke="'+GREEN+'" stroke-width="2" stroke-dasharray="6 6" opacity=".5"/>'+
   arrow(32,98,172,28,{hs:11})+
   t(202,142,"低い所から高い所へ",{c:ORANGE,size:12,a:"end"}),
 ex:[["climb up the hill","丘を上へのぼる"],
     ["Speak up.","声の量を上へ上げる"]],
 note:"高さだけでなく「量が増える、活性が上がる、完了する」まで広がります。eat it up は最後まで到達して終わる感覚です。"},
{page:"02",cat:"上下の向き",w:"down",core:"高いところから低いところへ",
 svg:'<path d="M22 34 L198 122" fill="none" stroke="'+GREEN+'" stroke-width="4" stroke-linecap="round"/>'+
   '<line x1="22" y1="122" x2="198" y2="122" stroke="'+GREEN+'" stroke-width="2" stroke-dasharray="6 6" opacity=".5"/>'+
   arrow(44,27,184,97,{hs:11})+
   t(18,142,"高い所から低い所へ",{c:ORANGE,size:12,a:"start"}),
 ex:[["walk down the stairs","階段を下へおりる"],
     ["Calm down.","高ぶりを下へ落ち着かせる"]],
 note:"up の裏返しで、量が減る、勢いが落ちる、動きが止まる（break down）へ伸びます。"},
{page:"03",cat:"上のほう",w:"over",sense:"またぐ・覆う",core:"上をまたいで、覆いかぶさる",
 svg:ground(118)+gbox(88,72,44,46,{r:5})+
   qarrow(22,104,110,4,198,104)+
   '<line x1="110" y1="40" x2="110" y2="70" stroke="'+SUB+'" stroke-width="2" stroke-dasharray="5 5"/>'+
   t(110,26,"接していない",{size:12})+t(110,140,"障害をまたぐ",{c:ORANGE,size:12}),
 ex:[["jump over the fence","柵の上をまたいで越える"],
     ["a bridge over the river","川を覆うようにかかる橋"]],
 note:"アーチを描いて覆う絵です。ここから over 30（30 を越えた量）、all over（一面を覆う）、game over（越えて終わった）まで説明できます。"},
{page:"03",cat:"上のほう",w:"above",core:"ただ上のほう。真上でなくてもよい",
 svg:'<line x1="20" y1="86" x2="200" y2="86" stroke="'+GREEN+'" stroke-width="3.5" stroke-dasharray="8 6"/>'+
   t(46,106,"基準の高さ",{c:GREEN,size:12,a:"start"})+
   dot(146,44,11)+
   '<line x1="146" y1="58" x2="146" y2="82" stroke="'+SUB+'" stroke-width="2" stroke-dasharray="5 5"/>'+
   arrow(70,66,70,40,{color:ORANGE,w:2.5,hs:8})+t(70,26,"上",{c:ORANGE,size:13}),
 ex:[["The plane flew above the clouds.","雲より高い位置を飛んだ"],
     ["above average","平均という線より上"]],
 note:"接触もせず、覆ってもいません。高さを比べているだけです。だから数値や評価の比較にそのまま使えます。"},
{page:"03",cat:"下のほう",w:"under",core:"何かの真下で、覆われている",
 svg:'<rect x="26" y="46" width="168" height="14" rx="6" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<line x1="46" y1="60" x2="46" y2="118" stroke="'+GREEN+'" stroke-width="4"/>'+
   '<line x1="174" y1="60" x2="174" y2="118" stroke="'+GREEN+'" stroke-width="4"/>'+
   ground(118)+dot(110,92,11)+
   '<line x1="110" y1="62" x2="110" y2="78" stroke="'+SUB+'" stroke-width="2" stroke-dasharray="5 5"/>'+
   t(110,132,"上に覆いがある",{size:12}),
 ex:[["The cat is under the table.","テーブルの真下、覆われている"],
     ["under pressure","圧力に上からのしかかられている"]],
 note:"上から覆われて influence を受ける絵です。under construction、under control のように「支配のもとにある」意味が自然に出ます。"},
{page:"03",cat:"下のほう",w:"below",core:"基準の線より下",
 svg:'<line x1="20" y1="56" x2="200" y2="56" stroke="'+GREEN+'" stroke-width="3.5" stroke-dasharray="8 6"/>'+
   t(46,44,"基準の高さ",{c:GREEN,size:12,a:"start"})+
   dot(150,96,11)+
   '<line x1="150" y1="60" x2="150" y2="82" stroke="'+SUB+'" stroke-width="2" stroke-dasharray="5 5"/>'+
   arrow(74,74,74,104,{color:ORANGE,w:2.5,hs:8})+t(74,124,"下",{c:ORANGE,size:13}),
 ex:[["below sea level","海面という線より下"],
     ["below zero","0 度より下"]],
 note:"above の反対で、覆われている感じはありません。under が「真下で覆われる」、below は「ただ低い」です。"},
{page:"03",cat:"前と後ろ",w:"behind",core:"後ろに回って、隠れる",
 svg:'<rect x="94" y="42" width="66" height="66" rx="8" fill="'+ORANGE+'" opacity=".9"/>'+
   gbox(50,36,72,78,{r:8})+
   t(86,26,"手前のもの",{c:GREEN,size:12})+
   arrow(14,126,44,110,{color:SUB,w:2.5,hs:8})+t(20,140,"視点",{size:12,a:"start"})+
   t(154,128,"後ろに回って隠れる",{c:ORANGE,size:12,a:"end"}),
 ex:[["He hid behind the door.","ドアの後ろに隠れた"],
     ["behind schedule","予定より後ろ、つまり遅れている"]],
 note:"見えている面の裏側という絵です。時間の話になると「予定の後ろにいる」= 遅れる、になります。"},
{page:"03",cat:"前と後ろ",w:"in front of",also:"ahead of",core:"正面のすぐ前",
 svg:gbox(100,36,72,78,{r:8})+
   '<rect x="60" y="42" width="66" height="66" rx="8" fill="'+ORANGE+'" opacity=".9"/>'+
   t(150,26,"基準になるもの",{c:GREEN,size:12,a:"end"})+
   arrow(14,126,44,110,{color:SUB,w:2.5,hs:8})+t(20,140,"視点",{size:12,a:"start"})+
   t(86,128,"手前をふさぐ",{c:ORANGE,size:12}),
 ex:[["I'll wait in front of the store.","店の正面の前で待つ"],
     ["Don't say that in front of her.","彼女の前で、つまり見ているところで"]],
 note:"before も「前」ですが、今の英語では場所は in front of、時間は before と住み分けるのが安全です。ahead of は進む向きの前方 (先を行く) に使います。"},
{page:"03",cat:"横と近さ",w:"beside",also:"next to / alongside",core:"すぐ横に並ぶ",
 svg:gbox(30,52,58,58,{r:7})+
   '<rect x="122" y="52" width="58" height="58" rx="7" fill="'+ORANGE+'" opacity=".9"/>'+
   arrow(96,81,114,81,{color:SUB,w:2,hs:6})+
   arrow(114,81,96,81,{color:SUB,w:2,hs:6})+
   t(105,40,"すきまはわずか",{size:12})+
   ground(122),
 ex:[["Sit beside me.","私のすぐ横に座って"],
     ["the shop next to the bank","銀行の隣の店"]],
 note:"横方向で、しかも間に何もない状態です。alongside は並んで進む場面に向きます。beside に s が付いた besides は「〜に加えて」で意味が別物なので注意してください。"},
{page:"03",cat:"横と近さ",w:"near",also:"by / close to",core:"距離が近い",
 svg:'<circle cx="76" cy="74" r="52" fill="#f6faf8" stroke="'+GREEN+'" stroke-width="2.5" stroke-dasharray="7 6"/>'+
   gbox(60,58,32,32,{r:5})+dot(112,58,10)+
   dot(186,44,10,"#c9d8d0")+
   t(186,72,"遠い",{size:12})+t(76,140,"この範囲が near",{size:12}),
 ex:[["I live near the station.","駅から近いところに住んでいる"],
     ["Sit by the window.","窓のすぐそばに座る"]],
 note:"by は near よりぴたりと近く、ほぼ「真横」です。close to は距離でも関係でも使えます。近さの感覚が強いので、by は手段（by train）にも伸びます。"},
{page:"03",cat:"接触と境界",w:"against",core:"押し当てる、逆らう",
 svg:wall(158,24,120)+
   arrow(44,58,148,58,{hs:11})+
   arrow(148,96,60,96,{color:GREEN,w:3,hs:9})+
   t(96,40,"押す力",{c:ORANGE,size:12})+
   t(96,124,"返ってくる力",{size:12}),
 ex:[["He leaned against the wall.","壁に体を押し当てた"],
     ["swim against the current","流れに逆らって泳ぐ"]],
 note:"接触して押し合う絵です。ぶつかる相手がいるので、反対する（vote against）、対戦する（play against）になります。"},
{page:"03",cat:"接触と境界",w:"beyond",core:"境界の向こう側",
 svg:wall(104,20,124)+
   dot(160,72,11)+
   arrow(40,72,92,72,{color:SUB,w:2.5,dash:true,hs:8})+
   t(46,44,"こちら側",{size:12})+t(164,120,"手が届かない側",{c:ORANGE,size:12}),
 ex:[["beyond the mountains","山を越えた向こう"],
     ["beyond my understanding","私の理解の範囲の外"]],
 note:"越えた先にあって、しかも届かない感じが残ります。だから「〜を超えている、〜には手が出ない」という否定的な意味で使われます。"},
{page:"04",cat:"線の上の前後",w:"before",core:"時間の線の、左がわ",
 svg:timeline(84)+
   '<line x1="140" y1="46" x2="140" y2="84" stroke="'+GREEN+'" stroke-width="4"/>'+
   dot(140,84,9,GREEN)+t(140,36,"その出来事",{c:GREEN,size:12})+
   dot(64,84,10)+arrow(96,64,72,80,{color:ORANGE,w:2.5,hs:8})+
   t(56,58,"こちら",{c:ORANGE,size:12}),
 ex:[["before dinner","夕食より左、つまり前"],
     ["before you go","君が行くより前に"]],
 note:"英語の時間は左から右に流れる線です。前置詞の空間の絵をそのまま横に倒したものなので、位置の考え方がそのまま使えます。"},
{page:"04",cat:"線の上の前後",w:"after",sense:"時間の後",core:"時間の線の、右がわ",
 svg:timeline(84)+
   '<line x1="76" y1="46" x2="76" y2="84" stroke="'+GREEN+'" stroke-width="4"/>'+
   dot(76,84,9,GREEN)+t(76,36,"その出来事",{c:GREEN,size:12})+
   dot(154,84,10)+arrow(118,64,144,80,{color:ORANGE,w:2.5,hs:8})+
   t(166,58,"こちら",{c:ORANGE,size:12}),
 ex:[["after lunch","昼食より右、つまり後"],
     ["one after another","ひとつの後にまたひとつ"]],
 note:"後ろを追いかける絵でもあります。run after（追いかける）、look after（後ろから見守る、世話をする）はここから来ています。"},
{page:"04",cat:"期間の中と長さ",w:"during",core:"続いている期間の中",
 svg:timeline(96)+
   '<rect x="56" y="52" width="108" height="30" rx="8" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<line x1="56" y1="82" x2="56" y2="102" stroke="'+GREEN+'" stroke-width="2" stroke-dasharray="4 4"/>'+
   '<line x1="164" y1="82" x2="164" y2="102" stroke="'+GREEN+'" stroke-width="2" stroke-dasharray="4 4"/>'+
   dot(122,67,10)+t(110,38,"名前のある期間",{size:12}),
 ex:[["during the meeting","会議という期間の中で"],
     ["during the summer","夏という期間のあいだに"]],
 note:"in の絵を時間に置いたものです。相棒は「会議、夏、旅行」のように名前のある期間で、長さの数字は取りません。"},
{page:"04",cat:"期間の中と長さ",w:"for",sense:"期間の長さ",core:"期間の長さそのもの",
 svg:timeline(100)+
   '<line x1="52" y1="56" x2="52" y2="86" stroke="'+ORANGE+'" stroke-width="3"/>'+
   '<line x1="168" y1="56" x2="168" y2="86" stroke="'+ORANGE+'" stroke-width="3"/>'+
   arrow(52,71,168,71,{hs:9})+arrow(168,71,52,71,{hs:9})+
   t(110,44,"3 時間、2 年 …",{c:ORANGE,size:13})+
   t(110,132,"測った長さを言う",{size:12}),
 ex:[["for three hours","3 時間という長さ"],
     ["I've lived here for ten years.","10 年という長さ住んでいる"]],
 note:"during は「いつ」を答え、for は「どれだけ」を答えます。数字が付いたら for、名前が付いたら during と覚えると外しません。"},
{page:"04",cat:"起点と終点",w:"since",core:"起点から今まで、ずっと",
 svg:timeline(96)+
   '<line x1="46" y1="52" x2="46" y2="96" stroke="'+GREEN+'" stroke-width="4"/>'+
   dot(46,96,9,GREEN)+t(46,42,"起点",{c:GREEN,size:12})+
   arrow(46,74,158,74,{hs:10})+
   '<line x1="166" y1="46" x2="166" y2="106" stroke="'+SUB+'" stroke-width="2.5" stroke-dasharray="5 5"/>'+
   t(168,38,"今",{c:ORANGE,size:13}),
 ex:[["since 2020","2020 年からずっと今まで"],
     ["since I met her","彼女に会ったときから今まで"]],
 note:"from が起点だけを指すのに対し、since は「そこから今まで切れずに続いている」ことまで言います。だから現在完了と組みます。"},
{page:"04",cat:"起点と終点",w:"until",also:"till",core:"その時までずっと続いて、そこで終わる",
 svg:timeline(100)+
   wall(166,40,104)+
   arrow(38,72,156,72,{hs:10})+
   t(90,50,"ずっと続く",{c:ORANGE,size:12})+
   t(150,128,"ここで終わり",{size:12,a:"end"}),
 ex:[["Wait until five.","5 時までずっと待つ"],
     ["until it stops raining","雨がやむまで続けて"]],
 note:"続いていることが前提です。線が終点にぶつかって止まる絵なので、途中で切れる話には使えません。"},
{page:"04",cat:"起点と終点",w:"by",sense:"期限",core:"その時までのどこかで、一度やる",
 svg:timeline(100)+
   wall(166,40,104)+
   '<rect x="30" y="58" width="130" height="28" rx="8" fill="'+ORANGE+'" opacity=".16"/>'+
   dot(72,72,9)+dot(120,72,9)+
   t(95,48,"この範囲のどこかで",{c:ORANGE,size:12})+
   t(150,128,"締め切り",{size:12,a:"end"}),
 ex:[["Finish it by five.","5 時までのどこかで終わらせる"],
     ["by tomorrow","明日までに一度やっておく"]],
 note:"until は「そのときまで続ける」、by は「そのときまでに済ませる」です。Wait by five と言えないのはこの違いのためです。"},
{page:"05",cat:"一緒とその欠け",w:"with",sense:"一緒・道具",core:"くっついて一緒にある",
 svg:dot(78,70,16)+dot(142,70,16,GREEN)+
   '<path d="M78 44 Q110 26 142 44" fill="none" stroke="'+SUB+'" stroke-width="3"/>'+
   '<path d="M78 96 Q110 114 142 96" fill="none" stroke="'+SUB+'" stroke-width="3"/>'+
   '<line x1="94" y1="70" x2="126" y2="70" stroke="'+SUB+'" stroke-width="4" stroke-linecap="round"/>'+
   t(110,132,"離れずセットになっている",{size:12}),
 ex:[["I went with my friend.","友だちとくっついて行った"],
     ["cut it with a knife.","ナイフを手にくっつけて切る"]],
 note:"同伴と道具が同じ語なのは、どちらも「手元にくっついている」からです。a man with glasses（眼鏡がくっついた人）も同じ絵です。"},
{page:"05",cat:"一緒とその欠け",w:"without",core:"あるはずのものが、ない",
 svg:dot(78,70,16)+
   '<circle cx="142" cy="70" r="16" fill="none" stroke="#b9cdc3" stroke-width="3" stroke-dasharray="6 5"/>'+
   '<line x1="128" y1="56" x2="156" y2="84" stroke="#c46b52" stroke-width="3.5" stroke-linecap="round"/>'+
   '<line x1="156" y1="56" x2="128" y2="84" stroke="#c46b52" stroke-width="3.5" stroke-linecap="round"/>'+
   t(142,110,"空いたまま",{size:12}),
 ex:[["coffee without sugar","砂糖がくっついていないコーヒー"],
     ["without saying a word","ひと言も添えずに"]],
 note:"with の相棒がいない絵です。「本来あってもよいものが欠けている」ので、do without（なしで済ます）に自然につながります。"},
{page:"05",cat:"所属と話題",w:"of",sense:"全体の一部",core:"全体から切り出した一部",
 svg:'<circle cx="74" cy="70" r="42" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<path d="M74 70 L74 28 A42 42 0 0 1 110 49 Z" fill="#fafdfb" stroke="'+GREEN+
   '" stroke-width="2" stroke-dasharray="5 4"/>'+
   '<path d="M156 88 L156 46 A42 42 0 0 1 192 67 Z" fill="'+ORANGE+'" opacity=".9"/>'+
   arrow(116,58,150,64,{color:SUB,w:2.5,hs:8})+
   t(74,132,"もとの全体",{c:GREEN,size:12})+
   t(170,116,"その一部",{c:ORANGE,size:12}),
 ex:[["a piece of cake","ケーキ全体から切り出した一切れ"],
     ["the leg of the table","テーブルという全体の一部"]],
 note:"日本語の「の」よりずっと狭く、「もとはひとつだった」感じがあります。die of（原因という出どころ）もこの延長です。"},
{page:"05",cat:"所属と話題",w:"about",core:"話題のまわりをぐるっと",
 svg:dot(110,70,17,GREEN)+
   '<circle cx="110" cy="70" r="42" fill="none" stroke="'+ORANGE+'" stroke-width="2.5" stroke-dasharray="7 6"/>'+
   dot(110,28,8)+dot(152,70,8)+dot(110,112,8)+dot(68,70,8)+
   t(110,74,"話題",{c:"#fff",size:12})+
   t(110,136,"周辺のあれこれに触れる",{size:12}),
 ex:[["talk about the plan","計画のまわりのことを話す"],
     ["about ten people","10 人のあたり"]],
 note:"中心そのものではなく周囲をなでる語です。だから数につくと「およそ」、人につくと walk about（うろうろする）になります。"},
{page:"05",cat:"割り算と比べる",w:"per",core:"ひと目盛りあたり",
 svg:'<rect x="20" y="52" width="180" height="34" rx="6" fill="#f6faf8" stroke="'+GREEN+'" stroke-width="2.5"/>'+
   '<line x1="65" y1="52" x2="65" y2="86" stroke="'+GREEN+'" stroke-width="2.5"/>'+
   '<line x1="110" y1="52" x2="110" y2="86" stroke="'+GREEN+'" stroke-width="2.5"/>'+
   '<line x1="155" y1="52" x2="155" y2="86" stroke="'+GREEN+'" stroke-width="2.5"/>'+
   '<rect x="20" y="52" width="45" height="34" rx="6" fill="'+ORANGE+'" opacity=".85"/>'+
   t(42,110,"この 1 個あたり",{c:ORANGE,size:12})+
   t(110,36,"同じ大きさに区切る",{size:12}),
 ex:[["50 km per hour","1 時間あたり 50 km"],
     ["once per week","1 週間あたり 1 回"]],
 note:"等しい目盛りで割る絵です。a や each で言い換えられるのは、どれも「ひと区切り」を指しているからです。"},
{page:"02",cat:"着く・出る・目指す",w:"for",sense:"目指す先",core:"その場所を目指して動き出す",
 svg:'<circle cx="30" cy="86" r="11" fill="none" stroke="'+SUB+'" stroke-width="3"/>'+
   arrow(46,86,120,86)+
   '<line x1="128" y1="86" x2="164" y2="86" stroke="'+ORANGE+'" stroke-width="2.5" stroke-dasharray="6 6" opacity=".6"/>'+
   '<line x1="176" y1="34" x2="176" y2="112" stroke="'+GREEN+'" stroke-width="4"/>'+
   '<path d="M176 38 L206 48 L176 58 Z" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="2.5"/>'+
   t(30,116,"出発",{size:12})+t(176,132,"目的地",{c:GREEN,size:12})+
   t(84,64,"そこへ向けて",{c:ORANGE,size:12}),
 ex:[["He left for Tokyo.","東京を目指して出発した"],
     ["Is this the train for Kyoto?","京都行きの電車ですか"]],
 note:"to は着いたことまで言いますが、for は行き先を宣言して動き出すところだけを言います。head for、make for、reach for も同じ絵です。"},
{page:"02",cat:"着く・出る・目指す",w:"at",sense:"ねらう",core:"一点をねらって向ける",
 svg:'<circle cx="164" cy="74" r="38" fill="none" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<circle cx="164" cy="74" r="23" fill="none" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<circle cx="164" cy="74" r="8" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   arrow(24,74,158,74)+
   t(74,52,"一点にねらいを定める",{c:ORANGE,size:12})+
   t(164,132,"当てる対象",{c:GREEN,size:12}),
 ex:[["He threw a stone at the dog.","犬をねらって石を投げた"],
     ["shout at me / aim at the target","私に向かって怒鳴る、標的をねらう"]],
 note:"throw it to me は「受け取ってほしくて渡す」、throw it at me は「私をねらって当てる」です。at は攻撃的に響くことがここから来ます。"},
{page:"02",cat:"着く・出る・目指す",w:"after",sense:"追いかける",core:"動くものの後ろを追う",
 svg:dot(150,74,13,GREEN)+
   arrow(160,74,196,74,{color:GREEN,w:2.5,hs:8})+
   dot(66,74,13)+
   arrow(82,74,126,74)+
   '<line x1="30" y1="66" x2="48" y2="66" stroke="'+ORANGE+'" stroke-width="2.5" opacity=".5"/>'+
   '<line x1="34" y1="82" x2="52" y2="82" stroke="'+ORANGE+'" stroke-width="2.5" opacity=".5"/>'+
   t(66,42,"追う側",{c:ORANGE,size:12})+t(152,42,"逃げる側",{c:GREEN,size:12})+
   t(110,132,"距離が縮まらないまま続く",{size:12}),
 ex:[["The dog ran after the cat.","犬が猫を追いかけた"],
     ["look after the children","子どもの後ろから見守る、つまり世話をする"]],
 note:"時間の after (〜の後) と同じ「後ろ」の絵です。相手が動いていれば追跡、止まっていれば時間の前後になります。"},
{page:"02",cat:"着く・出る・目指す",w:"up to",core:"そこまでは届く、その先はない",
 svg:scale(24,56,5,170,-1)+
   '<rect x="24" y="56" width="102" height="34" rx="4" fill="'+ORANGE+'" opacity=".85"/>'+
   wall(126,44,102)+
   arrow(36,120,120,120,{hs:9})+
   t(74,40,"ここまで",{c:ORANGE,size:12})+
   t(170,120,"届かない",{size:12}),
 ex:[["up to ten people","10 人までなら大丈夫"],
     ["walk up to the door","ドアのところまで歩く"]],
 note:"上限を示す線です。数なら「〜以下」、場所なら「〜のところまで」。be up to you (あなたに委ねる範囲) も同じ枠の感覚です。"},
{page:"02",cat:"通る道すじ",w:"via",core:"途中に必ず寄る点",
 svg:'<circle cx="26" cy="104" r="11" fill="none" stroke="'+SUB+'" stroke-width="3"/>'+
   gbox(96,30,44,32,{r:16})+
   qarrow(40,100,74,44,104,46)+
   qarrow(136,50,172,58,192,96)+
   '<circle cx="196" cy="104" r="14" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   t(118,22,"経由地",{c:GREEN,size:12})+
   t(26,132,"出発",{size:12,a:"start"})+t(196,132,"到着",{c:GREEN,size:12,a:"end"}),
 ex:[["fly to Paris via Dubai","ドバイを経由してパリへ飛ぶ"],
     ["send it via email","メールという経路で送る"]],
 note:"through が「中を貫く」なら via は「そこを通り道に選ぶ」です。手段を言うときにも、その経路を通したという同じ絵で使えます。"},
{page:"02",cat:"通る道すじ",w:"out",core:"開いた口から外へ",
 svg:gbox(20,30,96,88,{r:10})+
   '<line x1="116" y1="30" x2="116" y2="56" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<line x1="116" y1="92" x2="116" y2="118" stroke="'+GREEN+'" stroke-width="3"/>'+
   arrow(58,74,196,74)+
   t(64,22,"窓やドア",{c:GREEN,size:12})+
   t(160,110,"外へ抜ける",{c:ORANGE,size:12}),
 ex:[["He looked out the window.","窓から外を見た"],
     ["walk out the door","ドアから出ていく"]],
 note:"out of を短く言った形で、話し言葉と米語で好まれます。書き言葉では out of the window の方が安全です。"},
{page:"01",cat:"内と外を言い分ける",w:"inside",core:"境界の内側だと言い切る",
 svg:gbox(38,26,144,92,{r:12})+
   '<rect x="50" y="38" width="120" height="68" rx="8" fill="none" stroke="'+GREEN+'" stroke-width="2" stroke-dasharray="5 5"/>'+
   dot(110,72,11)+
   t(110,20,"外との線をはっきり引く",{c:GREEN,size:12})+
   t(110,140,"内側だと明言する",{c:ORANGE,size:12}),
 ex:[["It's cold inside the house.","家の内側は寒い"],
     ["inside the box","箱の内側"]],
 note:"in とほぼ同じ絵ですが、inside は「外ではなく内だ」という対比を出します。だから outside と必ず対になります。"},
{page:"01",cat:"内と外を言い分ける",w:"outside",core:"境界のすぐ外側",
 svg:gbox(30,34,96,80,{r:10})+
   dot(168,74,11)+
   '<line x1="126" y1="74" x2="152" y2="74" stroke="'+SUB+'" stroke-width="2" stroke-dasharray="5 5"/>'+
   t(78,26,"内側",{c:GREEN,size:12})+
   t(168,120,"外側",{c:ORANGE,size:12})+
   t(110,142,"線の向こうにいる",{size:12}),
 ex:[["Wait outside the room.","部屋の外で待つ"],
     ["outside working hours","勤務時間の外で"]],
 note:"inside の反対です。beyond と違って「すぐ外」で、手が届かない感じはありません。"},
{page:"01",cat:"内と外を言い分ける",w:"throughout",core:"全体にすきまなく行きわたる",
 svg:gbox(26,28,168,88,{r:10})+
   dot(56,50,7)+dot(94,44,7)+dot(134,52,7)+dot(170,46,7)+
   dot(48,74,7)+dot(88,78,7)+dot(128,72,7)+dot(166,80,7)+
   dot(60,100,7)+dot(102,102,7)+dot(142,98,7)+dot(176,104,7)+
   t(110,20,"どこを取っても当てはまる",{c:GREEN,size:12})+
   t(110,140,"一部ではなく全部",{c:ORANGE,size:12}),
 ex:[["famous throughout the country","国中どこでも有名だ"],
     ["throughout the year","一年を通してずっと"]],
 note:"in が「中にある」だけなのに対し、throughout は「隅々まで」です。時間に使えば期間の全体をむらなく埋めます。"},
{page:"01",cat:"複数のあいだ",w:"in the middle of",core:"ちょうど真ん中",
 svg:gbox(34,32,152,84,{r:10})+
   '<line x1="110" y1="32" x2="110" y2="116" stroke="'+GREEN+'" stroke-width="2" stroke-dasharray="5 5"/>'+
   '<line x1="34" y1="74" x2="186" y2="74" stroke="'+GREEN+'" stroke-width="2" stroke-dasharray="5 5"/>'+
   dot(110,74,12)+
   t(110,22,"へりからいちばん遠い点",{c:GREEN,size:12})+
   t(110,140,"進行のさなかにも使う",{c:ORANGE,size:12}),
 ex:[["in the middle of the road","道のちょうど真ん中"],
     ["in the middle of a meeting","会議の真っただ中"]],
 note:"among は群れの中のどこかですが、これは中心そのものです。時間に使うと「〜している最中」になります。"},
{page:"01",cat:"複数のあいだ",w:"aboard",also:"on board",core:"乗り物の中に乗っている",
 svg:'<path d="M34 74 L186 74 L164 108 L56 108 Z" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3" stroke-linejoin="round"/>'+
   '<line x1="110" y1="40" x2="110" y2="74" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<path d="M114 44 L146 56 L114 66 Z" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="2.5"/>'+
   dot(84,92,9)+dot(110,92,9)+dot(136,92,9)+
   ground(126)+
   t(110,142,"船・機内・車内の中にいる",{size:12}),
 ex:[["Welcome aboard the ship.","船へようこそ、つまり乗船中だ"],
     ["everyone aboard the plane","機内の全員"]],
 note:"in の一族ですが相棒が乗り物に限られます。比喩で「計画に加わる」(get on board) にもなります。"}
,
{page:"03",cat:"上のほう",w:"on top of",also:"atop",core:"積み重ねのいちばん上",
 svg:ground(126)+
   gbox(66,94,88,32,{r:5})+gbox(76,64,68,30,{r:5})+
   obox(84,36,52,28,{r:5})+
   '<line x1="80" y1="64" x2="140" y2="64" stroke="'+ORANGE+'" stroke-width="4" stroke-linecap="round"/>'+
   t(110,26,"最上段",{c:ORANGE,size:12})+
   t(178,86,"積み重なり",{c:GREEN,size:12,a:"end"}),
 ex:[["a cherry on top of the cake","ケーキのいちばん上のさくらんぼ"],
     ["on top of that","それに加えて、つまり積み上げてさらに"]],
 note:"on の一族で「重なりの最上部」を強調します。atop は同じ意味の硬い一語です。比喩では「〜に加えて」になります。"},

{page:"03",cat:"下のほう",w:"beneath",also:"underneath",core:"面のすぐ下に、くっついて隠れる",
 svg:'<rect x="24" y="54" width="172" height="16" rx="6" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   obox(78,70,64,26,{r:4})+
   ground(126)+
   t(110,44,"表面",{c:GREEN,size:12})+
   t(110,116,"その裏にぴったり",{c:ORANGE,size:12})+
   t(110,142,"見えなくなっている",{size:12}),
 ex:[["The keys were beneath the newspaper.","新聞のすぐ下に鍵があった"],
     ["underneath the carpet","カーペットの裏側に"]],
 note:"under より「接していて見えない」感じが強い語です。beneath は硬く、underneath は日常的。beneath には「〜にふさわしくない」という比喩もあります。"},

{page:"03",cat:"前と後ろ",w:"opposite",core:"間をはさんで、正面から向き合う",
 svg:'<rect x="96" y="14" width="28" height="120" fill="'+GLIGHT+'" opacity=".7"/>'+
   '<line x1="96" y1="14" x2="96" y2="134" stroke="'+GREEN+'" stroke-width="2.5" stroke-dasharray="6 5"/>'+
   '<line x1="124" y1="14" x2="124" y2="134" stroke="'+GREEN+'" stroke-width="2.5" stroke-dasharray="6 5"/>'+
   gbox(24,50,54,50,{r:6})+obox(142,50,54,50,{r:6})+
   arrow(80,75,92,75,{color:SUB,w:2.5,hs:7})+
   arrow(140,75,128,75,{color:SUB,w:2.5,hs:7})+
   t(110,146,"道や机をはさんで真向かい",{size:12}),
 ex:[["the bank opposite the station","駅の真向かいの銀行"],
     ["She sat opposite me.","私と向かい合って座った"]],
 note:"in front of は「前」だけですが、opposite は「間に何かをはさんで向き合う」ところまで言います。英国ではとくによく使われます。"},

{page:"03",cat:"横と近さ",w:"far from",core:"距離が大きい",
 svg:gbox(20,56,40,44,{r:6})+
   dot(190,78,11)+
   arrow(64,78,182,78,{color:SUB,w:2,hs:8})+
   arrow(182,78,64,78,{color:SUB,w:2,hs:8})+
   t(122,58,"距離がある",{size:12})+
   t(40,120,"基準",{c:GREEN,size:12})+
   t(190,120,"遠い",{c:ORANGE,size:12}),
 ex:[["far from the city","街から遠く離れて"],
     ["far from perfect","完璧とはほど遠い"]],
 note:"near の反対です。距離の絵なので、比喩では「その状態にはとても届かない」という強い否定になります。"},

{page:"04",cat:"起点と終点",w:"in",sense:"〜後に",core:"今から数えて、その先の一点",
 svg:timeline(96)+
   '<line x1="44" y1="52" x2="44" y2="106" stroke="'+SUB+'" stroke-width="2.5" stroke-dasharray="5 5"/>'+
   t(44,42,"今",{size:12})+
   arrow(44,74,158,74,{hs:10})+
   dot(166,74,10)+
   t(110,58,"これだけ経ってから",{c:ORANGE,size:12})+
   t(174,126,"その時点",{c:ORANGE,size:12,a:"end"}),
 ex:[["I'll be back in ten minutes.","今から 10 分後に戻る"],
     ["in three days","3 日後に"]],
 note:"in three days は「3 日後」、within three days は「3 日以内」です。長さを測るのが for、経ってからの一点を指すのが in。"},

{page:"04",cat:"期間の中と長さ",w:"over",sense:"期間を覆う",core:"期間の上にかぶさって続く",
 svg:timeline(104)+
   '<rect x="58" y="66" width="106" height="26" rx="8" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="2.5"/>'+
   qarrow(44,62,110,20,178,62)+
   '<line x1="58" y1="92" x2="58" y2="110" stroke="'+GREEN+'" stroke-width="2" stroke-dasharray="4 4"/>'+
   '<line x1="164" y1="92" x2="164" y2="110" stroke="'+GREEN+'" stroke-width="2" stroke-dasharray="4 4"/>'+
   t(110,140,"端から端までかぶせる",{c:ORANGE,size:12}),
 ex:[["over the weekend","週末のあいだずっと"],
     ["over the past ten years","この 10 年にわたって"]],
 note:"空間の over (またぐ・覆う) と同じ絵を時間に置いたものです。during より「全体を覆っている」感じが出ます。"},

{page:"04",cat:"期間の中と長さ",w:"through",sense:"端まで通して",core:"始めから終わりまで通り抜ける",
 svg:timeline(104)+
   '<rect x="56" y="56" width="110" height="34" rx="8" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<line x1="56" y1="56" x2="56" y2="90" stroke="#fafdfb" stroke-width="8"/>'+
   '<line x1="166" y1="56" x2="166" y2="90" stroke="#fafdfb" stroke-width="8"/>'+
   arrow(24,73,196,73)+
   t(110,40,"最後の日も含む",{c:GREEN,size:12})+
   t(110,140,"通り抜けて終わる",{c:ORANGE,size:12}),
 ex:[["Monday through Friday","月曜から金曜まで、金曜も含む"],
     ["through the night","夜を通してずっと"]],
 note:"米語では「〜まで含めて」を明示する言い方です。to や till だと最後の日を含むか曖昧になるので、日付の範囲で好まれます。"},

{page:"04",cat:"起点と終点",w:"from … to",also:"from … till",core:"線の両端を決める",
 svg:timeline(104)+
   '<circle cx="52" cy="72" r="12" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<circle cx="172" cy="72" r="12" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   arrow(66,72,158,72,{hs:10})+
   '<line x1="52" y1="84" x2="52" y2="110" stroke="'+GREEN+'" stroke-width="2" stroke-dasharray="4 4"/>'+
   '<line x1="172" y1="84" x2="172" y2="110" stroke="'+GREEN+'" stroke-width="2" stroke-dasharray="4 4"/>'+
   t(52,44,"始め",{c:GREEN,size:12})+t(172,44,"終わり",{c:GREEN,size:12})+
   t(110,140,"両端を明示する",{size:12}),
 ex:[["from 9 to 5","9 時から 5 時まで"],
     ["from Monday to Friday","月曜から金曜まで"]],
 note:"from が起点、to が終点なので 2 語で幅が決まります。終点を含むかを曖昧にしたくないときは through を使います。"},

{page:"04",cat:"線の上の前後",w:"prior to",also:"previous to",core:"その時点より前（硬い言い方）",
 svg:timeline(92)+
   '<line x1="146" y1="50" x2="146" y2="92" stroke="'+GREEN+'" stroke-width="4"/>'+
   dot(146,92,9,GREEN)+t(146,40,"基準の時点",{c:GREEN,size:12})+
   '<rect x="26" y="62" width="112" height="26" rx="8" fill="'+ORANGE+'" opacity=".18"/>'+
   dot(60,75,9)+dot(104,75,9)+
   t(82,124,"この側のどこか",{c:ORANGE,size:12}),
 ex:[["prior to the meeting","会議より前に"],
     ["prior to 2020","2020 年より前に"]],
 note:"before と同じ絵で、書き言葉や契約文で使う硬い言い方です。話し言葉では before の方が自然です。"},

{page:"04",cat:"線の上の前後",w:"following",also:"subsequent to",core:"その出来事のすぐ後",
 svg:timeline(92)+
   '<line x1="70" y1="50" x2="70" y2="92" stroke="'+GREEN+'" stroke-width="4"/>'+
   dot(70,92,9,GREEN)+t(70,40,"きっかけ",{c:GREEN,size:12})+
   arrow(78,74,128,74,{hs:9})+dot(140,74,10)+
   t(140,124,"その直後",{c:ORANGE,size:12}),
 ex:[["following the announcement","発表を受けて、その後"],
     ["subsequent to the merger","合併の後に"]],
 note:"after と同じ絵ですが、「前の出来事が原因やきっかけになっている」含みが出ます。報道や社内文書で好まれます。"},

{page:"04",cat:"起点と終点",w:"as of",core:"その日を基準に切る",
 svg:timeline(100)+
   wall(110,44,110)+
   '<rect x="118" y="60" width="76" height="26" rx="8" fill="'+ORANGE+'" opacity=".18"/>'+
   arrow(122,73,188,73,{hs:9})+
   t(110,34,"この日から",{c:GREEN,size:12})+
   t(60,128,"ここまでは旧ルール",{size:12,a:"middle"}),
 ex:[["as of April 1","4 月 1 日をもって"],
     ["as of today","今日の時点で"]],
 note:"線に印を打って「ここから先はこうなる」または「ここまでの集計だ」と宣言する語です。規則の変更日や締めの時点に使います。"},

{page:"04",cat:"期間の中と長さ",w:"pending",core:"決まるまでのあいだ、止めておく",
 svg:timeline(104)+
   '<circle cx="46" cy="70" r="11" fill="none" stroke="'+SUB+'" stroke-width="3"/>'+
   '<line x1="62" y1="70" x2="140" y2="70" stroke="'+ORANGE+'" stroke-width="3.5" stroke-dasharray="7 6" stroke-linecap="round"/>'+
   wall(152,44,104)+
   t(100,50,"保留のまま待つ",{c:ORANGE,size:12})+
   t(150,130,"決定が出る時点",{c:GREEN,size:12,a:"end"}),
 ex:[["pending approval","承認が出るまでのあいだ"],
     ["pending the investigation","調査の結果が出るまで"]],
 note:"until の絵に「その間は止まっている」を足した硬い語です。手続きや法律の文章でよく出ます。"}
,
{page:"05",cat:"一緒とその欠け",w:"along with",also:"together with",core:"主役に添えて、一緒に連れていく",
 svg:dot(72,74,17)+dot(114,86,11,GREEN)+
   '<path d="M72 51 Q96 40 118 66" fill="none" stroke="'+SUB+'" stroke-width="2.5" stroke-dasharray="5 4"/>'+
   arrow(134,80,196,80,{color:SUB,w:2.5,hs:8})+
   t(72,120,"主役",{c:ORANGE,size:12})+t(120,116,"おまけ",{c:GREEN,size:12})+
   t(110,32,"同じ向きに動く",{size:12}),
 ex:[["He came along with his sister.","妹を連れて一緒に来た"],
     ["Send the form along with a photo.","写真を添えて用紙を送る"]],
 note:"with とほぼ同じですが、主役と付き添いの上下がはっきりします。主語が along with で結ばれても動詞は主役に合わせます。"},

{page:"05",cat:"一緒とその欠け",w:"besides",also:"in addition to",core:"すでにあるものの上に、さらに足す",
 svg:gbox(24,62,44,40,{r:6})+gbox(74,62,44,40,{r:6})+
   obox(150,62,44,40,{r:6})+
   t(132,88,"+",{c:SUB,size:26})+
   t(70,44,"すでにある分",{c:GREEN,size:12})+
   t(172,120,"追加",{c:ORANGE,size:12})+
   t(110,142,"元のものは消えない",{size:12}),
 ex:[["Besides English, she speaks French.","英語に加えてフランス語も話す"],
     ["in addition to the fee","料金に加えて"]],
 note:"beside (すぐ横) と s ひとつしか違わないのに意味が別です。besides は足し算、beside は位置。except (除く) とは逆向きです。"},

{page:"05",cat:"一緒とその欠け",w:"plus",also:"minus / less / times",core:"数の足し引き掛けをそのまま言う",
 svg:gbox(20,58,42,36,{r:5})+
   t(74,84,"+",{c:SUB,size:24})+
   obox(88,58,42,36,{r:5})+
   t(142,84,"=",{c:SUB,size:22})+
   '<rect x="156" y="58" width="46" height="36" rx="5" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<rect x="156" y="58" width="22" height="36" rx="5" fill="'+ORANGE+'" opacity=".85"/>'+
   t(110,36,"量の演算",{size:12})+
   t(110,124,"minus は引く、times は掛ける",{size:12}),
 ex:[["three plus four","3 足す 4"],
     ["the price minus tax","税を引いた価格"]],
 note:"数を扱う前置詞の一族です。less は minus の硬い言い方、times は掛け算。per (1 あたり) が割り算にあたります。"},

{page:"05",cat:"所属と話題",w:"concerning",also:"regarding / as for / with regard to",core:"その件を、まっすぐ指す",
 svg:'<rect x="118" y="34" width="72" height="86" rx="6" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<line x1="132" y1="56" x2="176" y2="56" stroke="'+GREEN+'" stroke-width="2.5"/>'+
   '<line x1="132" y1="74" x2="176" y2="74" stroke="'+GREEN+'" stroke-width="2.5"/>'+
   '<line x1="132" y1="92" x2="160" y2="92" stroke="'+GREEN+'" stroke-width="2.5"/>'+
   arrow(24,76,110,76)+
   t(60,54,"この件について",{c:ORANGE,size:12})+
   t(154,140,"扱う対象",{c:GREEN,size:12}),
 ex:[["questions concerning the contract","契約に関する質問"],
     ["As for the price, we can discuss it.","価格については相談できる"]],
 note:"about が話題のまわりをなでるのに対し、この一族は対象をまっすぐ指す硬い言い方です。手紙やメールの書き出しに向きます。"},

{page:"05",cat:"割り算と比べる",w:"like",core:"形が似ている",
 svg:'<circle cx="66" cy="74" r="30" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<circle cx="164" cy="74" r="30" fill="none" stroke="'+ORANGE+'" stroke-width="3.5"/>'+
   t(115,68,"≈",{c:SUB,size:26})+
   t(66,124,"見本",{c:GREEN,size:12})+t(164,124,"これ",{c:ORANGE,size:12})+
   t(110,30,"重ねるとほぼ同じ",{size:12}),
 ex:[["He runs like the wind.","風のように走る"],
     ["What is it like?","それはどんな感じですか"]],
 note:"同じではなく「重ねると似ている」絵です。as は役割そのものになる語なので、work as a teacher (本当に教師) と work like a teacher (教師のように) は別です。"},

{page:"05",cat:"割り算と比べる",w:"unlike",core:"形が合わない",
 svg:'<circle cx="66" cy="74" r="30" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<rect x="134" y="46" width="58" height="58" rx="6" fill="none" stroke="'+ORANGE+'" stroke-width="3.5"/>'+
   t(113,68,"≠",{c:"#c46b52",size:26})+
   t(66,124,"見本",{c:GREEN,size:12})+t(163,124,"これ",{c:ORANGE,size:12})+
   t(110,30,"重ねても合わない",{size:12}),
 ex:[["Unlike his brother, he is quiet.","兄と違って彼は静かだ"],
     ["That's unlike her.","それは彼女らしくない"]],
 note:"like の否定です。文頭で使うと、後に続く主役との対比をあらかじめ宣言できます。"},

{page:"05",cat:"割り算と比べる",w:"as",core:"その役になりきる",
 svg:'<rect x="60" y="34" width="100" height="86" rx="10" fill="none" stroke="'+GREEN+'" stroke-width="3" stroke-dasharray="7 6"/>'+
   obox(76,50,68,54,{r:8})+
   t(110,26,"役割・肩書き",{c:GREEN,size:12})+
   t(110,140,"中身がそのものになる",{c:ORANGE,size:12}),
 ex:[["She works as a nurse.","看護師として働く、本当に看護師だ"],
     ["as a student","学生という立場で"]],
 note:"like は「似ている」だけですが、as は枠にぴったり入って中身がその役になります。理由や時を表す接続詞の as も「重なる」感覚の延長です。"},

{page:"05",cat:"割り算と比べる",w:"than",also:"versus",core:"高さを並べて比べる",
 svg:ground(122)+
   '<rect x="46" y="76" width="40" height="46" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<rect x="132" y="44" width="40" height="78" fill="'+ORANGE+'" opacity=".9"/>'+
   '<line x1="40" y1="76" x2="178" y2="76" stroke="'+GREEN+'" stroke-width="2" stroke-dasharray="5 5"/>'+
   arrow(152,68,152,50,{color:ORANGE,w:2.5,hs:8})+
   t(66,66,"基準",{c:GREEN,size:12})+t(152,34,"この差",{c:ORANGE,size:12}),
 ex:[["taller than me","私より高い"],
     ["cost versus benefit","費用と便益を並べて比べる"]],
 note:"than は比較級と組んで「基準」を示します。versus は勝ち負けや対立の形で 2 つを並べる語です。"},

{page:"05",cat:"割り算と比べる",w:"worth",core:"つり合っている価値",
 svg:'<line x1="110" y1="30" x2="110" y2="52" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<line x1="46" y1="52" x2="174" y2="52" stroke="'+GREEN+'" stroke-width="4" stroke-linecap="round"/>'+
   '<line x1="46" y1="52" x2="46" y2="68" stroke="'+GREEN+'" stroke-width="2"/>'+
   '<line x1="174" y1="52" x2="174" y2="68" stroke="'+GREEN+'" stroke-width="2"/>'+
   obox(24,68,44,32,{r:5})+
   '<rect x="152" y="68" width="44" height="32" rx="5" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   t(46,120,"モノ",{c:ORANGE,size:12})+t(174,120,"値段",{c:GREEN,size:12})+
   t(110,142,"左右が同じ重さ",{size:12}),
 ex:[["worth 1,000 yen","1000 円の価値がある"],
     ["worth reading","読む価値がある"]],
 note:"天びんがつり合う絵です。前置詞と形容詞の境目にある語で、後ろには名詞でも動名詞 (reading) でも置けます。"},

{page:"05",cat:"含める・除く・置きかえる",w:"including",core:"数えた中に、それも入っている",
 svg:'<circle cx="104" cy="74" r="52" fill="#f6faf8" stroke="'+GREEN+'" stroke-width="3"/>'+
   dot(78,54,9,GREEN)+dot(120,50,9,GREEN)+dot(72,92,9,GREEN)+dot(128,90,9,GREEN)+
   dot(104,74,11)+
   arrow(184,40,128,58,{color:ORANGE,w:2.5,hs:8})+
   t(196,30,"これも中",{c:ORANGE,size:12,a:"end"})+
   t(104,142,"合計に含めて数える",{size:12}),
 ex:[["ten people including me","私を含めて 10 人"],
     ["including tax","税を含んだ値段"]],
 note:"合計の内側に入れる語です。反対は excluding。except は「全体から抜く」ので、including の反対ではなく方向が逆です。"},

{page:"05",cat:"含める・除く・置きかえる",w:"except",also:"but / excluding / save / bar",core:"全体から、そこだけ抜く",
 svg:'<circle cx="96" cy="74" r="52" fill="#f6faf8" stroke="'+GREEN+'" stroke-width="3"/>'+
   dot(74,52,9,GREEN)+dot(114,50,9,GREEN)+dot(70,94,9,GREEN)+dot(116,96,9,GREEN)+dot(96,74,9,GREEN)+
   dot(184,44,10)+
   '<line x1="174" y1="34" x2="194" y2="54" stroke="#c46b52" stroke-width="3"/>'+
   '<line x1="194" y1="34" x2="174" y2="54" stroke="#c46b52" stroke-width="3"/>'+
   arrow(140,58,170,48,{color:SUB,w:2.5,hs:8})+
   t(96,142,"残り全部が対象",{size:12}),
 ex:[["everyone except me","私以外の全員"],
     ["nobody but you","あなた以外だれも"]],
 note:"まず全体を言って、そこから 1 つ引く形です。but がこの意味になるのは all や nobody など全体を表す語の後だけです。"},

{page:"05",cat:"含める・除く・置きかえる",w:"instead of",also:"in place of / rather than",core:"片方をどけて、そこに入る",
 svg:'<rect x="24" y="52" width="66" height="56" rx="8" fill="none" stroke="'+GREEN+'" stroke-width="3" stroke-dasharray="7 6"/>'+
   '<line x1="36" y1="64" x2="78" y2="96" stroke="#c46b52" stroke-width="3"/>'+
   '<line x1="78" y1="64" x2="36" y2="96" stroke="#c46b52" stroke-width="3"/>'+
   obox(130,52,66,56,{r:8})+
   arrow(96,80,124,80,{color:SUB,w:2.5,hs:8})+
   t(57,130,"やめた方",{size:12})+t(163,130,"選んだ方",{c:ORANGE,size:12})+
   t(110,32,"座席は 1 つ",{size:12}),
 ex:[["tea instead of coffee","コーヒーではなく紅茶を"],
     ["Walk rather than drive.","運転せずに歩こう"]],
 note:"席が 1 つしかなく、片方を外して他方を入れる絵です。besides (足し算) とはまったく逆で、両方は残りません。"},

{page:"05",cat:"含める・除く・置きかえる",w:"apart from",also:"aside from",core:"わきに置いて、別扱いにする",
 svg:'<circle cx="88" cy="76" r="46" fill="#f6faf8" stroke="'+GREEN+'" stroke-width="3"/>'+
   dot(68,58,9,GREEN)+dot(106,56,9,GREEN)+dot(66,96,9,GREEN)+dot(108,96,9,GREEN)+
   dot(180,50,10)+
   qarrow(120,60,152,40,172,44,{color:SUB,w:2.5,hs:8})+
   t(88,140,"本体はこちら",{c:GREEN,size:12})+
   t(196,74,"わきに置く",{c:ORANGE,size:12,a:"end"}),
 ex:[["Apart from the price, it's perfect.","値段を別にすれば完璧だ"],
     ["Apart from me, three people came.","私のほかに 3 人来た"]],
 note:"英語では文脈で「除いて」と「加えて」の両方になります。曖昧さを避けたいときは except か besides を使ってください。"}
,
{page:"06",cat:"原因と理由",w:"because of",also:"due to / owing to / on account of",core:"これがあったから、こうなった",
 svg:gbox(20,52,62,52,{r:8})+
   arrow(90,78,140,78)+
   obox(150,52,52,52,{r:8})+
   t(51,36,"原因",{c:GREEN,size:12})+t(176,36,"結果",{c:ORANGE,size:12})+
   t(110,132,"矢印の向きは変えられない",{size:12}),
 ex:[["late because of the rain","雨のせいで遅れた"],
     ["due to a system error","システム障害が原因で"]],
 note:"because of は話し言葉でも使える標準形、due to は名詞の後ろに置く硬い形、owing to と on account of はさらに硬い言い方です。"},

{page:"06",cat:"原因と理由",w:"thanks to",core:"そのおかげで、良い方へ動いた",
 svg:gbox(20,74,58,42,{r:8})+
   qarrow(84,92,124,58,166,50)+
   obox(168,32,34,34,{r:8})+
   t(49,60,"助けたもの",{c:GREEN,size:12})+
   t(180,88,"良い結果",{c:ORANGE,size:12,a:"end"})+
   t(110,140,"上向きに効いた原因",{size:12}),
 ex:[["Thanks to your help, we finished.","君の助けで終えられた"],
     ["thanks to the new tool","新しい道具のおかげで"]],
 note:"because of と同じ因果ですが、結果が良いときに使います。皮肉で悪い結果に使うこともあり、そのときは口調で分かります。"},

{page:"06",cat:"原因と理由",w:"from",sense:"直接の原因",core:"そこから生じた",
 svg:'<circle cx="52" cy="86" r="20" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   qarrow(66,74,110,36,166,58)+
   dot(176,64,11)+
   t(52,124,"源",{c:GREEN,size:12})+
   t(120,28,"ここから出てくる",{c:ORANGE,size:12}),
 ex:[["He died from his injuries.","けがが元で亡くなった"],
     ["suffer from a cold","風邪という源から苦しみが出ている"]],
 note:"because of が理由全体を指すのに対し、from は「そこから直接出てきた」経路を指します。die of は病気そのもの、die from は経過を含む傷などに使います。"},

{page:"06",cat:"原因と理由",w:"out of",sense:"動機",core:"気持ちの中から出てきた行い",
 svg:gbox(24,44,84,72,{r:12})+
   t(66,80,"気持ち",{c:GREEN,size:13})+
   arrow(96,80,190,80)+
   '<line x1="108" y1="44" x2="108" y2="116" stroke="#fafdfb" stroke-width="9"/>'+
   '<line x1="108" y1="44" x2="108" y2="62" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<line x1="108" y1="98" x2="108" y2="116" stroke="'+GREEN+'" stroke-width="3"/>'+
   t(150,58,"行い",{c:ORANGE,size:12})+
   t(110,140,"内側から外へ出た動機",{size:12}),
 ex:[["He helped out of kindness.","親切心から手伝った"],
     ["out of curiosity","好奇心から"]],
 note:"空間の out of (枠の外へ) と同じ絵です。気持ちという容器から行動が出てくる、と考えると 1 枚でつながります。"},

{page:"06",cat:"原因と理由",w:"through",sense:"経緯",core:"いくつかの段を通って、そうなった",
 svg:gbox(40,58,36,34,{r:5})+gbox(92,58,36,34,{r:5})+gbox(144,58,36,34,{r:5})+
   arrow(18,75,198,75)+
   t(110,40,"通ってきた過程",{c:GREEN,size:12})+
   t(110,124,"経て達した結果",{c:ORANGE,size:12}),
 ex:[["He got the job through a friend.","友人を通じて仕事を得た"],
     ["learn through experience","経験を通して学ぶ"]],
 note:"空間の through (中を貫く) と同じ絵で、通り道が段取りや仲介役に変わっただけです。by (手段そのもの) より「経路」に重心があります。"},

{page:"06",cat:"目的と交換",w:"for",sense:"目的・交換",core:"差し出す側と、得る側がつり合う",
 svg:obox(24,56,54,44,{r:8})+
   arrow(86,66,140,66,{hs:9})+
   arrow(140,90,86,90,{color:GREEN,w:3,hs:9})+
   '<rect x="148" y="56" width="54" height="44" rx="8" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   t(51,36,"払うもの",{c:ORANGE,size:12})+t(175,36,"ねらい",{c:GREEN,size:12})+
   t(110,132,"行き来がつり合う",{size:12}),
 ex:[["I paid 500 yen for it.","それと引き換えに 500 円払った"],
     ["This is for you. / Thank you for coming.","これはあなたのため、来てくれたことに対して"]],
 note:"目的・理由・交換・賛成 (vote for) は全部この「向き合ってつり合う」1 枚です。目的地を目指す for も、得たいものが先にある同じ形です。"},

{page:"06",cat:"手段と根拠",w:"by",sense:"手段",core:"その道具や経路を通して成し遂げる",
 svg:'<circle cx="26" cy="98" r="10" fill="none" stroke="'+SUB+'" stroke-width="3"/>'+
   gbox(84,42,58,34,{r:8})+
   arrow(40,98,180,98)+
   '<line x1="113" y1="76" x2="113" y2="92" stroke="'+GREEN+'" stroke-width="2.5" stroke-dasharray="4 4"/>'+
   t(113,32,"使うもの",{c:GREEN,size:12})+
   t(160,128,"これで達する",{c:ORANGE,size:12,a:"end"}),
 ex:[["go by train","電車という手段で行く"],
     ["by pressing the button","ボタンを押すことによって"]],
 note:"near の by (すぐそば) と同じ語です。近くにあるものを使う、という感覚で手段の意味が生まれました。行為者を示す受け身の by も同じです。"},

{page:"06",cat:"手段と根拠",w:"on",sense:"根拠・作動中",core:"それを土台にして成り立つ",
 svg:ground(112)+
   gbox(56,90,108,22,{r:4})+
   obox(76,58,68,32,{r:6})+
   '<line x1="52" y1="90" x2="168" y2="90" stroke="'+ORANGE+'" stroke-width="4" stroke-linecap="round"/>'+
   t(110,44,"主張や活動",{c:ORANGE,size:12})+
   t(110,136,"下にある根拠に乗っている",{c:GREEN,size:12}),
 ex:[["based on the data","データに基づいて"],
     ["on duty / on fire / on sale","勤務中、燃えている、売り出し中"]],
 note:"接触して支えられる on の延長です。土台に乗れば「根拠」、回路に接すれば「作動中」。だから on は進行中の状態を表せます。"},

{page:"06",cat:"状態におかれる",w:"at",sense:"従事・状態",core:"その一点で取り組んでいる",
 svg:dot(110,80,13)+
   '<circle cx="110" cy="80" r="28" fill="none" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<line x1="110" y1="38" x2="110" y2="50" stroke="'+ORANGE+'" stroke-width="3"/>'+
   '<line x1="80" y1="50" x2="88" y2="59" stroke="'+ORANGE+'" stroke-width="3"/>'+
   '<line x1="140" y1="50" x2="132" y2="59" stroke="'+ORANGE+'" stroke-width="3"/>'+
   t(110,28,"活動している",{c:ORANGE,size:12})+
   t(110,140,"場所ではなく取り組みの一点",{c:GREEN,size:12}),
 ex:[["at work / at war / at rest","仕事中、戦争中、休止中"],
     ["good at math","数学というひとつの的に強い"]],
 note:"一点の at がそのまま「その活動に入っている」に伸びた形です。at を使うと、広がりのない一点なので状態がきっぱり決まります。"},

{page:"06",cat:"状態におかれる",w:"in",sense:"状態に包まれる",core:"その状態にすっぽり入っている",
 svg:'<path d="M40 78 Q34 46 68 42 Q80 20 112 30 Q146 20 158 44 Q192 48 184 80 Q188 112 150 112 L74 112 Q38 110 40 78 Z" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   dot(112,74,13)+
   t(112,138,"抜け出すまで続く",{size:12})+
   t(112,24,"状態という空間",{c:GREEN,size:12}),
 ex:[["in love / in trouble / in a hurry","恋している、困っている、急いでいる"],
     ["dressed in red","赤い服に包まれて"]],
 note:"囲まれる in の延長です。包まれている間は続く、という感覚があるので、一時の気分から服装や言語 (in English) まで同じ絵で言えます。"},

{page:"06",cat:"状態におかれる",w:"under",sense:"支配下・進行中",core:"上から押さえられて、その途中にある",
 svg:'<rect x="30" y="40" width="160" height="16" rx="6" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   arrow(70,60,70,84,{color:GREEN,w:2.5,hs:8})+
   arrow(150,60,150,84,{color:GREEN,w:2.5,hs:8})+
   dot(110,92,13)+
   ground(122)+
   t(110,30,"押さえるもの",{c:GREEN,size:12})+
   t(110,142,"その下で進んでいる",{c:ORANGE,size:12}),
 ex:[["under construction / under review","工事中、検討中"],
     ["under pressure / under the law","圧力のもとで、法のもとで"]],
 note:"真下で覆われる under の延長です。上に権限や工程がのっているので、終わるまで自由がきかない状態を表します。"},

{page:"06",cat:"譲歩と無関係",w:"despite",also:"in spite of / notwithstanding / for all",core:"邪魔があるのに、そのまま進む",
 svg:wall(110,30,120)+
   arrow(20,74,196,74,{hs:11})+
   '<circle cx="110" cy="74" r="15" fill="#fafdfb" stroke="'+ORANGE+'" stroke-width="3" stroke-dasharray="5 4"/>'+
   t(56,50,"止めようとする力",{c:GREEN,size:12})+
   t(110,142,"効かずに突き抜ける",{c:ORANGE,size:12}),
 ex:[["Despite the rain, we walked.","雨なのに歩いた"],
     ["in spite of the cost","費用がかかるにもかかわらず"]],
 note:"against (押し合う) と違って、こちらは相手の力が結果を変えられません。notwithstanding は法律文、for all は文語です。"},

{page:"06",cat:"譲歩と無関係",w:"regardless of",core:"条件を見ずに、まっすぐ通す",
 svg:arrow(18,80,200,80,{hs:11})+
   '<line x1="66" y1="40" x2="66" y2="66" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<path d="M66 42 L92 50 L66 58 Z" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="2"/>'+
   '<line x1="136" y1="94" x2="136" y2="120" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<path d="M136 98 L162 106 L136 114 Z" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="2"/>'+
   t(66,32,"条件",{c:GREEN,size:12})+t(136,138,"条件",{c:GREEN,size:12})+
   t(110,66,"どれも見ない",{c:ORANGE,size:12}),
 ex:[["regardless of age","年齢に関係なく"],
     ["regardless of what happens","何が起きても関係なく"]],
 note:"despite は「邪魔があった」ことを認めますが、regardless of は条件そのものを最初から考えに入れません。irregardless は誤りです。"},

{page:"06",cat:"譲歩と無関係",w:"given",also:"considering",core:"前提を置いた上で判断する",
 svg:gbox(20,48,66,54,{r:8})+
   t(53,80,"前提",{c:GREEN,size:13})+
   arrow(94,75,142,75)+
   obox(152,48,50,54,{r:8})+
   t(177,80,"判断",{c:"#fff",size:13})+
   t(110,130,"前提を認めてから結論へ",{size:12}),
 ex:[["Given the time, let's stop.","時間を考えると、やめておこう"],
     ["considering his age","彼の年齢を考えれば"]],
 note:"because of は原因を言いますが、こちらは「その事実を踏まえると」という判断の材料を置く語です。結論は話し手の評価になります。"},

{page:"06",cat:"譲歩と無関係",w:"according to",core:"その出どころに合わせて言う",
 svg:'<rect x="22" y="40" width="62" height="76" rx="6" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<line x1="34" y1="60" x2="72" y2="60" stroke="'+GREEN+'" stroke-width="2.5"/>'+
   '<line x1="34" y1="76" x2="72" y2="76" stroke="'+GREEN+'" stroke-width="2.5"/>'+
   '<line x1="34" y1="92" x2="62" y2="92" stroke="'+GREEN+'" stroke-width="2.5"/>'+
   arrow(92,78,146,78)+
   obox(156,58,44,40,{r:8})+
   t(53,30,"出典",{c:GREEN,size:12})+t(178,124,"述べる内容",{c:ORANGE,size:12,a:"end"}),
 ex:[["according to the report","報告書によれば"],
     ["according to plan","計画どおりに"]],
 note:"自分ではなく出どころに責任を置く言い方です。according to me とは言わず、自分の考えは in my opinion を使います。"}
];

var COMPARE=[
{page:"01",q:"at / in / on — 場所をどう捉えるか",rows:[
  ["at the office","広さを無視した一点として扱う。会社にいる、という所在の話"],
  ["in the office","四方を壁に囲まれた内側。オフィスの室内という空間の話"],
  ["on the second floor","面に接して支えられている。階という床の上の話"]]},
{page:"01",q:"in / into — 状態か、動きか",rows:[
  ["He is in the room.","もう中にいる。位置の話"],
  ["He ran into the room.","外から境界を越えて入った。動きの話"]]},
{page:"01",q:"in / inside / within / throughout — 内側の言い分け",rows:[
  ["in the box","ただ中にある"],
  ["inside the box","外ではなく内だ、と対比して言う"],
  ["within the box","枠を越えない、というしばりを言う"],
  ["throughout the box","隅々まで行きわたっている"]]},
{page:"01",q:"between / among — 数えるか、まぎれるか",rows:[
  ["between the two trees","2 本を別々に意識して、そのあいだ"],
  ["among the trees","木々の群れの中。一本ずつは数えない"],
  ["in the middle of the trees","木立のちょうど中心"]]},

{page:"02",q:"to / for / toward — どこまで言っているか",rows:[
  ["go to Tokyo","東京に着いた、または着く予定まで含む"],
  ["leave for Tokyo","東京を目指して出発した。着いたかは言わない"],
  ["walk toward Tokyo","東京の方向へ歩いた。目的地と決めたわけでもない"]]},
{page:"02",q:"throw it to me / throw it at me — 渡すのか、当てるのか",rows:[
  ["Throw it to me.","受け取ってほしくて、私という到達点へ投げる"],
  ["Throw it at me.","私をねらって当てるために投げる。攻撃になる"]]},
{page:"02",q:"through / across / along / via — 道すじの選び方",rows:[
  ["through the forest","森の内側を貫いて進む"],
  ["across the bridge","橋の表面をなぞって反対側へ"],
  ["along the river","川に沿って、線から外れずに"],
  ["via Dubai","ドバイという中継点に必ず寄る"]]},
{page:"02",q:"up to / until — 場所の「まで」と時間の「まで」",rows:[
  ["walk up to the gate","門のところまで歩いて、そこで止まる"],
  ["wait until six","6 時までずっと待ち続ける。時間の線に使う形"]]},

{page:"03",q:"on / over / above / on top of — 上のようで、全部ちがう",rows:[
  ["a lamp on the table","接触して支えられている"],
  ["a lamp over the table","接触せず、テーブルを覆うように真上にある"],
  ["a lamp above the table","接触も覆いもなく、ただ高い位置にある"],
  ["a lamp on top of the pile","積み重なりのいちばん上にある"]]},
{page:"03",q:"under / below / beneath / underneath — 下の言い分け",rows:[
  ["under the table","真下で、上に覆いがある"],
  ["below sea level","基準の線より低い。覆われている感じはない"],
  ["beneath the newspaper","すぐ下に接して、見えなくなっている。硬い語"],
  ["underneath the carpet","裏側にぴったり。beneath の日常的な言い方"]]},
{page:"03",q:"in front of / opposite / ahead of / before — 前のいろいろ",rows:[
  ["in front of the store","店の正面のすぐ前"],
  ["opposite the store","道などをはさんで真向かい"],
  ["ahead of the others","進む向きで先を行っている"],
  ["before the meeting","時間の線で前。場所には使わない"]]},
{page:"03",q:"near / by / beside / next to / close to — 近さの目盛り",rows:[
  ["near the station","駅から近い範囲のどこか"],
  ["by the window","窓のすぐそば。near よりぴたりと近い"],
  ["beside me / next to me","真横に並んでいる"],
  ["close to perfect","距離だけでなく、状態の近さにも使える"]]},

{page:"04",q:"until / by — 続けるのか、済ませるのか",rows:[
  ["Stay until five.","5 時までずっと続ける"],
  ["Send it by five.","5 時までのどこかで一度済ませる。ずっと送り続けるのではない"]]},
{page:"04",q:"during / for — いつか、どれだけか",rows:[
  ["during the trip","旅行という名前のある期間の中で"],
  ["for three days","3 日という測った長さ。数字が付いたらこちら"]]},
{page:"04",q:"in / within — 後か、以内か",rows:[
  ["in three days","3 日経ってから。その一点を指す"],
  ["within three days","3 日という枠を越えない。今日でもよい"]]},
{page:"04",q:"since / from — 今まで続くか、起点だけか",rows:[
  ["since 2020","2020 年から今までずっと続いている。現在完了と組む"],
  ["from 2020","起点が 2020 年。そこから先の話は別に言う必要がある"]]},
{page:"04",q:"to / till / through — 終わりの日を含むか",rows:[
  ["Monday to Friday","金曜を含むかが曖昧に響くことがある"],
  ["till Friday","金曜まで続く。終端の扱いは文脈しだい"],
  ["Monday through Friday","金曜も含むと明言する。米語の言い方"]]},

{page:"05",q:"like / as — 似ているのか、そのものか",rows:[
  ["work like a teacher","教師のように働く。本当は教師ではない"],
  ["work as a teacher","教師として働く。実際に教師である"]]},
{page:"05",q:"beside / besides / except — 1 文字で意味が変わる",rows:[
  ["beside me","私の真横に (位置)"],
  ["besides me","私に加えて (足し算)"],
  ["except me","私を除いて (引き算)"]]},
{page:"05",q:"including / except — 内に入れるか、外に出すか",rows:[
  ["ten people including me","私も数に入れて 10 人"],
  ["ten people except me","私を抜いて 10 人。合計の作り方が逆"]]},
{page:"05",q:"instead of / rather than — 置きかえと、選び直し",rows:[
  ["tea instead of coffee","コーヒーをやめて、その席に紅茶が入る"],
  ["walk rather than drive","どちらかを選ぶなら歩く方を選ぶ"]]},

{page:"06",q:"because of / due to / thanks to — 同じ因果、違う顔",rows:[
  ["because of the rain","雨のせいで。話し言葉でも書き言葉でも使える標準形"],
  ["due to the rain","雨によるもの。名詞や be 動詞の後に置く硬い形"],
  ["thanks to the rain","雨のおかげで。結果が良いときに使う"]]},
{page:"06",q:"die of / die from — 病気そのものか、経過か",rows:[
  ["die of cancer","病そのものが原因。of は全体と一部の関係"],
  ["die from his injuries","けがという源から生じた。経過を含む言い方"]]},
{page:"06",q:"by / with / through — 手段の言い分け",rows:[
  ["by train","経路や方法。冠詞を付けずに手段だけを言う"],
  ["with a knife","手元にくっつけて使う道具"],
  ["through a friend","仲介や過程を通り抜けて達する"]]},
{page:"06",q:"despite / against / regardless of — 邪魔の扱い方",rows:[
  ["despite the rain","雨という邪魔があったが、結果は変わらなかった"],
  ["against the current","流れと押し合っている。抵抗を受けている最中"],
  ["regardless of the weather","天気を最初から考えに入れない"]]}
];
