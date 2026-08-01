import React, {useState, useRef, useEffect, type ReactNode} from 'react';
import clsx from 'clsx';
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink';
import NavbarItem from '@theme/NavbarItem';
import type {Props} from '@theme/NavbarItem/DropdownNavbarItem/Desktop';

function MegaMenu({items}: {items: any[]}) {
  return (
    <ul className="dropdown__menu dropdown__mega">
      {items.map((cat: any, i: number) => {
        const {children, ...rest} = cat;
        return (
          <li key={i} className="dropdown__mega-col">
            <NavbarNavLink
              className="dropdown__link dropdown__link--category"
              {...rest}
            />
            {children && (
              <ul className="dropdown__mega-sub">
                {children.map((child: any, j: number) => (
                  <NavbarItem
                    isDropdownItem
                    activeClassName="dropdown__link--active"
                    {...child}
                    key={j}
                  />
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
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

  const hasMega = items.some((item: any) => item.children);

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
        'dropdown--mega': hasMega,
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
      {hasMega ? (
        <MegaMenu items={items} />
      ) : (
        <ul className="dropdown__menu">
          {items.map((childItemProps: any, i: number) => (
            <NavbarItem
              isDropdownItem
              activeClassName="dropdown__link--active"
              {...childItemProps}
              key={i}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
