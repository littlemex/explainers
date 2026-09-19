/* 基本動詞シリーズの全データ。1 枚のカード = 1 つの骨組み (スキーマ)。
   図の約束は前置詞シリーズと同じ。緑 = 基準や相手、オレンジ = 主役、破線 = 接触なしか見えない境界。
   動詞は「何がどう動くか」を描くので、人・目・耳・吹き出し・スイッチだけ道具を足している。 */

function person(x, y, c) {
  c = c || GREEN;
  return '<circle cx="' + x + '" cy="' + (y - 27) + '" r="9" fill="none" stroke="' + c + '" stroke-width="3"/>' +
    '<path d="M' + x + ' ' + (y - 18) + ' V' + (y - 3) + ' M' + (x - 11) + ' ' + (y - 12) + ' H' + (x + 11) +
    ' M' + x + ' ' + (y - 3) + ' L' + (x - 9) + ' ' + (y + 13) + ' M' + x + ' ' + (y - 3) + ' L' + (x + 9) + ' ' + (y + 13) +
    '" fill="none" stroke="' + c + '" stroke-width="3" stroke-linecap="round"/>';
}
function eye(x, y, c) {
  c = c || GREEN;
  return '<path d="M' + (x - 20) + ' ' + y + ' Q' + x + ' ' + (y - 15) + ' ' + (x + 20) + ' ' + y +
    ' Q' + x + ' ' + (y + 15) + ' ' + (x - 20) + ' ' + y + ' Z" fill="#fff" stroke="' + c + '" stroke-width="3"/>' +
    dot(x, y, 6, c);
}
function ear(x, y, c) {
  c = c || GREEN;
  return '<path d="M' + (x + 4) + ' ' + (y - 18) + ' A18 18 0 1 1 ' + (x + 4) + ' ' + (y + 18) +
    '" fill="none" stroke="' + c + '" stroke-width="3" stroke-linecap="round"/>' +
    '<path d="M' + (x + 4) + ' ' + (y - 8) + ' A8 8 0 1 1 ' + (x + 4) + ' ' + (y + 8) +
    '" fill="none" stroke="' + c + '" stroke-width="2.5" stroke-linecap="round"/>';
}
function bubble(x, y, w, h, txt, c) {
  c = c || ORANGE;
  return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (h / 2) +
    '" fill="#fff" stroke="' + c + '" stroke-width="3"/>' +
    '<path d="M' + (x + 14) + ' ' + (y + h) + ' L' + (x + 8) + ' ' + (y + h + 13) + ' L' + (x + 30) + ' ' + (y + h) +
    ' Z" fill="#fff" stroke="' + c + '" stroke-width="3" stroke-linejoin="round"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + h / 2 + 5) + '" font-size="13" font-weight="700" fill="' + c +
    '" text-anchor="middle">' + txt + '</text>';
}
function zone(x, y, w, h, label) {
  return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="14" fill="none" stroke="' + GREEN +
    '" stroke-width="2.5" stroke-dasharray="7 6"/>' + (label ? t(x + w / 2, y - 8, label, { c: GREEN, size: 12 }) : '');
}
function swtch(x, y, w, frac) {
  var s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="9" fill="#eef5f1" stroke="' + GREEN + '" stroke-width="2.5"/>';
  s += '<rect x="' + x + '" y="' + y + '" width="' + (w * frac) + '" height="18" rx="9" fill="' + ORANGE + '" opacity=".85"/>';
  s += '<circle cx="' + (x + w * frac) + '" cy="' + (y + 9) + '" r="13" fill="#fff" stroke="' + ORANGE + '" stroke-width="3.5"/>';
  s += t(x - 14, y + 14, "0", { size: 15, a: "end" }) + t(x + w + 16, y + 14, "1", { c: ORANGE, size: 15, a: "start" });
  return s;
}

var CAT_NOTE = {
  "あり方": "変わらずそこにある形",
  "切り替わる": "0 が 1 になる。基本動詞の心臓部",
  "離れる・近づく": "話し手を原点にした動き",
  "変わらない": "変化を止めておく",
  "手の内に入れる": "自分の圏内に入るか、出ていくか",
  "相手に渡す": "手から手へ移る",
  "そこに置く": "位置を決めて留める",
  "行いと生み出し": "何もないところに結果を作る",
  "働かせる・試す": "道具や仕組みを動かす",
  "見る": "視線を向けるか、目に入るか",
  "聞く・感じる": "耳と体に入ってくるもの",
  "頭の中": "頭の中にあるか、動かすか",
  "口から出す": "声にする、相手に届ける",
  "見せる・指す": "相手の視界や理解に置く",
  "始まりと終わり": "線の端をどう扱うか",
  "出会いと動き": "線と線が交わる、位置が変わる",
  "手を加える": "形を変える、分ける、あける"
};

var DATA = [
{page:"01",cat:"切り替わる",w:"get",sense:"0 が 1 になる",core:"何かを経て、スイッチが切り替わる",
 svg:swtch(52,44,112,0.66)+
   arrow(40,96,168,96,{hs:10})+
   t(104,120,"経過や手間があって切り替わる",{size:12})+
   t(44,28,"前の状態",{size:12,a:"start"})+t(176,28,"後の状態",{c:ORANGE,size:12,a:"end"}),
 ex:[["It got dark.","暗いという状態に切り替わった"],
     ["I got a ticket. / I got there at six.","切符を持っていない状態から持つ状態へ、いない場所からいる場所へ"]],
 note:"get の正体は「今と違う状態になる」ことです。手に入れる、着く、疲れる、理解する (I got it) は全部、切り替わる先が違うだけ。get him to help なら相手のスイッチを入れることになります。"},

{page:"01",cat:"あり方",w:"be",core:"主語と後ろの内容を「＝」で結ぶ",
 svg:obox(22,52,56,46,{r:8})+
   t(110,86,"=",{c:SUB,size:34})+
   gbox(142,52,56,46,{r:8})+
   t(50,120,"主語",{c:ORANGE,size:12})+t(170,120,"その姿や居場所",{c:GREEN,size:12})+
   t(110,32,"切り替わりがない",{size:12}),
 ex:[["She is a teacher. / It is cold.","彼女＝教師、それ＝寒い"],
     ["The keys are on the table.","鍵＝机の上にある、という居場所"]],
 note:"get が切り替えなら、be はもう結ばれている状態です。だから be は変化を語れません。It is dark は今の姿、It gets dark は暗くなる過程です。"},

{page:"01",cat:"切り替わる",w:"become",core:"変わりきって、その姿になる",
 svg:'<rect x="20" y="52" width="52" height="46" rx="8" fill="none" stroke="'+SUB+'" stroke-width="2.5" stroke-dasharray="6 5"/>'+
   arrow(82,75,132,75)+
   obox(142,46,58,58,{r:8})+
   t(46,120,"前の姿",{size:12})+t(171,124,"新しい姿",{c:ORANGE,size:12})+
   t(110,30,"結果に重心がある",{size:12}),
 ex:[["He became a doctor.","医者という姿になりきった"],
     ["It became clear.","はっきりした状態になった"]],
 note:"get と同じ切り替えですが、become は結果の姿を名詞で言えるのが強みです。話し言葉では get、書き言葉や改まった場では become が好まれます。"},

{page:"01",cat:"切り替わる",w:"turn",core:"回って、別の面が表に出る",
 svg:'<rect x="66" y="46" width="60" height="60" rx="8" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   obox(118,58,60,60,{r:8})+
   '<path d="M62 34 A70 70 0 0 1 176 34" fill="none" stroke="'+ORANGE+'" stroke-width="3"/>'+head(176,34,0.6,10,ORANGE)+
   t(120,142,"同じものの別の面が出る",{size:12}),
 ex:[["The leaves turned red.","葉が赤い面に回った"],
     ["Turn left. / turn it into cash.","向きを変える、現金という姿に回す"]],
 note:"become との違いは回転です。turn は「同じものが向きを変えて別の姿になる」ので、急な変化や意外な変化によく合います。"},

{page:"01",cat:"離れる・近づく",w:"go",core:"話し手のいる所から離れていく",
 svg:person(34,104)+
   arrow(60,76,196,76,{hs:11})+
   t(130,54,"こちらから遠ざかる",{c:ORANGE,size:12})+
   t(34,138,"話し手",{c:GREEN,size:12})+
   t(126,138,"良い → 悪い も離れる",{size:12}),
 ex:[["I go to school.","自分のいる所から学校へ離れていく"],
     ["The milk went bad.","元の良い状態から離れて悪くなった"]],
 note:"go bad、go wrong、go missing が「悪くなる」側に偏るのは、今いる正常な状態から離れる絵だからです。go は離れる、come は近づく、が全部の土台です。"},

{page:"01",cat:"離れる・近づく",w:"come",core:"話し手や話題の中心へ近づく",
 svg:person(186,104)+
   arrow(28,76,160,76,{hs:11})+
   t(92,54,"こちらへ近づく",{c:ORANGE,size:12})+
   t(186,138,"話し手",{c:GREEN,size:12})+
   t(96,138,"見える所まで来る",{size:12}),
 ex:[["Come here. / I'm coming.","こちらへ近づく。相手のいる側へ行くときも come"],
     ["My dream came true.","夢が現実として見える所まで来た"]],
 note:"日本語の「行く」でも、相手のいる側へ向かうときは come を使います。come true、come to know のように「見える所まで来る」使い方も同じ絵です。"},

{page:"01",cat:"離れる・近づく",w:"grow",core:"内側から大きくなる",
 svg:'<circle cx="110" cy="78" r="20" fill="none" stroke="'+SUB+'" stroke-width="2.5" stroke-dasharray="6 5"/>'+
   '<circle cx="110" cy="78" r="44" fill="none" stroke="'+ORANGE+'" stroke-width="3.5"/>'+
   arrow(110,58,110,40,{color:ORANGE,w:2.5,hs:8})+
   arrow(130,78,152,78,{color:ORANGE,w:2.5,hs:8})+
   arrow(110,98,110,116,{color:ORANGE,w:2.5,hs:8})+
   arrow(90,78,68,78,{color:ORANGE,w:2.5,hs:8})+
   t(110,142,"同じものが膨らんでいく",{size:12}),
 ex:[["The town grew quickly.","町が内側から大きくなった"],
     ["grow old / grow to like it","年を重ねる、だんだん好きになる"]],
 note:"外から足すのではなく、中から増える絵です。だから grow は時間をかけた変化に向き、grow to like のように「だんだんそうなる」にも使えます。"},

{page:"01",cat:"変わらない",w:"keep",core:"高さを変えずに、そのまま続ける",
 svg:timeline(120)+
   '<line x1="30" y1="62" x2="186" y2="62" stroke="'+GREEN+'" stroke-width="2.5" stroke-dasharray="6 5"/>'+
   dot(52,62,10)+dot(102,62,10)+dot(152,62,10)+
   arrow(64,62,90,62,{color:ORANGE,w:2.5,hs:7})+arrow(114,62,140,62,{color:ORANGE,w:2.5,hs:7})+
   t(108,42,"同じ状態のまま",{c:ORANGE,size:12})+
   t(108,98,"下がろうとする力を押さえる",{size:12}),
 ex:[["Keep the door closed.","閉まった状態を保つ"],
     ["He kept talking.","話している状態が切れずに続く"]],
 note:"get が切り替えなら keep は切り替えを止める働きです。keep -ing で「続ける」になるのも、同じ状態を保つ絵がそのまま出ているだけです。"},

{page:"01",cat:"変わらない",w:"stay",core:"その場から動かない",
 svg:ground(120)+
   dot(78,96,13)+
   '<line x1="78" y1="70" x2="78" y2="86" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<circle cx="78" cy="62" r="8" fill="none" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<line x1="104" y1="96" x2="168" y2="96" stroke="#c9d8d0" stroke-width="3.5" stroke-dasharray="7 6"/>'+
   '<line x1="126" y1="82" x2="150" y2="110" stroke="#c46b52" stroke-width="3.5"/>'+
   '<line x1="150" y1="82" x2="126" y2="110" stroke="#c46b52" stroke-width="3.5"/>'+
   t(78,40,"くぎで留める",{c:GREEN,size:12})+
   t(150,138,"出ていかない",{size:12}),
 ex:[["Stay here. / I stayed home.","ここから動かない、家にとどまった"],
     ["Prices stayed high.","価格が高いままだった"]],
 note:"keep が「状態を保つ」なら stay は「場所や状態にとどまる」です。keep は他のものを押さえる形でも使えますが、stay は自分がとどまる形が中心です。"},

{page:"01",cat:"あり方",w:"seem",also:"look / appear",core:"外から見えるかたちだけを言う",
 svg:'<rect x="96" y="24" width="12" height="108" fill="'+GREEN+'" opacity=".25"/>'+
   gbox(20,56,64,54,{r:8})+
   '<rect x="130" y="56" width="64" height="54" rx="8" fill="none" stroke="'+ORANGE+'" stroke-width="3.5" stroke-dasharray="7 5"/>'+
   arrow(88,83,124,83,{color:SUB,w:2.5,hs:8})+
   t(52,132,"本当の中身",{c:GREEN,size:12})+t(162,132,"見えているかたち",{c:ORANGE,size:12})+
   t(110,18,"ここで隔てられる",{size:11}),
 ex:[["He seems tired.","疲れているように見える。本当かは言っていない"],
     ["It looks easy.","簡単そうに見える"]],
 note:"be が中身を断言するのに対し、seem は見え方だけを報告して逃げ道を残します。looks は目で見た印象、sounds は耳から、seems は全体の感じです。"}
,
{page:"02",cat:"手の内に入れる",w:"have",core:"自分の手の届く範囲に入っている",
 svg:person(40,106)+
   zone(72,44,124,76,"手の届く範囲")+
   obox(106,62,54,42,{r:8})+
   t(134,140,"動かさなくても持っている",{size:12}),
 ex:[["I have a car. / I have a headache.","車が自分の圏内にある、頭痛が自分の身に起きている"],
     ["We had a meeting.","会議という出来事を自分たちの圏内に持った"]],
 note:"have は動かす動詞ではなく、圏内にあると言う動詞です。だから病気、予定、経験、家族まで置けます。have it done なら「done の状態を自分の圏内に持つ」です。"},

{page:"02",cat:"手の内に入れる",w:"take",core:"いくつかの中から選んで、自分の側へ引き込む",
 svg:person(184,106)+
   gbox(20,44,40,38,{r:5})+gbox(20,90,40,38,{r:5})+
   obox(74,62,48,40,{r:6})+
   arrow(126,82,166,82,{hs:10})+
   t(74,32,"並んでいるもの",{c:GREEN,size:12,a:"start"})+
   t(120,132,"選んで自分の手に",{c:ORANGE,size:12}),
 ex:[["I'll take this one.","並んでいる中からこれを選んで自分の側へ"],
     ["take a bus / take a photo / take time","バスを選んで乗る、写真を取り込む、時間を自分の側に使う"]],
 note:"give の逆向きです。選ぶ気持ちが入るのが take の特徴で、勝手に来たものには使いません。take a class、take medicine も「自分の中に取り込む」で通ります。"},

{page:"02",cat:"相手に渡す",w:"give",core:"自分の手から、相手の手へ移す",
 svg:person(32,106)+
   person(190,106)+
   obox(92,58,44,36,{r:6})+
   arrow(66,76,86,76,{color:SUB,w:2.5,hs:7})+
   arrow(142,76,166,76,{hs:10})+
   t(112,40,"所有が移る",{c:ORANGE,size:12})+
   t(32,140,"自分",{c:GREEN,size:12})+t(190,140,"相手",{c:GREEN,size:12}),
 ex:[["Give me the salt.","塩の所有が自分から相手へ移る"],
     ["give a speech / give him a call","話を相手に渡す、電話を相手に届ける"]],
 note:"渡した後は自分の手に残りません。だから give up は「抱えていたものを手放す」、give in は「相手の側へ差し出す」つまり降参です。"},

{page:"02",cat:"相手に渡す",w:"bring",core:"持ったまま、こちらへ近づく",
 svg:person(184,106)+
   obox(46,60,44,36,{r:6})+
   qarrow(70,52,124,34,156,66)+
   arrow(70,96,152,96,{color:SUB,w:2.5,dash:true,hs:8})+
   t(184,40,"話し手の側",{c:GREEN,size:12,a:"end"})+
   t(106,138,"物も人もいっしょに、こちらへ",{size:12}),
 ex:[["Bring your umbrella.","傘を持って、こちらへ来る"],
     ["Bring it to me tomorrow.","明日それを持ってきて"]],
 note:"come に物を足した形です。take は離れる側なので、bring と take の違いは come と go の違いそのままです。"},

{page:"02",cat:"相手に渡す",w:"send",core:"手元から切り離して、送り出す",
 svg:person(28,106)+
   obox(66,66,40,32,{r:6})+
   qarrow(108,78,150,44,186,66)+
   '<circle cx="192" cy="78" r="14" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<line x1="50" y1="92" x2="62" y2="92" stroke="#c46b52" stroke-width="3"/>'+
   t(104,124,"自分は行かない",{size:12})+
   t(192,112,"届く先",{c:GREEN,size:12,a:"end"}),
 ex:[["I sent him an email.","メールを自分から切り離して相手へ"],
     ["send it back","送り返す"]],
 note:"bring や take は自分もいっしょに動きますが、send は物だけが動きます。自分は元の場所に残るのが決定的な違いです。"},

{page:"02",cat:"そこに置く",w:"put",core:"位置を決めて、そこに置く",
 svg:ground(116)+
   '<line x1="132" y1="104" x2="164" y2="104" stroke="'+GREEN+'" stroke-width="5" stroke-linecap="round"/>'+
   t(148,92,"ここ",{c:GREEN,size:12})+
   obox(120,34,56,34,{r:6})+
   arrow(148,74,148,100,{hs:10})+
   t(60,70,"置き場所を指定する",{size:12})+
   t(110,142,"どこに、が要る動詞",{size:12}),
 ex:[["Put it on the table.","机の上という場所を決めて置く"],
     ["put on a coat / put off the meeting","体の上に置く、会議を先の位置へずらす"]],
 note:"put は置き場所を必ず伴います。put on は体の上に置く、put off は時間の線の先へ置く、put up with は我慢して置いたままにする、と全部「位置」で読めます。"},

{page:"02",cat:"そこに置く",w:"hold",core:"つかんで、離さない",
 svg:obox(84,56,52,48,{r:8})+
   '<path d="M56 60 Q40 80 56 100" fill="none" stroke="'+GREEN+'" stroke-width="5" stroke-linecap="round"/>'+
   '<path d="M164 60 Q180 80 164 100" fill="none" stroke="'+GREEN+'" stroke-width="5" stroke-linecap="round"/>'+
   arrow(110,44,110,26,{color:"#c9d8d0",w:3,hs:9})+
   '<line x1="98" y1="22" x2="122" y2="40" stroke="#c46b52" stroke-width="3"/>'+
   '<line x1="122" y1="22" x2="98" y2="40" stroke="#c46b52" stroke-width="3"/>'+
   t(110,130,"動かさず、保ったまま",{c:ORANGE,size:12}),
 ex:[["Hold this for a second.","これを持っていて"],
     ["Hold on. / hold a meeting","そのまま待つ、会を開いて保つ"]],
 note:"keep が状態を保つのに対し、hold は手で押さえて保ちます。電話の Hold on は「回線をつかんだまま」、hold back は出そうなものを押さえることです。"},

{page:"02",cat:"そこに置く",w:"leave",core:"そこに残して、自分は離れる",
 svg:ground(120)+
   obox(46,74,46,46,{r:6})+
   person(122,110)+
   arrow(148,76,198,76,{hs:10})+
   t(69,60,"残される",{c:ORANGE,size:12})+
   t(176,110,"離れる",{size:12})+
   t(110,142,"置いていく、という一語",{size:12}),
 ex:[["I left my bag on the train.","電車にかばんを残してしまった"],
     ["Leave me alone. / leave the door open","放っておく、ドアを開けたままにする"]],
 note:"go と put が合わさった語です。自分が離れるので「出発する」、残るものに目を向ければ「置き忘れる、そのままにする」になります。"},

{page:"02",cat:"手の内に入れる",w:"lose",core:"手の内から抜け落ちて、行き先が分からない",
 svg:person(34,102)+
   zone(66,40,126,64,"手の届く範囲")+
   '<rect x="110" y="56" width="44" height="34" rx="6" fill="none" stroke="#c9d8d0" stroke-width="3" stroke-dasharray="6 5"/>'+
   qarrow(132,94,156,124,174,132,{color:ORANGE,w:3,hs:9})+
   t(188,124,"?",{c:ORANGE,size:22,a:"end"})+
   t(96,132,"圏内から外へ落ちる",{size:12}),
 ex:[["I lost my keys.","鍵が自分の圏内から抜け落ちた"],
     ["lose weight / lose the game","体重が減る、勝ちを手にできない"]],
 note:"have の反対です。圏内から出て所在が分からないので「失う」、競争なら勝ちが手に入らないので「負ける」になります。"},

{page:"02",cat:"手の内に入れる",w:"find",core:"探した末に、目の前に現れる",
 svg:'<rect x="40" y="46" width="128" height="72" rx="10" fill="#f6faf8" stroke="'+GREEN+'" stroke-width="2.5" stroke-dasharray="7 6"/>'+
   '<path d="M52 108 Q80 62 108 96 Q130 120 150 78" fill="none" stroke="'+SUB+'" stroke-width="2" stroke-dasharray="5 4"/>'+
   obox(126,60,40,34,{r:6})+
   '<circle cx="86" cy="76" r="17" fill="none" stroke="'+ORANGE+'" stroke-width="3.5"/>'+
   '<line x1="98" y1="88" x2="112" y2="102" stroke="'+ORANGE+'" stroke-width="4" stroke-linecap="round"/>'+
   t(110,136,"手間の後に、見つかる",{size:12}),
 ex:[["I found my wallet.","探した末に財布が見つかった"],
     ["I found it difficult.","やってみて、難しいと分かった"]],
 note:"探す過程が前提にあり、結果だけを言う語です。だから I found it difficult は「試した結果そう分かった」で、最初からそう思っていた場合には使いません。"},

{page:"02",cat:"相手に渡す",w:"carry",core:"抱えたまま、いっしょに動く",
 svg:person(64,108)+
   obox(46,44,52,30,{r:6})+
   arrow(104,84,192,84,{hs:10})+
   '<path d="M64 74 V80" stroke="'+GREEN+'" stroke-width="3"/>'+
   t(148,64,"荷物も同じ速さで動く",{size:12})+
   ground(126)+
   t(110,142,"運んでいる間ずっと支える",{c:ORANGE,size:12}),
 ex:[["She carried the box upstairs.","箱を抱えて上へ運んだ"],
     ["carry out a plan / carry on","計画を最後まで運ぶ、そのまま続ける"]],
 note:"bring や take が着く先を見るのに対し、carry は運んでいる途中を見ます。だから carry out (最後まで運ぶ = やり遂げる) や carry on (運び続ける) になります。"}
,
{page:"03",cat:"行いと生み出し",w:"make",core:"材料に力を加えて、なかった形を生む",
 svg:'<circle cx="34" cy="92" r="13" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="2.5"/>'+
   '<circle cx="58" cy="70" r="11" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="2.5"/>'+
   '<circle cx="40" cy="56" r="9" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="2.5"/>'+
   arrow(78,76,124,76,{hs:10})+
   obox(136,50,58,54,{r:8})+
   t(46,124,"材料",{c:GREEN,size:12})+t(165,124,"出来上がり",{c:ORANGE,size:12})+
   t(101,50,"力を加える",{size:12}),
 ex:[["She made a cake.","材料からケーキという形を生んだ"],
     ["It made me happy. / make him wait","私を happy な形に変えた、彼を待つ形にする"]],
 note:"make は形を変えて結果を生む語です。だから make him wait は強い使役になり、相手の意思に関係なくその形にします。get him to wait は説得して切り替えるので、まったく別の手つきです。"},

{page:"03",cat:"行いと生み出し",w:"do",core:"中身は言わず、行いを実行する",
 svg:person(48,102)+
   '<path d="M76 66 Q104 50 128 66" fill="none" stroke="'+ORANGE+'" stroke-width="3"/>'+head(128,66,0.6,9,ORANGE)+
   '<rect x="108" y="74" width="84" height="44" rx="8" fill="none" stroke="'+SUB+'" stroke-width="2.5" stroke-dasharray="7 6"/>'+
   t(150,102,"何をするか",{size:13})+
   t(110,140,"中身は別の語が決める",{size:12}),
 ex:[["What are you doing? / I did my homework.","何をしているか、宿題という行いを実行した"],
     ["It'll do. / do the dishes","それで用は足りる、皿を洗う"]],
 note:"do は行いの箱そのものです。中身が空でも使えるので疑問文や否定文の助動詞になり、do the dishes のように「その場面で決まっている作業」を指せます。"},

{page:"03",cat:"行いと生み出し",w:"let",core:"妨げずに、そのまま通す",
 svg:'<line x1="104" y1="30" x2="104" y2="56" stroke="'+GREEN+'" stroke-width="5" stroke-linecap="round"/>'+
   '<line x1="104" y1="104" x2="104" y2="130" stroke="'+GREEN+'" stroke-width="5" stroke-linecap="round"/>'+
   arrow(22,80,186,80,{hs:11})+
   t(58,54,"門を開けておく",{c:GREEN,size:12})+
   t(146,118,"止めない",{c:ORANGE,size:12})+
   t(110,146,"押すのではなく、許す",{size:12}),
 ex:[["Let me try. / Let him go.","やらせて、行かせてやる"],
     ["Let's go.","私たちが行くのを止めない、つまり行こう"]],
 note:"make が力で形を変えるのに対し、let は力を使いません。開けておくだけです。だから許可になり、Let's は「そうするのを妨げない」から誘いになります。"},

{page:"03",cat:"行いと生み出し",w:"help",core:"横から力を添えて、進みを楽にする",
 svg:ground(122)+
   obox(58,76,54,46,{r:6})+
   arrow(118,88,176,88,{hs:10})+
   arrow(40,66,86,66,{color:GREEN,w:2.5,hs:8})+
   t(64,52,"添える力",{c:GREEN,size:12})+
   t(158,64,"進みやすくなる",{c:ORANGE,size:12})+
   t(110,146,"主役は相手のまま",{size:12}),
 ex:[["He helped me carry it.","運ぶのに力を添えてくれた"],
     ["This helps you sleep.","眠るのを楽にしてくれる"]],
 note:"動かす主役は相手のままで、こちらは足すだけです。だから help me carry のように to を省ける形が普通で、相手の行いにそのまま重なります。"},

{page:"03",cat:"働かせる・試す",w:"work",core:"仕組みがはたらいて、効果が出る",
 svg:'<circle cx="74" cy="76" r="26" fill="none" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<circle cx="74" cy="76" r="8" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="2.5"/>'+
   '<circle cx="122" cy="76" r="18" fill="none" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<circle cx="122" cy="76" r="6" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="2.5"/>'+
   '<path d="M74 44 A32 32 0 0 1 100 58" fill="none" stroke="'+ORANGE+'" stroke-width="3"/>'+head(100,58,0.9,9,ORANGE)+
   arrow(146,76,194,76,{hs:10})+
   t(74,124,"かみ合っている",{c:GREEN,size:12})+
   t(172,110,"効く",{c:ORANGE,size:12})+
   t(110,146,"人にも薬にも機械にも使う",{size:12}),
 ex:[["The elevator doesn't work.","仕組みがはたらいていない"],
     ["The medicine worked. / I work at a bank.","薬が効いた、銀行という仕組みの中ではたらく"]],
 note:"仕事だけの語ではありません。中心は「はたらいて効果が出る」なので、機械、薬、計画にも使えます。work out は「動かして答えが出る」です。"},

{page:"03",cat:"働かせる・試す",w:"run",core:"途切れずに動き続ける",
 svg:'<path d="M20 100 Q58 44 96 100 Q134 44 172 100" fill="none" stroke="'+ORANGE+'" stroke-width="3.5" stroke-linecap="round"/>'+
   dot(172,100,9)+
   arrow(178,100,200,100,{w:2.5,hs:8})+
   t(112,32,"止まらずに流れる",{size:12})+
   t(110,134,"走る、動かし続ける、経営する",{size:12}),
 ex:[["The engine is running. / He ran to the door.","エンジンが動き続けている、走っていった"],
     ["She runs a small shop.","小さな店を回し続けている"]],
 note:"連続して動いている絵です。だから機械の稼働、川の流れ、店の経営、プログラムの実行まで同じ語でいえます。work は効くか、run は動き続けているかです。"},

{page:"03",cat:"働かせる・試す",w:"use",core:"道具として手に取り、目的に当てる",
 svg:gbox(30,62,48,34,{r:6})+
   arrow(86,79,140,79,{hs:10})+
   '<circle cx="164" cy="79" r="24" fill="none" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<circle cx="164" cy="79" r="9" fill="'+ORANGE+'" opacity=".9"/>'+
   t(54,120,"道具",{c:GREEN,size:12})+t(164,120,"目的",{c:GREEN,size:12})+
   t(110,46,"目的に向けて当てる",{c:ORANGE,size:12}),
 ex:[["Use a knife. / use English at work","ナイフを道具として使う、英語を仕事で使う"],
     ["I used to live here.","かつてはそうしていた、という過去の習慣"]],
 note:"手段と目的が両方いる語です。used to が「かつて」になるのは、その形が習慣として使われていた、という同じ絵の名残です。"},

{page:"03",cat:"働かせる・試す",w:"try",core:"うまくいくか分からないまま、一度当ててみる",
 svg:'<circle cx="164" cy="74" r="30" fill="none" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<circle cx="164" cy="74" r="12" fill="none" stroke="'+GREEN+'" stroke-width="3"/>'+
   arrow(24,74,128,74)+
   '<path d="M24 100 Q90 116 136 96" fill="none" stroke="'+ORANGE+'" stroke-width="2.5" stroke-dasharray="6 5"/>'+
   t(74,50,"当たるか分からない",{size:12})+
   t(74,132,"外れたらもう一度",{c:ORANGE,size:12})+
   t(164,120,"ねらい",{c:GREEN,size:12}),
 ex:[["Try this soup. / I tried to open it.","試しに飲んでみる、開けようとやってみた"],
     ["try doing it another way","別のやり方でやってみる"]],
 note:"try to do は「当てにいったが結果は不明」、try doing は「実際にやってみて様子を見る」です。当たった後を語るなら manage to do になります。"},

{page:"03",cat:"働かせる・試す",w:"play",core:"決まった枠の中で、動かして楽しむ",
 svg:'<rect x="24" y="40" width="172" height="76" rx="10" fill="#f6faf8" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<line x1="110" y1="40" x2="110" y2="116" stroke="'+GREEN+'" stroke-width="2" stroke-dasharray="6 5"/>'+
   dot(72,80,11)+dot(150,66,9,GREEN)+
   qarrow(82,78,116,58,142,64,{w:2.5,hs:8})+
   t(110,30,"ルールのある場",{c:GREEN,size:12})+
   t(110,138,"その中で動かす",{c:ORANGE,size:12}),
 ex:[["play tennis / play the piano","ルールのある場で動く、楽器を鳴らして動かす"],
     ["play a role / play a video","役を演じる、動画を動かす"]],
 note:"遊びだけでなく「枠の中で動かす」が中心です。だから楽器も、役も、再生ボタンも play になります。枠がない自由な遊びには have fun を使います。"},

{page:"03",cat:"そこに置く",w:"set",core:"あるべき位置に、きちんと据える",
 svg:ground(122)+
   '<rect x="72" y="86" width="76" height="36" rx="4" fill="#f6faf8" stroke="'+GREEN+'" stroke-width="3" stroke-dasharray="6 5"/>'+
   obox(78,88,64,32,{r:4})+
   arrow(110,48,110,78,{hs:10})+
   t(110,36,"合う場所がある",{c:GREEN,size:12})+
   t(110,146,"ぴったり収める",{c:ORANGE,size:12}),
 ex:[["Set the vase on the table.","花瓶を机の定位置に据える"],
     ["set an alarm / set a date","目覚ましを合わせる、日付を決める"]],
 note:"put よりも「正しい位置に合わせる」が強い語です。時計を合わせる、日程を決める、設定する、はどれも枠に合わせて固定する絵です。"}
,
{page:"04",cat:"見る",w:"look",core:"自分から視線を向ける",
 svg:eye(52,76)+
   arrow(78,76,150,76)+
   gbox(158,54,42,44,{r:6})+
   t(114,52,"こちらから向ける",{c:ORANGE,size:12})+
   t(52,120,"見る側",{c:GREEN,size:12})+t(179,120,"対象",{c:GREEN,size:12}),
 ex:[["Look at this.","こちらから視線を向ける"],
     ["He looks tired.","彼の見え方がこちらに届く、つまり疲れて見える"]],
 note:"矢印の向きが自分から出ているので、look には必ず意図があります。だから look at のように向ける先を示す語が要ります。"},

{page:"04",cat:"見る",w:"see",core:"向こうから目に入ってくる",
 svg:eye(168,76)+
   gbox(20,54,42,44,{r:6})+
   arrow(70,76,142,76)+
   t(106,52,"勝手に入ってくる",{c:ORANGE,size:12})+
   t(41,120,"対象",{c:GREEN,size:12})+t(168,120,"見える側",{c:GREEN,size:12}),
 ex:[["I can see the tower.","塔が目に入っている"],
     ["I see. / I saw the movie.","分かった、映画を見た（内容が頭に入った）"]],
 note:"look と矢印が逆です。努力せずに入ってくるので、I see が「分かった」になり、意識して見る watch とは役割が分かれます。"},

{page:"04",cat:"見る",w:"watch",core:"動くものを、追い続けて見る",
 svg:eye(46,74)+
   '<path d="M76 100 Q114 46 152 92" fill="none" stroke="'+SUB+'" stroke-width="2" stroke-dasharray="5 4"/>'+
   dot(152,92,10)+
   arrow(70,80,112,66,{w:2.5,hs:8})+arrow(70,86,132,84,{w:2.5,dash:true,hs:8})+
   t(124,34,"動きを目で追う",{c:ORANGE,size:12})+
   t(110,134,"時間の幅がある",{size:12}),
 ex:[["Watch the ball. / watch TV","ボールの動きを追う、テレビを見続ける"],
     ["Watch your step.","足元の変化に注意を向けたままにする"]],
 note:"see が一瞬でも成り立つのに対し、watch には時間の幅と注意が要ります。動かない絵は look at、動くものは watch が基本です。"},

{page:"04",cat:"聞く・感じる",w:"hear",core:"音が向こうから耳に入る",
 svg:ear(166,76)+
   '<circle cx="66" cy="76" r="12" fill="'+ORANGE+'" opacity=".9"/>'+
   '<path d="M88 56 Q100 76 88 96" fill="none" stroke="'+ORANGE+'" stroke-width="3"/>'+
   '<path d="M104 46 Q120 76 104 106" fill="none" stroke="'+ORANGE+'" stroke-width="3"/>'+
   '<path d="M120 38 Q140 76 120 114" fill="none" stroke="'+ORANGE+'" stroke-width="2.5" opacity=".6"/>'+
   t(66,112,"音源",{c:ORANGE,size:12})+t(168,116,"耳",{c:GREEN,size:12})+
   t(110,140,"意識しなくても届く",{size:12}),
 ex:[["I heard a noise.","音が勝手に耳に入った"],
     ["I heard from him.","彼から知らせが入った"]],
 note:"see と同じで受け身の絵です。だから聞こうとしていなくても成り立ち、hear from (知らせが届く) にも伸びます。"},

{page:"04",cat:"聞く・感じる",w:"listen",core:"耳を傾けて、こちらから取りにいく",
 svg:ear(58,76)+
   '<path d="M84 60 L146 34 M84 92 L146 118" fill="none" stroke="'+ORANGE+'" stroke-width="2.5" stroke-dasharray="6 5"/>'+
   arrow(150,76,96,76,{hs:10})+
   dot(168,76,11,GREEN)+
   t(120,20,"耳を向ける範囲",{c:ORANGE,size:12})+
   t(110,140,"意識して取りにいく",{size:12}),
 ex:[["Listen to me.","こちらから耳を向けて聞く"],
     ["I listened to the radio.","意識してラジオを聞いた"]],
 note:"look と同じで自分から向ける絵なので、listen にも to が要ります。hear は入ってくる、listen は取りにいく、と対になります。"},

{page:"04",cat:"聞く・感じる",w:"feel",core:"触れたものが、体の内側に伝わる",
 svg:'<path d="M150 46 Q186 76 150 106" fill="none" stroke="'+GREEN+'" stroke-width="3"/>'+
   obox(96,62,40,30,{r:6})+
   arrow(148,76,140,76,{color:SUB,w:2.5,hs:7})+
   '<path d="M80 56 Q60 76 80 96" fill="none" stroke="'+ORANGE+'" stroke-width="3"/>'+
   '<path d="M62 46 Q38 76 62 106" fill="none" stroke="'+ORANGE+'" stroke-width="2.5" opacity=".6"/>'+
   t(40,130,"内側に響く",{c:ORANGE,size:12,a:"start"})+
   t(166,130,"触れるもの",{c:GREEN,size:12,a:"end"})+
   t(110,30,"体と心が受け取る",{size:12}),
 ex:[["I feel cold. / Feel this cloth.","寒さが体に伝わる、布を触って確かめる"],
     ["I feel that he's right.","正しいという感じが自分の内に立つ"]],
 note:"外から来たものが内側に届く絵です。だから体の感覚、気持ち、何となくの判断まで同じ語で言えます。"},

{page:"04",cat:"頭の中",w:"think",core:"頭の中で、部品を動かす",
 svg:'<circle cx="104" cy="78" r="46" fill="#f6faf8" stroke="'+GREEN+'" stroke-width="3"/>'+
   obox(80,54,24,22,{r:4})+obox(112,80,24,22,{r:4})+
   '<rect x="78" y="88" width="22" height="20" rx="4" fill="none" stroke="'+ORANGE+'" stroke-width="2.5" stroke-dasharray="5 4"/>'+
   qarrow(108,78,124,60,116,52,{w:2.5,hs:8})+
   qarrow(100,82,84,86,92,92,{w:2.5,hs:8})+
   t(204,40,"動いている",{c:ORANGE,size:12,a:"end"})+
   t(110,142,"まだ固まっていない",{size:12}),
 ex:[["I'm thinking about it.","頭の中で動かしている最中"],
     ["I think it's true.","今の時点でそう置いている、という控えめな断定"]],
 note:"動かしている最中なので、think は進行形にでき、断定も弱まります。固まって動かない状態が know です。"},

{page:"04",cat:"頭の中",w:"know",core:"頭の中に、もう固定されている",
 svg:'<circle cx="104" cy="78" r="46" fill="#f6faf8" stroke="'+GREEN+'" stroke-width="3"/>'+
   obox(78,62,52,34,{r:6})+
   '<line x1="72" y1="56" x2="136" y2="56" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<line x1="72" y1="102" x2="136" y2="102" stroke="'+GREEN+'" stroke-width="3"/>'+
   t(204,40,"動かない",{c:ORANGE,size:12,a:"end"})+
   t(110,142,"すでに置かれている",{size:12}),
 ex:[["I know him. / I know the answer.","彼のことも答えも、もう頭の中にある"],
     ["I've known her for years.","長く知っている状態が続いている"]],
 note:"固定されているので進行形にしません。知るという切り替わりの瞬間を言いたいときは get to know や find out を使います。"},

{page:"04",cat:"頭の中",w:"want",core:"自分の中に空いた穴が、外へ手を伸ばす",
 svg:'<circle cx="62" cy="80" r="34" fill="#f6faf8" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<circle cx="62" cy="80" r="15" fill="none" stroke="'+ORANGE+'" stroke-width="3" stroke-dasharray="6 5"/>'+
   arrow(100,80,150,80,{hs:10})+
   gbox(158,60,40,40,{r:6})+
   t(62,132,"欠けている",{c:ORANGE,size:12})+t(178,132,"欲しいもの",{c:GREEN,size:12})+
   t(110,38,"埋めたい",{size:12}),
 ex:[["I want water. / I want to go.","水が欠けている、行きたい"],
     ["This wants fixing.","直しが足りていない、という古い言い方"]],
 note:"欠けているから手が伸びる、という絵です。もともと「足りない」が原義で、want to は自分の穴を埋めにいく形です。"},

{page:"04",cat:"頭の中",w:"need",core:"それが無いと、成り立たない",
 svg:ground(126)+
   gbox(34,92,46,34,{r:4})+gbox(140,92,46,34,{r:4})+
   '<rect x="88" y="92" width="44" height="34" rx="4" fill="none" stroke="'+ORANGE+'" stroke-width="3" stroke-dasharray="6 5"/>'+
   '<rect x="34" y="52" width="152" height="32" rx="6" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   arrow(110,88,110,72,{color:ORANGE,w:2.5,hs:8})+
   t(110,40,"上が崩れる",{size:12})+
   t(110,146,"欠けたら支えられない",{c:ORANGE,size:12}),
 ex:[["I need your help.","助けが無いと成り立たない"],
     ["You don't need to come.","来ることが必要条件になっていない"]],
 note:"want が「欲しい」なら need は「無いと壊れる」です。柱が抜けると上が落ちる絵なので、好みではなく条件の話になります。"},
{page:"05",cat:"口から出す",w:"say",core:"口から、ことばそのものを出す",
 svg:person(44,116)+
   bubble(76,40,120,40,"ことばの中身")+
   arrow(60,92,80,80,{color:SUB,w:2.5,hs:7})+
   t(136,126,"相手は要らない",{size:12}),
 ex:[["He said yes. / What did you say?","出てきたことばそのものを問題にする"],
     ["It says 10 o'clock on the sign.","看板にそう書いてある"]],
 note:"中身に焦点があるので、say の後ろには言った内容が来ます。相手を置くときは say to me のように to が必要で、say me とは言えません。"},

{page:"05",cat:"口から出す",w:"tell",core:"中身を、相手に届ける",
 svg:person(30,116)+
   person(192,116)+
   bubble(66,38,96,34,"中身")+
   arrow(166,62,186,80,{hs:9})+
   arrow(48,92,64,78,{color:SUB,w:2.5,hs:7})+
   t(110,130,"受け取る相手が要る",{c:ORANGE,size:12}),
 ex:[["Tell me the truth.","中身を私に届ける"],
     ["He told me to wait.","待つように、という指示を届けた"]],
 note:"届け先が要るので tell me が自然で、tell to me とは言いません。say は中身、tell は相手、と役割が分かれています。"},

{page:"05",cat:"口から出す",w:"speak",core:"声を出す、その行為そのもの",
 svg:person(48,112)+
   '<path d="M76 54 Q92 76 76 98" fill="none" stroke="'+ORANGE+'" stroke-width="3"/>'+
   '<path d="M92 44 Q112 76 92 108" fill="none" stroke="'+ORANGE+'" stroke-width="3"/>'+
   '<path d="M108 36 Q132 76 108 116" fill="none" stroke="'+ORANGE+'" stroke-width="2.5" opacity=".6"/>'+
   dot(158,52,8,GREEN)+dot(184,70,8,GREEN)+dot(156,96,8,GREEN)+dot(186,110,8,GREEN)+
   t(110,26,"一方向に声が出る",{size:12})+
   t(200,142,"聞き手は複数でもよい",{c:GREEN,size:12,a:"end"}),
 ex:[["He speaks English.","英語という声を出せる"],
     ["May I speak to Mr. Sato?","佐藤さんと話したいのですが"]],
 note:"中身よりも「声を出す能力や行為」に焦点があります。だから言語や演説に使い、双方向のやり取りには talk が向きます。"},

{page:"05",cat:"口から出す",w:"talk",core:"ことばを行き来させる",
 svg:person(40,110)+person(180,110)+
   bubble(58,34,48,26,"　")+
   '<rect x="120" y="70" width="48" height="26" rx="13" fill="#fff" stroke="'+GREEN+'" stroke-width="3"/>'+
   arrow(70,66,116,72,{w:2.5,hs:8})+
   arrow(150,100,80,96,{color:GREEN,w:2.5,hs:8})+
   t(110,136,"行きと帰りがある",{c:ORANGE,size:12}),
 ex:[["We talked for an hour.","1 時間やり取りした"],
     ["Let's talk about it.","それについて話し合おう"]],
 note:"往復するので相手が要り、talk with や talk to を伴います。speak が一方向、talk が双方向という違いです。"},

{page:"05",cat:"口から出す",w:"ask",core:"相手に投げて、返ってくるのを待つ",
 svg:person(32,112)+person(190,112)+
   bubble(62,32,52,28,"?")+
   arrow(76,66,150,66,{hs:10})+
   arrow(168,96,72,96,{color:GREEN,w:3,dash:true,hs:9})+
   t(120,132,"答えや物が返ってくる",{c:GREEN,size:12}),
 ex:[["I asked him the way.","道を尋ねて、答えを待った"],
     ["He asked for help. / ask me to come","助けを求めた、来てほしいと頼んだ"]],
 note:"返りの矢印が本質です。答えが返れば質問、物や行いが返れば依頼になります。ask for は「求める対象」を示す形です。"},

{page:"05",cat:"口から出す",w:"call",core:"声を届けて、こちらに向かせる",
 svg:person(34,112)+
   '<path d="M62 62 Q78 80 62 98" fill="none" stroke="'+ORANGE+'" stroke-width="3"/>'+
   '<path d="M78 52 Q98 80 78 108" fill="none" stroke="'+ORANGE+'" stroke-width="3"/>'+
   '<circle cx="158" cy="80" r="22" fill="none" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<rect x="130" y="30" width="72" height="26" rx="6" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="2.5"/>'+
   t(166,48,"名前の札",{c:GREEN,size:12})+
   '<line x1="158" y1="56" x2="158" y2="58" stroke="'+GREEN+'" stroke-width="2"/>'+
   t(110,140,"呼ぶ、名づける、電話する",{size:12}),
 ex:[["Call me tomorrow. / He called my name.","電話で声を届ける、名前を呼んだ"],
     ["We call him Ken.","彼にケンという札を付けて呼ぶ"]],
 note:"声を届けて相手をこちらに向ける絵です。名前の札を貼る使い方 (call him Ken) も、その名で呼ぶという同じ働きから来ています。"},

{page:"05",cat:"見せる・指す",w:"show",core:"相手の見える所に、置いてやる",
 svg:eye(174,60)+
   person(40,116)+
   obox(74,48,70,44,{r:6})+
   arrow(148,64,156,62,{color:SUB,w:2.5,hs:7})+
   '<line x1="109" y1="92" x2="109" y2="100" stroke="'+GREEN+'" stroke-width="3"/>'+
   t(109,124,"相手の視界に入れる",{c:ORANGE,size:12})+
   t(110,146,"見せた結果、伝わる",{size:12}),
 ex:[["Show me your ticket.","切符を私の見える所に出す"],
     ["The graph shows a rise.","グラフが上昇を見せている"]],
 note:"tell がことばで届けるのに対し、show は見える形で届けます。だから道案内でも Show me the way は地図や先導、Tell me the way はことばでの説明です。"},

{page:"05",cat:"見せる・指す",w:"mean",core:"記号が、中身を指している",
 svg:gbox(20,58,62,40,{r:6})+
   t(51,84,"ことば",{c:GREEN,size:13})+
   arrow(90,78,132,78)+
   obox(140,52,58,52,{r:8})+
   t(169,122,"指している中身",{c:ORANGE,size:12,a:"end"})+
   t(110,38,"表と中身を結ぶ",{size:12}),
 ex:[["What does this word mean?","このことばはどの中身を指すのか"],
     ["I didn't mean to hurt you.","傷つける中身を指してはいなかった"]],
 note:"表に出ている形と、その先の中身を結ぶ矢印です。だから意図 (mean to do) も、結果として何を指すか (This means war) も同じ語になります。"},

{page:"05",cat:"見せる・指す",w:"write",core:"記号にして外に出し、あとに残す",
 svg:'<rect x="98" y="40" width="96" height="86" rx="6" fill="#fff" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<line x1="112" y1="64" x2="180" y2="64" stroke="'+ORANGE+'" stroke-width="3"/>'+
   '<line x1="112" y1="82" x2="180" y2="82" stroke="'+ORANGE+'" stroke-width="3"/>'+
   '<line x1="112" y1="100" x2="152" y2="100" stroke="'+ORANGE+'" stroke-width="3"/>'+
   '<path d="M40 104 L78 62" stroke="'+GREEN+'" stroke-width="5" stroke-linecap="round"/>'+
   '<path d="M78 62 L86 70 L74 54 Z" fill="'+GREEN+'"/>'+
   t(56,128,"手から出す",{c:GREEN,size:12})+
   t(146,140,"消えずに残る",{c:ORANGE,size:12}),
 ex:[["Write your name here.","名前を記号として紙に残す"],
     ["He wrote to me. / write a song","手紙をくれた、曲を書き残す"]],
 note:"say が声で消えるのに対し、write は形が残ります。残るからこそ、write down (書き留める) や written rule (書かれた規則) が生まれます。"},

{page:"05",cat:"見せる・指す",w:"read",core:"並んだ記号を、頭に取り込む",
 svg:'<rect x="26" y="40" width="88" height="86" rx="6" fill="#fff" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<line x1="40" y1="62" x2="100" y2="62" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<line x1="40" y1="80" x2="100" y2="80" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<line x1="40" y1="98" x2="80" y2="98" stroke="'+GREEN+'" stroke-width="3"/>'+
   arrow(122,80,158,80,{hs:10})+
   '<circle cx="180" cy="80" r="20" fill="#f6faf8" stroke="'+ORANGE+'" stroke-width="3"/>'+
   obox(170,70,20,20,{r:4})+
   t(180,124,"頭に入る",{c:ORANGE,size:12})+
   t(70,140,"記号の並び",{c:GREEN,size:12}),
 ex:[["I read the report.","記号を取り込んで中身にした"],
     ["The sign reads 'No Entry.'","看板がそう読める"]],
 note:"write の逆向きです。記号から中身を取り出すので、read between the lines (行間を読む) のように書かれていない中身まで取ることもできます。"},
{page:"06",cat:"始まりと終わり",w:"start",also:"begin",core:"止まっていた線が、動き出す",
 svg:timeline(112)+
   '<line x1="56" y1="46" x2="56" y2="112" stroke="'+GREEN+'" stroke-width="4"/>'+
   dot(56,80,10)+
   arrow(56,80,178,80,{hs:10})+
   t(56,36,"ここから",{c:GREEN,size:12})+
   t(124,60,"動きが生まれる",{c:ORANGE,size:12})+
   t(110,140,"前は止まっていた",{size:12}),
 ex:[["The movie starts at seven.","7 時に動き出す"],
     ["Start the engine. / She started crying.","エンジンをかける、泣き出した"]],
 note:"start は動き出す瞬間そのもので、機械を動かす意味にも使えます。begin は同じ意味でやや硬く、物を動かす形には向きません。"},

{page:"06",cat:"始まりと終わり",w:"stop",core:"進んでいたものが、途中で止まる",
 svg:timeline(112)+
   arrow(24,80,124,80,{hs:10})+
   wall(140,44,112)+
   '<line x1="126" y1="66" x2="126" y2="94" stroke="'+ORANGE+'" stroke-width="3" stroke-dasharray="4 4"/>'+
   t(70,58,"進んでいた",{c:ORANGE,size:12})+
   t(96,140,"途中でも止まれる",{size:12}),
 ex:[["The train stopped. / Stop the car.","電車が止まった、車を止める"],
     ["Stop talking. / He stopped to talk.","話すのをやめる、話すために立ち止まった"]],
 note:"終わりまで行ったかは問いません。stop -ing はその行いを止める、stop to do は別の用のために立ち止まる、と絵が分かれます。"},

{page:"06",cat:"始まりと終わり",w:"finish",also:"end / complete",core:"最後まで行って、線が終わる",
 svg:timeline(112)+
   arrow(26,80,150,80,{hs:10})+
   '<line x1="162" y1="40" x2="162" y2="80" stroke="'+GREEN+'" stroke-width="4"/>'+
   '<path d="M162 42 L194 52 L162 62 Z" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="2.5"/>'+
   t(86,58,"残りがなくなる",{c:ORANGE,size:12})+
   t(110,140,"やり切ったことを言う",{size:12}),
 ex:[["I finished the report.","最後まで行って終わった"],
     ["The road ends here.","道がここで終わる"]],
 note:"stop が途中で止めるのに対し、finish は残りがゼロになったことを言います。だから finish reading は読み切った、stop reading は途中でやめた、です。"},

{page:"06",cat:"出会いと動き",w:"pass",core:"関門を抜けて、先へ進む",
 svg:'<line x1="104" y1="30" x2="104" y2="58" stroke="'+GREEN+'" stroke-width="5" stroke-linecap="round"/>'+
   '<line x1="104" y1="102" x2="104" y2="130" stroke="'+GREEN+'" stroke-width="5" stroke-linecap="round"/>'+
   arrow(20,80,190,80,{hs:11})+
   dot(60,80,9)+
   t(104,20,"関門",{c:GREEN,size:12})+
   t(158,112,"抜けた後も進む",{c:ORANGE,size:12,a:"end"}),
 ex:[["We passed the station. / pass the exam","駅を通り過ぎた、試験を通った"],
     ["Pass me the salt. / Time passed.","塩をこちらへ通す、時が過ぎた"]],
 note:"前置詞の past と同じ「通り過ぎる」絵です。関門を抜ければ合格、物を通せば手渡し、時間が通れば経過になります。"},

{page:"06",cat:"出会いと動き",w:"meet",core:"別々の線が、1 点で出会う",
 svg:arrow(22,40,98,76,{color:GREEN,w:3,hs:9})+
   arrow(198,40,122,76,{hs:9})+
   dot(110,82,12)+
   arrow(110,94,110,124,{color:SUB,w:2.5,dash:true,hs:8})+
   t(110,142,"ここから一緒に進む",{size:12})+
   t(110,28,"別々に来る",{size:12}),
 ex:[["I met her at the station.","別々に来て駅で出会った"],
     ["meet the deadline / meet the standard","締め切りに間に合う、基準に届く"]],
 note:"2 つが同じ点に来る絵です。だから条件や基準に「届いて重なる」意味にもなり、meet the requirements のように使えます。"},

{page:"06",cat:"出会いと動き",w:"move",core:"あった場所から、別の場所へ変わる",
 svg:ground(122)+
   '<rect x="24" y="76" width="52" height="46" rx="6" fill="none" stroke="'+SUB+'" stroke-width="2.5" stroke-dasharray="6 5"/>'+
   obox(136,76,52,46,{r:6})+
   arrow(84,98,128,98,{hs:10})+
   t(50,66,"元の場所",{size:12})+t(162,66,"新しい場所",{c:ORANGE,size:12})+
   t(110,142,"場所そのものが変わる",{size:12}),
 ex:[["We moved to Osaka.","住む場所が変わった"],
     ["Don't move. / It moved me.","動かないで、心を動かされた"]],
 note:"位置が変わることが本質なので、引っ越し、異動、心が動く、まで同じ語です。go は離れる向きを言い、move は位置の変化そのものを言います。"},

{page:"06",cat:"出会いと動き",w:"fall",core:"支えを失って、下へ落ちる",
 svg:'<rect x="24" y="52" width="58" height="14" rx="4" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   obox(96,38,40,32,{r:6})+
   qarrow(126,72,148,92,156,116)+
   ground(126)+
   '<line x1="140" y1="52" x2="152" y2="44" stroke="'+ORANGE+'" stroke-width="2.5"/>'+
   '<line x1="150" y1="66" x2="164" y2="58" stroke="'+ORANGE+'" stroke-width="2.5"/>'+
   t(64,88,"支えがない",{size:12})+
   t(110,146,"自分の力ではない",{c:ORANGE,size:12}),
 ex:[["The cup fell. / He fell asleep.","落ちた、眠りに落ちた"],
     ["Prices fell. / fall in love","価格が下がった、恋に落ちる"]],
 note:"自分の意思ではなく落ちる絵です。だから fall asleep や fall in love のように「気づいたらその状態になった」に使えます。"},

{page:"06",cat:"出会いと動き",w:"rise",also:"raise",core:"下から上へ上がる",
 svg:ground(126)+
   '<rect x="40" y="96" width="30" height="30" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="2.5"/>'+
   '<rect x="82" y="72" width="30" height="54" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="2.5"/>'+
   '<rect x="124" y="44" width="30" height="82" fill="'+ORANGE+'" opacity=".9"/>'+
   arrow(172,110,172,40,{hs:10})+
   t(96,30,"上がっていく",{c:ORANGE,size:12})+
   t(110,146,"rise は自分で、raise は持ち上げる",{size:12}),
 ex:[["The sun rises. / Prices rose.","日が昇る、価格が上がった"],
     ["Raise your hand.","手を持ち上げる"]],
 note:"rise は自分で上がり、raise は何かを持ち上げます。fall の反対が rise、drop させる側が raise、という対応です。"},

{page:"06",cat:"手を加える",w:"break",core:"ひとつだったものが、分かれる",
 svg:'<path d="M28 58 L92 58 L104 78 L92 98 L28 98 Z" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<path d="M192 58 L128 58 L116 78 L128 98 L192 98 Z" fill="'+ORANGE+'" opacity=".9"/>'+
   '<line x1="110" y1="34" x2="110" y2="48" stroke="'+ORANGE+'" stroke-width="3"/>'+
   '<line x1="88" y1="38" x2="96" y2="50" stroke="'+ORANGE+'" stroke-width="3"/>'+
   '<line x1="132" y1="38" x2="124" y2="50" stroke="'+ORANGE+'" stroke-width="3"/>'+
   t(110,126,"境目はでたらめ",{size:12})+
   t(110,146,"元に戻せない",{c:ORANGE,size:12}),
 ex:[["The glass broke. / He broke his promise.","割れた、約束を破った"],
     ["The machine broke down.","機械が壊れて止まった"]],
 note:"きれいな境目がなく、元に戻せないのが break です。だから約束、記録、静けさなど「ひとつのまとまり」を壊す話にも使えます。"},

{page:"06",cat:"手を加える",w:"cut",core:"刃を入れて、まっすぐ分ける",
 svg:gbox(28,58,72,44,{r:4})+
   obox(126,58,66,44,{r:4})+
   '<line x1="112" y1="34" x2="112" y2="126" stroke="'+SUB+'" stroke-width="2.5" stroke-dasharray="6 5"/>'+
   '<path d="M112 40 L104 24 L120 24 Z" fill="'+SUB+'"/>'+
   t(64,126,"残す側",{c:GREEN,size:12})+t(159,126,"切り離す側",{c:ORANGE,size:12})+
   t(110,146,"境目を自分で決める",{size:12}),
 ex:[["Cut the paper in half.","紙をまっすぐ半分に分ける"],
     ["cut costs / cut it short","費用を削る、短く切り上げる"]],
 note:"break と違って、どこで分けるかを自分で決めます。だから費用を削る、話を切り上げる、のように「意図して減らす」に使えます。"},

{page:"06",cat:"手を加える",w:"open",core:"ふさがっていた口が、通れるようになる",
 svg:'<path d="M60 40 L60 120" stroke="'+GREEN+'" stroke-width="5" stroke-linecap="round"/>'+
   '<path d="M60 40 L108 54 L108 106 L60 120 Z" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   '<path d="M150 40 L150 120" stroke="'+GREEN+'" stroke-width="5" stroke-linecap="round"/>'+
   arrow(112,80,188,80,{hs:10})+
   t(86,30,"開く",{c:GREEN,size:12})+
   t(160,110,"通れる",{c:ORANGE,size:12})+
   t(110,146,"中と外がつながる",{size:12}),
 ex:[["Open the window. / The shop opens at ten.","窓を開ける、店が開く"],
     ["open an account / open up to me","口座を開く、心を開いて話す"]],
 note:"外と中がつながる絵です。だから店が開く、口座を開く、心を開く、が全部同じ形で言えます。"},

{page:"06",cat:"手を加える",w:"close",also:"shut",core:"口をふさいで、通れなくする",
 svg:'<path d="M60 40 L60 120" stroke="'+GREEN+'" stroke-width="5" stroke-linecap="round"/>'+
   '<path d="M150 40 L150 120" stroke="'+GREEN+'" stroke-width="5" stroke-linecap="round"/>'+
   '<rect x="60" y="40" width="90" height="80" fill="'+GLIGHT+'" stroke="'+GREEN+'" stroke-width="3"/>'+
   arrow(190,80,158,80,{hs:10})+
   '<line x1="168" y1="66" x2="184" y2="94" stroke="#c46b52" stroke-width="3"/>'+
   '<line x1="184" y1="66" x2="168" y2="94" stroke="#c46b52" stroke-width="3"/>'+
   t(105,30,"閉じる",{c:GREEN,size:12})+
   t(110,146,"行き来が切れる",{c:ORANGE,size:12}),
 ex:[["Close the door. / The shop is closed.","ドアを閉める、店が閉まっている"],
     ["close a deal / close the gap","取引をまとめる、差を詰める"]],
 note:"open の反対で、通り道をふさぎます。すき間を詰める絵から close the gap、締めてまとめる絵から close a deal になります。"}
];

var COMPARE = [
{page:"06",q:"stop / finish — 途中か、やり切ったか",rows:[
  ["I stopped reading.","途中でやめた。残りがある"],
  ["I finished reading.","最後まで読み切った。残りはゼロ"]]},
{page:"06",q:"stop -ing / stop to do — 何をやめたのか",rows:[
  ["He stopped smoking.","たばこを吸う行い自体をやめた"],
  ["He stopped to smoke.","吸うために、歩くのをやめて立ち止まった"]]},
{page:"06",q:"break / cut — 境目を誰が決めるか",rows:[
  ["break the stick","でたらめな境目で分かれる。元に戻せない"],
  ["cut the stick","自分が決めた線でまっすぐ分ける"]]},
{page:"06",q:"rise / raise, fall / drop — 自分で動くか、動かすか",rows:[
  ["The price rose.","価格が自分で上がった"],
  ["They raised the price.","誰かが価格を持ち上げた"],
  ["The cup fell.","支えを失って落ちた"],
  ["He dropped the cup.","自分の手から落とした"]]},
{page:"05",q:"say / tell / speak / talk — 4 つの役割",rows:[
  ["say it","中身を口から出す。相手は要らない"],
  ["tell me","相手に届ける。届け先が必要"],
  ["speak English","声を出す行為や能力。一方向"],
  ["talk with him","ことばを往復させる。双方向"]]},
{page:"05",q:"tell / show — ことばか、見える形か",rows:[
  ["Tell me the way.","ことばで説明してもらう"],
  ["Show me the way.","地図や先導で、見える形にしてもらう"]]},
{page:"05",q:"ask / call — 返りを待つか、向かせるか",rows:[
  ["I asked him.","投げて、答えや行いが返るのを待つ"],
  ["I called him.","声を届けて、こちらに向かせる。電話も同じ"]]},
{page:"04",q:"look / see / watch — 矢印はどちら向きか",rows:[
  ["Look at the screen.","自分から視線を向ける。意図がある"],
  ["I can see the screen.","向こうから目に入っている。努力はいらない"],
  ["Watch the screen.","動きを時間をかけて追い続ける"]]},
{page:"04",q:"hear / listen — 入ってくるか、取りにいくか",rows:[
  ["I heard my name.","勝手に耳に入った"],
  ["Listen to me.","こちらから耳を向ける。to が要る"]]},
{page:"04",q:"think / know — 動いているか、固まっているか",rows:[
  ["I'm thinking about it.","頭の中で動かしている。進行形にできる"],
  ["I know it.","もう固定されている。進行形にしない"]]},
{page:"04",q:"want / need — 欲しいのか、無いと壊れるのか",rows:[
  ["I want a new phone.","自分の中の欠けを埋めたい"],
  ["I need a new phone.","無いと用が成り立たない。条件の話"]]},
{page:"03",q:"make / get / have / let — 人を動かす四段階",rows:[
  ["make him wait","力で形を変える。相手の意思は関係ない"],
  ["get him to wait","説得して、相手のスイッチを入れる"],
  ["have him wait","立場として頼み、その形を自分の圏内に持つ"],
  ["let him wait","妨げない。待つのを許す"]]},
{page:"03",q:"do / make — 行いか、出来上がりか",rows:[
  ["do the work","行いを実行する。あとに残る物は問題にしない"],
  ["make a table","なかった物が形として残る"]]},
{page:"03",q:"work / run — 効くのか、動き続けるのか",rows:[
  ["The plan worked.","はたらいて効果が出た"],
  ["The bus runs every ten minutes.","止まらずに動き続けている"]]},
{page:"03",q:"try to do / try doing — 結果を言うか、様子を見るか",rows:[
  ["I tried to call him.","かけようとした。つながったかは言っていない"],
  ["I tried calling him.","実際にかけてみて、どうなるか見た"]]},
{page:"02",q:"take / bring — 離れるのか、近づくのか",rows:[
  ["Take this to the office.","こちらから離れて、オフィスへ持っていく"],
  ["Bring this to the office.","オフィス側にいる人の視点で、持ってくる"]]},
{page:"02",q:"have / get / take — 持つまでの距離",rows:[
  ["I have a ticket.","もう圏内にある。動きはない"],
  ["I got a ticket.","持っていない状態から持つ状態へ切り替わった"],
  ["I'll take this ticket.","並んでいる中からこれを選び取る"]]},
{page:"02",q:"keep / hold / leave — 保つ手つきの違い",rows:[
  ["Keep it clean.","きれいな状態を保つ。手で押さえなくてよい"],
  ["Hold it steady.","手でつかんで動かさない"],
  ["Leave it as it is.","手をつけず、そのまま残して離れる"]]},
{page:"02",q:"send / bring / carry — 自分は動くのか",rows:[
  ["I sent the file.","物だけが動く。自分は残る"],
  ["I brought the file.","自分もいっしょに来た"],
  ["I carried the file.","運んでいる途中に目を向けている"]]},
{page:"01",q:"be / get / become — 状態か、切り替えか、結果か",rows:[
  ["It is dark.","今の姿を言う。＝で結ぶだけ"],
  ["It gets dark at six.","暗くない状態から暗い状態へ切り替わる"],
  ["It became dark.","切り替わりきって、その姿に落ち着いた"]]},
{page:"01",q:"go / come — 原点はいつも話し手",rows:[
  ["I'm going to your place.","自分のいる所から離れる"],
  ["I'm coming to your place.","相手のいる側へ近づく。日本語の「行く」でも come"]]},
{page:"01",q:"keep / stay — 押さえるのか、とどまるのか",rows:[
  ["Keep the window open.","窓という別のものを、開いた状態に押さえておく"],
  ["Stay awake.","自分が起きている状態にとどまる"]]},
{page:"01",q:"get / turn / grow — 変わり方の速さと形",rows:[
  ["get cold","ふつうに冷たくなる。いちばん広く使える"],
  ["turn cold","急に、意外な感じで冷たい面が出る"],
  ["grow cold","だんだん、時間をかけて冷たくなる"]]}
];
