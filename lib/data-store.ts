// In-memory data store - replace with database later
import { Company, Project, Employee, Department, Admin } from "@/types";

let companies: Company[] = [];
let projects: Project[] = [];
let employees: Employee[] = [];
let departments: Department[] = [];

// Initialize with mock data
const initializeMockData = () => {
  if (companies.length === 0) {
    // Mock Companies
    const mockCompanies: Company[] = [
      {
        id: "comp1",
        name: "TechCore Solutions",
        description: "Leading technology and construction solutions provider",
        logo: "🏢",
        parentCompanyId: null,
        isParent: true,
        projects: [],
        departments: [],
        employees: [],
        admins: [],
      },
      {
        id: "comp2",
        name: "BuildRight Construction",
        description: "Specialized in residential and commercial projects",
        logo: "🏗️",
        parentCompanyId: null,
        isParent: true,
        projects: [],
        departments: [],
        employees: [],
        admins: [],
      },
      {
        id: "comp3",
        name: "InnovateTech",
        description: "Software development and IT consulting",
        logo: "💻",
        parentCompanyId: "comp1",
        isParent: false,
        projects: [],
        departments: [],
        employees: [],
        admins: [],
      },
    ];

    // Mock Departments
    const mockDepartments: Department[] = [
      {
        id: "dept1",
        name: "Engineering",
        description: "Responsible for project engineering and technical oversight",
        companyId: "comp1",
      },
      {
        id: "dept2",
        name: "Sales",
        description: "Sales and business development team",
        companyId: "comp1",
      },
      {
        id: "dept3",
        name: "Human Resources",
        description: "HR and employee management",
        companyId: "comp1",
      },
      {
        id: "dept4",
        name: "Finance",
        description: "Financial management and accounting",
        companyId: "comp1",
      },
      {
        id: "dept5",
        name: "Project Management",
        description: "Project oversight and coordination",
        companyId: "comp2",
      },
      {
        id: "dept6",
        name: "Quality Assurance",
        description: "Quality control and assurance",
        companyId: "comp2",
      },
      {
        id: "dept7",
        name: "Development",
        description: "Software development team",
        companyId: "comp3",
      },
    ];

    // Mock Employees
    const mockEmployees: Employee[] = [
      {
        id: "emp1",
        name: "Ahmed Hassan",
        email: "ahmed.hassan@techcore.com",
        position: "Senior Engineer",
        departmentId: "dept1",
        companyId: "comp1",
      },
      {
        id: "emp2",
        name: "Fatima Ahmed",
        email: "fatima.ahmed@techcore.com",
        position: "Project Manager",
        departmentId: "dept1",
        companyId: "comp1",
      },
      {
        id: "emp3",
        name: "Mohammed Ali",
        email: "mohammed.ali@techcore.com",
        position: "Sales Executive",
        departmentId: "dept2",
        companyId: "comp1",
      },
      {
        id: "emp4",
        name: "Layla Saleh",
        email: "layla.saleh@techcore.com",
        position: "HR Manager",
        departmentId: "dept3",
        companyId: "comp1",
      },
      {
        id: "emp5",
        name: "Karim Ibrahim",
        email: "karim.ibrahim@techcore.com",
        position: "Financial Analyst",
        departmentId: "dept4",
        companyId: "comp1",
      },
      {
        id: "emp6",
        name: "Noor Khalid",
        email: "noor.khalid@buildright.com",
        position: "Site Manager",
        departmentId: "dept5",
        companyId: "comp2",
      },
      {
        id: "emp7",
        name: "Omar Rashid",
        email: "omar.rashid@buildright.com",
        position: "Quality Inspector",
        departmentId: "dept6",
        companyId: "comp2",
      },
      {
        id: "emp8",
        name: "Zainab Yaseen",
        email: "zainab.yaseen@innovatetech.com",
        position: "Lead Developer",
        departmentId: "dept7",
        companyId: "comp3",
      },
      {
        id: "emp9",
        name: "Hassan Rashid",
        email: "hassan.rashid@innovatetech.com",
        position: "Full Stack Developer",
        departmentId: "dept7",
        companyId: "comp3",
      },
      {
        id: "emp10",
        name: "Amira Samir",
        email: "amira.samir@innovatetech.com",
        position: "QA Engineer",
        departmentId: "dept7",
        companyId: "comp3",
      },
    ];

    // Mock Projects
    const mockProjects: Project[] = [
      {
        id: "proj1",
        name: "Downtown Office Complex",
        type: "commercial",
        status: "in-progress",
        details: "Modern office building with 50,000 sq meters of workspace",
        images: ["/images/o6.png", "/images/o6.png"],
        space: 50000,
        date: "2025-06-15",
        companyId: "comp1",
      },
      {
        id: "proj2",
        name: "Residential Villa Community",
        type: "residential",
        status: "planning",
        details: "Luxury villa community development with 150 units",
         images: ["/images/o3.png", "/images/o3.png"],
        space: 75000,
        date: "2025-09-01",
        companyId: "comp2",
      },
      {
        id: "proj3",
        name: "Industrial Manufacturing Hub",
        type: "industrial",
        status: "completed",
        details: "State-of-the-art manufacturing facility",
         images: ["/images/o6.png", "/images/o6.png"],
        space: 120000,
        date: "2024-12-20",
        companyId: "comp2",
      },
      {
        id: "proj4",
        name: "Mixed-Use Development",
        type: "mixed-use",
        status: "on-hold",
        details: "Combined retail, office, and residential development",
         images: ["/images/o3.png", "/images/o3.png"],
        space: 95000,
        date: "2025-08-10",
        companyId: "comp1",
      },
      {
        id: "proj5",
        name: "Smart City Infrastructure",
        type: "commercial",
        status: "in-progress",
        details: "Smart city IoT and infrastructure development",
       images: ["/images/o6.png", "/images/o6.png"],
        space: 25000,
        date: "2025-07-20",
        companyId: "comp3",
      },
    ];

    // Assign data
    companies = mockCompanies;
    departments = mockDepartments;
    employees = mockEmployees;
    projects = mockProjects;
  }
};

// Initialize mock data on module load
initializeMockData();

// Helper function to generate IDs
const generateId = () => Math.random().toString(36).substring(2, 9);

// Companies
export const getCompanies = () => companies;
export const getCompany = (id: string) => companies.find((c) => c.id === id);
export const createCompany = (data: Omit<Company, "id" | "projects" | "departments" | "employees" | "admins">): Company => {
  const newCompany: Company = {
    id: generateId(),
    ...data,
    projects: [],
    departments: [],
    employees: [],
    admins: [],
  };
  companies.push(newCompany);
  return newCompany;
};
export const updateCompany = (id: string, data: Partial<Company>): Company | null => {
  const index = companies.findIndex((c) => c.id === id);
  if (index === -1) return null;
  companies[index] = { ...companies[index], ...data };
  return companies[index];
};
export const deleteCompany = (id: string): boolean => {
  const index = companies.findIndex((c) => c.id === id);
  if (index === -1) return false;
  companies.splice(index, 1);
  // Also delete related data
  projects = projects.filter((p) => p.companyId !== id);
  employees = employees.filter((e) => e.companyId !== id);
  departments = departments.filter((d) => d.companyId !== id);
  return true;
};

// Projects
export const getProjects = (companyId?: string) => {
  if (companyId) return projects.filter((p) => p.companyId === companyId);
  return projects;
};
export const getProject = (id: string) => projects.find((p) => p.id === id);
export const createProject = (data: Omit<Project, "id">): Project => {
  const newProject: Project = {
    id: generateId(),
    ...data,
  };
  projects.push(newProject);
  return newProject;
};
export const updateProject = (id: string, data: Partial<Project>): Project | null => {
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) return null;
  projects[index] = { ...projects[index], ...data };
  return projects[index];
};
export const deleteProject = (id: string): boolean => {
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) return false;
  projects.splice(index, 1);
  return true;
};

// Employees
export const getEmployees = (companyId?: string) => {
  if (companyId) return employees.filter((e) => e.companyId === companyId);
  return employees;
};
export const getEmployee = (id: string) => employees.find((e) => e.id === id);
export const createEmployee = (data: Omit<Employee, "id">): Employee => {
  const newEmployee: Employee = {
    id: generateId(),
    ...data,
  };
  employees.push(newEmployee);
  return newEmployee;
};
export const updateEmployee = (id: string, data: Partial<Employee>): Employee | null => {
  const index = employees.findIndex((e) => e.id === id);
  if (index === -1) return null;
  employees[index] = { ...employees[index], ...data };
  return employees[index];
};
export const deleteEmployee = (id: string): boolean => {
  const index = employees.findIndex((e) => e.id === id);
  if (index === -1) return false;
  employees.splice(index, 1);
  return true;
};

// Departments
export const getDepartments = (companyId?: string) => {
  if (companyId) return departments.filter((d) => d.companyId === companyId);
  return departments;
};
export const getDepartment = (id: string) => departments.find((d) => d.id === id);
export const createDepartment = (data: Omit<Department, "id">): Department => {
  const newDepartment: Department = {
    id: generateId(),
    ...data,
  };
  departments.push(newDepartment);
  return newDepartment;
};
export const updateDepartment = (id: string, data: Partial<Department>): Department | null => {
  const index = departments.findIndex((d) => d.id === id);
  if (index === -1) return null;
  departments[index] = { ...departments[index], ...data };
  return departments[index];
};
export const deleteDepartment = (id: string): boolean => {
  const index = departments.findIndex((d) => d.id === id);
  if (index === -1) return false;
  departments.splice(index, 1);
  // Also remove department from employees
  employees = employees.map((e) => 
    e.departmentId === id ? { ...e, departmentId: "" } : e
  );
  return true;
};



export const getEmployeesPerCompany = () => {
  const companies = getCompanies()
  const employees = getEmployees()

  return companies.map((company) => ({
    company: company.name,
    employees: employees.filter(
      (emp) => emp.companyId === company.id
    ).length,
  }))
}


export const getProjectsByStatus = () => {
  const projects = getProjects()

  const map: Record<string, number> = {}

  projects.forEach((project) => {
    map[project.status] = (map[project.status] || 0) + 1
  })

  return Object.entries(map).map(([status, value]) => ({
    id: status,
    label: status.replace("-", " "),
    value,
  }))
}



export const getEmployeesByCompanyAndDepartment = () => {
  const companies = getCompanies()
  const departments = getDepartments()
  const employees = getEmployees()

  return companies.map((company) => ({
    id: company.name,
    data: departments
      .filter((d) => d.companyId === company.id)
      .map((dept) => ({
        x: dept.name,
        y: employees.filter(
          (e) => e.departmentId === dept.id
        ).length,
      })),
  }))
}