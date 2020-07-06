e = User.create(username: "Eric", password: "abc123")
j = User.create(username: "Jallen", password: "abc123")
m = User.create(username: "Meghann", password: "abc123")

e.snacks.create(name: "Water")
Snack.create(user: j, name: "Soda")
Snack.create(user_id: m.id, name: "Seltzer")