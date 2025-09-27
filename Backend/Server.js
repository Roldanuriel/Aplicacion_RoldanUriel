const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Uriel1985",
  database: "tienda"
});

db.connect(err => {
  if (err) {
    console.log("Error de conexión:", err);
  } else {
    console.log("Conectado a MySQL");
  }
});

// Obtener todos los productos
app.get("/productos", (req, res) => {
  db.query("SELECT * FROM productos", (err, results) => {
    if (err) res.send(err);
    else res.json(results);
  });
});

// Crear producto
app.post("/productos", (req, res) => {
  const { titulo, descripcion, precio, imagen } = req.body;
  db.query(
    "INSERT INTO productos (titulo, descripcion, precio, imagen) VALUES (?, ?, ?, ?)",
    [titulo, descripcion, precio, imagen],
    (err, result) => {
      if (err) res.send(err);
      else res.json({ message: "Producto creado", id: result.insertId });
    }
  );
});

// Editar producto
app.put("/productos/:id", (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion, precio, imagen } = req.body;
  db.query(
    "UPDATE productos SET titulo=?, descripcion=?, precio=?, imagen=? WHERE id=?",
    [titulo, descripcion, precio, imagen, id],
    (err) => {
      if (err) res.send(err);
      else res.json({ message: "Producto actualizado" });
    }
  );
});

// Eliminar producto
app.delete("/productos/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM productos WHERE id=?", [id], (err) => {
    if (err) res.send(err);
    else res.json({ message: "Producto eliminado" });
  });
});

// Iniciar servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
