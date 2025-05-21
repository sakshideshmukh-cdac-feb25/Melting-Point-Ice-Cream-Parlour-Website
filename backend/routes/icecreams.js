const express = require('express');
const pool = require('../config/db');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM ice_creams');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch ice creams' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM ice_creams WHERE id = ?', [req.params.id]);
    if (rows.length === 0)
      return res.status(404).json({ message: 'Ice cream not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch ice cream' });
  }
});

router.post('/', authenticateToken, async (req, res) => {
  try {
    const { name, brand, description, price, imageUrl, rating } = req.body;
    const [result] = await pool.query(
      'INSERT INTO ice_creams (name, brand, description, price, imageUrl, rating) VALUES (?, ?, ?, ?, ?, ?)',
      [name, brand, description, price, imageUrl, rating]
    );
    res.status(201).json({ message: 'Ice cream added', id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add ice cream' });
  }
});

router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { name, brand, description, price, imageUrl, rating } = req.body;
    const [result] = await pool.query(
      'UPDATE ice_creams SET name=?, brand=?, description=?, price=?, imageUrl=?, rating=? WHERE id=?',
      [name, brand, description, price, imageUrl, rating, req.params.id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: 'Ice cream not found' });
    res.json({ message: 'Ice cream updated' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update ice cream' });
  }
});

router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM ice_creams WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: 'Ice cream not found' });
    res.json({ message: 'Ice cream deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete ice cream' });
  }
});

module.exports = router;
