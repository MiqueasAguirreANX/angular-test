export interface Project {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    manager: string;
    assignedTo: string;
    status: string;
}
