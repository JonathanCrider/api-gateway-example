import connectDB from '../config/db.js'

// CREATE
// TODO: documentation

export const createNewEmployee = async (req, res, next) => {
  const { name, email, position } = req.body

  if (!name || !email || !position) return res.status(400).json({ error: 'Missing required data'})

  const db = await connectDB()
  
  try {
    const newEmployee = await new Promise((resolve, reject) => {
      db.run(
        `
        INSERT INTO employees (name, email, position)
        VALUES ($name, $email, $position);
        `,
        {
          $name: name,
          $email: email,
          $position: position
        },
        (err) => {
        if (err) reject(err)
        else resolve(this) // not returning a value, needs further investigation.
      })
    })
    res.status(201).json({ message: 'Successfully created new employee.'})
  } catch (err) {
    console.error('Error creating new Employee', err.message)
    res.status(500).json({ error: 'Failed to create new employee'})
  } finally {
    db.close()
  }
}

// READ

export const getAllEmployees = async (req, res, next) => {
  const db = await connectDB()
  try {
    const allEmployees = await new Promise((resolve, reject) => {
      db.all(
        `
        SELECT *
        FROM employees;
        `,
        [],
        (err, rows) => {
        if (err) reject(err)
        else resolve(rows)
      })
    })
    res.json(allEmployees)
  } catch (err) {
    console.error('Error querying the database', err.message)
    res.status(500).json({ error: 'Failed to retrieve data' })
  } finally {
    db.close()
  }
}

export const getEmployeeById = async (req, res, next) => {
  const { id } = req.params

  const db = await connectDB()
  
  try {
    const employee =  await new Promise((resolve, reject) => {
      db.all(
        `
        SELECT *
        FROM employees
        WHERE id = $id;
        `,
        { $id: id },
        (err, rows) => {
        if (err) reject(err)
        else resolve(rows)
      })
    })
    res.json(employee)
  } catch (err) {
    console.error('Error querying the database', err.message)
    res.status(500).json({ error: 'Failed to retieve data' })
  } finally {
    db.close()
  }
}

// UPDATE

export const updateEmployee = async (req, res, next) => {
  const { id } = req.params
  const {
    name,
    email,
    position
  } = req.body

  if (!id || !name || !email || !position) return res.status(400).json({ error: 'Missing required data'})

  const db = await connectDB()
  
  try {
    const updatedEmployee = await new Promise((resolve, reject) => {
      db.run(
        `
        UPDATE employees
        SET
          name = $name,
          email = $email,
          position = $position
        WHERE id = $id;
        `,
        {
          $id: id,
          $name: name,
          $email: email,
          $position: position
        },
        (err) => {
        if (err) reject(err)
        else resolve(this) // not returning a value, needs further investigation.
      })
    })
    res.json({ message: 'Successfully updated employee.'})
  } catch (err) {
    console.error('Error updating Employee', err.message)
    res.status(500).json({ error: 'Failed to update employee' })
  } finally {
    db.close()
  }
}

// DELETE

export const deleteEmployeeById = async (req, res, next) => {
  const { id } = req.params

  if (!id) return res.status(400).json({ error: 'Missing required data'})
  
  const db = await connectDB()
  
  try {
    const response = await new Promise((resolve, reject) => {
      db.run(
        `
        DELETE FROM employees
        WHERE id = $id;
        `,
        { $id: id },
        (err) => {
        if (err) reject(err)
        else resolve({ message: `Success! Deleted employee ${id}`})
      })
    })
    res.sendStatus(204)
  } catch (err) {
    console.error('Error deleting Employee', err.message)
    res.status(500).json({ error: 'Failed to delete employee' })
  } finally {
    db.close()
  }
}
