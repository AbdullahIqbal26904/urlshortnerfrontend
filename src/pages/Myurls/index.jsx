import React from 'react';
import Leftbar from '@/components/myurlpagecompon/Leftbar';
import Topbar from '@/components/myurlpagecompon/Topbar';
import Innerlinks from '@/components/myurlpagecompon/Innerlinks';
import Navbar from '@/components/Navbarcomponent/Navbar';
import { useSelector } from 'react-redux';

function Myurls() {
  const { openleftbar } = useSelector(state => state.allCart);

  return (
    <div className="flex">
      <Navbar />
      <Leftbar />
      <Topbar />
      <Innerlinks />
    </div>
  );
}

export default Myurls;
