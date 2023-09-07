
        function updateClock() {
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            let ampm = "AM";

            // Convert to 12-hour format and determine AM/PM
            if (hours >= 12) {
                ampm = "PM";
                if (hours > 12) {
                    hours =  hours-12;
                }
            }

            // Add leading zero to minutes and seconds if less than 10
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            const timeString = hours + ":" + minutes + ":" + seconds + " " + ampm;
            document.getElementById("clock").textContent = timeString;
        }

        // Update the clock every second
        setInterval(updateClock, 1000);

        // Initial call to set the clock display
        updateClock();
