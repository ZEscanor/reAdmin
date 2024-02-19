import { DashboardOutlined, ProjectOutlined, ShopOutlined } from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

export const resources: IResourceItem[] = [
    {
        name: 'dashboard',
        list: '/',
        meta: {
            label: 'Dashboard',
            icon: <DashboardOutlined/>
        }
    },
    {
        name: 'companies',
        list: '/companies',
        show: '/companies/:id',
        create: '/companies/edit/:id',
        meta: {
            label: "Companies",
            icon: <ShopOutlined/>
        }
    
    },
    {
        name: 'tasks',
        list: '/tasks',
        show: '/tasks/new',
        create: '/tasks/edit/:id',
        meta: {
            label: "Tasks",
            icon: <ProjectOutlined/>
        }
    
    },
]