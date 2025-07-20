function updateTime() {
                        const now = new Date();
                        const hours = now.getHours();
                        const minutes = now.getMinutes().toString().padStart(2, '0');
                        document.getElementById("iphone-time").textContent = `${hours}:${minutes}`;
                    }

                    updateTime();
                    setInterval(updateTime, 60000);