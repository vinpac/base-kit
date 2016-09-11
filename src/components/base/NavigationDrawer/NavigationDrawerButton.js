import React from 'react';

const NavigationDrawerButton = (props) => {
  const { children, className, onClick, getDrawer } = props
  return (
    <props.component
      className={className}
      onClick={(e) => {
        if (getDrawer) {
          let drawerComponent = getDrawer()
          if (drawerComponent) {
            drawerComponent.toggle()
          }
        }

        if (onClick){
          onClick(e)
        }
      }}>
      { children }
    </props.component>
  );
};

NavigationDrawerButton.displayName = 'NavigationDrawerButton';
NavigationDrawerButton.defaultProps = {
  className: 'btn btn-transparent nav-drawer-button nav-button',
  component: 'button',
}

export default NavigationDrawerButton;
