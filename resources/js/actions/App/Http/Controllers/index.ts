import Admin from './Admin'
import Teams from './Teams'
import Settings from './Settings'
const Controllers = {
    Admin: Object.assign(Admin, Admin),
Teams: Object.assign(Teams, Teams),
Settings: Object.assign(Settings, Settings),
}

export default Controllers