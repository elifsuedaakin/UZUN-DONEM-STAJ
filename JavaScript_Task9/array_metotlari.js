//map methodlari için örnek

//map örnek 1; eski fiyatlari zamli hale getiren map methodu
const eski_fiyatlar = [100, 200, 300, 400, 500];
const zamli_fiyatlar = eski_fiyatlar.map((fiyat) => fiyat * 1.2);
console.log(eski_fiyatlar);
console.log(zamli_fiyatlar);

//map örnek 2; bir kullanici listesinden sadece iismleri almak için map methodu
const kullanicilar = [
	{ id: 1, ad: "Elif", email: "elifsuedaakin@gmail.com" },
	{ id: 2, ad: "Ahmet", email: "ahmet@gmail.com" },
	{ id: 3, ad: "Ayşe", email: "ayse@gmail.com" },
];
const kullanici_adlari = kullanicilar.map((kullanici) => {
	return kullanici.ad;
});
console.log(kullanici_adlari);

//map örnek 3: fiytalari formatlayip yazdiran map methodu
const fiyatlar = [100, 200, 300, 400, 500];
const formatli_fiyatlar = fiyatlar.map((fiyat) => {
	const birim = "₺";
	const yeni_deger = fiyat + birim;
	return yeni_deger;
});
console.log(fiyatlar);
console.log(formatli_fiyatlar);

//filter methodu
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

//filter örnek 3:Belirli bir harfle başlayan isimleri bulma
const isimler = ["Elif", "Reem", "Ayşe", "Ahmet", "Mehmet"];
const a_ile_başlayanlar = isimler.filter((isim) => {
	const ilkHarf = isim[0];
	const kontrol = ilkHarf === "A";
	return kontrol;
});
console.log("A ile başlayan isimler : ", a_ile_başlayanlar);

//reduce methodu
// reduce örnek 1:sayilairn toplamini bulamak
const sayilar = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const toplam = sayilar.reduce((kumbara, su_anki_sayi) => {
	console.log("kumbaradaki miktar: ", kumbara, "gelen sayi ", su_anki_sayi);
	return kumbara + su_anki_sayi;
}, 0);
console.log("toplam : ", toplam);

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

//find örnek 3: bir dizide belirli bir keliömeyi aramak
const sehirler = ["Ankara", "İstanbul", "İzmir", "Bursa"];
const bulunan_sehir = sehirler.find((sehir) => {
	return sehir[0] === "İ";
});
console.log("Bulunan şehir : ", bulunan_sehir);

//some methodu
//some methodu örnek 1: bir sinifta 90 in ustunde not var mi
{
	const notlar = [100, 90, 80, 70, 60];
	const sampiyon_var_mi = notlar.some((not) => {
		const kontrol = not > 90;
		return kontrol;
	});
	console.log("Sampiyon var mi : ", sampiyon_var_mi);
}
//some örnek 2: yasakli kelime var mi
{
	const kelimeler = ["Ankara", "İstanbul", "harika", "begonya", "yasak_kelime"];
	const yasakli_kelime_var_mi = kelimeler.some((kelime) => {
		const kontrol = kelime === "yasak_kelime";
		return kontrol;
	});
	console.log("Yasakli kelime var mi : ", yasakli_kelime_var_mi);
}

//some örnek 3: Sepetimde birürünün kargo bedava kampanaysina sahip olup olmadigi
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
}

//every methodu
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

//forEach methodu
//örnek 1:
{
	const renkler = ["Kirmizi", "Mavi", "Yeşil", "Sari"];
	renkler.forEach((renk, sira) => {
		console.log(sira + 1, ". Renk : ", renk);
	});
}

//örnek 2: Dişaridaki Bir değişkeni güncelleme
{
	const maaslar = [1000, 2000, 3000, 4000, 5000];
	let toplam_gider = 0;

	maaslar.forEach((maas) => {
		toplam_gider = toplam_gider + maas;
	});

	console.log("Şirketin toplam maaş gideri:", toplam_gider);
}

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
