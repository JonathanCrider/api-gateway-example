import connectDB from '../config/db.js'

// CREATE

export const createNewEmployee = async (employeeData) => {
  const {
    emp_no,
    emp_name,
    hire_date,
    supervisor_name,
    department_code
  } = employeeData
  const db = await connectDB()
  
  try {
    return new Promise((resolve, reject) => {
      db.run(
        `
        INSERT INTO EMP (
          emp_no,
          emp_name,
          hire_date,
          supervisor_name,
          department_code
        )
        VALUES (
          $empNo,
          $empName,
          $hireDate,
          $supervisorName,
          $departmentCode
        );
        `,
        {
          $empNo: emp_no,
          $empName: emp_name,
          $hireDate: hire_date,
          $supervisorName: supervisor_name,
          $departmentCode: department_code,
        },
        (err) => {
        if (err) reject(err)
        else resolve({ message: `Success! Created new employee ${emp_no}`})
      })
    })
  } catch (err) {
    console.error('Error creating new Employee', err.message)
    throw err
  } finally {
    db.close()
  }
}

// READ

export const getAllEmployees = async () => {
  const db = await connectDB()
  try {
    return new Promise((resolve, reject) => {
      db.all(
        `
        SELECT *
        FROM EMP;
        `,
        [],
        (err, rows) => {
        if (err) reject(err)
        else resolve(rows)
      })
    })
  } catch (err) {
    console.error('Error querying the database', err.message)
    throw err
  } finally {
    db.close()
  }
}

export const getEmployeeById = async (id) => {
  const db = await connectDB()
  try {
    return new Promise((resolve, reject) => {
      db.all(
        `
        SELECT *
        FROM EMP
        WHERE emp_no = $id;
        `,
        { $id: id },
        (err, rows) => {
        if (err) reject(err)
        else resolve(rows)
      })
    })
  } catch (err) {
    console.error('Error querying the database', err.message)
    throw err
  } finally {
    db.close()
  }
}


// const db = require('../models/database');

// // Fetch all users
// const getAllUsers = (req, res) => {
//   db.all('SELECT * FROM users', [], (err, rows) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     res.json(rows);
//   });
// };

// // Fetch a single user by ID
// const getUserById = (req, res) => {
//   const { id } = req.params;
//   db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     if (!row) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     res.json(row);
//   });
// };

// // Create a new user
// const createUser = (req, res) => {
//   const { name, email } = req.body;
//   const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
//   db.run(query, [name, email], function (err) {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     res.status(201).json({ id: this.lastID });
//   });
// };

// // Update an existing user
// const updateUser = (req, res) => {
//   const { id } = req.params;
//   const { name, email } = req.body;
//   const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
//   db.run(query, [name, email, id], function (err) {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     if (this.changes === 0) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     res.json({ message: 'User updated successfully' });
//   });
// };

// // Delete a user
// const deleteUser = (req, res) => {
//   const { id } = req.params;
//   const query = 'DELETE FROM users WHERE id = ?';
//   db.run(query, [id], function (err) {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     if (this.changes === 0) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     res.json({ message: 'User deleted successfully' });
//   });
// };

// module.exports = {
//   getAllUsers,
//   getUserById,
//   createUser,
//   updateUser,
//   deleteUser,
// };
