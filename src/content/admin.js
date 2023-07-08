import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';

const content = {
sidebar: [{
    name: "Dashbard",
    path: ".",
    icon: <DashboardIcon />}
    ,{
    name: "Users",
    path: "user",
    icon: <PeopleIcon />}]}
export default content

export const style = {
    sidebar: [{
        width: '300px'
    }]
}
