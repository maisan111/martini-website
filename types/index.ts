export type ProjectStatus = "planning" | "in-progress" | "completed" | "on-hold";
export type ProjectType = "residential" | "commercial" | "industrial" | "mixed-use";

export interface Project {
  id: string;
  name: string;
  type: ProjectType;
  status: ProjectStatus;
  details: string;
  images: string[];
  space: number; // in square meters
  date: Date | string;
  companyId: string;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  companyId: string;
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  position: string;
  departmentId: string;
  companyId: string;
}

export interface Admin {
  id: string;
  name: string;
  email: string;
  password: string; // In production, this should be hashed
  companyId: string | null; // null for parent company admin
  isParentAdmin: boolean;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  logo?: string;
  parentCompanyId: string | null; // null for parent company
  isParent: boolean;
  projects: Project[];
  departments: Department[];
  employees: Employee[];
  admins: Admin[];
}
