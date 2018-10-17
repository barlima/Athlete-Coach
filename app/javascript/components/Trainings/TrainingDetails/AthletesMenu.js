import React from 'react';
import styled from 'styled-components';
import { sSize, lSize } from '../../../styles/Settings';

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;

  div.menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-top: 4rem;
    width: 40rem;
    z-index: 1000;
  }
`;

const DropdownHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: 4rem;
  width: 40rem;

  button {
    flex: 1;
  }
`;

class AthletesMenu extends React.Component {
  state = {
    showMenu: false
  };

  showMenu = (e) => {
    e.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  };

  closeMenu = (e) => {
    e.preventDefault();

    if (!this.dropdownMenu.contains(e.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  };

  handleClick = (e) => {
    const target = e.target;
    this.props.onChange({
      value: target.id,
      label: target.value
    });
  }

  render() {
    return(
      <Dropdown>
        <DropdownHeader>
          <button onClick={this.showMenu}>Open</button>
          <button onClick={this.showMenu}>+</button>
        </DropdownHeader>

        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                {
                  this.props.options.map((option) => {
                    return(
                      <input
                        type="button" 
                        id={option.value}
                        value={option.label}
                        onClick={this.handleClick}
                      />
                    )
                  })
                }
              </div>
            )
            : (
              null
            )
        }
      </Dropdown>
    )
  };
}

export default AthletesMenu;