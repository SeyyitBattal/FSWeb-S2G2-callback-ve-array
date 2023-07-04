const { fifaData } = require("./fifa.js");

/* Görev 1: 
	Verilen datayı parçalayarak aşağıdaki verileri (console.log-ing) elde ederek pratik yapın. 
	
	💡 İPUCU: Öncelikle datayı filtrelemek isteyebilirsiniz */

//(a) 2014 Dünya kupası Finali Evsahibi takım ismi (dizide "Home Team Name" anahtarı)

function görev1a(match) {
  const sonuc = match["Year"] === 2014 && match["Stage"] === "Final";
  return sonuc;
}
const fifafilter = fifaData.filter(görev1a);

console.log(fifafilter[0]["Home Team Name"]);

//(b) 2014 Dünya kupası Finali Deplasman takım ismi  (dizide "Away Team Name" anahtarı)

function görev1b(match) {
  const sonuc = match["Year"] === 2014 && match["Stage"] === "Final";
  return sonuc;
}
const fifafilter2 = fifaData.filter(görev1b);

console.log(fifafilter2[0]["Away Team Name"]);

//(c) 2014 Dünya kupası finali Ev sahibi takım golleri (dizide "Home Team Goals" anahtarı)

function görev1c(match) {
  const sonuc = match["Year"] === 2014 && match["Stage"] === "Final";
  return sonuc;
}
const fifafilter3 = fifaData.filter(görev1c);

console.log(fifafilter3[0]["Home Team Goals"]);

//(d)2014 Dünya kupası finali Deplasman takım golleri  (dizide "Away Team Goals" anahtarı)

function görev1d(match) {
  const sonuc = match["Year"] === 2014 && match["Stage"] === "Final";
  return sonuc;
}
const fifafilter4 = fifaData.filter(görev1d);

console.log(fifafilter4[0]["Away Team Goals"]);

//(e) 2014 Dünya kupası finali kazananı*/
function görev1e(match) {
  const sonuc = match["Year"] === 2014 && match["Stage"] === "Final";
  return sonuc;
}
const fifafilter5 = fifaData.filter(görev1e);

if (fifafilter5[0]["Home Team Goals"] > fifafilter5[0]["Away Team Goals"]) {
  console.log("Kazanan : ", fifafilter5[0]["Home Team Name"]);
} else if (
  fifafilter5[0]["Home Team Goals"] < fifafilter5[0]["Away Team Goals"]
) {
  console.log("Kazanan :", fifafilter5[0]["Away Team Name"]);
} else {
  console.log("Berabere");
}

/*  Görev 2: 
	Finaller adlı fonksiyonu kullanarak aşağıdakileri uygulayın:
	1. Bir dizi(array) olan Fifa datasını fonksiyonun birinci parametresi olarak alacak
	2. Sadece final maçlarını içeren nesnenin(object) datalarını filtreleyerek, bir dizi olarak döndürecek(return)
	
	💡 İPUCU - verilen data içindeki nesnelerin(objects) "Stage" anahtarına bakmalısınız
*/

function Finaller(fifaData) {
  const finalMaci = fifaData.filter((Finalmac) => Finalmac.Stage === "Final");
  return finalMaci;
}

/*  Görev 3: 
	Bir higher-order fonksiyonu olan Yillar isimli fonksiyona aşağıdakileri uygulayın: 
	1. fifaData dizisini(array) fonksiyonun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Finaller data setindeki tüm yılları içeren "years" adındaki diziyi(array) döndürecek
	*/

function Yillar(fifaData, Finaller) {
  const gorevuc = Finaller(fifaData);
  const sonucgorevuc = gorevuc.map((lanet) => lanet.Year);
  return sonucgorevuc;
}
const finalYillari = Yillar(fifaData, Finaller);

/*  Görev 4: 
	Bir higher-order fonksiyonunu olan Kazananlar isimli fonksiyona aşağıdakileri uygulayın:  
	1. fifaData dizisini(array) fonksiyonunun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Her final maçının kazananını (evsahibi ya da deplasman) belirleyecek
	💡 İPUCU: Beraberlikler(ties) için şimdilik endişelenmeyin (Detaylı bilgi için README dosyasına bakabilirsiniz.)
	4. Tüm kazanan ülkelerin isimlerini içeren `kazananlar` adında bir dizi(array) döndürecek(return)  */

function Kazananlar(fifaData, Finaller) {
  const gorevDort = Finaller(fifaData);
  const sonucgorevdort = gorevDort
    .map((maclar) => {
      if (maclar["Home Team Goals"] > maclar["Away Team Goals"]) {
        return maclar["Home Team Name"];
      } else if (maclar["Home Team Goals"] < maclar["Away Team Goals"]) {
        return maclar["Away Team Name"];
      } else {
        return "";
      }
    })
    .filter((kazanan1) => kazanan1 !== "");
  return sonucgorevdort;
}

/*  Görev 5: 
	Bir higher-order fonksiyonu olan YillaraGoreKazananlar isimli fonksiyona aşağıdakileri uygulayın:
	1. fifaData dizisini(array) fonksiyonunun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Görev 3'de yazdığınız Yillar fonksiyonunu, geriçağırım(callback) olarak fonksiyonun üçüncü parametresi olarak alacak
	4. Görev 4'de yazdığınız Kazananlar fonksiyonunu, geriçağırım(callback) olarak fonksiyonun dördüncü parametresi olarak alacak
	5. Her yıl için "{yıl} yılında, {ülke} dünya kupasını kazandı!" cümlesini(string) içeren bir diziyi(array) döndürecek
	
	💡 İPUCU: her cümlenin adım 4'te belirtilen cümleyle birebir aynı olması gerekmektedir.
*/

function YillaraGoreKazananlar(/* kodlar buraya */) {
  /* kodlar buraya */
}

/*  Görev 6: 
	Bir higher order fonksiyonu olan `OrtalamaGolSayisi` isimli fonksiyona aşağıdakileri uygulayın: 
	1. Görev 2'de yazdığınız `Finaller` fonksiyonunu birinci parametre olarak alacak; 'fifaData' dizisini argüman olarak eklediğinizden emin olun
	
	💡 İPUCU: Çağırma örneği: `OrtalamaGolSayisi(Finaller(fifaData));`
	
	2. Her maç için Ortalama toplam evsahibi gol sayısı ve toplam deplasman gol sayısını hesaplayacak (her maçta atılan toplam gol sayısı)
	
	3. Sonucun 2. ondalığını yuvarlayıp, bulunan değeri döndürecek(return)
	
	💡 İPUCU: .reduce, .toFixed (dizilim(syntax) için MDN'ye bakın) kullan, ve bunu 2 adımda yapın) 
	
*/

function OrtalamaGolSayisi(/* kodlar buraya */) {
  /* kodlar buraya */
}

/// EKSTRA ÇALIŞMALAR ///

/*  BONUS 1:  
	`UlkelerinKazanmaSayilari` isminde bir fonksiyon oluşturun, parametre olarak `data` ve `takım kısaltmalarını` alacak ve hangi ülkenin kaç dünya kupası olduğunu döndürecek
	
	İpucu: "takım kısaltmaları" (team initials) için datada araştırma yapın!
İpucu: `.reduce` Kullanın*/

function UlkelerinKazanmaSayilari(/* kodlar buraya */) {
  /* kodlar buraya */
}

/*  BONUS 2:  
EnCokGolAtan() isminde bir fonksiyon yazın, `data` yı parametre olarak alsın ve Dünya kupası finallerinde en çok gol atan takımı döndürsün */

function EnCokGolAtan(/* kodlar buraya */) {
  /* kodlar buraya */
}

/*  BONUS 3: 
EnKotuDefans() adında bir fonksiyon yazın, `data` yı parametre olarak alsın ve Dünya kupasında finallerinde en çok golü yiyen takımı döndürsün*/

function EnKotuDefans(/* kodlar buraya */) {
  /* kodlar buraya */
}

/* Hala vaktiniz varsa, README dosyasında listelenen hedeflerden istediğinizi aşağıdaki boşluğa yazabilirsiniz. */

/* Bu satırın aşağısındaki kodları lütfen değiştirmeyin */
function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
module.exports = {
  sa,
  Finaller,
  Yillar,
  Kazananlar,
  YillaraGoreKazananlar,
  OrtalamaGolSayisi,
};
