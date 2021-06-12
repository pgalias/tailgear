import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSections } from '../store/components';
import { changeMode, useDispatch } from '../store/layout';

type Props = {
  sectionClassName?: string;
  blockClassName?: string;
  activeClassName?: string;
};

export const ComponentsList: FunctionComponent<Props> = ({
  sectionClassName,
  blockClassName,
  activeClassName,
}) => {
  const sections = useSections();

  const dispatch = useDispatch();
  const showComponentPreview = () => dispatch(changeMode('preview'));

  return (
    <>
      {sections.map(({ title, blocks }) => (
        <div className={sectionClassName} key={title}>
          <h3>{title}</h3>
          <ul>
            {blocks.map(({ title: blockTitle, icon, components }) => (
              <div className={blockClassName} key={blockTitle}>
                <h4>
                  {icon && <FontAwesomeIcon icon={icon} />}
                  <span> {blockTitle}</span>
                </h4>
                <ul>
                  {components.map(({ url, name }) => (
                    <li key={name}>
                      <NavLink
                        to={url}
                        activeClassName={activeClassName}
                        onClick={showComponentPreview}
                      >
                        <span className="sr-only">{title}</span>
                        <span className="inline-block capitalize">{name}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ul>
        </div>
      ))}
      {/* {sections.map(({ title, icon, components }) => ( */}
      {/*  <div className={sectionClassName} key={title}> */}
      {/*    <h3> */}
      {/*      {icon && <FontAwesomeIcon icon={icon} />} */}
      {/*      <span> {title}</span> */}
      {/*    </h3> */}
      {/*    <ul> */}
      {/*      {components.map(({ url, name }) => ( */}
      {/*        <li key={name}> */}
      {/*          <NavLink */}
      {/*            to={url} */}
      {/*            activeClassName={activeClassName} */}
      {/*            onClick={showComponentPreview} */}
      {/*          > */}
      {/*            <span className="sr-only">{title}</span> */}
      {/*            <span className="inline-block capitalize">{name}</span> */}
      {/*          </NavLink> */}
      {/*        </li> */}
      {/*      ))} */}
      {/*    </ul> */}
      {/*  </div> */}
      {/* ))} */}
    </>
  );
};
