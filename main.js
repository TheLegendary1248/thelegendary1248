let timeSinceBirthDate = new Date(Date.now() - (Date.UTC(2003,3,31,4,19,0,0) - 5 * 60 * 60 * 1000))
document.getElementById("human_version").textContent = `v${timeSinceBirthDate.getUTCFullYear() - 1970}.${timeSinceBirthDate.getMonth() + 1}.${timeSinceBirthDate.getDay()}`
