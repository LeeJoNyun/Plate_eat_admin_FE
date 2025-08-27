// assets
import { CopyOutlined, YoutubeOutlined } from '@ant-design/icons';

// icons
const icons = {
  YoutubeOutlined,
  CopyOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const platEat = {
  id: 'platEat',
  title: 'platEat',
  type: 'group',
  children: [
    {
      id: 'user',
      title: 'user',
      type: 'item',
      url: '/platEat/user',
      icon: icons.CopyOutlined
    },
    {
      id: 'restaurant',
      title: 'restaurant',
      type: 'item',
      url: '/platEat/restaurant',
      icon: icons.CopyOutlined
    },
    {
      id: 'video',
      title: 'video',
      type: 'item',
      url: '/platEat/video',
      icon: icons.YoutubeOutlined
    }
  ]
};

export default platEat;
