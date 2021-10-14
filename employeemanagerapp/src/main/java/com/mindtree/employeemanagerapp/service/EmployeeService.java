package com.mindtree.employeemanagerapp.service;

import java.util.List;

import com.mindtree.employeemanagerapp.model.Employee;

public interface EmployeeService {

	/**
	 * @return list of employees
	 */
	List<Employee> getAllEmployees();

	/**
	 * @param id
	 * @return true if employee with input id is deleted
	 */
	boolean deleteEmployee(long id);

	/**
	 * @param id
	 * @param employee which will update old employee with given id in the parameter
	 * @return updated employee
	 */
	Employee updateEmployeeByIdWithNewEmployee(long id, Employee employee);

	/**
	 * @param id
	 * @return Employee with given id
	 */
	Employee getEmployeeById(long id);

	/**
	 * @param employee
	 * @return created employee
	 */
	Employee createEmployee(Employee employee);

}
