import Teams from './Teams'
import OrderController from './OrderController'
import Settings from './Settings'
const Controllers = {
    Teams: Object.assign(Teams, Teams),
OrderController: Object.assign(OrderController, OrderController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers