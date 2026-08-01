import React, {useState, useRef, useEffect, type ReactNode} from 'react';
import clsx from 'clsx';
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink';
import NavbarItem from '@theme/NavbarItem';
import type {Props} from '@theme/NavbarItem/DropdownNavbarItem/Desktop';

function SubMenu({item}: {item: any}) {
  const [show, setShow] = useState(false);
  const {children, ...rest} = item;

  return (
    <li
      className="dropdown__submenu"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}>
      <NavbarNavLink
        className="dropdown__link dropdown__link--with-submenu"
        {...rest}
        label={
          <span style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
            {item.label}
            <span style={{marginLeft: '1.5rem', opacity: 0.5}}>›</span>
          </span>
        }
      />
      <ul className={clsx('dropdown__menu', 'dropdown__menu--sub', show && 'dropdown__menu--show')}>
        {item.children.map((child: any, j: number) => (
          <NavbarItem
            isDropdownItem
            activeClassName="dropdown__link--active"
            {...child}
            key={j}
          />
        ))}
      </ul>
    </li>
  );
}

export default function DropdownNavbarItemDesktop({
  items,
  position,
  className,
  onClick,
  ...props
}: Props): ReactNode {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent | TouchEvent | FocusEvent,
    ) => {
      if (
        !dropdownRef.current ||
        dropdownRef.current.contains(event.target as Node)
      ) {
        return;
      }
      setShowDropdown(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('focusin', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('focusin', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div
      ref={dropdownRef}
      className={clsx('navbar__item', 'dropdown', 'dropdown--hoverable', {
        'dropdown--right': position === 'right',
        'dropdown--show': showDropdown,
      })}>
      <NavbarNavLink
        aria-haspopup="true"
        aria-expanded={showDropdown}
        role="button"
        href={props.to ? undefined : '#'}
        className={clsx('navbar__link', className)}
        {...props}
        onClick={props.to ? undefined : (e) => e.preventDefault()}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setShowDropdown(!showDropdown);
          }
        }}>
        {props.children ?? props.label}
      </NavbarNavLink>
      <ul className="dropdown__menu">
        {items.map((childItemProps: any, i: number) => {
          if (childItemProps.children) {
            return <SubMenu key={i} item={childItemProps} />;
          }
          const {children: _, ...rest} = childItemProps;
          return (
            <NavbarItem
              isDropdownItem
              activeClassName="dropdown__link--active"
              {...rest}
              key={i}
            />
          );
        })}
      </ul>
    </div>
  );
}
