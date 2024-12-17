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

// UPDATE

export const updateEmployee = async (employeeData) => {
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
        UPDATE EMP
        SET
          emp_name = $empName,
          hire_date = $hireDate,
          supervisor_name = $supervisorName,
          department_code = $departmentCode
        WHERE emp_no = $empNo;
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
        else resolve({ message: `Success! Updated employee ${emp_no}`})
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
        DELETE FROM EMP
        WHERE emp_no = $empNo;
        `,
        { $empNo: id },
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
