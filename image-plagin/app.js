import {upload} from'./upload.js'
import firebase from 'firebase/app'
import 'firebase/storage';

const  firebaseConfig = {
    apiKey: "AIzaSyDvSTGid6W_b3_xpprZLc_92OJKghuQjcY",
    authDomain: "realestate-84150.firebaseapp.com",
    databaseURL: "https://realestate-84150.firebaseio.com",
    projectId: "realestate-84150",
    storageBucket: "realestate-84150.appspot.com",
    messagingSenderId: "758331665855",
    appId: "1:758331665855:web:73dbad14b49ad3ccca050a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 const st = firebase.storage()
 

 upload ('#file' , {
     multi: true,
     accept: ['.jpg','.png' ,'jpeg', 'gif'],
     onUpload(files ,blocks) {
         
         files.forEach((file , idx) => {
        const ref = st.ref(`images/${file.name}`)
          const task = ref.put(file)
          task.on( 'state_changed', snapshot => {
            const percent = (snapshot.bytesTransferred / snapshot.totalBytes * 100).toFixed(0)
         const  block = blocks[idx].querySelector('.preview-info-progress')
          block.textContent = percent + '%'
          block.style.width = percent + '%'
        }, error => {
              console.log(error);
          }, () => {
              task.snapshot.ref.getDownloadURL()
              .then(url => {
                  console.log('Download', url);
              })
          })
        
        
        })
     }
 })