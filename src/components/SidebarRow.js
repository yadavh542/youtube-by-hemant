import React from 'react';
import './SidebarRow.css';

function SidebarRow({selected,Icon,title}) {
  return (
    <div className={`sidebarRow ${selected && "selected"} `}>
      <Icon className="sidebarRowIcon"/>
      <h3 className='sidebarRowTitle'>{title}</h3>
    </div>
  )
}

export default SidebarRow