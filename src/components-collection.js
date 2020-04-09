/* global window */
import Row from './components/row/index.js';
import Col from './components/col/index.js';
import Button from './components/button/index.js';
import ButtonGroup from './components/button-group/index.js';
import Radio from './components/radio/index.js';
import RadioButton from './components/radio-button/index.js';
import RadioGroup from './components/radio-group/index.js';
import Checkbox from './components/checkbox/index.js';
import CheckboxButton from './components/checkbox-button/index.js';
import CheckboxGroup from './components/checkbox-group/index.js';
import Input from './components/input/index.js';
import Scrollbar from './components/scrollbar/index.js';
import Tag from './components/tag/index.js';
import Select from './components/select/index.js';
import Option from './components/option/index.js';
import OptionGroup from './components/option-group/index.js';
import CascaderPanel from './components/cascader-panel/index.js';
import Cascader from './components/cascader/index.js';
import Switch from './components/switch/index.js';
import Rate from './components/rate/index.js';
import Form from './components/form/index.js';
import FormItem from './components/form-item/index.js';
import Tooltip from './components/tooltip/index.js';
import Menu from './components/menu/index.js';
import Submenu from './components/submenu/index.js';
import MenuItem from './components/menu-item/index.js';
import MenuItemGroup from './components/menu-item-group/index.js';
import Tabs from './components/tabs/index.js';
import TabPane from './components/tab-pane/index.js';
import Breadcrumb from './components/breadcrumb/index.js';
import BreadcrumbItem from './components/breadcrumb-item/index.js';
import PageHeader from './components/page-header/index.js';
import Dropdown from './components/dropdown/index.js';
import DropdownMenu from './components/dropdown-menu/index.js';
import DropdownItem from './components/dropdown-item/index.js';
import Pagination from './components/pagination/index.js';
import Popover from './components/popover/index.js';
import Table from './components/table/index.js';
import TableColumn from './components/table-column/index.js';
import Tree from './components/tree/index.js';
import cfg from './config';

const components = [
  Row,
  Col,
  Button,
  ButtonGroup,
  Radio,
  RadioButton,
  RadioGroup,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Input,
  Scrollbar,
  Tag,
  Select,
  Option,
  OptionGroup,
  CascaderPanel,
  Cascader,
  Switch,
  Rate,
  Form,
  FormItem,
  Tooltip,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Tabs,
  TabPane,
  Breadcrumb,
  BreadcrumbItem,
  PageHeader,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
  Popover,
  Table,
  TableColumn,
  Tree
]

const directives = [
]

const services = [

]

const install = function(Vue, opts = {}) {
  components.forEach((component) => {
    component.name = `${component.name}`
    Vue.component(component.name, component)
  })

  directives.forEach((directive) => {
    Vue.directive(directive.name, directive);
  })

  services.forEach((service) => {
    Vue['prototype'][`$${service.name}`] = service.method
  })

  Vue.prototype.cfg = cfg;

  Vue['prototype'][cfg.componentPrefix] = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  install,
  Row,
  Col,
  Button,
  ButtonGroup,
  Radio,
  RadioButton,
  RadioGroup,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Input,
  Scrollbar,
  Tag,
  Select,
  Option,
  OptionGroup,
  CascaderPanel,
  Cascader,
  Switch,
  Rate,
  Form,
  FormItem,
  Tooltip,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Tabs,
  TabPane,
  Breadcrumb,
  BreadcrumbItem,
  PageHeader,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
  Popover,
  Table,
  TableColumn,
  Tree
}
