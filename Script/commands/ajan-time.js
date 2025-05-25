const axios = require("axios");

module.exports = {
  config: {
    name: "AutoTime",
    version: "2.0",
    credits: "Islamick Cyber Chat",
    description: "নামাজের সময় স্বয়ংক্রিয়ভাবে নোটিফিকেশন পাঠায়।",
    commandCategory: "Islamic",
    countDown: 3,
  },
  
  onLoad: async ({ api }) => {
    const prayerTimes = {
      "06:45 AM": {
        message: "প্রিয় মুসলিম ভাই ও বোন, এখন ফজরের নামাজের জন্য প্রস্তুতি নিয়ে নিন। কিছু সময় বাকি নামাজ শুরু হবার!✨🧡",
        url: "https://drive.google.com/uc?id=1mP2HJlKR..."
      },
      "01:45 PM": {
        message: "প্রিয় মুসলিম ভাই ও বোন, এখন জোহরের নামাজের জন্য প্রস্তুতি নিয়ে নিন। কিছু সময় বাকি নামাজ শুরু হবার!🖤💫",
        url: "https://drive.google.com/uc?id=1mkNnhFFv..."
      },
      "07:00 PM": {
        message: "প্রিয় মুসলিম ভাই ও বোন, এখন মাগরিবের নামাজের জন্য প্রস্তুতি নিয়ে নিন। কিছু সময় বাকি নামাজ শুরু হবার!✨🧡",
        url: "https://drive.google.com/uc?id=1mB8EpEEb..."
      },
      "08:30 PM": {
        message: "প্রিয় মুসলিম ভাই ও বোন, এখন ইশার নামাজের জন্য প্রস্তুতি নিয়ে নিন। কিছু সময় বাকি নামাজ শুরু হবার!✨«",
        url: "https://drive.google.com/uc?id=1mNVwfsTE..."
      },
      "02:55 PM": {
        message: "প্রিয় মুসলিম ভাই ও বোন, এখন ইশার নামাজের জন্য প্রস্তুতি নিয়ে নিন। কিছু সময় বাকি নামাজ শুরু হবার!✨«",
        url: "https://drive.google.com/uc?id=1m5jiP4q9..."
      }
    };

    const checkTime = async () => {
      const currentTime = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      }).replace(",", "").trim();

      if (prayerTimes[currentTime]) {
        console.log(prayerTimes[currentTime].message);
        console.log(prayerTimes[currentTime].url);
        
        try {
          const imageStream = await axios.get(prayerTimes[currentTime].url, {
            responseType: "stream"
          });

          const msg = {
            body: prayerTimes[currentTime].message,
            attachment: imageStream.data
          };

          // Send to all threads (groups/chats)
          global.data.allThreadID.forEach(threadID => {
            api.sendMessage(msg, threadID);
          });
        } catch (error) {
          console.log("Failed to send message for time " + currentTime + ":", error);
        }
      }
      setTimeout(checkTime, 300000); // Check every 5 minutes (300000ms)
    };

    checkTime();
  },
  
  onStart: ({}) => {} // Empty function (not used)
};
