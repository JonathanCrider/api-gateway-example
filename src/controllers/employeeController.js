import connectDB from '../config/db.js'

// CREATE

export const createNewEmployee = async (employeeData) => {
  const {
    name,
    email,
    position
  } = employeeData
  const db = await connectDB()
  
  try {
    return new Promise((resolve, reject) => {
      db.run(
        `
        INSERT INTO employees (
          name,
          email,
          position
        )
        VALUES (
          $name,
          $email,
          $position
        );
        `,
        {
          $name: name,
          $email: email,
          $position: position
        },
        (err) => {
        if (err) reject(err)
        else resolve({ message: `Success! Created new employee`})
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
        FROM employees;
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
        FROM employees
        WHERE id = $id;
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

// UPDATE

export const updateEmployee = async (employeeData) => {
  const {
    id,
    name,
    email,
    position
  } = employeeData
  const db = await connectDB()
  
  try {
    return new Promise((resolve, reject) => {
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
        else resolve({ message: `Success! Updated employee ${id}`})
      })
    })
  } catch (err) {
    console.error('Error updating Employee', err.message)
    throw err
  } finally {
    db.close()
  }
}

// DELETE

export const deleteEmployee = async (id) => {
  const db = await connectDB()
  
  try {
    return new Promise((resolve, reject) => {
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
  } catch (err) {
    console.error('Error deleting Employee', err.message)
    throw err
  } finally {
    db.close()
  }
}
