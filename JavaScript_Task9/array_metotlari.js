//map methodlari için örnek

/*
//map örnek 1; eski fiyatlari zamli hale getiren map methodu
const eski_fiyatlar = [100, 200, 300, 400, 500];
const zamli_fiyatlar = eski_fiyatlar.map((fiyat) => fiyat * 1.2);
console.log(eski_fiyatlar);
console.log(zamli_fiyatlar);
*/

{//örnek 1; eski fiyatlari zamli hale getiren map methoduna muadil reduce methodu
const eski_fiyatlar = [100, 200, 300, 400, 500];
const zamli_fiyatlar = [];
eski_fiyatlar.forEach((fiyat) => {
	const yeni_fiyat = fiyat * 1.2;
	zamli_fiyatlar.push(yeni_fiyat);
}); 
console.log("eski fiyatlar : ",eski_fiyatlar);
console.log("zamlı fiyatlar : ",zamli_fiyatlar);
}

/*
//map örnek 2; bir kullanici listesinden sadece isimleri almak için map methodu
const kullanicilar = [
	{ id: 1, ad: "Elif", email: "elifsuedaakin@gmail.com" },
	{ id: 2, ad: "Ahmet", email: "ahmet@gmail.com" },
	{ id: 3, ad: "Ayşe", email: "ayse@gmail.com" },
];
const kullanici_adlari = kullanicilar.map((kullanici) => {
	return kullanici.ad;
});
console.log(kullanici_adlari);
*/

{//örnek 2; bir kullanici listesinden sadece isimleri almak için map methoduna muadil reduce methodu 
	const kullanicilar = [
		{ id: 1, ad: "Elif", email: "elifsuedaakin@gmail.com" },
		{ id: 2, ad: "Ahmet", email: "ahmet@gmail.com" },
		{ id: 3, ad: "Ayşe", email: "ayse@gmail.com" },
	];
	const isimler=kullanicilar.reduce((biriktirici,kullanici)=>{
		biriktirici.push(kullanici.ad); //adları  boş bir diziye ekliyoruz
		return biriktirici; // dizinin güncel halini döndürüyoruz
	}, [] ); //başlangıç değeri oalrka boş bir dizi tutuyoruz 
	console.log(isimler);
}
/*
//map örnek 3: fiyatlari formatlayip yazdiran map methodu
const fiyatlar = [100, 200, 300, 400, 500];
const formatli_fiyatlar = fiyatlar.map((fiyat) => {
	const birim = "₺";
	const yeni_deger = fiyat + birim;
	return yeni_deger;
});
console.log(fiyatlar);
console.log(formatli_fiyatlar);
*/
{//örnek 3: fiytalari formatlayip yazdiran map methoduna muadil reduce methodu
	const fiyatlar = [100, 200, 300, 400, 500];
	const formatli_fiyatlar = fiyatlar.reduce((biriktirici, fiyat) => {
		biriktirici.push(fiyat + "₺");
		return biriktirici;
	},[] );
	console.log(formatli_fiyatlar);

}
{//from methodunu kullanarak fiyatları formatlama 
	const fiyatlar=[100,200,300,400,500];
	const formatli_fiyatlar=Array.from(fiyatlar,(fiyat) => {
	  return fiyat+"₺" });
	console.log(formatli_fiyatlar);
}

//filter methodu
/*
//filter için örnek 1: sinavi geçen öğrencileri filtreleme
{
	const notlar = [100, 90, 80, 95, 30, 40, 8, 20];
	const gecen_notlar = notlar.filter((not) => {
		const gecen_not = 50;
		const gecti_mi = not >= gecen_not;
		return gecti_mi;
	});
	console.log("başlangiçtaki notlar :", notlar);
	console.log("geçen notlar : ", gecen_notlar);
}
*/
{ //örnek 1'e muadil reduce methodu 
	const notlar = [100, 90, 80, 95, 30, 40, 8, 20];
	const gecen_notlar = notlar.reduce((biriktirici, not) => {
		if (not >= 50) {
			biriktirici.push(not);
		}
		return biriktirici;
	}, []);	
 console.log("başlangiçtaki notlar :", notlar);
 console.log("geçen notlar : ", gecen_notlar);
}
/*
//filter örnek 2: Stokta olan ürünleri filtreleme
const urunler = [
	{ urun_ad: "Laptop", stoktaVar: true },
	{ urun_ad: "Telefon", stoktaVar: false },
	{ urun_ad: "Saat", stoktaVar: true },
];
const stokta_olanlar = urunler.filter((urun) => {
	const durum = urun.stoktaVar === true;
	return durum;
});
console.log("Stokta olan ürünler : ", stokta_olanlar);
*/
{ //örnek 2 ye muadil reduce methodu 
	const urunler = [
		{ urun_ad: "Laptop", stoktaVar: true },
		{ urun_ad: "telefon", stoktaVar: false },
		{ urun_ad: "saat", stoktaVar: true },
	];
	const stokta_olanlar = urunler.reduce((biriktirici, urun) => {
      if (urun.stoktaVar === true) {
			biriktirici.push(urun);
		}
		return biriktirici;
	}, []);
	console.log("Stokta olan ürünler : ", stokta_olanlar);
}

/*
//filter örnek 3:Belirli bir harfle başlayan isimleri bulma
const isimler = ["Elif", "Reem", "Ayşe", "Ahmet", "Mehmet"];
const a_ile_başlayanlar = isimler.filter((isim) => {
	const ilkHarf = isim[0];
	const kontrol = ilkHarf === "A";
	return kontrol;
});
console.log("A ile başlayan isimler : ", a_ile_başlayanlar);
*/
{//ismi a ile başlayanalrı bulabilmek için filter methoduna muadil reduce methodu 
	const isimler=["Elif","Reem","Ayşe","Ahmet","Mehmet"];
		const a_ile_baslayanlar=isimler.reduce((biriktirici,isim)=>{
			if(isim[0]==="A"){
				biriktirici.push(isim);
			}
			return biriktirici;
		},[]);
		console.log("A ile başlayan isimler : ",a_ile_baslayanlar);
}

//reduce methodu
/*
// reduce örnek 1:sayilarin toplamini bulamak
const sayilar = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const toplam = sayilar.reduce((kumbara, su_anki_sayi) => {
	console.log("kumbaradaki miktar: ", kumbara, "gelen sayi ", su_anki_sayi);
	return kumbara + su_anki_sayi;
}, 0);
console.log("toplam : ", toplam);
*/
{
	const sayilar=[10,20,30,40,50,60,70,80,90,100];
	let toplam=0;
	sayilar.forEach((sayi)=>{
		toplam=toplam+sayi;		
} );
console.log("toplam : ",toplam);
}
/*
//reduce örnek 2: alişveriş sepetinin toplam fiyatini bulma
const sepet = [
	{ urun_ad: "Laptop", fiyat: 5000 },
	{ urun_ad: "Telefon", fiyat: 3000 },
	{ urun_ad: "Saat", fiyat: 1000 },
];
const toplam_tutar = sepet.reduce((kumbara, su_anki_urun) => {
	const yeni_toplam = kumbara + su_anki_urun.fiyat;
	return yeni_toplam;
}, 0);
console.log("Toplam tutar : ", toplam_tutar, "TL");
*/
{//reduce a muadıl for each fonksıyonu
	const sepet=[
		{urun_ad:"Laptop",fiyat:5000},
		{urun_ad:"Telefon",fiyat:3000},
		{urun_ad:"Saat",fiyat:1000}
	]; 
	let toplam_tutar=0;
	sepet.forEach((urun)=>{
		toplam_tutar=toplam_tutar+urun.fiyat;
	});
	console.log("Toplam tutar : ",toplam_tutar,"TL");
} 
/*
//reduce örnek 3: dizideki en büyük sayiyi bulma
const dereceler = [10, 20, 30, 40, 50, 60];
const en_yuksek_derece = dereceler.reduce((en_buyuk, su_anki_derece) => {
	// Eğer şu an baktiğimiz derece, kumbaradaki en büyükten büyükse;
	// Yeni en büyük değerimiz şu anki derecedir
	if (su_anki_derece > en_buyuk) {
		return su_anki_derece;
	} else {
		// değilse , eski en büyük derece en_buyuk olarak kalmaya devam eder
		return en_buyuk;
	}
}, dereceler[0]);
console.log("Bu gün ölçülen En yüksek derece : ", en_yuksek_derece);
*/
{ //dizideki en büyük sayıyı bulmak için reduce'a muadil 
let en_buyuk_sayi=0;
const sayilar=[10,20,30,40,50,60];
sayilar.forEach((sayi)=>{
	if(sayi>en_buyuk_sayi){
		en_buyuk_sayi=sayi;
	}
});
console.log("Bu gün ölçülen En yüksek derece : ",en_buyuk_sayi);	
}

/*
{
	//find methidu
	//find örnek 1: Belirli bir sayiyi bulma
	const sayilar = [10, 20, 30, 40, 50, 60, 70];
	const bulunan_sayi = sayilar.find((sayi) => {
		const kontrol = sayi > 50;
		return kontrol;
	});
	console.log("50 ' den büyük olan ilk sayi: ", bulunan_sayi);
}
*/
{
	const sayilar=[10,20,30,40,50,60,70];
	const bulunan_sayi=sayilar.filter((sayi)=>{
		const kontrol=sayi>50;
		return kontrol;
	});
	console.log("50 ' den büyük olan sayilar: ",bulunan_sayi);	
}
/*
//find örnek 2:kullanici listesinden ID ile kişi bulma
{
	const kullanicilar = [
		{ id: 1, ad: "Elif", email: "elifsuedaakin@gmail.com" },
		{ id: 2, ad: "Ahmet", email: "ahmet@gmail.com" },
		{ id: 3, ad: "Ayşe", email: "ayse@gmail.com" },
	];
	const hedef_kullanici = kullanicilar.find((kullanici) => {
		const kontrol = kullanici.id === 2;
		return kontrol;
	});
	console.log("Bulunan kullanici : ", hedef_kullanici.ad);
}
*/
{
	const kullanicilar=[
		{id:1,ad:"Elif",email:"elifsuedaakin@gmail.com"},
		{id:2,ad:"Ahmet",email:"ahmet@gmail.com"},
		{id:3,ad:"Ayşe",email:"ayse@gmail.com"} ];
		const hedef_kullanici=kullanicilar.filter((kullanici)=>{
			const kontrol=kullanici.id===2;
			return kontrol;
		});
		console.log("Bulunan kullanici : ",hedef_kullanici[0].ad);//hedef kullanıcı dizisindeki ilk obje
}
/*
//find örnek 3: bir dizide belirli bir kelimeyi aramak
const sehirler = ["Ankara", "İstanbul", "İzmir", "Bursa"];
const bulunan_sehir = sehirler.find((sehir) => {
	return sehir[0] === "İ";
});
console.log("Bulunan şehir : ", bulunan_sehir);
*/
{//bir dizideki belirli kelimeyi aramak için find methoduna muadıl filter methodu
	const sehirler=["Ankara","İstanbul","İzmir","Bursa"];
	const bulunan_sehir=sehirler.filter((sehir)=>{
		return sehir[0]==="İ";
	});
	console.log("Bulunan şehir : ",bulunan_sehir);
}

//some methodu
/*
//some methodu örnek 1: bir sinifta 90 in ustunde not var mi
{
	const notlar = [100, 90, 80, 70, 60];
	const sampiyon_var_mi = notlar.some((not) => {
		const kontrol = not > 90;
		return kontrol;
	});
	console.log("Sampiyon var mi : ", sampiyon_var_mi);
}
*/
{
	const notlar=[100,90,80,70,60];
	const sampiyon=notlar.find((not)=>{
		const kontrol=not>90;
		return kontrol;
	});
    const sampiyon_var_mi = sampiyon !== undefined;//sampiyon değeri varsa tanımsız (undefined) değildir diyoruz
	console.log("Sampiyon var mi : ", sampiyon_var_mi);
}
/*
//some örnek 2: yasakli kelime var mi
{
	const kelimeler = ["Ankara", "İstanbul", "harika", "begonya", "yasak_kelime"];
	const yasakli_kelime_var_mi = kelimeler.some((kelime) => {
		const kontrol = kelime === "yasak_kelime";
		return kontrol;
	});
	console.log("Yasakli kelime var mi : ", yasakli_kelime_var_mi);
}
*/
{//includes kullanarak aranan kelıme var mı bakmak 
	const kelimeler=["Ankara","İstanbul","harika","begonya","yasak_kelime"];
	const yasakli_kelime_var_mi=kelimeler.includes("yasak_kelime");
	console.log("Yasakli kelime var mi : ",yasakli_kelime_var_mi);
}

/*
//some örnek 3: Sepetimde bir ürünün kargo bedava kampanyasina sahip olup olmadigi
{
	const sepetim = [
		{ urunAd: "Defter", kargoBedava: false },
		{ urunAd: "Kitap", kargoBedava: true },
		{ urunAd: "Kalem", kargoBedava: false },
		{ urunAd: "Silgi", kargoBedava: true },
	];
	const bedavaKargoVarMi = sepetim.some((urun) => {
		const kontrol = urun.kargoBedava === true;
		return kontrol;
	});
	console.log("Sepette kargosu bedava olan ürün var mi : ", bedavaKargoVarMi);
}*/
{
	const sepetim=[
		{urunAd:"Defter",kargoBedava:false},
		{urunAd:"Kitap",kargoBedava:true},
		{urunAd:"Kalem",kargoBedava:false},
		{urunAd:"Silgi",kargoBedava:true} ];
	const bedava_kargo_listesi=sepetim.filter((urun)=>{
		const kontrol=urun.kargoBedava===true;
		return kontrol;
	});
	const bedavaKargoVarMi=bedava_kargo_listesi.length>0;
	console.log("Sepette kargosu bedava olan ürün var mi : ",bedavaKargoVarMi);
}

//every methodu
/*
//every methodu örnek 1: Tüm Sinif sinavi geçti mi?
{
	const sinif_notlari = [100, 90, 80, 70, 60];
	const herkesGectiMi = sinif_notlari.every((not) => {
		const baraj = 50;
		const kontrol = not >= baraj;
		return kontrol;
	});
	console.log("siniftaki herkes geçti mi?", herkesGectiMi);
}
*/
{ //some kullanarak every methoduna muadıl sınıftakı herkesın gecıp gecmedııgını buldura method 
	const sinif_notlari=[100,90,80,70,60];
	const kalan_var_mi=sinif_notlari.some((not)=> not<50);
	const herkesGectiMi=!kalan_var_mi;
	console.log("siniftaki herkes geçti mi?",herkesGectiMi);	

}
/*
//every örnek 2: şifrelerin uzunluğu uygun mu ?(en az 6 karakter)
{
	const sifreler = ["123456", "password123", "abc123", "qwerty"];
	const tumSifrelerGuvenliMi = sifreler.every((sifre) => {
		const min_uzunluk = 6;
		const uygunMu = sifre.length >= min_uzunluk;
		return uygunMu;
	});
	console.log("Tüm şifreler güvenli mi? ", tumSifrelerGuvenliMi);
}
*/
{
	const sifreler=["123456","password123","abc123","qwerty","aaa"];
	const hataliSifreler=sifreler.filter((sifre)=>{ 
		return sifre.length<6 ;});
    const tumSifrelerGuvenliMi=hataliSifreler.length===0;//eğer hatalı şifrelerin listesi boşsa 
	console.log("Hatalı şifre sayısı :",hataliSifreler.length);
	console.log("Tüm şifreler güvenli mi? ",tumSifrelerGuvenliMi);
}
/*
//every örnek 3:Tüm ürünler stokta Mi ?kontrolü
{
	const siparişPaketi = [
		{ urun: "Laptop", stoktaVar: true },
		{ urun: "Telefon", stoktaVar: true },
		{ urun: "Saat", stoktaVar: false },
	];
	const paketHazirMi = siparişPaketi.every((ürün) => {
		const kontrol = ürün.stoktaVar === true;
		return kontrol;
	});
	console.log("Tüm ürünler stokta mi? ", paketHazirMi);
}
*/
{
	const siparişPaketi=[
		{urun:"Laptop",stoktaVar:true},
		{urun:"Telefon",stoktaVar:true},
		{urun:"Saat",stoktaVar:true} ];
		const eksik_urun_var_mi=siparişPaketi.some((urun)=>{
			const kontrol=urun.stoktaVar===false;
			return kontrol;
			});
		const stokta_var_mi=!eksik_urun_var_mi;
	    console.log("Tüm ürünler stokta mi? ",stokta_var_mi);
}

//forEach methodu
/*
//örnek 1:
{
	const renkler = ["Kirmizi", "Mavi", "Yeşil", "Sari"];
	renkler.forEach((renk, sira) => {
		console.log(sira + 1, ". Renk : ", renk);
	});
}
*/
{
	const renkler=["Kirmizi","Mavi","Yeşil","Sari"];
    const sıralanmıs_renkler=renkler.map((renk,sira)=> {
		return `${sira+1}. renk:${renk}`;
	});
	console.log(sıralanmıs_renkler);
}
/*
//örnek 2: Dişaridaki Bir değişkeni güncelleme
{
	const maaslar = [1000, 2000, 3000, 4000, 5000];
	let toplam_gider = 0;

	maaslar.forEach((maas) => {
		toplam_gider = toplam_gider + maas;
	});

	console.log("Şirketin toplam maaş gideri:", toplam_gider);
}
*/
{
	const maaslar=[1000,2000,3000,4000,5000];
	let toplam_gider=0;
    maaslar.map((maas)=>{
		toplam_gider=toplam_gider+maas;
	});
	console.log("Şirketin toplam maaş gideri:",toplam_gider);
}
/*
//örnek 3: öğrenci objelerine stajyer ünvani eklemek istiyoruz
{
	const stajyerler = [
		{ ad: "Elif", departman: "Yazilim" },
		{ ad: "Ahmet", departman: "Muhasebe" },
		{ ad: "Ayşe", departman: "İnsan Kaynaklari" },
	];
	stajyerler.forEach((kisi) => {
		kisi.unvan = "Yazilim Mühendisliği Stajyeri";
	});
	console.log("Güncel Liste: ", stajyerler);
}
*/
{
	const stajyerler=[
		{ad:"Elif",departman:"Yazilim"},
		{ad:"Ahmet",departman:"Muhasebe"},
		{ad:"Ayşe",departman:"İnsan Kaynaklari"} ];
    const guncel_stajyerler=stajyerler.reduce((yeni_dizi,kisi)=>{
	  yeni_dizi.push({
		...kisi, unvan:"Yazilim Mühendisliği Stajyeri"
	});
	  return yeni_dizi;
	  },[]);
	  console.log("Güncel Liste: ",guncel_stajyerler);
}


