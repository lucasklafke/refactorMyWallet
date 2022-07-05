import authRepository from "../repositories/authRepository";
export async function signUp(req, res){
  try {
    const { name, email, password } = req.body;

    await authRepository.verifyUserExist(email)

    const hashedPassword = bcrypt.hashSync(password, 12);

    await connection.query(
      `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
      [name, email, hashedPassword]
    );

    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function signIn(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.sendStatus(422);
    }

    const { rows } = await connection.query(
      `SELECT * FROM "users" WHERE "email"=$1`,
      [email]
    );
    const [user] = rows;

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.sendStatus(401);
    }

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET
    );

    res.send({
      token,
    });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
