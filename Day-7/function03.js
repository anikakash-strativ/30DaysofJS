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
  