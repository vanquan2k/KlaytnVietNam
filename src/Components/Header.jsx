import { AppstoreOutlined, MailOutlined, SettingOutlined , AppleOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
const items = [


  {
    label: 'Klaytn Viet Nam',
    key: 'SubMenu',
    icon: <AppleOutlined />,
    children: [
      {
        type: 'group',
        label: 'Home',
        children: [
          {
            label: 'Giới Thiệu ',
            key: 'setting:1',
          },
          {
            label: 'Cộng Đồng',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'BootCamp',
        children: [
      
        ],
      },
      {
        type: 'group',
        label: 'Hackathon',
        children: [
         
        ],
      },
      {
        type: 'group',
        label: 'Partners',
        children: [
         
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        App Voting Blockchain
      </a>
    ),
    key: 'alipay',
  },
];
const Header = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu  onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Header;