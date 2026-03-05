// 1. Asenkron bir arrow function oluşturuyoruz
const kullanicilariGetir = async () => {
	try {
		// 2. Fetch ile veriyi adresten istiyoruz (Await: Cevap gelene kadar bekle)
		const response = await fetch("https://jsonplaceholder.typicode.com/users");

		// 3. Gelen ham yanıtı (response) okunabilir bir listeye (JSON) çeviriyoruz
		const data = await response.json();

		// 4. Görevin istediği gibi: Kullanıcı listesini konsola yazdırıyoruz
		console.log("--- Kullanıcı Listesi ---");
		console.log(data);
	} catch (error) {
		// Eğer internet koparsa veya bir hata olursa burası çalışır
		console.error("Bir hata oluştu:", error);
	}
};

// 5. Yazdığımız fonksiyonu çalıştırıyoruz
kullanicilariGetir();
