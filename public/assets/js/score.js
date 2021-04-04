var form = document.getElementById('form');
            form.onsubmit = function (e) {
                e.preventDefault();

                var points = 0;
                var errcode = 0;
                var driven;
                var drivenMinutes;
                var drivenPeople;
                var biked;
                var bikedMinutes;
                var walked;
                var walkedMinutes;
                var flown;
                var flownMinutes;
                if (form.drivenBool.checked == true) {
                    if (form.drivenMinutes.value <= 0) {
                        alert('Put something in Minutes Driven');
                        errcode = 1;
                    }
                    if (form.drivenPeople.value <= 0) {
                        alert('there is more than one person in the car');
                        errcode = 1;
                    } else if (form.drivenPeople.value == 1) {
                        points -= form.drivenMinutes.value;
                    } else {
                        points += 10 * form.drivenMinutes.value * form.drivenPeople.value;
                    }
                }
                if (form.bikedBool.checked == true) {
                    if (form.bikedMinutes.value <= 0) {
                        alert('Put something in Minutes Biked');
                        errcode = 1;
                    }
                    points += 100 * form.bikedMinutes.value;
                }
                if (form.walkedBool.checked == true) {
                    if (form.walkedMinutes.value <= 0) {
                        alert('Put something in Minutes Walked');
                        errcode = 1;
                    }
                    points += 200 * form.walkedMinutes.value;
                }
                if (form.flownBool.checked == true) {
                    if (form.flownMinutes.value <= 0) {
                        alert('put something in Hours Flown');
                        errcode = 1;
                    }
                    points -= 100 * form.flownMinutes.value;
                }
                points = max(0,points)
                console.log(form);
                if (errcode == 0 && localStorage.getItem("email") != null) {
                    console.log(points);
                    var driven = form.drivenBool.checked ? 1 : 0;
                    var drivenMinutes = form.drivenMinutes.value ? form.drivenMinutes.value : 0;
                    var drivenPeople = form.drivenPeople.value ? form.drivenPeople.value : 0;
                    var biked = form.bikedBool.checked ? 1 : 0;
                    var bikedMinutes = form.bikedMinutes.value ? form.bikedMinutes.value : 0;
                    var walked = form.walkedBool.checked ? 1 : 0;
                    var walkedMinutes = form.walkedMinutes.value ? form.walkedMinutes.value : 0;
                    var flown = form.flownBool.checked ? 1 : 0;
                    var flownMinutes = form.flownMinutes.value ? form.flownMinutes.value : 0;

                    var email = localStorage.getItem("email");
                    var date = String(form.yearField.value) + "-" + String(form.monthField.value) + "-" + String(form.dayField.value);
                    console.log(date);
                    query = "INSERT INTO db.userdata3 (email, score, drive, minutes_driven, people_in_car, \
                    bike, minutes_biked, walk, minutes_walked, fly, minutes_flowndate, date) VALUES('" + email + "', '" + points + "', '" +
                        driven + "', '" + drivenMinutes + "', '" + drivenPeople + "', '" + biked + "', '" +
                        bikedMinutes + "', '" + walked + "', '" + walkedMinutes + "', '" + flown + "', '" + flownMinutes + "', '" + date +"');";
                    console.log(query);
                    $.ajax({
                        type: 'POST',
                        url: '/submit-element',
                        data: { command: query },
                        success: function (t) {
                            window.alert("Successfully submitted");
                        },
                        error: function (t) {
                        }
                    });
                }

            };