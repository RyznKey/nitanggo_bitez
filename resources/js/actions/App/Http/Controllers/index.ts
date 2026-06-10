import MembershipController from './MembershipController'
import Settings from './Settings'
const Controllers = {
    MembershipController: Object.assign(MembershipController, MembershipController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers