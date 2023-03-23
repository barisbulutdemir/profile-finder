class Profile{
    constructor(){
        this.clientid = '',
        this.clientSecret = ''
    }

    //profil getirmek için ihtiyacımız olan username i burda sabitliyoruz. 
    // daha sonra bu fonsiyonu çağırıdığımızda username ile inputtan gelen texti eşitliyoruz.
    async getProfile(username) {
        const profileResponse = await fetch
        (`https://jsonplaceholder.typicode.com/users?username=${username}`);
        const profile = await 
        profileResponse.json();
        return {
            // bu tarz noktalarda isim aynı kullanıldığı için js saece profil 
            // yazmana izin veriyor. ama görünmesi için böyle bıraktım.
            profile : profile
        }
    }
}