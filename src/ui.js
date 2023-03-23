let nameLabel = document.querySelector('#nameLabel');

class UI {
    constructor(){
        this.nameLabel = document.querySelector('#nameLabel');

        this.profileContainer = document.querySelector('#profileContainer');
        this.alert = document.querySelector('#alert');
        this.phoneNumber = document.querySelector('#phoneNumber');

        this.addresLine = document.querySelector('adressLine');
    };

    showProfile(profile){
       this.nameLabel.innerHTML = `${profile.name}`;
       this.phoneNumber.innerHTML = `${profile.phone}`;
       this.addresLine.innerHTML =  `${profile.addres}`;


       

    }
}