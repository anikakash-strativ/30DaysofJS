function userIdGeneratedByUser() {
    const numChars = 5;
    const numIds = 3;
    
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; 
    let userIds = ''; 

    function generateRandomUserId(length) {
      let userId = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        userId += characters[randomIndex];
      }
      return userId;
    }
  

    for (let i = 0; i < numIds; i++) {
      userIds += generateRandomUserId(numChars) + '\n';
    }
    console.log(userIds); 
  }
  
  userIdGeneratedByUser();
  

  // 5 convertHexaToRgb :

  function convertHexaToRgb (hex){
    hex = hex.replace("#", '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;

    
  }

console.log(`Hex to RGB : ${convertHexaToRgb('#3E2A72')}`);
