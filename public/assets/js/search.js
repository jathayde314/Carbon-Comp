document.getElementById('friends').addEventListener('keypress', function (e) {
                    if (e.key === 'Enter') {
                        $.ajax({
                            type: 'POST',
                            url: '/friends',
                            data: { command: "SELECT id, email FROM db.userdata3 WHERE email = " + "'" + document.getElementById('friends').value + "';" },
                            success: function (t) {
                                if (t.length == 0) {
                                    window.alert("person does not have account");
                                }
                                else {
                                    window.location.href = "friends.html";
                                    localStorage.setItem("friendid", t[0].id)
                                    localStorage.setItem("friendemail", t[0].email)
                                }
                            },
                            error: function (t) {
                                console.log(t);
                            }
                        });
                    }
                });