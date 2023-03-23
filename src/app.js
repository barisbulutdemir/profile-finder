const profile = new Profile();
const ui = new UI();
const searchProfile = document.querySelector('#searchProfile');



searchProfile.addEventListener('keyup', (event) => {
    let text = event.target.value;
    if(text!== '' ){

        // profiles.js de tanımlanan profil clasının getProfile fonsiyonunu çalıştırıyor
        // getProfile fonksiyonunda sabit olarak username istemiştik.
        // getProfili burda çağırıp gelen text i username e eşitliyor.
        profile.getProfile(text)
            .then(res => {
                if(res.profile.length === 0){

                } else {

                    //Yukarıda new diyip yeni ui nesnesi tanımmlıyoruz.
                    // Daha sonra da yeni oluşturduğuz ui ile gelen profil bilgisini eşitliyoruz.
                    ui.showProfile(res.profile[0]);
                }
                
            });
    }
});