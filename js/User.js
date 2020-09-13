// // // class  User {
// // //     // username
// // //     // password
// // //     constructor(username,password){
// // //         this.username = username;
// // //         this.password = password
// // //     }
// // //     validatePassword() {
// // //      if    (this.password.length > 6 ) {
// // //          return true
// // //      } else return false
// // //     }
// // // }

class Button {
    constructor (width, height, background, value) {
        this.width = width;
        this.height = height;
        this.background = background;
        this.value = value;
    }
    render() {
      let button =  document.createElement("button");
      button.className = 'btn1';
      button.innerHTML = 'Push me'
      button.style.width = this.width
      button.style.height = this.height
      document.body.append(button);
    }
}

class ModernButton extends Button {
    constructor(width, height, background, value,borderRadius) {
        super(width, height, background, value)
        this.borderRadius = borderRadius;
    }
}