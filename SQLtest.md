# SQL Test

## QUESTION 1

Write an SQL select based on these two tables which returns,
for employee number 12345, the employee number, name, hire date and the name of the department in which he works

```sql
SELECT e.emp_no,
      e.emp_name,
      e.hire_date, 
      d.Department_name
FROM db.EMP AS e
  INNER JOIN db.DEPT as d
  ON e.department_code = d.Department_code
WHERE e.emp_no = 12345;
```

## QUESTION 2

List the constraints (primary key, foreign key, unique key, etc) you would place upon these tables to relate them to each other and prevent data errors.

- EMP
  - Primary key: `emp_no`
    - unique ID for each employee
  - Foreign key: `department_code`
    - relationship to DEPT table (`DEPT.Department_code`)

- DEPT
  - Primary key: `Department_code`
    - unique ID for each department
  - Foreign key: `Supervisor_emp_no`
    - relationship to EMP table (`EMP.emp_id`) to retrieve supervisor employee information
  - Unique key: `Department_name`
    - ensure department names are unique

- NOTES:
  - data types are different between `EMP.department_code` and `DEPT.Supervisor_emp_no`
  - this would need to be addressed to assign keys as above.

- ADDITIONAL CONSTRAINTS
  - Do all employees have a supervisor? If not, `EMP.supervisor_name` can be NULL
  - Are all departments assigned a supervisor? If not, `DEPT.supervisor_emp_no` can be NULL
